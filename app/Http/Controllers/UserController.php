<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserResource as UserResource;
use App\Models\User;
use App\Models\user_address as UserAddress;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash; // Mã hóa 


class UserController extends Controller
{


    public function info(Request $request, int $user_id)
    {
        try {
            // Find the user by user_id
            $user = User::find($user_id);

            if (!$user) {
                return response()->json([
                    'status' => false,
                    'message' => 'User not found',
                    'data' => null
                ], 404);
            }

            // Get user address
            $userAddress = UserAddress::where('user_id', $user_id)->first();

            // Merge user and user_address data
            $userDataWithAddress = array_merge($user->toArray(), $userAddress ? $userAddress->toArray() : []);

            return response()->json([
                'status' => true,
                'message' => 'User information retrieved successfully',
                'data' => $userDataWithAddress,
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
                'data' => null
            ], 500);
        }
    }


    public function login(Request $request)
    {
        // Validate request data
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Attempt to log in
        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            // Authentication successful

            // Get authenticated user (excluding password)
            $user = Auth::user();

            // Join user and user_address tables to get user's address
            $userDataWithAddress = User::join('user_address', 'users.user_id', '=', 'user_address.user_id')
                ->select('users.*', 'user_address.number', 'user_address.street', 'user_address.commune', 'user_address.district', 'user_address.province', 'user_address.country', 'user_address.postal_code')
                ->where('users.user_id', '=', $user->user_id)
                ->first();

            // Return the user data with address
            return response()->json([
                'success' => true,
                'data' => $userDataWithAddress,
            ]);
        } else {
            // Authentication failed
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials',
            ], 401);
        }
    }


    public function createUser(Request $request)
    {
        try {
            $input = $request->all();

            $validateUser = Validator::make(
                $input,
                [
                    'password' => 'required',
                    'username' => 'required',
                    'email' => 'required|email|unique:users,email',
                    'telephone' => 'required',
                    'full_name' => 'required',
                ]
            );

            if ($validateUser->fails()) {
                return response()->json([
                    'status' => 401,
                    'message' => 'Validation error',
                    'errors' => $validateUser->errors()
                ], 401);
            }

            User::create([
                'username' => $request->input('username'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'full_name' => $request->input('full_name'),
                'telephone' => $request->input('telephone'),
                'type_account_id' => $request->input('type_account_id', 1),

            ]);

            return response()->json([
                'status' => 200,
                'message' => 'User Created Successfully',
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => 500,
                'message' => 'Error creating user',
                'error' => $th->getMessage()
            ], 500);
        }
    }

    public function userList()
    {
        $this->middleware('auth:sanctum');
        $user = User::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách tài khoản',
            'data' => UserResource::collection($user)
        ];

        return response()->json($arr, 200);
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


    public function delete(string $id)
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

    public function userPagination(Request $request)
    {
        try {
            // Số lượng người dùng trên mỗi trang
            $perPage = 7;

            // Trang hiện tại (mặc định là 1 nếu không được xác định)
            $currentPage = $request->query('page', 1);

            // Tính toán offset để lấy bắt đầu của trang hiện tại
            $offset = ($currentPage - 1) * $perPage;

            // Lấy danh sách người dùng sử dụng câu truy vấn phân trang
            $users = User::offset($offset)->limit($perPage)->get();

            // Kiểm tra xem có người dùng nào không
            if ($users->isEmpty()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Không có người dùng',
                    'data' => null,
                ], 404);
            }

            // Lấy tổng số lượng người dùng
            $totalUsers = User::count();

            // Tính toán số lượng trang
            $totalPages = ceil($totalUsers / $perPage);

            // Trả về kết quả
            return response()->json([
                'status' => true,
                'message' => 'Danh sách người dùng phân trang',
                'total_users' => $totalUsers,
                'total_pages' => $totalPages,
                'current_page' => $currentPage,
                'per_page' => $perPage,
                'data' => UserResource::collection($users),
            ], 200);
        } catch (\Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => $th->getMessage(),
            ], 500);
        }
    }
}
