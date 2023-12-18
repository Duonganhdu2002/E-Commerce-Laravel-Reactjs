<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class product_color extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng product_color
        DB::table('product_color')->insert([
            [
                'color_id' => 1,
                'color_name' => 'Red',
            ],
            [
                'color_id' => 2,
                'color_name' => 'Blue',
            ],
            [
                'color_id' => 3,
                'color_name' => 'Green',
            ],
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
