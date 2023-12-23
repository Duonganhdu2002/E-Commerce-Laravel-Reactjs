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
        Schema::create('order', function (Blueprint $table) {
            $table->bigIncrements('order_id'); 
            $table->unsignedBigInteger('user_id');
            $table->unsignedBigInteger('order_status_id');
            $table->unsignedBigInteger('shipping_method_id');
            $table->decimal('total', 11, 2)->nullable();
            $table->timestamps();

            // Khóa ngoại user_id
            $table->foreign('user_id')->references('user_id')->on('user')->onDelete('cascade');

            // Khóa ngoại order_status_id
            $table->foreign('order_status_id')->references('order_status_id')->on('order_status')->onDelete('cascade');

            // Khóa ngoại shipping_method_id
            $table->foreign('shipping_method_id')->references('shipping_method_id')->on('shipping_method')->onDelete('cascade');

            // Các cài đặt khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể của bạn
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('order');
    }
};
