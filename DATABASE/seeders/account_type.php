<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

use Carbon\Carbon;

class account_type extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Thêm dữ liệu vào bảng account_type
        DB::table('account_type')->insert([
            ['type_account_id' => 1, 'type_account_name' => 'Regular'],
            ['type_account_id' => 2, 'type_account_name' => 'Premium'],
        ]);
    }
}
