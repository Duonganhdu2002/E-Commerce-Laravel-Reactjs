<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class discount extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng discount
        DB::table('discount')->insert([
            [
                'discount_id' => 1,
                'name' => 'Summer Sale',
                'description' => 'Discount for summer season',
                'discount_percent' => 15.00,
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'deleted_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'discount_id' => 2,
                'name' => 'Clearance',
                'description' => 'Year-end clearance',
                'discount_percent' => 20.00,
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'deleted_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
