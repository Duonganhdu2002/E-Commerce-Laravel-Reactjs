<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\OrderResource;
use App\Models\order;
use App\Models\user;
use App\Models\product;
use App\Models\shopping_cart as ShoppingCart;
use Illuminate\Support\Facades\DB;



use Illuminate\Database\Eloquent\ModelNotFoundException;

class OrderController extends Controller
{
    public function index()
    {
        $order = order::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => OrderResource::collection($order)
        ];

        return response()->json($arr, 200);
    }

    public function checkPurchase(Request $request)
    {
        // Validate the incoming request data
        $request->validate([
            'user_id' => 'required|integer',
            'product_id' => 'required|integer',
        ]);

        // Retrieve the user_id and product_id from the request
        $user_id = $request->input('user_id');
        $product_id = $request->input('product_id');

        // Check if the user has purchased the specified product
        $hasPurchased = order::where('user_id', $user_id)
            ->whereHas('items', function ($query) use ($product_id) {
                $query->where('product_id', $product_id);
            })
            ->exists();

        // Return 1 if the user has purchased the product, otherwise return 0
        return response()->json(['purchased' => $hasPurchased ? 1 : 0]);
    }

    public function getDisableOrdersForShop($sellerId)
    {
        try {
            $orders = Order::select(
                'order.order_id',
                'users.username as buyer_username',
                'order.total',
                'order_status.order_status_name as order_status',
                'order.created_at',
                'shipping_method.shipping_method_name as shipping_method'
            )
                ->join('order_status', 'order.order_status_id', '=', 'order_status.order_status_id')
                ->join('shipping_method', 'order.shipping_method_id', '=', 'shipping_method.shipping_method_id')
                ->join('users', 'order.user_id', '=', 'users.user_id')
                ->where('order.shop_id', $sellerId)
                ->where('order.order_status_id', 4)
                ->paginate(7);

            return response()->json([
                'status' => 200,
                'message' => 'List of orders for seller with ID ' . $sellerId,
                'data' => $orders
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Internal Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function showByUser($userId) // danh sach don mua cua nguoi dung
    {
        try {
            $orders = order::where('user_id', $userId)->get();

            $arr = [
                'status' => true,
                'message' => 'Danh sách đơn hàng của người dùng',
                'data' => OrderResource::collection($orders)
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'status' => false,
                'message' => 'Người dùng không tồn tại hoặc không có đơn hàng nào được tạo bởi người dùng này',
                'data' => null,
            ];

            return response()->json($arr, 404);
        }
    }

    public function update(Request $request, string $id)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',


        ]);

        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $order = order::find($id);

        if (!$order) {
            $arr = [
                'status' => false,
                'message' => 'không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $order->update($input);

        $arr = [
            'status' => true,
            'message' => 'cập nhật thành công',
            'data' => new OrderResource($order)
        ];

        return response()->json($arr, 200);
    }

    public function destroy(string $id)
    {
        try {
            $order = order::findOrFail($id);
            $order->delete();

            $arr = [
                'status' => true,
                'message' => 'đã được xóa thành công',
                'data' => null
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'success' => false,
                'message' => ' không tồn tại',
                'data' => null
            ];

            return response()->json($arr, 404);
        }
    }

    public function destroyShoppingCart($user_id, $product_id)
    {
        try {
            // Tìm sản phẩm trong giỏ hàng theo user_id và product_id
            $cartItem = ShoppingCart::where('user_id', $user_id)
                ->where('product_id', $product_id)
                ->firstOrFail();

            // Xóa sản phẩm
            $cartItem->delete();

            return response()->json(['message' => 'Sản phẩm đã được xóa khỏi giỏ hàng.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Đã xảy ra lỗi khi xóa sản phẩm khỏi giỏ hàng.'], 500);
        }
    }


    public function checkout(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
            'product' => 'required|array',
            'product.*.product_id' => 'required|exists:product,product_id',
            'product.*.quantity' => 'required|integer|min:1',
            'shipping_method_id' => 'required|exists:shipping_method,shipping_method_id',
            'order_address' => 'required',
            'order_phone' => 'required',
            'order_name' => 'required',
            'total' => 'required',
            'order_note' => 'nullable',
            'shop_id' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ], 400);
        }

        $user_id = $input['user_id'];

        try {
            $order = Order::create([
                'user_id' => $input['user_id'],
                'order_status_id' => 1,
                'shipping_method_id' => $input['shipping_method_id'],
                'order_address' => $input['order_address'],
                'order_phone' => $input['order_phone'],
                'order_name' => $input['order_name'],
                'order_note' => $input['order_note'],
                'total' => $input['total'],
                'shop_id' => $input['shop_id'],
            ]);

            foreach ($input['product'] as $productItem) {
                $product = Product::findOrFail($productItem['product_id']);
                $order->products()->attach($product->product_id, ['quantity' => $productItem['quantity']]);
                $newStock = $product->stock - $productItem['quantity'];
                $product->update(['stock' => $newStock]);
            }

            // Xóa sản phẩm khỏi giỏ hàng sau khi đặt hàng thành công
            $productIds = collect($input['product'])->pluck('product_id')->toArray();

            foreach ($productIds as $productIds) {
                $this->destroyShoppingCart($user_id, $productIds);
            }

            return response()->json([
                'status' => true,
                'message' => 'Đặt hàng thành công',
                'data' => new OrderResource($order)
            ], 201);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Lỗi khi thực hiện thanh toán',
                'data' => null,
            ], 500);
        }
    }

    public function getOrderDetails($orderId)
    {
        try {

            $order = Order::with(['items.product.images'])->findOrFail($orderId);

            $items = $order->items->map(function ($item) {
                $product = $item->product;
                $images = $product->images->pluck('image_url')->toArray();

                return [
                    'product_id' => $product->product_id,
                    'product_name' => $product->name,
                    'quantity' => $item->quantity,
                    'image' => $images[0],
                ];
            });


            $details = [
                'order_id' => $order->order_id,
                'user_id' => $order->user_id,
                'order_status_id' => $order->order_status_id,
                'shipping_method_id' => $order->shipping_method_id,
                'total' => $order->total,
                'created_at' => $order->created_at,
                'modified_at' => $order->modified_at,
                'items' => $items,
            ];

            return response()->json([
                'status' => true,
                'message' => 'Chi tiết đơn hàng',
                'data' => $details,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Đơn hàng không tồn tại',
                'data' => null,
            ], 404);
        }
    }
    public function getSellerOrders($sellerId)
    {
        try {
            $orders = Order::select(
                'order.order_id',
                'users.username as buyer_username',
                'order.total',
                'order_status.order_status_name as order_status',
                'order.created_at',
                'shipping_method.shipping_method_name as shipping_method'
            )
                ->join('order_status', 'order.order_status_id', '=', 'order_status.order_status_id')
                ->join('shipping_method', 'order.shipping_method_id', '=', 'shipping_method.shipping_method_id')
                ->join('users', 'order.user_id', '=', 'users.user_id')
                ->where('order.shop_id', $sellerId)
                ->paginate(7);

            return response()->json([
                'status' => 200,
                'message' => 'List of orders for seller with ID ' . $sellerId,
                'data' => $orders
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Internal Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function getAllOrder()
    {
        try {
            $orders = Order::select(
                'order.order_id',
                'users.username as buyer_username',
                'order.total',
                'order_status.order_status_name as order_status',
                'order.created_at',
                'shipping_method.shipping_method_name as shipping_method'
            )
                ->join('order_status', 'order.order_status_id', '=', 'order_status.order_status_id')
                ->join('shipping_method', 'order.shipping_method_id', '=', 'shipping_method.shipping_method_id')
                ->join('users', 'order.user_id', '=', 'users.user_id')
                ->paginate(7);

            return response()->json([
                'status' => 200,
                'message' => 'List of orders ',
                'data' => $orders
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Internal Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function showShippingOrdersByUserId($userId)
    {
        try {
            $orders = Order::select(
                'order.order_id',
                'users.username as buyer_username',
                'order.total',
                'order_status.order_status_name as order_status',
                'order.created_at',
                'shipping_method.shipping_method_name as shipping_method'
            )
                ->join('order_status', 'order.order_status_id', '=', 'order_status.order_status_id')
                ->join('shipping_method', 'order.shipping_method_id', '=', 'shipping_method.shipping_method_id')
                ->join('users', 'order.user_id', '=', 'users.user_id')
                ->where('order.shop_id', $userId)
                ->where('order.order_status_id', 2)
                ->paginate(7);

            return response()->json([
                'status' => 200,
                'message' => 'List of orders for seller with ID ' . $userId,
                'data' => $orders
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Internal Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function searchOrder($username)
    {
        // Query to join Users table with Orders table
        $orders = DB::table('order')
            ->join('users', 'order.user_id', '=', 'users.user_id')
            ->join('order_status', 'order.order_status_id', '=', 'order_status.order_status_id')
            ->where('users.username', 'like', '%' . $username . '%')
            ->select('order.*', 'users.username', 'order_status.order_status_name')
            ->paginate(6);

        // Check if any orders were found
        if ($orders->isEmpty()) {
            return response()->json(['message' => 'No orders found for the given username'], 404);
        }

        // Return the orders with pagination
        return response()->json($orders, 200);
    }

    public function showOrdersbyUsername($username, $shop_id, $order_status = null)
    {
        $user = User::where('username', $username)->first();

        if (!$user) {
            return response()->json(['message' => 'User not found'], 404);
        }

        $userId = $user->user_id;

        $query = Order::select('users.username', 'total', 'order_status.order_status_name', 'order.created_at', 'shipping_method.shipping_method_name')
            ->join('users', 'users.user_id', '=', 'order.user_id')
            ->join('order_status', 'order.order_status_id', '=', 'order_status.order_status_id')
            ->join('shipping_method', 'order.shipping_method_id', '=', 'shipping_method.shipping_method_id')
            ->where('order.user_id', $userId)
            ->where('order.shop_id', $shop_id);

        if ($order_status !== null) {
            $query->where('order.order_status_id', $order_status);
        }

        $orders = $query->get();

        return response()->json([
            'orders' => $orders,
        ]);
    }
}
