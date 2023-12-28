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
        Schema::create('transaction', function (Blueprint $table) {
            $table->bigIncrements('transaction_id'); 
            $table->unsignedBigInteger('buyer_id');
            $table->unsignedBigInteger('seller_id');
            $table->unsignedBigInteger('order_id');
            $table->unsignedBigInteger('payment_id');
            $table->string('transaction_status', 20)->nullable();
            $table->decimal('total_amount', 11, 2)->nullable();
            $table->timestamps();


            // Khóa ngoại buyer_id
            $table->foreign('buyer_id')->references('user_id')->on('user')->onDelete('cascade')->onUpdate('cascade');

            // Khóa ngoại seller_id
            $table->foreign('seller_id')->references('user_id')->on('user')->onDelete('cascade')->onUpdate('cascade');

            // Khóa ngoại order_id
            $table->foreign('order_id')->references('order_id')->on('order')->onDelete('cascade')->onUpdate('cascade');

            // Khóa ngoại payment_id
            $table->foreign('payment_id')->references('payment_id')->on('user_payment')->onDelete('cascade')->onUpdate('cascade');

            // Các cài đặt khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể của bạn
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transaction');
    }
};
