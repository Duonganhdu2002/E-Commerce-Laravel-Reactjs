<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\OrderResource ;
use App\Models\order ;
use App\Models\product ;


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

    public function checkout(Request $request) //tuy chon san pham de tao don hang
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
            'product' => 'required|array',
            'product.*.product_id' => 'required|exists:product,product_id',
            'product.*.quantity' => 'required|integer|min:1',
            'shipping_method_id' => 'required|exists:shipping_method,shipping_method_id'
           
        ]);

        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 400);
        }

        $user_id = $input['user_id'];
        $product = $input['product'];
        $shipping_method_id = $input['shipping_method_id'];
      
        $totalQuantity = count($product);

        if ($totalQuantity > 20) {
        $arr = [
            'status' => false,
            'message' => 'Số lượng sản phẩm vượt quá giới hạn (20 sản phẩm)',
            'data' => null,
        ];

        return response()->json($arr, 400);
    }

        try {
            $order = order::create([
                'user_id' => $user_id,
                'order_status_id' => 1, 
                'shipping_method_id' => $shipping_method_id,
            ]);

            // Thêm các sản phẩm vào đơn hàng
            foreach ($product as $product) {
                $productModel = Product::findOrFail($product['product_id']);
                $order->products()->attach($productModel->product_id, ['quantity' => $product['quantity']]);
            }

            $arr = [
                'status' => true,
                'message' => 'Đặt hàng thành công',
                'data' => new OrderResource($order)
            ];

            return response()->json($arr, 201);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi khi thực hiện thanh toán',
                'data' => null,
            ];

            return response()->json($arr, 500);
        }
    }

    public function getOrderDetails($orderId)
    {
        try {
           
            $order = Order::with(['items.product'])->findOrFail($orderId);

            
            $items = $order->items->map(function ($item) {
                return [
                    'product_id' => $item->product->product_id,
                    'product_name' => $item->product->name,
                    'quantity' => $item->quantity,
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
}
