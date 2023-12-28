<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\DiscountResource as DiscountResource;
use App\Models\Discount as DiscountModel;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class DiscountController extends Controller
{
    public function index()
    {
        $discount = DiscountModel::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách ma giam gia',
            'data' => DiscountResource::collection($discount)
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
        $discount = DiscountModel::create($input);
        $arr = [
            'status' => true,
            'message' => "đã lưu thành công",
            'data' => new DiscountResource($discount)
        ];
        return response()->json($arr, 201);
    }
    public function show(string $id)
    {
        $discount = DiscountModel::find($id);

        if (empty($discount)) {
            $arr = [
                'status' => false,
                'message' => 'Vui long thu lai',
                'data' => null
            ];
            return response()->json($arr, 404);
        }
    
        $arr = [
            'status' => true,
            'message' => "Thông tin chi tiet",
            'data' => new DiscountResource($discount), 
        ];
        return response()->json($arr, 200);
    }
    public function update(Request $request, string $discount)
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

    $discount = DiscountModel::find($discount);

    if (!$discount) {
        $arr = [
            'status' => false,
            'message' => 'không tồn tại',
            'data' => null
        ];
        return response()->json($arr, 404);
    }
    // cách cập nhật 1
    $discount->update($input);
    //cách cập nhât 2
    // $discount->name = $input['name'] ;
    // cách cập nhật 3
    // if (isset($input['discount_percent'])) {
    //     $discount->discount_percent = str_replace(',', '.', $input['discount_percent']);
    // }

    // if (isset($input['description'])) {
    //     $discount->description = $input['description'];
    // }
    // 2 va 3 can them save()
    // $discount->save();

    $arr = [
        'status' => true,
        'message' => ' cập nhật thành công',
        'data' => new DiscountResource($discount)
    ];

    return response()->json($arr, 200);
}
    public function destroy(string $id)
    {
        try {
            $discount = DiscountModel::findOrFail($id);
            $discount->delete();

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
