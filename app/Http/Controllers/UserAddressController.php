<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\UserAddressResource as UserAddressResource;
use App\Models\user_address;
use Illuminate\Database\Eloquent\ModelNotFoundException;




class UserAddressController extends Controller
{
    public function index()
    {
        try {
            $userAddresses = user_address::all();

            $arr = [
                'status' => true,
                'message' => 'Danh sách địa chỉ',
                'data' => UserAddressResource::collection($userAddresses)
            ];

            return response()->json($arr, 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Có lỗi xảy ra khi lấy danh sách địa chỉ',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function store(Request $request)
    {
        // Kiểm tra xem người dùng đã đăng nhập hay chưa
        if (Auth::check()) {
            // Lấy thông tin của người dùng hiện tại
            $user = Auth::user();

            // Thực hiện thêm mới địa chỉ với user_id là ID của người dùng
            $newAddress = new user_address([
                'user_id' => $user->id, // Lấy user_id từ đối tượng người dùng
                'address' => $request->input('address'),
                // Thêm các trường dữ liệu khác tương ứng với đối tượng user_address
            ]);

            // Lưu địa chỉ mới vào cơ sở dữ liệu
            $newAddress->save();

            return response()->json([
                'status' => true,
                'message' => 'Đã thêm mới địa chỉ thành công',
                'data' => new UserAddressResource($newAddress),
            ], 200);
        } else {
            return response()->json([
                'status' => false,
                'message' => 'Người dùng chưa đăng nhập',
            ], 401);
        }
    }

    public function show(string $id)
    {
        try {
            $userAddress = user_address::findOrFail($id);

            $arr = [
                'status' => true,
                'message' => 'Thông tin địa chỉ',
                'data' => new UserAddressResource($userAddress),
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Không tìm thấy địa chỉ',
                'error' => $e->getMessage(),
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Có lỗi xảy ra khi lấy thông tin địa chỉ',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function update(Request $request, string $id)
    {
        // Validate the incoming request data
        $validator = Validator::make($request->all(), [
            'user_id' => 'integer',
            'address' => 'string|max:255',
            'city' => 'string|max:255',
            'state' => 'string|max:255',
            'zip_code' => 'string|max:10',
        ]);

        // Check if the validation fails
        if ($validator->fails()) {
            return response()->json([
                'status' => false,
                'message' => 'Validation error',
                'errors' => $validator->errors(),
            ], 422);
        }

        try {
            // Find the user address by ID
            $userAddress = user_address::findOrFail($id);

            // Update the user address with the new data
            $userAddress->update($request->all());

            $arr = [
                'status' => true,
                'message' => 'Cập nhật địa chỉ thành công',
                'data' => new UserAddressResource($userAddress),
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Không tìm thấy địa chỉ',
                'error' => $e->getMessage(),
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Có lỗi xảy ra khi cập nhật địa chỉ',
                'error' => $e->getMessage(),
            ], 500);
        }
    }

    public function destroy(string $id)
    {
        try {
            // Find the user address by ID and delete it
            $userAddress = user_address::findOrFail($id);
            $userAddress->delete();

            $arr = [
                'status' => true,
                'message' => 'Xóa địa chỉ thành công',
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Không tìm thấy địa chỉ',
                'error' => $e->getMessage(),
            ], 404);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Có lỗi xảy ra khi xóa địa chỉ',
                'error' => $e->getMessage(),
            ], 500);
        }
    }
}
