<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class transaction extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng transaction
        DB::table('transaction')->insert([
            [
                'transaction_id' => 1,
                'buyer_id' => 2,
                'seller_id' => 1,
                'order_id' => 1,
                'payment_id' => 1,
                'transaction_status' => 'Completed',
                'total_amount' => 1599.98,
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'transaction_id' => 2,
                'buyer_id' => 1,
                'seller_id' => 2,
                'order_id' => 2,
                'payment_id' => 2,
                'transaction_status' => 'Completed',
                'total_amount' => 89.94,
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            // Thêm các dòng dữ liệu khác nếu cần
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
