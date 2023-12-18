<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;


class payment_type extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng payment_type
        DB::table('payment_type')->insert([
            [
                'payment_type_id' => 1,
                'payment_type_name' => 'Credit Card',
            ],
            [
                'payment_type_id' => 2,
                'payment_type_name' => 'PayPal',
            ],
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
