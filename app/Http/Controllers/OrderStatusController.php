<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\order_status;
use App\Models\order;
use App\Http\Resources\OrderStatusResource;
class OrderStatusController extends Controller
{
    public function index()
    {
        $orderS = order_status::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => OrderStatusResource::collection($orderS)
        ];

        return response()->json($arr, 200);
    }
    public function updateStatus(Request $request, $orderId)
    {
      
        $order = order::findOrFail($orderId);
        
       
        $order->order_status_id += 1;
        $order->save();

        return response()->json(['success' => true, 'message' => 'Order status updated successfully']);
    }
}
