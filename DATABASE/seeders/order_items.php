<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;
class order_items extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('order_items')->insert([
            [
                'order_items_id' => 1,
                'order_id' => 1,
                'product_id' => 1,
                'quantity' => 2,
                'created_at' => now()->setTimezone('Asia/Ho_Chi_Minh'),
                'updated_at' => now()->setTimezone('Asia/Ho_Chi_Minh'),
            ],
            [
                'order_items_id' => 2,
                'order_id' => 2,
                'product_id' => 2,
                'quantity' => 3,
                'created_at' => now()->setTimezone('Asia/Ho_Chi_Minh'),
                'updated_at' => now()->setTimezone('Asia/Ho_Chi_Minh'),
            ],
            // Add 30 more order items with incrementing values
            // ...
        ]);
        
        // Generate 30 more order items with incrementing values
        
        for ($i = 3; $i <= 30; $i++) {
            DB::table('order_items')->insert([
                'order_items_id' => $i,
                'order_id' => 1, // Assuming order_id should also increment
                'product_id' => $i, // Assuming product_id should also increment
                'quantity' => rand(1, 5), // Adjust as needed
                'created_at' => now()->setTimezone('Asia/Ho_Chi_Minh'),
                'updated_at' => now()->setTimezone('Asia/Ho_Chi_Minh'),
            ]);
        }
    }
}
