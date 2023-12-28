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
            $table->bigIncrements('order_items_id'); 
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('product_id');
            $table->integer('quantity')->nullable();
            $table->timestamps();

            // Khóa ngoại order_id
            $table->foreign('order_id')->references('order_id')->on('order')->onDelete('cascade')->onUpdate('cascade');

            // Khóa ngoại product_id
            $table->foreign('product_id')->references('product_id')->on('product')->onDelete('cascade')->onUpdate('cascade');

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
