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
        Schema::create('product_image', function (Blueprint $table) {
            $table->bigIncrements('image_id'); 
            $table->unsignedBigInteger('product_id');
            $table->string('image_url', 50)->nullable();

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
        Schema::dropIfExists('product_image');
    }
};
