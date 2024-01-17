<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ShoppingCartResource;
use App\Models\product;
use App\Models\shopping_cart;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;



class ShoppingCartController extends Controller
{
    public function index()
    {

        $sc = shopping_cart::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => ShoppingCartResource::collection($sc)
        ];

        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
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

        // Check if the product already exists in the shopping cart
        $existingCartItem = shopping_cart::where('user_id', $user_id)
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

        $count = shopping_cart::where('user_id', $user_id)->count();

        if ($count >= 50) {
            $arr = [
                'status' => false,
                'message' => 'Giỏ hàng chỉ được phép chứa tối đa 50 sản phẩm',
                'data' => null,
            ];

            return response()->json($arr, 400);
        }

        try {
            shopping_cart::create([
                'user_id' => $user_id,
                'product_id' => $product_id,
                'quantity' => $quantity,
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
            'name' => 'required',


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

        $sc = shopping_cart::find($id);

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
    public function destroy(string $id)
    {
        try {
            $sc = shopping_cart::findOrFail($id);
            $sc->delete();

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
}
