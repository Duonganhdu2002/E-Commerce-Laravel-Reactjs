<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Support\Facades\DB;
use App\Models\order_items;
use App\Models\User;
use Carbon\Carbon;
use Carbon\CarbonInterval;

class RevenueController extends Controller
{
    public function calculateRevenue(Request $request, $shopId)
    {

        $currentDate = Carbon::now()->toDateString(); // Lấy ngày hôm nay
        $yesterdayDate = Carbon::now()->subDay()->toDateString(); //Lấy ngày hôm qua 
        $lastWeekStartDate = Carbon::now()->startOfWeek()->subWeek()->toDateString(); // Lấy ngày đầu tiên của tuần trước
        $lastWeekEndDate = Carbon::now()->endOfWeek()->subWeek()->toDateString(); // Lấy ngày cuối cùng của tuần trước
        $lastMonth = Carbon::now()->subMonth(); // Lấy tháng trước
        $lastYear = Carbon::now()->subYear(); //Lấy năm trước


        // Tính tổng doanh thu theo ngày hiện tại
        $dailyRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereDate('order.created_at', $currentDate)
            ->select(DB::raw('DATE(order.created_at) AS date'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy('date')
            ->orderBy('date', 'DESC')
            ->get();

        // Tính tổng doanh thu theo ngày hiện tại - 1
        $yesterdayRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereDate('order.created_at', $yesterdayDate)
            ->select(DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->first();

        // Tính tổng doanh thu theo tuần hiện tại
        $weeklyRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->where('order.created_at', '>=', Carbon::now()->startOfWeek())
            ->where('order.created_at', '<=', Carbon::now()->endOfWeek())
            ->select(DB::raw('YEAR(order.created_at) AS year'), DB::raw('WEEK(order.created_at) AS week'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy('year', 'week')
            ->orderBy('year', 'DESC')
            ->orderBy('week', 'DESC')
            ->get();

        // Truy vấn dữ liệu doanh số của tuần hiện tại - 1
        $lastWeekRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereBetween('order.created_at', [$lastWeekStartDate, $lastWeekEndDate])
            ->select(DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->first();

        // Tính tổng doanh thu theo tháng hiện tại
        $monthlyRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereMonth('order.created_at', Carbon::now()->month)
            ->whereYear('order.created_at', Carbon::now()->year)
            ->select(DB::raw('YEAR(order.created_at) AS year'), DB::raw('MONTH(order.created_at) AS month'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy('year', 'month')
            ->orderBy('year', 'DESC')
            ->orderBy('month', 'DESC')
            ->get();

        // Truy vấn dữ liệu doanh số của tháng hiện tại - 1
        $lastMonthRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereMonth('order.created_at', $lastMonth->month)
            ->whereYear('order.created_at', $lastMonth->year)
            ->select(DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->first();

        // Tính tổng doanh thu theo năm
        $annualRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereYear('order.created_at', Carbon::now()->year)
            ->select(DB::raw('YEAR(order.created_at) AS year'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy('year')
            ->orderBy('year', 'DESC')
            ->get();

        

        // Truy vấn dữ liệu doanh số của năm trước
        $lastYearRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereYear('order.created_at', $lastYear->year)
            ->select(DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->first();

        // Tính tỉ lệ so với ngày hôm qua
        $yesterdayRevenue = $yesterdayRevenue->total_revenue ?? 0;
        $todayRevenue = isset ($dailyRevenue[0]) ? $dailyRevenue[0]->total_revenue : 0;
        $revenueChangeYesterday = ($yesterdayRevenue != 0) ? (($todayRevenue - $yesterdayRevenue) / $yesterdayRevenue) * 100 : 0;

        // Tính tỉ lệ so với tuần trước
        $lastWeekRevenue = $lastWeekRevenue->total_revenue ?? 0;
        $thisWeekRevenue = isset ($weeklyRevenue[0]) ? $weeklyRevenue[0]->total_revenue : 0;
        $revenueChangeLastWeek = ($lastWeekRevenue != 0) ? (($thisWeekRevenue - $lastWeekRevenue) / $lastWeekRevenue) * 100 : 0;

        // Tính tỉ lệ so với tháng trước
        $lastMonthRevenue = $lastMonthRevenue->total_revenue ?? 0;
        $thisMonthRevenue = isset ($monthlyRevenue[0]) ? $monthlyRevenue[0]->total_revenue : 0;
        $revenueChangeLastMonth = ($lastMonthRevenue != 0) ? (($thisMonthRevenue - $lastMonthRevenue) / $lastMonthRevenue) * 100 : 0;

        // Tính tỉ lệ so với năm trước
        $lastYearRevenue = $lastYearRevenue->total_revenue ?? 0;
        $thisYearRevenue = isset ($annualRevenue[0]) ? $annualRevenue[0]->total_revenue : 0;
        $revenueChangeLastYear = ($lastYearRevenue != 0) ? (($thisYearRevenue - $lastYearRevenue) / $lastYearRevenue) * 100 : 0;

        foreach ($dailyRevenue as $item) {
            $item->total_revenue = (float) $item->total_revenue;
        }

        foreach ($weeklyRevenue as $item) {
            $item->total_revenue = (float) $item->total_revenue;
        }

        foreach ($monthlyRevenue as $item) {
            $item->total_revenue = (float) $item->total_revenue;
        }

        foreach ($annualRevenue as $item) {
            $item->total_revenue = (float) $item->total_revenue;
        }


        // Trả về kết quả
        return response()->json([
            'dailyRevenue' => $dailyRevenue,
            'weeklyRevenue' => $weeklyRevenue,
            'monthlyRevenue' => $monthlyRevenue,
            'annualRevenue' => $annualRevenue,
            'revenueChangeYesterday' => $revenueChangeYesterday,
            'revenueChangeLastWeek' => $revenueChangeLastWeek,
            'revenueChangeLastMonth' => $revenueChangeLastMonth,
            'revenueChangeLastYear' => $revenueChangeLastYear,
           
        ]);
    }



    public function calculateProductSold(Request $request, $shopId)
    {
        $currentDate = now(); // Lấy ngày hiện tại
        $yesterday = now()->subDay(); //Lấy ngày hôm qua
        $lastWeek = now()->subWeek(); //Lấy tuần trước
        $lastMonth = now()->subMonths(); //Lấy tháng trước
        $lastYear = now()->subYear(); //Lấy năm trước

        // Tính tổng số sản phẩm bán ra theo ngày từ ngày hiện tại
        $dailyProductSold = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereDate('order.created_at', $currentDate)
            ->select(DB::raw('DATE(order.created_at) AS date'), DB::raw('SUM(order_items.quantity) AS total_products_sold'))
            ->groupBy(DB::raw('DATE(order.created_at)'))
            ->orderBy('date', 'DESC')
            ->get();

        // Tính tổng số sản phẩm bán ra của ngày hôm qua
        $yesterdayProductSold = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereDate('order.created_at', $yesterday)
            ->select(DB::raw('SUM(order_items.quantity) AS total_products_sold'))
            ->first();


        // Tính tổng số sản phẩm bán ra theo tuần từ ngày hiện tại
        $weeklyProductSold = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereRaw('YEARWEEK(order.created_at) = YEARWEEK(?)', [$currentDate])
            ->select(DB::raw('YEAR(order.created_at) AS year'), DB::raw('WEEK(order.created_at) AS week'), DB::raw('SUM(order_items.quantity) AS total_products_sold'))
            ->groupBy('year', 'week')
            ->orderBy('year', 'DESC')
            ->orderBy('week', 'DESC')
            ->get();

        // Tính tổng số sản phẩm bán ra của tuần trước
        $lastWeekProductSold = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereRaw('YEARWEEK(order.created_at) = YEARWEEK(?)', [$lastWeek])
            ->select(DB::raw('SUM(order_items.quantity) AS total_products_sold'))
            ->first();


        // Tính tổng số sản phẩm bán ra theo tháng từ ngày hiện tại
        $monthlyProductSold = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereYear('order.created_at', $currentDate->year)
            ->whereMonth('order.created_at', $currentDate->month)
            ->select(DB::raw('YEAR(order.created_at) AS year'), DB::raw('MONTH(order.created_at) AS month'), DB::raw('SUM(order_items.quantity) AS total_products_sold'))
            ->groupBy('year', 'month')
            ->orderBy('year', 'DESC')
            ->orderBy('month', 'DESC')
            ->get();

        // Tính tổng số sản phẩm bán ra theo tháng trước
        $lastMonthProductSold = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereYear('order.created_at', $lastMonth->year)
            ->whereMonth('order.created_at', $lastMonth->month)
            ->select(DB::raw('SUM(order_items.quantity) AS total_products_sold'))
            ->first();

        // Tính tổng số sản phẩm bán ra theo năm từ ngày hiện tại
        $annualProductSold = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereYear('order.created_at', $currentDate->year)
            ->select(DB::raw('YEAR(order.created_at) AS year'), DB::raw('SUM(order_items.quantity) AS total_products_sold'))
            ->groupBy('year')
            ->orderBy('year', 'DESC')
            ->get();


        $lastYearProductSold = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->whereYear('order.created_at', $lastYear->year)
            ->select(DB::raw('SUM(order_items.quantity) AS total_products_sold'))
            ->first();

        // Tính tỉ lệ so với ngày hôm qua
        $yesterdayProductSold = $yesterdayProductSold->total_products_sold ?? 0;
        $todayProductSold = isset ($dailyProductSold[0]) ? $dailyProductSold[0]->total_products_sold : 0;
        $productSoldChangeYesterday = ($yesterdayProductSold != 0) ? (($todayProductSold - $yesterdayProductSold) / $yesterdayProductSold) * 100 : 0;

        // Tính tỉ lệ so với tuần trước
        $lastWeekProductSold = $lastWeekProductSold->total_products_sold ?? 0;
        $thisWeekProductSold = isset ($weeklyProductSold[0]) ? $weeklyProductSold[0]->total_products_sold : 0;
        $productSoldChangeLastWeek = ($lastWeekProductSold != 0) ? (($thisWeekProductSold - $lastWeekProductSold) / $lastWeekProductSold) * 100 : 0;

        // Tính tỉ lệ so với tháng trước
        $lastMonthProductSold = $lastMonthProductSold->total_products_sold ?? 0;
        $thisMonthProductSold = isset ($monthlyProductSold[0]) ? $monthlyProductSold[0]->total_products_sold : 0;
        $productSoldChangeLastMonth = ($lastMonthProductSold != 0) ? (($thisMonthProductSold - $lastMonthProductSold) / $lastMonthProductSold) * 100 : 0;

        // Tính tỉ lệ so với năm trước
        $lastYearProductSold = $lastYearProductSold->total_products_sold ?? 0;
        $thisYearProductSold = isset ($annualProductSold[0]) ? $annualProductSold[0]->total_products_sold : 0;
        $productSoldChangeLastYear = ($lastYearProductSold != 0) ? (($thisYearProductSold - $lastYearProductSold) / $lastYearProductSold) * 100 : 0;

        
        // Trả về kết quả
        return response()->json([
            'dailyProductSold' => $dailyProductSold,
            'weeklyProductSold' => $weeklyProductSold,
            'monthlyProductSold' => $monthlyProductSold,
            'annualProductSold' => $annualProductSold,
            'productSoldChangeYesterday' => $productSoldChangeYesterday,
            'productSoldChangeLastWeek' => $productSoldChangeLastWeek,
            'productSoldChangeLastMonth' => $productSoldChangeLastMonth,
            'productSoldChangeLastYear' => $productSoldChangeLastYear
        ]);
    }


}