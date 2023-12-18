<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class user_review extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng user_review
        DB::table('user_review')->insert([
            [
                'user_review_id' => 1,
                'reviewer_id' => 1,
                'reviewee_id' => 2,
                'rating' => 4,
                'comment' => 'Great buyer!',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'user_review_id' => 2,
                'reviewer_id' => 2,
                'reviewee_id' => 1,
                'rating' => 5,
                'comment' => 'Excellent seller!',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            // Thêm các dòng dữ liệu khác nếu cần
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
