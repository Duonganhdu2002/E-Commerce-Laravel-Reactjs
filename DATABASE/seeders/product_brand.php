<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class product_brand extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
         // Tạo dữ liệu giả cho bảng 'product_brand'
         DB::table('product_brand')->insert([
            [
                
                'product_brand_id' => 1,
                'product_brand_name' => 'Brand 1',
                'description' => 'Description for Brand 1',
                'logo' => 'path/to/logo1.png',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'deleted_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'product_brand_id' => 2,
                'product_brand_name' => 'Brand 2',
                'description' => 'Description for Brand 2',
                'logo' => 'path/to/logo2.png',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'deleted_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            // Thêm các dòng dữ liệu khác tương ứng
        ]);
    }
}
