<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Order_Items as OrderItems;
use App\Http\Resources\OrderItemsResource;

class OderItemsController extends Controller
{
    public function getOrderItems()
    {
        // Lấy danh sách order_items kèm theo thông tin product và product_image
        $orderItems = OrderItems::with(['product' => function ($query) {
            $query->with('images');
        }])->get();

        return view('order_items.index', compact('orderItems'));
    }
}
