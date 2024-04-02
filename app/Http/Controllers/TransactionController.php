<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\TransactionResource ;
use App\Models\Transaction;

class TransactionController extends Controller
{ public function index($userId)
    {
      
        $transactions = Transaction::where('buyer_id', $userId)->orWhere('seller_id', $userId)->get();

        if ($transactions->isEmpty()) {
            return response()->json([
                'status' => false, 
                'message' => 'Không tìm thấy giao dịch cho người dùng này'], 404);
        }


        $arr = [
            'status' => true,
            'message' => 'Danh sách lịch sử giao dịch',
            'data' => TransactionResource::collection($transactions)
        ];

        return response()->json($arr, 200);
    }
}
