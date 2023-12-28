<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ShoppingCartResource ;
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
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $sc = shopping_cart::create($input);
        $arr = [
            'status' => true,
            'message' => "đã lưu thành công",
            'data' => new ShoppingCartResource($sc)
        ];
        return response()->json($arr, 201);
    }
    public function update(Request $request, string $id)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
            
            
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
