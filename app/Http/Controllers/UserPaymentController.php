<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserPaymentResource ;
use App\Models\user_payment;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class UserPaymentController extends Controller
{
    public function index()
    {
            $up = user_payment::all();
    
            $arr = [
                'status' => true,
                'message' => 'Danh sách ma giam gia',
                'data' => UserPaymentResource::collection($up)
            ];
    
            return response()->json($arr, 200);
         
    }
    
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'card_name_hash' => 'required',
            'card_number_hash' => 'required',
            'paypal_email' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $up = user_payment::create($input);
        $arr = [
            'status' => true,
            'message' => "đã lưu thành công",
            'data' => new UserPaymentResource($up)
        ];
        return response()->json($arr, 201);
    }
    public function destroy(string $id)
    {
        try {
            $up = user_payment::findOrFail($id);
            $up->delete();

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
