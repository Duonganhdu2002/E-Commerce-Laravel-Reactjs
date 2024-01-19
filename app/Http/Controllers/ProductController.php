<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductResource as ProductResource;
use App\Models\Product;
use App\Models\product_category;
use App\Models\user;
use App\Models\search_history;
use App\Models\product_review;
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

    // Hàm xử lý hiển thị thông tin sản phẩm và danh sách ảnh
    public function show(string $id)
    {
        try {
        $product = Product::with(['images'])->findOrFail($id);
        $creator = User::find($product->created_by_user_id);
        $reviews = product_review::where('product_id', $id)->get();
        $imageUrls = $product->images->pluck('image_url');

            $arr = [
                'status' => true,
            'message' => 'Thông tin sản phẩm',
            'data' => [
                'product_id' => $product->product_id,
                'name' => $product->name,
                'description' => $product->description,
                'created_by_user_id' => [
                    'user_id' => $creator->user_id,
                    'username' => $creator->username,
                    'avt_image' => $creator->avt_image,
                    'first_name' => $creator->first_name,
                    'last_name' => $creator->last_name,
                ],
                'product_brand_id' => $product->product_brand_id,
                'product_category_id' => $product->product_category_id,
                'price' => $product->price,
                'stock' => $product->stock,
                'discount_id' => $product->discount_id,
                'created_at' => $product->created_at,
                'updated_at' => $product->updated_at,
                'deleted_at' => $product->deleted_at,
                'image_urls' => $imageUrls,
                'reviews' => $reviews,
                'color' => $product->color, 
                'size' => $product->size,
                ],
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'status' => false,
                'message' => 'Không có sản phẩm này',
                'data' => null,
            ];

            return response()->json($arr, 404);
        }
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

        $product->update($input);


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

    public function listProductWithCategory(Request $request, $categoryId)
    {
        try {
            $products = Product::select(
                'product.*',
                'product_review.rating',
                DB::raw('SUM(order_items.quantity) as total_sales'),
            )
                ->leftJoin('product_review', 'product.product_id', '=', 'product_review.product_id')
                ->leftJoin('order_items', 'product.product_id', '=', 'order_items.product_id')
                ->leftJoin('order', 'order_items.order_id', '=', 'order.order_id')
                ->leftJoin('product_color', 'product.product_id', '=', 'product_color.product_id')
                ->leftJoin('product_size', 'product.product_id', '=', 'product_size.product_id')
                ->with(['color', 'size'])
                ->where('product.product_category_id', $categoryId)
                // ->where('order.order_status_id', 3)
                ->groupBy('product.product_id')
                ->groupBy(
                    'product.product_id',
                    'product.name',
                    'product.description',
                    'product.price',
                    'product.stock',
                    'product.created_by_user_id',
                    'product.product_brand_id',
                    'product.product_category_id',
                    'product.discount_id',
                    'product.created_at',
                    'product.updated_at',
                    'product.deleted_at',
                    'product_review.rating',
                     
                )
                ->orderByDesc('product_review.rating')
                ->orderByDesc('total_sales')
                ->get();
            foreach ($products as &$product) {
                $productImages = ProductImage::where('product_id', $product->product_id)->pluck('image_url');
                $product->images = $productImages;
            }
            return response()->json([
                'status' => 200,
                'message' => 'Danh sách sản phẩm theo danh mục sắp xếp theo độ đánh giá và lượt bán',
                'data' => $products
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Internal Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    public function listProductWithBrand(Request $request, $brandId)
    {
        try {
            $products = Product::select(
                'product.*',
                'product_review.rating',
                DB::raw('SUM(order_items.quantity) as total_sales')
            )
                ->leftJoin('product_review', 'product.product_id', '=', 'product_review.product_id')
                ->leftJoin('order_items', 'product.product_id', '=', 'order_items.product_id')
                ->leftJoin('order', 'order_items.order_id', '=', 'order.order_id')
                ->where('product.product_brand_id', $brandId)
                ->where('order.order_status_id', 3)
                ->groupBy('product.product_id',)
                ->groupBy(
                    'product.product_id',
                    'product.name',
                    'product.description',
                    'product.price',
                    'product.stock',
                    'product.color_id',
                    'product.size_id',
                    'product.created_by_user_id',
                    'product.product_brand_id',
                    'product.product_category_id',
                    'product.discount_id',
                    'product.created_at',
                    'product.updated_at',
                    'product.deleted_at',
                    'product_review.rating'
                )
                ->orderByDesc('product_review.rating')
                ->orderByDesc('total_sales')
                ->get();
            foreach ($products as &$product) {
                $productImages = ProductImage::where('product_id', $product->product_id)->pluck('image_url');
                $product->images = $productImages;
            }
            return response()->json([
                'status' => 200,
                'message' => 'Danh sách sản phẩm theo danh mục sắp xếp theo độ đánh giá và lượt bán',
                'data' => $products
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Internal Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }

    // Gợi ý sản phẩm
    public function recommendBaseOnSearch(Request $request, $user_id)
    {
        // Lấy danh sách từ khóa tìm kiếm gần đây của người dùng
        $recentSearches = search_history::where('user_id', $user_id)
            ->orderByDesc('created_at')
            ->pluck('keyword')
            ->take(2)
            ->toArray();

        // Kiểm tra nếu không có từ khóa tìm kiếm gần đây
        if (empty($recentSearches)) {
            $categoryId = $request->has('category_id') ? $request->input('category_id') : 1;
            return $this->getBestSellingProductsInCategory($request, $categoryId);
        }

        $relatedProducts = collect();

        // Lấy sản phẩm dựa trên từ khóa tìm kiếm gần đây
        foreach ($recentSearches as $search) {
            $products = Product::where('name', 'like', "%$search%")->take(4)->get();
            $relatedProducts = $relatedProducts->merge($products);
        }

        // Lấy ảnh của sản phẩm từ bảng product_image
        $relatedProductsWithImages = $relatedProducts->map(function ($product) {
            $images = ProductImage::where('product_id', $product->product_id)->pluck('image_url');
            $product->images = $images;
            return $product;
        });

        if ($relatedProductsWithImages->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'Không có sản phẩm nào được tìm thấy dựa trên từ khóa tìm kiếm gần đây',
                'data' => null,
            ], 404);
        }

        return response()->json([
            'status' => true,
            'message' => 'Danh sách sản phẩm gợi ý dựa trên từ khóa tìm kiếm gần đây',
            'data' => $relatedProductsWithImages,
        ]);
    }

    public function getRandomCategories()
    {
        try {
            // Specify the unique category IDs you want to fetch
            $categoryIds = [1, 27];

            // Get the specified categories
            $specificCategories = DB::table('product_category')
                ->whereIn('product_category_id', $categoryIds)
                ->get(['product_category_id', 'product_category_name']);

            $result = [];

            foreach ($specificCategories as $category) {
                // Lấy thông tin sản phẩm bán chạy nhất của từng danh mục
                $topProducts = Product::select(
                    'product.product_id',
                    'product.name',
                    'product.description',
                    'product.price',
                    'product.stock',
                    DB::raw('SUM(order_items.quantity) as total_sales')
                )
                    ->join('order_items', 'product.product_id', '=', 'order_items.product_id')
                    ->where('product.product_category_id', $category->product_category_id)
                    ->groupBy('product.product_id', 'product.name', 'product.description', 'product.price', 'product.stock')
                    ->orderByDesc('total_sales')
                    ->take(4)
                    ->get();

                foreach ($topProducts as &$product) {
                    // Lấy danh sách ảnh của sản phẩm
                    $productImages = ProductImage::where('product_id', $product->product_id)->pluck('image_url');
                    $product->images = $productImages;
                }

                $result[] = [
                    'category_id' => $category->product_category_id,
                    'product_category_name' => $category->product_category_name,
                    'top_products' => $topProducts,
                ];
            }

            return response()->json([
                'status' => 200,
                'message' => 'Danh sách 4 danh mục và top 4 sản phẩm bán chạy nhất của từng danh mục',
                'data' => $result
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Internal Server Error',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}
