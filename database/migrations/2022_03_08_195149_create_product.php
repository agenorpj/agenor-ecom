<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('slug')->unique();
            $table->string('category');
            $table->string('image');
            $table->boolean('isFeatured'); 
            $table->string('featuredImage');
            $table->decimal('price', $precision = 6, $scale = 2);
            $table->string('brand');
            $table->decimal('rating', $precision = 2, $scale = 1)->default(0);
            $table->integer('numReviews')->default(0);
            $table->integer('countInStock')->default(0);
            $table->string('description');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
