<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class order_items extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng order_items
        DB::table('order_items')->insert([
            [
                'order_items_id' => 1,
                'order_id' => 1,
                'product_id' => 1,
                'quantity' => 2,
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'order_items_id' => 2,
                'order_id' => 2,
                'product_id' => 2,
                'quantity' => 3,
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
