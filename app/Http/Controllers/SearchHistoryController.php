<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\search_history;

class SearchHistoryController extends Controller
{
    // Hàm để tìm kiếm sản phẩm dựa trên tên, brand và category
    public function search(Request $request, $keySearch)
    {
        $perPage = 6; // Số sản phẩm trên mỗi trang

        // Sử dụng Eloquent để tìm kiếm và phân trang
        $products = Product::where('name', 'like', '%' . $keySearch . '%')
            ->with(['ratings', 'images:image_id,product_id,image_url'])
            ->paginate($perPage);

        if ($products->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'Không có sản phẩm nào được tìm thấy',
                'data' => null,
            ], 404);
        }

        // Transform the products data to include only the required fields
        $transformedProducts = $products->map(function ($product) {
            // Calculate the average rating for each product
            $averageRating = $product->ratings->avg('rating');

            // Create a new product object with only the required fields
            return [
                'product_id' => $product->product_id,
                'name' => $product->name,
                'description' => $product->description,
                'created_by_user_id' => $product->created_by_user_id,
                'product_brand_id' => $product->product_brand_id,
                'product_category_id' => $product->product_category_id,
                'price' => $product->price,
                'stock' => $product->stock,
                'discount_id' => $product->discount_id,
                'created_at' => $product->created_at,
                'updated_at' => $product->updated_at,
                'deleted_at' => $product->deleted_at,
                'average_rating' => $averageRating !== null ? round($averageRating, 2) : null,
                'image_urls' => $product->images->pluck('image_url')->toArray(),
            ];
        });

        $this->saveSearchKeyword($request, $keySearch);

        return response()->json([
            'status' => true,
            'message' => 'Danh sách sản phẩm',
            'data' => $transformedProducts,
            'pagination' => [
                'total' => $products->total(),
                'per_page' => $products->perPage(),
                'current_page' => $products->currentPage(),
                'last_page' => $products->lastPage(),
                'from' => $products->firstItem(),
                'to' => $products->lastItem(),
            ],
        ], 200);
    }


    private function saveSearchKeyword(Request $request, $keySearch)
    {
        $userId = $request->user() ? $request->user()->id : 1;

        // Kiểm tra xem đã tồn tại từ khóa tìm kiếm này chưa
        $existingSearch = search_history::where('user_id', $userId)
            ->where('keyword', $keySearch)
            ->first();

        if ($existingSearch) {
            // Nếu đã tồn tại, có thể thực hiện các xử lý khác tùy thuộc vào yêu cầu của bạn
            // Ví dụ: Cập nhật thời gian tìm kiếm gần đây
            $existingSearch->update(['created_at' => now()]);
        } else {
            // Nếu chưa tồn tại, tạo mới bản ghi trong bảng search_history
            search_history::create([
                'user_id' => $userId,
                'keyword' => $keySearch,
                'created_at' => now(),
            ]);
        }
    }

    //  Trả về lịch sử tìm kiếm gần đây của một người dùng cụ thể.
    public function getRecentSearches(Request $request, $id)
    {
        try {

            $recentSearches = search_history::where('user_id', $id)
                ->orderByDesc('created_at')
                ->pluck('keyword')
                ->take(5)
                ->toArray();

            return response()->json([
                'status' => true,
                'message' => 'Recent search history',
                'data' => $recentSearches,
            ], 200);
        } catch (\Exception $e) {
            return response()->json([
                'status' => false,
                'message' => 'Error retrieving recent searches',
                'data' => null,
            ], 500);
        }
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