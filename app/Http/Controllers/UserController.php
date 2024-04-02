<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserResource as UserResource;
use App\Models\User;
use App\Models\product_review as ProductReview;
use App\Models\user_address as UserAddress;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash; // Mã hóa 
use PhpParser\Node\Expr\Cast\String_;

class UserController extends Controller
{

    public function getAllUsers()
    {
        $users = User::all();
        return response()->json($users);
    }


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

            // Get the total rating and count of all products belonging to the user
            $productReviews = ProductReview::whereHas('product', function ($query) use ($user_id) {
                $query->where('created_by_user_id', $user_id);
            })->get();

            $totalRating = $productReviews->sum('rating');
            $totalReviews = $productReviews->count();

            // Calculate the average rating
            $averageRating = $totalReviews > 0 ? $totalRating / $totalReviews : 0;

            // Add the total and average ratings to the user data
            $userDataWithAddress['average_rating'] = $averageRating;

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
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            // Check if type_account_id is equal to 3
            if ($user->type_account_id == 3) {
                return response()->json([
                    'success' => true,
                    'data' => $user,
                ]);
            } else {
                // If type_account_id is not equal to 3, logout the user
                Auth::logout();

                return response()->json([
                    'success' => false,
                    'message' => 'Invalid account type',
                ], 401);
            }
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials',
            ], 401);
        }
    }

    public function loginBusiness(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            if ($user->type_account_id == 2) {
                return response()->json([
                    'success' => true,
                    'data' => $user,
                ]);
            } else {
                Auth::logout();

                return response()->json([
                    'success' => false,
                    'message' => 'Invalid account type',
                ], 401);
            }
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials',
            ], 401);
        }
    }

    public function loginAdmin(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        $credentials = $request->only('email', 'password');

        if (Auth::attempt($credentials)) {
            $user = Auth::user();

            // Check if type_account_id is equal to 3
            if ($user->type_account_id == 1) {
                return response()->json([
                    'success' => true,
                    'data' => $user,
                ]);
            } else {
                // If type_account_id is not equal to 3, logout the user
                Auth::logout();

                return response()->json([
                    'success' => false,
                    'message' => 'Invalid account type',
                ], 401);
            }
        } else {
            return response()->json([
                'success' => false,
                'message' => 'Invalid credentials',
            ], 401);
        }
    }


    public function createAdmin(Request $request)
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

    public function createBusiness(Request $request)
    {
        try {
            $input = $request->all();

            $validateUser = Validator::make(
                $input,
                [
                    'password' => 'required',
                    'shop_username' => 'required',
                    'email' => 'required|email|unique:users,email',
                    'telephone' => 'required',
                    'full_name' => 'required',
                    'shop_name' => 'required',
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
                'shop_username' => $request->input('shop_username'),
                'email' => $request->input('email'),
                'password' => Hash::make($request->input('password')),
                'full_name' => $request->input('full_name'),
                'telephone' => $request->input('telephone'),
                'type_account_id' => $request->input('type_account_id', 2),
                'shop_avt' => $request->input('shop_avt', 'shop_avt.jpg'),
                'shop_background' => $request->input('shop_background', 'shop_background.png'),
                'avt_image' => $request->input('avt_image', 'avatar.jpg'),
                'shop_name' => $request->input('shop_name'),

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
                'type_account_id' => $request->input('type_account_id', 3),

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

    public function create($new_user)
    {
        try {

            User::create([
                'username' => $new_user->input('username'),
                'email' => $new_user->input('email'),
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



    public function userList(Request $request, int $type_id)
    {
        $users = User::where('type_account_id', $type_id)
            ->paginate(6);

        $arr = [
            'status' => true,
            'message' => 'Danh sách tài khoản',
            'data' => $users
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

    public function search($email)
{
    // Kiểm tra xem có email được cung cấp không
    if (!$email) {
        return response()->json(['message' => 'Vui lòng cung cấp địa chỉ email'], 400);
    }

    // Tìm user có email tương ứng
    $users = User::where('email', 'LIKE', '%' . $email . '%')->paginate(6);

    // Kiểm tra xem user có tồn tại hay không
    if ($users->isEmpty()) {
        return response()->json(['message' => 'Không tìm thấy user'], 404);
    }

    // Trả về thông tin user
    return response()->json($users, 200);
}

}
