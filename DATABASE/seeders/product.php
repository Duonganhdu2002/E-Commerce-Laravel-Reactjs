<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class product extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng product
        DB::table('product')->insert([
            [
                'product_id' => 1,
                'name' => 'Smartphone',
                'description' => 'High-end smartphone',
                'color_id' => 1,
                'size_id' => 1,
                'created_by_user_id' => 1,
                'product_category_id' => 1,
                'price' => 799.99,
                'stock' => 50,
                'discount_id' => 1,
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'deleted_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'product_id' => 2,
                'name' => 'T-shirt',
                'description' => 'Cotton T-shirt',
                'color_id' => 2,
                'size_id' => 2,
                'created_by_user_id' => 2,
                'product_category_id' => 2,
                'price' => 19.99,
                'stock' => 100,
                'discount_id' => 2,
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'deleted_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            // Thêm các dòng dữ liệu khác nếu cần
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
