<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class Order extends Controller
{
    public function index()
    {
        //
    }
    public function store(Request $request)
    {
        //
    }
    public function show(string $id)
    {
        //
    }
    public function update(Request $request, string $id)
    {
        //
    }
    public function destroy(string $id)
    {
        //
    }
    public function calculate($orderId){ 
        //tinh tong gia tri don hang
    }
    public function status($orderId, $orderStatusId){ 
        //trang thai don hang
    }
}
