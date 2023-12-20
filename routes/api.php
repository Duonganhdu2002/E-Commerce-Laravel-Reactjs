<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
<<<<<<< HEAD
use App\Http\Controllers\AccountType;
use App\Http\Controllers\Discount;
use App\Http\Controllers\OderItems;
use App\Http\Controllers\Order;
use App\Http\Controllers\OrderStatus;
use App\Http\Controllers\PaymentType;
use App\Http\Controllers\Product;
use App\Http\Controllers\ProductCategory;
use App\Http\Controllers\ProductColor;
use App\Http\Controllers\ProductImage;
use App\Http\Controllers\ProductReview;
use App\Http\Controllers\ProductSize;
use App\Http\Controllers\ShippingMethod;
use App\Http\Controllers\ShoppingCart;
use App\Http\Controllers\Transaction;
use App\Http\Controllers\UserAddress;
use App\Http\Controllers\UserPayment;
use App\Http\Controllers\UserReview;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/
=======
use App\Http\Controllers\UserController;
>>>>>>> 3bc44a175e4ab39f447972ef370b63df1c9a2ae9

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

<<<<<<< HEAD
Route::prefix('public')->group(function () {

    Route::resource('/AccountType', AccountType::class);


    Route::resource('Discount', Discount::class);


    Route::resource('OderItems', OderItems::class);


    Route::resource('Order', Order::class);


    Route::resource('OrderStatus', OrderStatus::class);


    Route::resource('PaymentType', PaymentType::class);


    Route::resource('Product', Product::class);


    Route::resource('ProductCategory', ProductCategory::class);


    Route::resource('ProductColo', ProductColor::class);


    Route::resource('ProductImage', ProductImage::class);


    Route::resource('ProductReview', ProductReview::class);


    Route::resource('ProductSize', ProductSize::class);


    Route::resource('ShippingMethod', ShippingMethod::class);


    Route::resource('ShoppingCart', ShoppingCart::class);


    Route::resource('Transaction', Transaction::class);


    Route::resource('UserAddress', UserAddress::class);


    Route::resource('UserPayment', UserPayment::class);


    Route::resource('UserReview', UserReview::class);
});
=======
Route::resource('user', UserController::class);
>>>>>>> 3bc44a175e4ab39f447972ef370b63df1c9a2ae9
