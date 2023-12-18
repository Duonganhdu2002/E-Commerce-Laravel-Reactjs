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
        Schema::create('user_payment', function (Blueprint $table) {
            $table->integer('payment_id');
            $table->integer('user_id');
            $table->integer('payment_type_id');
            $table->string('card_name_hash', 130)->nullable();
            $table->string('card_number_hash', 130)->nullable();
            $table->date('expiration_date')->nullable();
            $table->string('cvv', 130)->nullable();
            $table->string('paypal_email', 100)->nullable();
            $table->timestamps();

            // Chỉ định cột là khóa chính
            $table->primary('payment_id');

            // Khóa ngoại user_id
            $table->foreign('user_id')->references('user_id')->on('user')->onDelete('cascade');

            // Khóa ngoại payment_type_id
            $table->foreign('payment_type_id')->references('payment_type_id')->on('payment_type')->onDelete('cascade');

            // Các cài đặt khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể của bạn
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user_payment');
    }
};
