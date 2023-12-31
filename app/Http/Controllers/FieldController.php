<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\FieldResource ;
use App\Models\Field;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class FieldController extends Controller 
{
   
    public function index()
    {
       
        $f = Field::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách field',
            'data' => FieldResource::collection($f)
        ];

        return response()->json($arr, 200);
    }
}
