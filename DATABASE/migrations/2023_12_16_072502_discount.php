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
        Schema::create('discount', function (Blueprint $table) {
            $table->integer('discount_id');
            $table->string('name', 50)->nullable();
            $table->text('description')->nullable();
            $table->decimal('discount_percent', 11, 2)->nullable();
            $table->timestamps();
            $table->softDeletes();

            // Chỉ định cột là khóa chính
            $table->primary('discount_id');

            // Các cài đặt khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể của bạn
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('discount');
    }
};
