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
}
