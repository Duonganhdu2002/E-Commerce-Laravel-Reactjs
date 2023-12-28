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
            $table->bigIncrements('user_id');
            $table->unsignedBigInteger('type_account_id');
            $table->string('username', 50)->nullable();
            $table->string('email')->unique();
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password', 130)->nullable();
            $table->rememberToken();
            $table->string('avt_image', 50)->nullable();
            $table->string('first_name', 20)->nullable();
            $table->string('last_name', 20)->nullable();
            $table->string('telephone', 11)->nullable();
            $table->timestamps();


            // Khóa ngoại type_account_id
            $table->foreign('type_account_id')->references('type_account_id')->on('account_type')->onDelete('cascade')->onUpdate('cascade');


        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('user');
    }
};
