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
        // Tính tổng doanh thu theo ngày
        $dailyRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->select(DB::raw('DATE(order.created_at) AS date'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy(DB::raw('DATE(order.created_at)'))
            ->orderBy('date', 'DESC')
            ->get();

        // Tính tổng doanh thu theo tuần
        $weeklyRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->select(DB::raw('YEAR(order.created_at) AS year'), DB::raw('WEEK(order.created_at) AS week'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy('year', 'week')
            ->orderBy('year', 'DESC')
            ->orderBy('week', 'DESC')
            ->get();

        // Tính tổng doanh thu theo tháng
        $monthlyRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->select(DB::raw('YEAR(order.created_at) AS year'), DB::raw('MONTH(order.created_at) AS month'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy('year', 'month')
            ->orderBy('year', 'DESC')
            ->orderBy('month', 'DESC')
            ->get();

        // Tính tổng doanh thu theo năm
        $annualRevenue = DB::table('order_items')
            ->join('order', 'order_items.order_id', '=', 'order.order_id')
            ->where('order.shop_id', $shopId)
            ->select(DB::raw('YEAR(order.created_at) AS year'), DB::raw('SUM(order_items.quantity * order.total) AS total_revenue'))
            ->groupBy('year')
            ->orderBy('year', 'DESC')
            ->get();

        // Tính tỉ lệ so với ngày hôm qua
        $yesterdayRevenue = $dailyRevenue[1]->total_revenue ?? 0;
        $todayRevenue = $dailyRevenue[0]->total_revenue;
        $revenueChangeYesterday = ($yesterdayRevenue != 0) ? (($todayRevenue - $yesterdayRevenue) / $yesterdayRevenue) * 100 : 0;

        // Tính tỉ lệ so với tuần trước
        $lastWeekRevenue = $weeklyRevenue[1]->total_revenue ?? 0;
        $thisWeekRevenue = $weeklyRevenue[0]->total_revenue;
        $revenueChangeLastWeek = ($lastWeekRevenue != 0) ? (($thisWeekRevenue - $lastWeekRevenue) / $lastWeekRevenue) * 100 : 0;

        // Tính tỉ lệ so với tháng trước
        $lastMonthRevenue = $monthlyRevenue[1]->total_revenue ?? 0;
        $thisMonthRevenue = $monthlyRevenue[0]->total_revenue;
        $revenueChangeLastMonth = ($lastMonthRevenue != 0) ? (($thisMonthRevenue - $lastMonthRevenue) / $lastMonthRevenue) * 100 : 0;

        // Tính tỉ lệ so với năm trước
        $lastYearRevenue = $annualRevenue[1]->total_revenue ?? 0;
        $thisYearRevenue = $annualRevenue[0]->total_revenue;
        $revenueChangeLastYear = ($lastYearRevenue != 0) ? (($thisYearRevenue - $lastYearRevenue) / $lastYearRevenue) * 100 : 0;

        // Trả về kết quả
        return response()->json([
            'dailyRevenue' => $dailyRevenue,
            'weeklyRevenue' => $weeklyRevenue,
            'monthlyRevenue' => $monthlyRevenue,
            'annualRevenue' => $annualRevenue,
            'revenueChangeYesterday' => $revenueChangeYesterday,
            'revenueChangeLastWeek' => $revenueChangeLastWeek,
            'revenueChangeLastMonth' => $revenueChangeLastMonth,
            'revenueChangeLastYear' => $revenueChangeLastYear
        ]);
    }

}