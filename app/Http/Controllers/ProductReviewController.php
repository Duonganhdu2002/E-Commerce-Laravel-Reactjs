<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductReviewResource ;
use App\Models\product_review;
use Illuminate\Support\Facades\Validator;
class ProductReviewController extends Controller
{
    public function index()
    {
      
        $pr = product_review::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => ProductReviewResource::collection($pr)
        ];

        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $pr = product_review::create($input);
        $arr = [
            'status' => true,
            'message' => "đã lưu thành công",
            'data' => new ProductReviewResource($pr)
        ];
        return response()->json($arr, 201);
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
    
        $pr = product_review::find($id);
    
        if (!$pr) {
            $arr = [
                'status' => false,
                'message' => 'không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }
    
        $pr->update($input);
    
        $arr = [
            'status' => true,
            'message' => 'cập nhật thành công',
            'data' => new ProductReviewResource($pr)
        ];
    
        return response()->json($arr, 200);
    }
}
