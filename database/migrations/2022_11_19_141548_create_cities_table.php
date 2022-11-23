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
            $table->string('city',50)->nullable();
            $table->string('city_ascii',50)->nullable();
            $table->string('state_id')->nullable();
            $table->string('state_name',50)->nullable();
            $table->string('county_fips')->nullable();
            $table->string('county_name',50)->nullable();
            $table->string('lat')->nullable();
            $table->string('lng')->nullable();
            $table->string('population')->nullable();
            $table->string('density')->nullable();
            $table->string('source')->nullable();
            $table->string('military')->nullable();
            $table->string('incorporated')->nullable();
            $table->string('timezone',300)->nullable();
            $table->string('ranking')->nullable();
            $table->string('zips',600)->nullable();
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
