<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductCategoryResource;
use App\Models\product_category as Category;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductCategoryController extends Controller
{
    public function index()
    {
        $pc = Category::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => ProductCategoryResource::collection($pc)
        ];

        return response()->json($arr, 200);
    }

    public function showById($categoryId) // Fix the method name here
    {
        try {
            // Tìm các category có field_id tương ứng
            $categories = Category::where('field_id', $categoryId)->get();

            if ($categories->isEmpty()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Không có category nào có field_id tương ứng.',
                    'data' => null,
                ], 404);
            }

            $arr = [
                'status' => true,
                'message' => 'Danh sách các category có field_id ' . $categoryId,
                'data' => ProductCategoryResource::collection($categories) // Fix the resource class name here
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
