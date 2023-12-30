<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Carbon\Carbon;
use Illuminate\Support\Str;
class User extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng user
        DB::table('users')->insert([
            [
                'type_account_id' => 1,
                'username' => 'john_doe',
                'email' => 'john@example.com',
                'email_verified_at' => Carbon::now(),
                'password' => Hash::make('hashed_password'),
                'remember_token' => '',
                'avt_image' => 'avatar.jpg',
                'first_name' => 'John',
                'last_name' => 'Doe',
                'telephone' => '1234567890',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            [
                'type_account_id' => 2,
                'username' => 'jane_smith',
                'email' => 'jane_smith@gmail.com',
                'email_verified_at' => Carbon::now(),
                'password' => Hash::make('hashed_password'),
                'remember_token' => '',
                'avt_image' => 'avatar.jpg',
                'first_name' => 'Jane',
                'last_name' => 'Smith',
                'telephone' => '9876543210',
                'created_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
                'updated_at'=>Carbon::now('Asia/Ho_Chi_Minh'),
            ],
            // Thêm các dòng dữ liệu khác nếu cần
        ]);

        // Thêm dữ liệu vào các bảng khác ở đây (nếu cần)
    }
}
