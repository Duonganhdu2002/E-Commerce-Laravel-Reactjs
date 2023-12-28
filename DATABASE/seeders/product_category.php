<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class product_category extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng product_category
        DB::table('product_category')->insert([
            [
                'product_category_id' => 1,
                'field_id' => 1,
                'name' => 'Electronics',
                'description' => 'Electronic devices and gadgets',
                'icon' => 'icon-electronics',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'deleted_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'product_category_id' => 2,
                'field_id' => 2,
                'name' => 'Clothing',
                'description' => 'Apparel and fashion items',
                'icon' => 'icon-clothing',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'deleted_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'product_category_id' => 3,
                'field_id' => 3,
                'name' => 'Furniture',
                'description' => 'Furniture items for home and office',
                'icon' => 'icon-furniture', // Thay icon tùy chọn
                'created_at' => Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at' => Carbon::now('Asia/Ho_Chi_Minh'),
                'deleted_at' => Carbon::now('Asia/Ho_Chi_Minh'),
            ],
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
