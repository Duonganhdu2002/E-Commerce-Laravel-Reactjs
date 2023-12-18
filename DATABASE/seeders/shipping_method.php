<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class shipping_method extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng shipping_method
        DB::table('shipping_method')->insert([
            [
                'shipping_method_id' => 1,
                'shipping_method_name' => 'Standard',
                'shipping_method_price' => 5.00,
            ],
            [
                'shipping_method_id' => 2,
                'shipping_method_name' => 'Express',
                'shipping_method_price' => 10.00,
            ],
            // Thêm các dòng dữ liệu khác nếu cần
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
