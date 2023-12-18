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
        Schema::create('user_review', function (Blueprint $table) {
            $table->integer('user_review_id');
            $table->integer('reviewer_id');
            $table->integer('reviewee_id');
            $table->integer('rating')->nullable();
            $table->string('comment', 150)->nullable();
            $table->timestamps();

            // Chỉ định cột là khóa chính
            $table->primary('user_review_id');

            // Khóa ngoại reviewer_id
            $table->foreign('reviewer_id')->references('user_id')->on('user')->onDelete('cascade');

            // Khóa ngoại reviewee_id
            $table->foreign('reviewee_id')->references('user_id')->on('user')->onDelete('cascade');

            // Các cài đặt khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể của bạn
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Schema::dropIfExists('user_review');
    }
};
