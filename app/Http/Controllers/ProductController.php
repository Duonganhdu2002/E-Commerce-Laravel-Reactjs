<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource as ProductResource;
use App\Models\Product;
use App\Models\product_category;
use App\Models\product_brand;
use App\Models\product_image as ProductImage;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\TryCatch;

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
    public function indexByCategory($categoryId)
    {
        try {
            // Assuming you have a relationship between Product and ProductCategory
            $products = product_category::findOrFail($categoryId)->products;

            $arr = [
                'status' => true,
                'message' => 'Danh sách sản phẩm theo danh mục',
                'data' => ProductResource::collection($products)
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'status' => false,
                'message' => 'Danh mục sản phẩm không tồn tại hoặc không có sản phẩm nào',
                'data' => null,
            ];

            return response()->json($arr, 404);
        }
    }
    public function indexByUser($userId)
    {
        try {
            $products = Product::where('created_by_user_id', $userId)->get();

            $arr = [
                'status' => true,
                'message' => 'Danh sách sản phẩm của người dùng',
                'data' => ProductResource::collection($products)
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'status' => false,
                'message' => 'Người dùng không tồn tại hoặc không có sản phẩm nào được tạo bởi người dùng này',
                'data' => null,
            ];

            return response()->json($arr, 404);
        }
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
        $product->stock = $input['stock'] ?? null;
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

    public function getLatestProductsInCategory(Request $request, $categoryId) // Lấy ra 6 sản phẩm mới nhất trong 1 category bất kì
    {
        $latestProducts = Product::where('product_category_id', $categoryId)
            ->latest('created_at')
            ->limit(6)
            ->get();

        return response()->json(['latestProducts' => $latestProducts]);
    }

    public function getBestSellingProductsInCategory(Request $request, $categoryId)
    {
        try {
            $topProducts = Product::select(
                'product.product_id',
                'product.name',
                'product.description',
                'product.price',
                'product.stock',
                DB::raw('SUM(order_items.quantity) as total_sales')
            )
                ->join('order_items', 'product.product_id', '=', 'order_items.product_id')
                ->where('product.product_category_id', $categoryId)
                ->groupBy('product.product_id', 'product.name', 'product.description', 'product.price', 'product.stock')
                ->orderByDesc('total_sales')
                ->take(6)
                ->get();

            foreach ($topProducts as &$product) {
                $productImages = ProductImage::where('product_id', $product->product_id)->pluck('image_url');
                $product->images = $productImages;
            }

            return response()->json([
                'status' => 200,
                'message' => 'Top 6 sản phẩm của 1 danh mục bán chạy nhất',
                'data' => $topProducts
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Internal Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }


    // Hàm để tìm kiếm sản phẩm dựa trên tên, brand và category
    public function search(Request $request)
    {
        // Lấy các tham số tìm kiếm từ yêu cầu
        $productName = $request->input('name');
        $brandName = $request->input('product_brand_name');
        $categoryName = $request->input('product_category_name');

        // Bắt đầu truy vấn từ model Product
        $query = Product::query();

        // Thêm điều kiện tìm kiếm nếu tên sản phẩm được cung cấp
        if ($productName) {
            $query->where('product.name', 'like', "%$productName%");
        }

        // Thêm điều kiện tìm kiếm nếu tên nhãn hàng được cung cấp
        if ($brandName) {
            $query->orWhereHas('productBrand', function ($query) use ($brandName) {
                $query->where('product_brand_name', 'like', "%$brandName%");
            });
        }

        // Thêm điều kiện tìm kiếm nếu tên danh mục được cung cấp
        if ($categoryName) {
            $query->orWhereHas('productCategory', function ($query) use ($categoryName) {
                $query->where('product_category_name', 'like', "%$categoryName%");
            });
        }

        // Thực hiện truy vấn và lấy danh sách sản phẩm
        $products = $query->get();

        if ($products->isEmpty()) {
            // Nếu không có sản phẩm, trả về thông báo
            return response()->json([
                'status' => false,
                'message' => 'Không có sản phẩm nào được tìm thấy',
                'data' => null,
            ], 404);
        }

        // Trả về JSON response
        return response()->json([
            'status' => true,
            'message' => 'Danh sách sản phẩm',
            'data' => $products,
        ], 200);
    }


    // Hàm xử lý chức năng lọc sản phẩm theo giá
    public function filterByPrice(Request $request)
    {
        // Lấy giá trị tối thiểu và tối đa từ yêu cầu
        $minPrice = $request->input('min_price');
        $maxPrice = $request->input('max_price');

        // Bắt đầu truy vấn từ model Product
        $query = Product::query();

        // Thêm điều kiện tìm kiếm theo giá nếu có
        if ($minPrice !== null) {
            $query->where('price', '>=', $minPrice);
        }

        if ($maxPrice !== null) {
            $query->where('price', '<=', $maxPrice);
        }

        // Lấy danh sách sản phẩm sau khi áp dụng điều kiện
        $products = $query->get();

        // Trả về JSON response chứa danh sách sản phẩm
        return response()->json([
            'status' => true,
            'message' => 'Danh sách sản phẩm được lọc theo giá',
            'data' => $products,
        ], 200);
    }

    // Hàm xử lý chức năng lọc sản phẩm theo đánh giá
    public function filterByRating(Request $request)
    {
        // Lấy giá trị đánh giá từ yêu cầu
        $rating = $request->input('rating');

        // Bắt đầu truy vấn từ model Product
        $query = Product::query();

        // Nếu có giá trị đánh giá, thêm điều kiện tìm kiếm
        if ($rating !== null) {
            $query->whereHas('productReviews', function ($subQuery) use ($rating) {
                $subQuery->where('rating', '=', $rating);
            });
        }

        // Lấy danh sách sản phẩm sau khi áp dụng điều kiện
        $products = $query->get();

        // Trả về JSON response chứa danh sách sản phẩm
        return response()->json([
            'status' => true,
            'message' => 'Danh sách sản phẩm được lọc theo đánh giá',
            'data' => $products,
        ], 200);
    }

    // Hàm xử lý chức năng lọc sản phẩm theo địa chỉ của shop
    public function filterByAddress(Request $request)
    {
        // Lấy các thông tin địa chỉ từ yêu cầu
        $number = $request->input('number');
        $street = $request->input('street');
        $commune = $request->input('commune');
        $district = $request->input('district');
        $province = $request->input('province');
        $country = $request->input('country');
        $postalCode = $request->input('postal_code');

        // Bắt đầu truy vấn từ model Product
        $query = Product::query();

        // Thêm điều kiện tìm kiếm dựa trên mối quan hệ userAddress
        $query->whereHas('userAddress', function ($subQuery) use ($number, $street, $commune, $district, $province, $country, $postalCode) {
            $subQuery->where('number', 'like', "%$number%")
                ->where('street', 'like', "%$street%")
                ->where('commune', 'like', "%$commune%")
                ->where('district', 'like', "%$district%")
                ->where('province', 'like', "%$province%")
                ->where('country', 'like', "%$country%")
                ->where('postal_code', 'like', "%$postalCode%");
        });

        // Lấy danh sách sản phẩm sau khi áp dụng điều kiện
        $products = $query->get();

        // Trả về JSON response chứa danh sách sản phẩm
        return response()->json([
            'status' => true,
            'message' => 'Danh sách sản phẩm được lọc theo địa chỉ của shop',
            'data' => $products,
        ], 200);
    }
}