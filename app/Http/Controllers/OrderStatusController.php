<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\order_status as OrderS;
use App\Http\Resources\OrderStatusResource;
class OrderStatusController extends Controller
{
    public function index()
    {
        $orderS = OrderS::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => OrderStatusResource::collection($orderS)
        ];

        return response()->json($arr, 200);
    }
    public function update(Request $request, string $id)
    {
        //
    }
}
