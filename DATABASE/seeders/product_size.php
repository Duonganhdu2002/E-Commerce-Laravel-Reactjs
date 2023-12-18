<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class product_size extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng product_size
        DB::table('product_size')->insert([
            [
                'size_id' => 1,
                'size_name' => 'Small',
            ],
            [
                'size_id' => 2,
                'size_name' => 'Medium',
            ],
            [
                'size_id' => 3,
                'size_name' => 'Large',
            ],
            // Thêm các dòng dữ liệu khác nếu cần
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
