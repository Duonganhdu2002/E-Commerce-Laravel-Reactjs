<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Product;
use App\Models\search_history;

class SearchHistoryController extends Controller
{
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

       $this->saveSearchKeyword($request);

       // Trả về JSON response
       return response()->json([
           'status' => true,
           'message' => 'Danh sách sản phẩm',
           'data' => $products,
       ], 200);
   }

   private function saveSearchKeyword(Request $request)
    {
        // Lấy user_id và keyword từ yêu cầu
        $userId = $request->input('user_id');
        $keyword = $request->input('name') ?? $request->input('product_brand_name') ?? $request->input('product_category_name');

        // Kiểm tra xem đã tồn tại từ khóa tìm kiếm này chưa
        $existingSearch = search_history::where('user_id', $userId)
            ->where('keyword', $keyword)
            ->first();

        if ($existingSearch) {
            // Nếu đã tồn tại, có thể thực hiện các xử lý khác tùy thuộc vào yêu cầu của bạn
            // Ví dụ: Cập nhật thời gian tìm kiếm gần đây
            $existingSearch->update(['created_at' => now()]);
        } else {
            // Nếu chưa tồn tại, tạo mới bản ghi trong bảng search_history
            search_history::create([
                'user_id' => $userId,
                'keyword' => $keyword,
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