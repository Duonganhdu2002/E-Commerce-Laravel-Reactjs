<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ShoppingCartResource;
use App\Models\product;
use App\Models\shopping_cart as ShoppingCart;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;



class ShoppingCartController extends Controller
{

    protected $shoppingCart;

    public function __construct(ShoppingCart $shoppingCart)
    {
        $this->shoppingCart = $shoppingCart;
    }

    public function index($user_id)
    {
        try {
            $shoppingCartItems = ShoppingCart::where('user_id', $user_id)
                ->join('product', 'shopping_cart.product_id', '=', 'product.product_id')
                ->select('shopping_cart.*', 'product.price as price', 'product.name as name')
                ->get();

            if ($shoppingCartItems->isEmpty()) {
                $response = [
                    'status' => true,
                    'message' => 'No products in the shopping cart.',
                    'data' => []
                ];
            } else {
                $response = [
                    'status' => true,
                    'message' => 'Danh sách',
                    'data' => ShoppingCartResource::collection($shoppingCartItems)
                ];
            }

            return response()->json($response, 200);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required|exists:users,user_id',
            'product_id' => 'required|exists:product,product_id',
            'quantity' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $user_id = $input['user_id'];
        $product_id = $input['product_id'];
        $quantity = $input['quantity'];
        $color = $input['color'];
        $size = $input['size'];
        $img = $input['img'];


        // Check if the product already exists in the shopping cart
        $existingCartItem = ShoppingCart::where('user_id', $user_id)
            ->where('product_id', $product_id)
            ->first();

        if ($existingCartItem) {
            // If it exists, update the quantity
            $existingCartItem->update(['quantity' => $existingCartItem->quantity + $quantity]);

            $arr = [
                'status' => true,
                'message' => 'Đã cập nhật số lượng sản phẩm trong giỏ hàng',
            ];

            return response()->json($arr, 200);
        }

        $count = ShoppingCart::where('user_id', $user_id)->count();

        if ($count >= 50) {
            $arr = [
                'status' => false,
                'message' => 'Giỏ hàng chỉ được phép chứa tối đa 50 sản phẩm',
                'data' => null,
            ];

            return response()->json($arr, 400);
        }

        try {
            ShoppingCart::create([
                'user_id' => $user_id,
                'product_id' => $product_id,
                'quantity' => $quantity,
                'color' => $color,
                'size' => $size,
                'img' => $img,
            ]);

            $arr = [
                'status' => true,
                'message' => 'Đã thêm sản phẩm vào giỏ hàng',
            ];

            return response()->json($arr, 201);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi khi thêm sản phẩm vào giỏ hàng',
            ];

            return response()->json($arr, 500);
        }
    }


    public function update(Request $request, string $id)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'quantity' => 'numeric|min:1',
        ]);

        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $sc = ShoppingCart::find($id);

        if (!$sc) {
            $arr = [
                'status' => false,
                'message' => 'không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $sc->update($input);

        $arr = [
            'status' => true,
            'message' => 'cập nhật thành công',
            'data' => new ShoppingCartResource($sc)
        ];

        return response()->json($arr, 200);
    }
    public function destroy($id)
    {
        try {
            // Tìm sản phẩm trong giỏ hàng theo ID
            $cartItem = ShoppingCart::findOrFail($id);

            // Xóa sản phẩm
            $cartItem->delete();

            return response()->json(['message' => 'Sản phẩm đã được xóa khỏi giỏ hàng.']);
        } catch (\Exception $e) {
            return response()->json(['error' => 'Đã xảy ra lỗi khi xóa sản phẩm khỏi giỏ hàng.'], 500);
        }
    }
}
