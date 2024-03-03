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
    public function calculateRevenue(Request $request, $shopId)
    {
        // Tính tổng doanh thu theo ngày
        $dailyRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->select(DB::raw('DATE(order.created_at) AS date'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy(DB::raw('DATE(order.created_at)'))
            ->orderBy(DB::raw('DATE(order.created_at)'), 'DESC')
            ->get();

        // Tính tổng doanh thu theo tuần
        $weeklyRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->select(DB::raw('YEARWEEK(order.created_at) AS week'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy(DB::raw('YEARWEEK(order.created_at)'))
            ->orderBy(DB::raw('YEARWEEK(order.created_at)'), 'DESC')
            ->get();

        // Tính tổng doanh thu theo tháng
        $monthlyRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->select(DB::raw('YEAR(order.created_at) AS year'), DB::raw('MONTH(order.created_at) AS month'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy(DB::raw('YEAR(order.created_at)'), DB::raw('MONTH(order.created_at)'))
            ->orderBy(DB::raw('YEAR(order.created_at)'), 'DESC')
            ->orderBy(DB::raw('MONTH(order.created_at)'), 'DESC')
            ->get();

        // Tính tổng doanh thu theo năm
        $annualRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->select(DB::raw('YEAR(order.created_at) AS year'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy(DB::raw('YEAR(order.created_at)'))
            ->orderBy(DB::raw('YEAR(order.created_at)'), 'DESC')
            ->get();

        // Tính tỉ lệ so với thời gian trước
        $revenueRatios = [];


        // Tính toán doanh thu trước và hiện tại cho mỗi khoảng thời gian và tính tỉ lệ trực tiếp
        foreach (['DAY', 'WEEK', 'MONTH', 'YEAR'] as $interval) {
            $previousRevenue = DB::table('order_items')
                ->join('order', 'order_items.order_id', '=', 'order.order_id')
                ->where('order.shop_id', $shopId)
                ->whereDate('order.created_at', '=', DB::raw('DATE(DATE_SUB(NOW(), INTERVAL 1 ' . $interval . '))'))
                ->select(DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
                ->value('total_revenue');

            $currentRevenue = DB::table('order_items')
                ->join('order', 'order_items.order_id', '=', 'order.order_id')
                ->where('order.shop_id', $shopId)
                ->whereDate('order.created_at', '=', DB::raw('DATE(NOW())'))
                ->select(DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
                ->value('total_revenue');

            if ($previousRevenue !== null && $currentRevenue !== null && $previousRevenue > 0) {
                // Chuyển đổi kết quả tỉ lệ sang phần trăm
                $revenueRatios[$interval] = (($currentRevenue - $previousRevenue) / $previousRevenue) * 100;
            } else {
                $revenueRatios[$interval] = null;
            }
        }

        return response()->json([
            'daily_revenue' => $dailyRevenue,
            'weekly_revenue' => $weeklyRevenue,
            'monthly_revenue' => $monthlyRevenue,
            'annual_revenue' => $annualRevenue,
            'revenue_ratios' => $revenueRatios,
        ]);
    }













































    //     public function calculateShopRevenue($shopId, $type, $date)
// {
//     try {
//         $shop = User::with('products.orders')->findOrFail($shopId);

    //         $endDate = $date;
//         $startDate = null;

    //         switch ($type) {
//             case 'day':
//                 $startDate = now()->subDay()->format('Y-m-d H:i:s');
//                 break;
//             case 'week':
//                 $startDate = now()->subWeek()->format('Y-m-d H:i:s');
//                 break;
//             case 'month':
//                 $startDate = now()->subMonth()->format('Y-m-d H:i:s');
//                 break;
//             case 'year':
//                 $startDate = now()->subYear()->format('Y-m-d H:i:s');
//                 break;
//             default:
//                 return response()->json(['error' => 'Invalid type'], 400);
//         }

    //         $revenue = $shop->products
//             ->flatMap(function ($product) use ($startDate, $endDate) {
//                 return $product->orders
//                     ->where('created_at', '>=', $startDate)
//                     ->where('created_at', '<=', $endDate)
//                     ->pluck('order_items.quantity', 'product.price')
//                     ->map(function ($quantity, $price) {
//                         return (object)['quantity' => $quantity, 'price' => $price];
//                     });
//             })
//             ->sum(function ($item) {
//                 return ($item->quantity !== null && $item->price !== null) 
//                 ? $item->quantity * $item->price 
//                 : 0;
//             });
//             $previousRevenue = $shop->products
//             ->flatMap(function ($product) use ($startDate, $endDate, $type) {
//                 $timeUnit = 'sub' . ucfirst($type);

    //                 return $product->orders
//                     ->where('created_at', '>=', now()->{$timeUnit}())
//                     ->where('created_at', '<=', $endDate)
//                     ->pluck('pivot.quantity', 'product.price')
//                     ->map(function ($quantity, $price) {
//                         return (object)['quantity' => $quantity, 'price' => $price];
//                     });
//             })
//             ->sum(function ($item) {
//                 return ($item->quantity !== null && $item->price !== null) 
//                 ? $item->quantity * $item->price 
//                 : 0;

    //             });

    //             $growthRate = $previousRevenue !== 0 ? ($revenue - $previousRevenue) / $previousRevenue * 100 : 0;

    //         return response()->json([
//             'shop_id' => $shopId,
//             'type' => $type,
//             'revenue' => $revenue,
//             'previous_revenue' => $previousRevenue,
//             'growth_rate' => $growthRate,
//         ], 200);
//     } catch (ModelNotFoundException $e) {
//         return response()->json([
//             'status' => false,
//             'message' => 'Không tìm thấy cửa hàng.',
//             'data' => null,
//         ], 404);
//     }
// }


}