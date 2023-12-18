<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class product_image extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng product_image
        DB::table('product_image')->insert([
            [
                'image_id' => 1,
                'product_id' => 1,
                'image_url' => 'smartphone_image.jpg',
            ],
            [
                'image_id' => 2,
                'product_id' => 2,
                'image_url' => 'tshirt_image.jpg',
            ],
            // Thêm các dòng dữ liệu khác nếu cần
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
