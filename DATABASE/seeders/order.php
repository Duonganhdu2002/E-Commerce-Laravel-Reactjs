<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class order extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng order
        DB::table('order')->insert([
            [
                'order_id' => 1,
                'user_id' => 1,
                'order_status_id' => 1,
                'shipping_method_id' => 1,
                'total' => 1599.98,
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'order_id' => 2,
                'user_id' => 2,
                'order_status_id' => 2,
                'shipping_method_id' => 2,
                'total' => 89.94,
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
