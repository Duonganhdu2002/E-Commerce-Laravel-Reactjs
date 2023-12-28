<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class field extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('field')->insert([
            [

                'field_id' => 1,
                'field_name' => 'Field 1',
                'product_category_id' => 1,
            ],
            [

                'field_id' => 2,
                'field_name' => 'Field 2',
                'product_category_id' => 2,
            ],
            [

                'field_id' => 3,
                'field_name' => 'Field 3',
                'product_category_id' => 3,
            ],
            // Thêm các dòng dữ liệu khác tương ứng
        ]);
    }
}
