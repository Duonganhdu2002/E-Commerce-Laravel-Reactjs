<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;

use App\Http\Controllers\Discount;
use App\Http\Controllers\OderItems;
use App\Http\Controllers\Order;
use App\Http\Controllers\OrderStatus;
use App\Http\Controllers\PaymentType;
use App\Http\Controllers\ProductCategory;
use App\Http\Controllers\ProductColorController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImage;
use App\Http\Controllers\ProductReview;
use App\Http\Controllers\ProductSize;
use App\Http\Controllers\ShippingMethod;
use App\Http\Controllers\ShoppingCart;
use App\Http\Controllers\Transaction;
use App\Http\Controllers\UserAddressController;
use App\Http\Controllers\UserController;
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


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
}); 


Route::post('/auth/register', [AuthController::class, 'createUser']);

Route::post('/auth/login', [AuthController::class, 'loginUser']);


Route::get('/count', [UserController::class, 'getTotalUsers']);

Route::prefix('public')->group(function () {
    
    Route::resource('User', UserController::class);
    
    Route::resource('Product', ProductController::class);

    Route::resource('UserAddress', UserAddressController::class);

    Route::resource('Discount', Discount::class);


    Route::resource('OderItems', OderItems::class);


    Route::resource('Order', Order::class);


    Route::resource('OrderStatus', OrderStatus::class);


    Route::resource('PaymentType', PaymentType::class);


    Route::resource('ProductCategory', ProductCategory::class);


    Route::resource('ProductColo', ProductColorController::class);


Route::prefix('ProductImage')->group(function () {

    Route::get('Display', [ProductImage::class,'Display']); 
    Route::resource('template', ProductImage::class); 

});


    Route::resource('ProductReview', ProductReview::class);


    Route::resource('ProductSize', ProductSize::class);


    Route::resource('ShippingMethod', ShippingMethod::class);


    Route::resource('ShoppingCart', ShoppingCart::class);


    Route::resource('Transaction', Transaction::class);

    Route::resource('UserPayment', UserPayment::class);


    Route::resource('UserReview', UserReview::class);
});
