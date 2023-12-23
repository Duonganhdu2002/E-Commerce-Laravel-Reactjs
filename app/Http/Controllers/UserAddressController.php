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
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
            'commune' => 'required',
            'district' => 'required',
            'province' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $product = user_address::create($input);
        $arr = [
            'status' => true,
            'message' => "Địa chỉ đã lưu thành công",
            'data' => new UserAddressResource($product)
        ];
        return response()->json($arr, 201);
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

   
    public function update(Request $request, string $user_address_id)
    {
    $input = $request->all();


    $validator = Validator::make($input, [
         'user_id' => 'required',
         'user_address_id' => 'required',
           
        
    ]);

    if ($validator->fails()) {
        $arr = [
            'status' => false,
            'message' => 'Lỗi kiểm tra dữ liệu',
            'data' => $validator->errors()
        ];
        return response()->json($arr, 200);
    }

    $address = user_address::find($user_address_id);

    if (!$address) {
        $arr = [
            'status' => false,
            'message' => 'Sản phẩm không tồn tại',
            'data' => null
        ];
        return response()->json($arr, 404);
    }

    $address->number = $input['number'] ?? $address->number;
    $address->street = $input['street'] ?? $address->street;
    $address->commune = $input['commune'] ?? $address->commune;
    $address->district = $input['district'] ?? $address->district;
    $address->province = $input['province'] ?? $address->province;
    $address->save();

    $arr = [
        'status' => true,
        'message' => 'Sản phẩm cập nhật thành công',
        'data' => $address
    ];

    return response()->json($arr, 200);
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
