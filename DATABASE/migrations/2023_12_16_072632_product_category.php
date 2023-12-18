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
        Schema::create('product_category', function (Blueprint $table) {
            $table->integer('product_category_id');
            $table->string('name', 50)->nullable();
            $table->text('description')->nullable();
            $table->string('icon', 50)->nullable();
            $table->timestamps();
            $table->softDeletes();

            // Chỉ định cột là khóa chính
            $table->primary('product_category_id');

            // Các cài đặt khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể của bạn
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('product_category');
    }
};
