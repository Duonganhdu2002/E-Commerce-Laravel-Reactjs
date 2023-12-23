<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PaymentType extends Controller
{
    public function index()
    {
        //ds chỉ các kiểu thẻ ngân hàng 
    }
    
    public function update(Request $request, string $id)
    {
        //chỉ admin được chỉnh sửa
    }
    public function destroy(string $id)
    {
        //chỉ admin được chỉnh sửa
    }
}
