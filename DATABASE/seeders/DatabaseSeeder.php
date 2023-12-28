<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Carbon\Carbon;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            account_type::class,
            discount::class,
            order_status::class,
            payment_type::class,
            field::class,
            product_brand::class,
            product_category::class,
            product_color::class,
            product_size::class,
            shipping_method::class,
            user::class,
            user_address::class,
            user_payment::class,
            user_review::class,
            order::class,
            product::class,
            order_items::class,
            product_image::class,
            shopping_cart::class,
            transaction::class,
            product_review::class,
        ]);
    }
}
