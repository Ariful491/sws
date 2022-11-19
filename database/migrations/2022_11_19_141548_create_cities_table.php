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
        Schema::create('cities', function (Blueprint $table) {
            $table->id();
            $table->string('city',50);
            $table->string('city_ascii',50);
            $table->string('state_id','5');
            $table->string('state_name',50);
            $table->integer('county_fips');
            $table->string('county_name',50);
            $table->decimal('lat',4);
            $table->decimal('lng',4);
            $table->bigInteger('population');
            $table->bigInteger('density');
            $table->enum('source',['polygon']);
            $table->enum('military',['FALSE','TRUE']);
            $table->enum('incorporated',['FALSE','TRUE']);
            $table->string('timezone',300);
            $table->integer('ranking');
            $table->string('zips',60)->nullable();
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
        Schema::dropIfExists('cities');
    }
};
