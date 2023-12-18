<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class order_status extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng order_status
        DB::table('order_status')->insert([
            [
                'order_status_id' => 1,
                'order_status_name' => 'Processing',
            ],
            [
                'order_status_id' => 2,
                'order_status_name' => 'Shipped',
            ],
            [
                'order_status_id' => 3,
                'order_status_name' => 'Delivered',
            ],
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
