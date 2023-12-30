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
    public function run()
    {
        DB::table('field')->insert([
            [
                'field_id' => 1,
                'field_name' => 'Smart phone',
                'icon_field' => 'icon_field.jpg',
            ],
            [
                'field_id' => 2,
                'field_name' => 'Electronic device',
                'icon_field' => 'icon_field.jpg',
            ],
            [
                'field_id' => 3,
                'field_name' => 'Computers and laptops',
                'icon_field' => 'icon_field.jpg',
            ],
            [
                'field_id' => 4,
                'field_name' => 'Watch',
                'icon_field' => 'icon_field.jpg',
            ],
            [
                'field_id' => 5,
                'field_name' => 'Book',
                'icon_field' => 'icon_field.jpg',
            ],
            [
                'field_id' => 6,
                'field_name' => 'Toy',
                'icon_field' => 'icon_field.jpg',
            ],
            [
                'field_id' => 7,
                'field_name' => 'Furniture',
                'icon_field' => 'icon_field.jpg',
            ],
            [
                'field_id' => 8,
                'field_name' => 'Vehicle',
                'icon_field' => 'icon_field.jpg',
            ],
            [
                'field_id' => 9,
                'field_name' => 'Jewelry',
                'icon_field' => 'icon_field.jpg',
            ],
            [
                'field_id' => 10,
                'field_name' => 'Houseware',
                'icon_field' => 'icon_field.jpg',
            ],
        ]);
    }
}
