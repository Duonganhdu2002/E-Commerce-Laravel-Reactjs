<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('shipping_method', function (Blueprint $table) {
            $table->bigIncrements('shipping_method_id'); 
            $table->string('shipping_method_name', 20)->nullable();
            $table->decimal('shipping_method_price', 11, 2)->nullable();

        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('shipping_method');
    }
};
