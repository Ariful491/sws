<?php

namespace App\Http\Controllers;

use App\Http\Requests\CityRequest;
use App\Models\City;
use App\Repositories\Interfaces\CityRepositoryInterface;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class CityController extends Controller
{

    /**
     * @var CityRepositoryInterface
     */
    protected CityRepositoryInterface $cityRepo;

    /**
     * ProductController constructor.
     * @param CityRepositoryInterface $cityRepo
     */
    public function __construct(CityRepositoryInterface $cityRepo)
    {

        $this->cityRepo = $cityRepo;
    }

    /**
     * @param Request $request
     * @return Response
     */

    public function index(Request $request): Response
    {
        $data = $request->all();
        $data =  $this->cityRepo->getCity($data);
        return Inertia::render('City/Index')
            ->with('items',$data);;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function store(CityRequest $request)
    {
        $data = $request->all();
        $data =  $this->cityRepo->store($data);
        return response()->json($data);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function show(City $city)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function edit(City $city)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, City $city)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\City  $city
     * @return \Illuminate\Http\Response
     */
    public function destroy(City $city)
    {
        //
    }
}
