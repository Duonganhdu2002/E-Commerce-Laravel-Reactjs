<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ProductReviewResource;
use App\Models\product_review;
use App\Models\product;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Pagination\Paginator;

class ProductReviewController extends Controller
{
    public function shopReviews($shopId, $ratingFilter = null)
    {
        try {
            $products = Product::where('created_by_user_id', $shopId)->get();

            $allReviewsData = [];

            foreach ($products as $product) {
                $reviews = $product->productReviews();

                $reviews = $reviews->latest();

                if ($ratingFilter !== null) {
                    $reviews = $reviews->where('rating', $ratingFilter);
                }

                $reviews = $reviews->get();

                foreach ($reviews as $review) {
                    $firstImage = $product->images->first();
                    $reviewData = [
                        'product_name' => $product->name,
                        'image_url' => $firstImage ? $firstImage->image_url : null,
                        'comment' => $review->comment,
                        'rating' => $review->rating,
                        'username' => $review->user->username,
                    ];

                    $allReviewsData[] = $reviewData;
                }
            }

            $currentPage = LengthAwarePaginator::resolveCurrentPage();
            $perPage = 10;
            $currentReviewsData = array_slice($allReviewsData, ($currentPage - 1) * $perPage, $perPage);
            $reviewsData = new LengthAwarePaginator($currentReviewsData, count($allReviewsData), $perPage, $currentPage);

            $arr = [
                'status' => true,
                'message' => 'Danh sách đánh giá của tất cả sản phẩm của shop có id ' . $shopId,
                'data' => $reviewsData,
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            return response()->json([
                'status' => false,
                'message' => 'Không tìm thấy sản phẩm.',
                'data' => null,
            ], 404);
        }
    }


    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $pr = product_review::create($input);
        $arr = [
            'status' => true,
            'message' => "đã lưu thành công",
            'data' => new ProductReviewResource($pr)
        ];
        return response()->json($arr, 201);
    }
    public function update(Request $request, string $id)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',


        ]);

        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $pr = product_review::find($id);

        if (!$pr) {
            $arr = [
                'status' => false,
                'message' => 'không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $pr->update($input);

        $arr = [
            'status' => true,
            'message' => 'cập nhật thành công',
            'data' => new ProductReviewResource($pr)
        ];

        return response()->json($arr, 200);
    }
}
