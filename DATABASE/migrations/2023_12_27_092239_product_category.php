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
            $table->bigIncrements('product_category_id');
            $table->unsignedBigInteger('field_id');
            $table->string('name', 50)->nullable();
            $table->text('description')->nullable();
            $table->string('icon', 50)->nullable();
            $table->timestamps();
            $table->softDeletes();

            $table->foreign('field_id')->references('field_id')->on('field')->onDelete('cascade')->onUpdate('cascade');


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
