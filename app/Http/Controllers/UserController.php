<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserResource as UserResource;
use App\Models\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash; // Mã hóa 


class UserController extends Controller
{
    public function index(Request $request)
{
    // Số lượng user trên mỗi trang
    $perPage = $request->input('page', 7);

    // Truy vấn dữ liệu từ bảng users với phân trang
    $users = User::paginate($perPage);

    $arr = [
        'status' => true,
        'message' => 'Danh sách tài khoản',
        'data' => UserResource::collection($users)
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

        // Mã hóa mật khẩu trước khi lưu vào cơ sở dữ liệu
        $input['password'] = Hash::make($input['password']);
        
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
        $user = User::find($id);

        if (empty($user)) {
            $arr = [
                'status' => false,
                'message' => 'Không có người dùng này',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $arr = [
            'status' => true,
            'message' => "Thông tin",
            'data' => $user,
        ];
        return response()->json($arr, 200);
    }

    public function update(Request $request, string $id)
    {
        $user = User::find($id);

        if (empty($user)) {
            $arr = [
                'status' => false,
                'message' => 'Không có người dùng này',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $input = $request->all();

        $validator = Validator::make($input, [
            'username' => 'required',
        ]);

        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $user->update($input);

        $arr = [
            'status' => true,
            'message' => 'Thông tin người dùng đã được cập nhật thành công',
            'data' => new UserResource($user)
        ];

        return response()->json($arr, 200);
    }


    public function destroy(string $id)
    {
        try {
            $user = User::findOrFail($id);
            $user->delete();

            $arr = [
                'status' => true,
                'message' => 'Người dùng đã được xóa thành công',
                'data' => null
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'success' => false,
                'message' => 'Người dùng không tồn tại',
                'data' => null
            ];

            return response()->json($arr, 404);
        }
    }

    public function getTotalUsers()
    {
        // Sử dụng SQL raw query để lấy tổng số người dùng
        $totalUsers = DB::table('user')->selectRaw('COUNT(*) as total_users')->first();

        // Trả về kết quả
        return response()->json([
            'status' => true,
            'message' => 'Tổng số người dùng',
            'data' => [
                'total_users' => $totalUsers->total_users,
            ],
        ], 200);
    }

    public function authenticate(Request $request)
    {
        $user = User::where('email', $request->email)->first();

        if ($user && Hash::check($request->password, $user->password)) {
            // Mật khẩu đúng, thực hiện xác thực thành công
            return response()->json(['message' => 'Authentication successful'], 200);
        } else {
            // Mật khẩu không đúng
            return response()->json(['message' => 'Authentication failed'], 401);
        }
    }
}
