<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\search_history as SearchHistory;
use Illuminate\Support\Facades\DB;

class SearchHistoryController extends Controller
{
    public function search(Request $request)
    {
        $productName = $request->input('name');

        $query = Product::query();

        if ($productName) {
            $query->where('product.name', 'like', "%$productName%");
        }

        // Thực hiện JOIN với bảng product_review để lấy thông tin đánh giá
        $query->leftJoin('product_review', 'product_review.product_id', '=', 'product.product_id');

        // Sử dụng AVG để tính giá trung bình đánh giá
        $query->select('product.*', DB::raw('AVG(product_review.rating) as average_rating'));

        // Nhóm kết quả theo các trường cần thiết
        $query->groupBy(
            'product.product_id',
            'product.name',
            'product.created_by_user_id',
            'product.product_brand_id',
            'product.product_category_id',
            'product.price',
            'product.stock',
            'product.discount_id',
            'product.created_at',
            'product.updated_at',
            'product.deleted_at',
            'product.description',
        );

        // Sử dụng paginate để phân trang với 10 sản phẩm mỗi trang
        $products = $query->paginate(10);

        if ($products->isEmpty()) {
            return response()->json([
                'status' => false,
                'message' => 'No products found',
                'data' => null,
            ], 404);
        }

        $this->saveSearchKeyword($request);

        return response()->json([
            'status' => true,
            'message' => 'List of products with average rating',
            'data' => $products,
        ], 200);
    }




    private function saveSearchKeyword(Request $request)
    {
        $userId = $request->input('user_id');

        if ($userId) {
            $keyword = $request->input('name');
            $existingSearch = SearchHistory::where('user_id', $userId)
                ->where('keyword', $keyword)
                ->first();

            if ($existingSearch) {
                $existingSearch->update(['created_at' => now()]);
            } else {
                SearchHistory::create([
                    'user_id' => $userId,
                    'keyword' => $keyword,
                    'created_at' => now(),
                ]);
            }
        }
    }



    //  Trả về lịch sử tìm kiếm gần đây của một người dùng cụ thể.
    public function getRecentSearches(Request $request, $id)
    {
        try {

            $recentSearches = SearchHistory::where('user_id', $id)
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
