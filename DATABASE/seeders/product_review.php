<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class product_review extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng product_review
        DB::table('product_review')->insert([
            [
                'product_review_id' => 1,
                'user_id' => 1,
                'product_id' => 1,
                'rating' => 5,
                'comment' => 'Excellent product!',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'product_review_id' => 2,
                'user_id' => 2,
                'product_id' => 2,
                'rating' => 4,
                'comment' => 'Comfortable and stylish.',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            // Thêm các dòng dữ liệu khác nếu cần
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
