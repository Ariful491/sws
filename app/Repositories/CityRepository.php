<?php
namespace App\Repositories;
use App\Models\City;
use App\Repositories\Interfaces\CityRepositoryInterface;


class CityRepository implements CityRepositoryInterface
{

    public function getCity($data)
    {
        $products = City::orderBy('id','desc');
        /*if(isset($data['status']) && !empty($data['status'])){
            $products->where('status',$data['status']);
        }
        if(isset($data['price']) && !empty($data['price'])){
            $products->whereBetween('price',[0,$data['price']]);
        }*/
        return  $products->paginate(5);
    }

    public function store($data)
    {
        $file = $data['excel_file'];
        $destinationPath = 'uploads';
        $file->move($destinationPath,$file->getClientOriginalName());
        $data['success']='Successfully Saved!!';
        return $data;

    }
    public function delete($data)
    {

    }
}
