<?php
namespace App\Repositories;
use App\Jobs\CityProcess;
use App\Models\City;
use App\Repositories\Interfaces\CityRepositoryInterface;

class CityRepository implements CityRepositoryInterface
{
    /**
     * @param $data
     * @return mixed
     */
    public function getCity($data): mixed
    {
        $products = City::orderBy('id','asc');
        if(isset($data['state']) && !empty($data['state'])){
            $products->where('state_name','LIKE',"%".$data['state']."%");
        }
        if(isset($data['county']) && !empty($data['county'])){
            $products->where('county_name','LIKE',"%".$data['county']."%");
        }
        return  $products->paginate(25);
    }

    /**
     * @param $data
     * @return mixed
     */
    public function store($data): mixed
    {
        $file = $data['excel_file'];
        $destinationPath = 'uploads';
        $file->move($destinationPath,'city.xlsx');
        CityProcess::dispatch();
        $data['success']='Successfully Saved!! Please give a while';
        return $data;

    }

}
