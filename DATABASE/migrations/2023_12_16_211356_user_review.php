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
            $table->bigIncrements('user_review_id'); 
            $table->unsignedBigInteger('reviewer_id');
            $table->unsignedBigInteger('reviewee_id');
            $table->integer('rating')->nullable();
            $table->string('comment', 150)->nullable();
            $table->timestamps();

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
