<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\BrandResource ;
use App\Models\brand;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BrandController extends Controller
{
    // public function index()
    // {
       
    //     $b = brand::all();

    //     $arr = [
    //         'status' => true,
    //         'message' => 'Danh sách',
    //         'data' => BrandResource::collection($b)
    //     ];

    //     return response()->json($arr, 200);
    // }

    // public function store(Request $request)
    // {
    //     $input = $request->all();

    //     $validator = Validator::make($input, [
    //         'name' => 'required',
    //     ]);
    //     if ($validator->fails()) {
    //         $arr = [
    //             'success' => false,
    //             'message' => 'Lỗi kiểm tra dữ liệu',
    //             'data' => $validator->errors()
    //         ];
    //         return response()->json($arr, 200);
    //     }
    //     $b = brand::create($input);
    //     $arr = [
    //         'status' => true,
    //         'message' => "đã lưu thành công",
    //         'data' => new BrandResource($b)
    //     ];
    //     return response()->json($arr, 201);
    // }
    // public function show(string $id)
    // {
    //     $b = brand::find($id);

    // if (empty($b)) {
    //     $arr = [
    //         'status' => false,
    //         'message' => 'Không có ',
    //         'data' => null
    //     ];
    //     return response()->json($arr, 404);
    // }

    // $arr = [
    //     'status' => true,
    //     'message' => "Thông tin ",
    //     'data' => $b, 
    // ];
    // return response()->json($arr, 200);
    // }
    // public function update(Request $request, string $id)
    // {
    //     $input = $request->all();

    //     $validator = Validator::make($input, [
    //         'name' => 'required',
            
            
    //     ]);
    
    //     if ($validator->fails()) {
    //         $arr = [
    //             'status' => false,
    //             'message' => 'Lỗi kiểm tra dữ liệu',
    //             'data' => $validator->errors()
    //         ];
    //         return response()->json($arr, 200);
    //     }
    
    //     $b = brand::find($id);
    
    //     if (!$b) {
    //         $arr = [
    //             'status' => false,
    //             'message' => 'không tồn tại',
    //             'data' => null
    //         ];
    //         return response()->json($arr, 404);
    //     }
    
    //     $b->update($input);
    
    //     $arr = [
    //         'status' => true,
    //         'message' => 'cập nhật thành công',
    //         'data' => new BrandResource($b)
    //     ];
    
    //     return response()->json($arr, 200);
    // }
    // public function destroy(string $id)
    // {
    //     try {
    //         $b = brand::findOrFail($id);
    //         $b->delete();

    //         $arr = [
    //             'status' => true,
    //             'message' => 'đã được xóa thành công',
    //             'data' => null
    //         ];

    //         return response()->json($arr, 200);
    //     } catch (ModelNotFoundException $e) {
    //         $arr = [
    //             'success' => false,
    //             'message' => ' không tồn tại',
    //             'data' => null
    //         ];

    //         return response()->json($arr, 404);
    //     }
    // }
}
