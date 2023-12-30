<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\TransactionResource ;
use App\Models\Transaction;

class TransactionController extends Controller
{ public function index()
    {
      
        $t = Transaction::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => TransactionResource::collection($t)
        ];

        return response()->json($arr, 200);
    }
}
