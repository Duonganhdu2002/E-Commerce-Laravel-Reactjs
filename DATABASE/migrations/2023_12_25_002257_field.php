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
        Schema::create('field', function (Blueprint $table) {
            $table->bigIncrements('field_id');
            $table->string('field_name', 255)->nullable();
            $table->unsignedBigInteger('product_category_id');

        });
    }


    

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('field');
    }
};
