<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductCategoryResource ;
use App\Models\product_category as PC;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;


class ProductCategoryController extends Controller
{
    public function index()
    {
       
        $pc = PC::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => ProductCategoryResource::collection($pc)
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
        $pc = PC::create($input);
        $arr = [
            'status' => true,
            'message' => "đã lưu thành công",
            'data' => new ProductCategoryResource($pc)
        ];
        return response()->json($arr, 201);
    }
    public function show(string $id)
    {
        $pc = PC::find($id);

    if (empty($pc)) {
        $arr = [
            'status' => false,
            'message' => 'Không có ',
            'data' => null
        ];
        return response()->json($arr, 404);
    }

    $arr = [
        'status' => true,
        'message' => "Thông tin ",
        'data' => $pc, 
    ];
    return response()->json($arr, 200);
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
    
        $pc = PC::find($id);
    
        if (!$pc) {
            $arr = [
                'status' => false,
                'message' => 'không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }
    
        $pc->update($input);
    
        $arr = [
            'status' => true,
            'message' => 'cập nhật thành công',
            'data' => new ProductCategoryResource($pc)
        ];
    
        return response()->json($arr, 200);
    }
    public function destroy(string $id)
    {
        try {
            $pc = PC::findOrFail($id);
            $pc->delete();

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
