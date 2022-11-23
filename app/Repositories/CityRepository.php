<?php
namespace App\Repositories;
use App\Imports\CityImport;
use App\Jobs\CityProcess;
use App\Models\City;
use App\Repositories\Interfaces\CityRepositoryInterface;
use Maatwebsite\Excel\Facades\Excel;


class CityRepository implements CityRepositoryInterface
{

    public function getCity($data)
    {
        $products = City::orderBy('id','asc');
        /*if(isset($data['status']) && !empty($data['status'])){
            $products->where('status',$data['status']);
        }
        if(isset($data['price']) && !empty($data['price'])){
            $products->whereBetween('price',[0,$data['price']]);
        }*/
        return  $products->paginate(25);
    }

    public function store($data)
    {
        $file = $data['excel_file'];
        $destinationPath = 'uploads';
        $file->move($destinationPath,'city.xlsx');
        CityProcess::dispatch();
        $data['success']='Successfully Saved!!';
        return $data;

    }
    public function delete($data)
    {

    }
}
