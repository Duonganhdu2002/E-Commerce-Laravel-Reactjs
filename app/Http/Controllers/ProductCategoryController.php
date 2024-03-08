<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductCategoryResource;
use App\Models\product_category as Category;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use App\Models\User;

class ProductCategoryController extends Controller
{
    public function index()
    {
        $pc = Category::join('field', 'field.field_id', '=', 'product_category.product_category_id')
        ->select('product_category.*', 'field.field_name')
        ->paginate(7);

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => $pc
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

    public function showUserCategories($userId)
    {
        try {
            $user = User::findOrFail($userId);

            $userCategories = $user->products()->pluck('product_category_id')->unique();

            $categories = Category::whereIn('product_category_id', $userCategories)->get();

            if ($categories->isEmpty()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Người dùng không có category nào.',
                    'data' => null,
                ], 404);
            }

            $arr = [
                'status' => true,
                'message' => 'Danh sách các category của người dùng có user_id ' . $userId,
                'data' => ProductCategoryResource::collection($categories),
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

    public function showUserCategorieswithP($userId)
    {
        try {
            $user = User::findOrFail($userId);

            $userCategories = $user->products()->pluck('product_category_id')->unique();

            $categories = Category::whereIn('product_category_id', $userCategories)->paginate(8);

            if ($categories->isEmpty()) {
                return response()->json([
                    'status' => false,
                    'message' => 'Người dùng không có category nào.',
                    'data' => null,
                ], 404);
            }

            $arr = [
                'status' => true,
                'message' => 'Danh sách các category của người dùng có user_id ' . $userId,
                'data' => ProductCategoryResource::collection($categories),
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
        $category = Category::find($id);

        if (empty($category)) {
            $arr = [
                'status' => false,
                'message' => 'Không có danh mục này',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $arr = [
            'status' => true,
            'message' => "Thông tin danh mục",
            'data' => $category,
        ];
        return response()->json($arr, 200);
    }

    public function update(Request $request, string $id)
    {
        $category = Category::find($id);

        if (empty($category)) {
            $arr = [
                'status' => false,
                'message' => 'Không có danh mục này',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $input = $request->all();

        $validator = Validator::make($input, [
            'product_category_name' => 'required',
        ]);

        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $category->update($input);

        $arr = [
            'status' => true,
            'message' => 'Thông tin danh mục đã được cập nhật thành công',
            'data' => new ProductCategoryResource($category)
        ];

        return response()->json($arr, 200);
    }


    public function delete(string $id)
    {
        try {
            $category = Category::findOrFail($id);
            $category->delete();

            $arr = [
                'status' => true,
                'message' => 'Danh mục đã được xóa thành công',
                'data' => null
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'success' => false,
                'message' => 'Danh mục dùng không tồn tại',
                'data' => null
            ];

            return response()->json($arr, 404);
        }
    }

    public function addCategory(Request $request)
    {
        try {
            $input = $request->all();

            $validator = Validator::make($input, [
                'field_id' => 'required',
                'product_category_name' => 'required',
                'description' => 'required',
                'icon' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => 400,
                    'message' => 'Validation error',
                    'errors' => $validator->errors()
                ], 400);
            }

            $category = category::create([
                'field_id' => $input['field_id'],
                'product_category_name' => $input['product_category_name'],
                'description' => $input['description'],
                'icon' => $input['icon'],
            ]);

            return response()->json([
                'status' => 201,
                'message' => 'Category Created Successfully',
                'data' => $category,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Error creating Category',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}