<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\OrderResource ;
use App\Models\order as OrderM;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class OrderController extends Controller
{
    public function index()
    {
        $order = OrderM::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => OrderResource::collection($order)
        ];

        return response()->json($arr, 200);
    }
    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
        ]);
        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
        $order = OrderM::create($input);
        $arr = [
            'status' => true,
            'message' => "đã lưu thành công",
            'data' => new OrderResource($order)
        ];
        return response()->json($arr, 201);
    }
    
    public function update(Request $request, string $id)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required',
            
            
        ]);
    
        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }
    
        $order = OrderM::find($id);
    
        if (!$order) {
            $arr = [
                'status' => false,
                'message' => 'không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }
    
        $order->update($input);
    
        $arr = [
            'status' => true,
            'message' => 'cập nhật thành công',
            'data' => new OrderResource($order)
        ];
    
        return response()->json($arr, 200);
    }
    public function destroy(string $id)
    {
        try {
            $order = OrderM::findOrFail($id);
            $order->delete();

            $arr = [
                'status' => true,
                'message' => 'đã được xóa thành công',
                'data' => null
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'success' => false,
                'message' => ' không tồn tại',
                'data' => null
            ];

            return response()->json($arr, 404);
        }
    }
    public function total($id) //chua test
    {
        try {
            $order = OrderM::findOrFail($id);

            $products = $order->products;

            $totalValue = $this->calculateTotal($products);

            $arr = [
                'status' => true,
                'message' => ' tổng giá trị đơn hàng ',
                'data' => ['total' => $totalValue],
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'status' => false,
                'message' => 'Đơn hàng không tồn tại',
                'data' => null,
            ];

            return response()->json($arr, 404);
        }
    }

    private function calculateTotal($products)
    {
        $totalValue = 0;

        // Lặp qua từng sản phẩm trong đơn hàng
        foreach ($products as $product) {
            // Tính giá trị sản phẩm và cộng vào tổng giá trị đơn hàng
            $totalValue += floatval($product->price) * $product->quantity;
        }

        return number_format($totalValue, 2, '.', ''); // Làm tròn tổng giá trị đến 2 chữ số sau dấu thập phân
    }
}
