<?php

namespace App\Http\Controllers;

use App\Models\Provinces;
use App\Models\Districts;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProvincesController extends Controller
{
    public function index()
    {
        $provinces = Provinces::all();
        return response()->json($provinces);
    }
    public function getDistricts($provinceId)
    {
        $districts = Districts::where('province_id', $provinceId)->get();
        return response()->json($districts);
    }
}
