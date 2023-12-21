<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\User as UserResource;
use App\Models\User;
use Auth;

class UserController extends Controller
{
    public function index()
    {
        $user = User::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách tài khoản',
            'data' => UserResource::collection($user)
        ];

        return response()->json($arr, 200);
    }

    public function store(Request $request)
    {
        $input = $request->all();
        $input['type_account_id'] = $request->input('type_account_id', 1); // Tạo giá trị mặc định cho loại tài khoản khi đăng ký tài khoản khách

        $validator = Validator::make($input, [
            'username' => 'required',
            'password' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $user = User::create($input);
        $arr = [
            'status' => true,
            'message' => "Tài khoản đã lưu thành công",
            'data' => new UserResource($user)
        ];
        return response()->json($arr, 201);
    }

    public function show(string $id)
    {
        //
    }

    public function update(Request $request, User $user)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'username' => 'required',
            'telephone' => 'required'
        ]);

        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];

            return response()->json($arr, 200);
        }

        // Sử dụng phương thức fill để cập nhật các trường
        $user->fill($input);
        $user->save();

        $arr = [
            'status' => true,
            'message' => 'Tài khoản cập nhật thành công',
            'data' => new UserResource($user)
        ];

        return response()->json($arr, 200);
    }


    public function destroy(string $id)
    {
        //
    }
}
