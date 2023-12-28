<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class user_payment extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng user_payment
        DB::table('user_payment')->insert([
            [
                'payment_id' => 1,
                'user_id' => 1,
                'payment_type_id' => 1,
                'card_name_hash' => 'hashed_card_name',
                'card_number_hash' => 'hashed_card_number',
                'expiration_date' => '2025-12-31',
                'cvv' => 'hashed_cvv',
                'paypal_email' => null,
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'payment_id' => 2,
                'user_id' => 2,
                'payment_type_id' => 2,
                'card_name_hash' => 'hashed_card_name',
                'card_number_hash' => 'hashed_card_name',
                'expiration_date' => '2025-12-31',
                'cvv' => 'hashed_cvv',
                'paypal_email' => 'jane.smith@example.com',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            // Thêm các dòng dữ liệu khác nếu cần
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
