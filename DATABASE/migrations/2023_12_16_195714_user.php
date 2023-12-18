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
        Schema::create('user', function (Blueprint $table) {
            $table->integer('user_id');
            $table->integer('type_account_id');
            $table->string('username', 50)->nullable();
            $table->string('password', 130)->nullable();
            $table->string('avt_image', 50)->nullable();
            $table->string('first_name', 20)->nullable();
            $table->string('last_name', 20)->nullable();
            $table->string('telephone', 11)->nullable();
            $table->timestamps();

            // Chỉ định cột là khóa chính
            $table->primary('user_id');

            // Khóa ngoại type_account_id
            $table->foreign('type_account_id')->references('type_account_id')->on('account_type')->onDelete('cascade');

            // Các cài đặt khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể của bạn
        });

        // Schema::table('user_address', function (Blueprint $table) {
        //     // Khóa ngoại user_id
        //     $table->foreign('user_id')->references('user_id')->on('user')->onDelete('cascade');
        // });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
        // Schema::table('user_address', function (Blueprint $table) {
        //     $table->dropForeign(['user_id']);
        // });
    }
};
