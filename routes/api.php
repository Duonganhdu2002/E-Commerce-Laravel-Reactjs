<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;

use App\Http\Controllers\AccountType;
use App\Http\Controllers\DiscountController;
use App\Http\Controllers\OderItemsController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\OrderStatusController;
use App\Http\Controllers\PaymentTypeController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ProductColorController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImageController;
use App\Http\Controllers\ProductReviewController;
use App\Http\Controllers\ProductSizeController;
use App\Http\Controllers\ShippingMethodController;
use App\Http\Controllers\ShoppingCartController;
use App\Http\Controllers\TransactionController;
use App\Http\Controllers\UserAddressController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\UserPayment;




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

Route::prefix('auth')->group(function () {

    Route::post('register', [AuthController::class, 'createUser']);

    Route::post('login', [AuthController::class, 'loginUser']);

});


Route::get('/latest-products/{categoryId}', [ProductController::class, 'getLatestProductsInCategory']);

Route::get('/best-selling-products/{categoryId}', [ProductController::class, 'getBestSellingProductsInCategory']);


Route::get('/count', [UserController::class, 'getTotalUsers']);

Route::prefix('public')->group(function () {
    
    Route::resource('User', UserController::class);
    
    Route::resource('Product', ProductController::class);

    Route::resource('UserAddress', UserAddressController::class);

    Route::resource('Discount', DiscountController::class);


    Route::resource('OderItems', OderItemsController::class);


    Route::resource('Order', OrderController::class);


    Route::resource('OrderStatus', OrderStatusController::class);


    Route::resource('PaymentType', PaymentTypeController::class);


    Route::resource('ProductCategory', ProductCategoryController::class);


    Route::resource('ProductColo', ProductColorController::class);


    Route::prefix('ProductImage')->group(function () {

        Route::get('Display', [ProductImageController::class,'Display']); 
        Route::resource('template', ProductImageController::class); 

    });


    Route::resource('ProductReview', ProductReviewController::class);


    Route::resource('ProductSize', ProductSizeController::class);


    Route::resource('ShippingMethod', ShippingMethodController::class);


    Route::resource('ShoppingCart', ShoppingCartController::class);


    Route::resource('Transaction', TransactionController::class);

    Route::resource('UserPayment', UserPayment::class);
});
