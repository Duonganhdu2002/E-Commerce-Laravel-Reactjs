<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ShippingMethodResource ;
use App\Models\shipping_method;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ShippingMethodController extends Controller
{
    public function index()
    {
       
        $sm = shipping_method::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => ShippingMethodResource::collection($sm)
        ];

        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'shipping_method_name' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $sm = shipping_method::create($input);
        $arr = [
            'status' => true,
            'message' => "đã lưu thành công",
            'data' => new ShippingMethodResource($sm)
        ];
        return response()->json($arr, 201);
    }
    public function update(Request $request, string $id)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'shipping_method_name' => 'required',
            
            
        ]);
    
        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
    
        $sm = shipping_method::find($id);
    
        if (!$sm) {
            $arr = [
                'status' => false,
                'message' => 'không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }
    
        $sm->update($input);
    
        $arr = [
            'status' => true,
            'message' => 'cập nhật thành công',
            'data' => new ShippingMethodResource($sm)
        ];
    
        return response()->json($arr, 200);
    }
    public function destroy(string $id)
    {
        try {
            $sm = shipping_method::findOrFail($id);
            $sm->delete();

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
