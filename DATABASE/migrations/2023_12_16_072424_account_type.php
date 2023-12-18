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
        Schema::create('account_type', function (Blueprint $table) {
            $table->integer('type_account_id');
            $table->string('type_account_name', 255)->nullable();
            
            // Chỉ định cột là khóa chính
            $table->primary('type_account_id');
            
            // Đặt auto-increment cho cột type_account_id (nếu bạn muốn)
            // $table->increments('type_account_id');

            // Đặt giới hạn độ dài cho trường type_account_name (nếu bạn muốn)
            // $table->string('type_account_name', 255);

            // Các cài đặt khác có thể được thêm vào tùy thuộc vào yêu cầu cụ thể của bạn

            // Đặt cấu trúc khóa nếu cần
            // $table->unique('type_account_name');
            
            // Hoặc sử dụng foreign key nếu cần
            // $table->foreign('type_account_id')->references('id')->on('other_table')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('account_type');
    }
};
