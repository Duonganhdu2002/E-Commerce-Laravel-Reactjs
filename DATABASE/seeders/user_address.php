<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class user_address extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng user_address
        DB::table('user_address')->insert([
            [
                'user_address_id' => 1,
                'user_id' => 1,
                'number' => '123',
                'street' => 'Main Street',
                'commune' => 'Downtown',
                'district' => 'Cityville',
                'province' => 'State',
                'country' => 'Country',
                'postal_code' => '12345',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'user_address_id' => 2,
                'user_id' => 2,
                'number' => '456',
                'street' => 'Oak Avenue',
                'commune' => 'Suburb',
                'district' => 'Townsville',
                'province' => 'State',
                'country' => 'Country',
                'postal_code' => '67890',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            // Thêm các dòng dữ liệu khác nếu cần
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
