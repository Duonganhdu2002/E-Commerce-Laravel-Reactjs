<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\BrandResource;
use App\Models\product_brand as Brand;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class BrandController extends Controller
{
    public function index()
    {

        $b = Brand::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => BrandResource::collection($b)
        ];

        return response()->json($arr, 200);
    }

    public function showByld($fieldId)
    {
        try {
            // Tìm các brand có field_id tương ứng
            $brands = Brand::where('field_id', $fieldId)->get();

            if ($brands->isEmpty()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Không có brand nào có field_id tương ứng.',
                    'data' => null,
                ], 404);
            }

            $arr = [
                'status' => true,
                'message' => 'Danh sách các brand có field_id ' . $fieldId,
                'data' => BrandResource::collection($brands)
            ];

            return response()->json($arr, 200);

        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Lỗi khi truy vấn cơ sở dữ liệu.',
                'data' => null,
            ], 500);
        }
    }

    public function show(string $id)
    {
        $brand = Brand::find($id);

        if (empty($brand)) {
            $arr = [
                'status' => false,
                'message' => 'Không có thương hiệu này',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $arr = [
            'status' => true,
            'message' => "Thông tin thương hiệu ",
            'data' => $brand,
        ];
        return response()->json($arr, 200);
    }

    public function update(Request $request, string $id)
    {
        $brand = Brand::find($id);

        if (empty($brand)) {
            $arr = [
                'status' => false,
                'message' => 'Không có thương hiệu  này',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $input = $request->all();

        $validator = Validator::make($input, [
            'product_brand_name' => 'required',
        ]);

        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $brand->update($input);

        $arr = [
            'status' => true,
            'message' => 'Thông tin lĩnh vực đã được cập nhật thành công',
            'data' => new BrandResource($brand)
        ];

        return response()->json($arr, 200);
    }


    public function delete(string $id)
    {
        try {
            $brand = Brand::findOrFail($id);
            $brand->delete();

            $arr = [
                'status' => true,
                'message' => 'Thương hiệu đã được xóa thành công',
                'data' => null
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'success' => false,
                'message' => 'Thương hiệu dùng không tồn tại',
                'data' => null
            ];

            return response()->json($arr, 404);
        }
    }

    public function addBrand(Request $request)
    {
        try {
            $input = $request->all();

            $validator = Validator::make($input, [
                'field_id' => 'required',
                'product_brand_name' => 'required',
                'logo' => 'required',
                'description' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => 400,
                    'message' => 'Validation error',
                    'errors' => $validator->errors()
                ], 400);
            }

            $brand = Brand::create([
                'field_id' => $input['field_id'],
                'product_brand_name' => $input['product_brand_name'],
                'logo' => $input['logo'],
                'description' => $input['description'],
            ]);

            return response()->json([
                'status' => 201,
                'message' => 'Brand Created Successfully',
                'data' => $brand,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Error creating brand',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}