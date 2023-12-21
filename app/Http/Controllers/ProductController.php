<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\Product as ProductResource;
use App\Models\Product;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class ProductController extends Controller
{
    public function index()
    {
        $product = Product::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách sản phẩm',
            'data' => ProductResource::collection($product)
        ];

        return response()->json($arr, 200);
    }
    
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'name' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $product = Product::create($input);
        $arr = [
            'status' => true,
            'message' => "Sản phẩm đã lưu thành công",
            'data' => new ProductResource($product)
        ];
        return response()->json($arr, 201);
    }
    
    public function show(string $id)
    {
        $product = Product::find($id);

    if (empty($product)) {
        $arr = [
            'status' => false,
            'message' => 'Không có sản phẩm này',
            'data' => null
        ];
        return response()->json($arr, 404);
    }

    $arr = [
        'status' => true,
        'message' => "Thông tin sản phẩm",
        'data' => $product, 
    ];
    return response()->json($arr, 200);
    }
    
    public function update(Request $request, string $product)
    {
    $input = $request->all();

    $validator = Validator::make($input, [
        'name' => 'required',
        'price' => 'required',
        
        
    ]);

    if ($validator->fails()) {
        $arr = [
            'status' => false,
            'message' => 'Lỗi kiểm tra dữ liệu',
            'data' => $validator->errors()
        ];
        return response()->json($arr, 200);
    }

    $product = Product::find($product);

    if (!$product) {
        $arr = [
            'status' => false,
            'message' => 'Sản phẩm không tồn tại',
            'data' => null
        ];
        return response()->json($arr, 404);
    }

    $product->name = $input['name'] ?? null;
    $product->price = $input['price'] ?? null;
    $product->description = $input['description'] ?? null;
    $product->color_id = $input['color_id'] ?? null;
    $product->size_id = $input['size_id'] ?? null;
    $product->created_by_user_id = $input['created_by_user_id'] ?? null;
    $product->product_category_id = $input['product_category_id'] ?? null;
    $product-> stock= $input['stock'] ?? null;
    $product->discount_id = $input['discount_id'] ?? null;
    $product->save();

    $arr = [
        'status' => true,
        'message' => 'Sản phẩm cập nhật thành công',
        'data' => $product
    ];

    return response()->json($arr, 200);
}

    public function destroy(string $id)
    {
        try {
            $product = Product::findOrFail($id);
            $product->delete();

            $arr = [
                'status' => true,
                'message' => 'Sản phẩm đã được xóa thành công',
                'data' => null
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'success' => false,
                'message' => 'Sản phẩm không tồn tại',
                'data' => null
            ];

            return response()->json($arr, 404);
        }
    }
}
