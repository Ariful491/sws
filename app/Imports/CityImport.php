<?php

namespace App\Imports;

use App\Models\City;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithStartRow;

class CityImport implements ToModel,WithStartRow
{
    /**
     * @return int
     */
    public function startRow(): int
    {
        return 2;
    }

    /**
    * @param array $row
    *
    * @return \Illuminate\Database\Eloquent\Model|null
    */
    public function model(array $row)
    {

        return new City([
                 'city'              => $row[0],
                 'city_ascii'        => $row[1],
                 'state_id'          => $row[2],
                 'state_name'        => $row[3],
                 'county_fips'       => $row[4],
                 'county_name'       => $row[5],
                 'lat'               => $row[6],
                 'lng'               => $row[7],
                 'population'        => $row[8],
                 'density'           => $row[9],
                 'source'            => $row[10],
                 'military'          => $row[11],
                 'incorporated'      => $row[12],
                 'timezone'          => $row[13],
                 'ranking'           => $row[14],
                 'zips'              => $row[15],

        ]);
    }
}
