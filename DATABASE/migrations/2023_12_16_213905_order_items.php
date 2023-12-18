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
        Schema::create('order_items', function (Blueprint $table) {
            $table->integer('order_items_id');
            $table->integer('order_id');
            $table->integer('product_id');
            $table->integer('quantity')->nullable();
            $table->timestamps();

            // Chỉ định cột là khóa chính
            $table->primary('order_items_id');

            // Khóa ngoại order_id
            $table->foreign('order_id')->references('order_id')->on('order')->onDelete('cascade');

            // Khóa ngoại product_id
            $table->foreign('product_id')->references('product_id')->on('product')->onDelete('cascade');

            // Các cài đặt khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể của bạn
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order_items');
    }
};
