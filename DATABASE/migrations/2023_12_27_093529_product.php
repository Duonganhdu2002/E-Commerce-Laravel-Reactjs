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
        Schema::create('product', function (Blueprint $table) {
            $table->bigIncrements('product_id'); 
            $table->string('name', 50)->nullable();
            $table->text('description')->nullable();
            $table->unsignedBigInteger('color_id');
            $table->unsignedBigInteger('size_id');
            $table->integer('created_by_user_id')->nullable();
            $table->unsignedBigInteger('product_brand_id');
            $table->unsignedBigInteger('product_category_id');
            $table->decimal('price', 11, 2)->nullable();
            $table->integer('stock')->nullable();
            $table->unsignedBigInteger('discount_id');
            $table->timestamps();
            $table->softDeletes();

            // Khóa ngoại discount_id
            $table->foreign('discount_id')->references('discount_id')->on('discount')->onDelete('cascade')->onUpdate('cascade');

            // Khóa ngoại color_id
            $table->foreign('color_id')->references('color_id')->on('product_color')->onDelete('cascade')->onUpdate('cascade');

            // Khóa ngoại size_id
            $table->foreign('size_id')->references('size_id')->on('product_size')->onDelete('cascade')->onUpdate('cascade');

            // Khóa ngoại product_category_id
            $table->foreign('product_brand_id')->references('product_brand_id')->on('product_brand')->onDelete('cascade')->onUpdate('cascade');

            $table->foreign('product_category_id')->references('product_category_id')->on('product_category')->onDelete('cascade')->onUpdate('cascade');

            // Các cài đặt khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể của bạn
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product');
    }
};
