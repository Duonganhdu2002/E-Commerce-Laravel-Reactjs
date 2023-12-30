<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order_Items as OrderItems;
use App\Http\Resources\OrderItemsResource;
class OderItemsController extends Controller
{
    public function index()
    {
       
        $items =  OrderItems::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => OrderItemsResource::collection($items)
        ];

        return response()->json($arr, 200);
    }
    
}
