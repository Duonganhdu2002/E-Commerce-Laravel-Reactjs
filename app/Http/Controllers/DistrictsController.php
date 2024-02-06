<?php

namespace App\Http\Controllers;

use App\Models\Districts;
use App\Models\Wards;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DistrictsController extends Controller
{
    public function getWards($districtId)
    {
        $wards = Wards::where('district_id', $districtId)->get();
        return response()->json($wards);
    }
}
