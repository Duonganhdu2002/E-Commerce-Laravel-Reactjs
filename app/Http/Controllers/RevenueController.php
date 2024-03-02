<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use App\Models\order_items;
use App\Models\User;

class RevenueController extends Controller
{
    public function calculateShopRevenue($shopId, $type, $date)
{
    try {
        $shop = User::with('products.orders')->findOrFail($shopId);

        $endDate = $date;
        $startDate = null;

        switch ($type) {
            case 'day':
                $startDate = now()->subDay()->format('Y-m-d H:i:s');
                break;
            case 'week':
                $startDate = now()->subWeek()->format('Y-m-d H:i:s');
                break;
            case 'month':
                $startDate = now()->subMonth()->format('Y-m-d H:i:s');
                break;
            case 'year':
                $startDate = now()->subYear()->format('Y-m-d H:i:s');
                break;
            default:
                return response()->json(['error' => 'Invalid type'], 400);
        }

        $revenue = $shop->products
            ->flatMap(function ($product) use ($startDate, $endDate) {
                return $product->orders
                    ->where('created_at', '>=', $startDate)
                    ->where('created_at', '<=', $endDate)
                    ->pluck('order_items.quantity', 'product.price')
                    ->map(function ($quantity, $price) {
                        return (object)['quantity' => $quantity, 'price' => $price];
                    });
            })
            ->sum(function ($item) {
                return ($item->quantity !== null && $item->price !== null) 
                ? $item->quantity * $item->price 
                : 0;
            });
            $previousRevenue = $shop->products
            ->flatMap(function ($product) use ($startDate, $endDate, $type) {
                $timeUnit = 'sub' . ucfirst($type);
        
                return $product->orders
                    ->where('created_at', '>=', now()->{$timeUnit}())
                    ->where('created_at', '<=', $endDate)
                    ->pluck('pivot.quantity', 'product.price')
                    ->map(function ($quantity, $price) {
                        return (object)['quantity' => $quantity, 'price' => $price];
                    });
            })
            ->sum(function ($item) {
                return ($item->quantity !== null && $item->price !== null) 
                ? $item->quantity * $item->price 
                : 0;
                
            });
        
            $growthRate = $previousRevenue !== 0 ? ($revenue - $previousRevenue) / $previousRevenue * 100 : 0;

        return response()->json([
            'shop_id' => $shopId,
            'type' => $type,
            'revenue' => $revenue,
            'previous_revenue' => $previousRevenue,
            'growth_rate' => $growthRate,
        ], 200);
    } catch (ModelNotFoundException $e) {
        return response()->json([
            'status' => false,
            'message' => 'Không tìm thấy cửa hàng.',
            'data' => null,
        ], 404);
    }
}


}

