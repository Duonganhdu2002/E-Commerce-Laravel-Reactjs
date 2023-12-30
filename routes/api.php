<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\AuthController;
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
use App\Http\Controllers\UserPaymentController;




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

    Route::post('register', [AuthController::class, 'createUser'])->name('register');

    Route::post('login', [AuthController::class, 'loginUser']);
    Route::post('logout', [AuthController::class, 'logoutUser'])->name('logout');
});


Route::prefix('admin')->middleware(['auth:sanctum', 'check.role:1'])->group(function () {
    
});


Route::prefix('seller')->middleware(['auth:sanctum', 'check.role:2'])->group(function () {
    
});

Route::prefix('customer')->middleware(['auth:sanctum', 'check.role:3'])->group(function () {
    
});


Route::prefix('public')->middleware(['auth:sanctum', 'check.role:3'])->group(function () {

    Route::resource('User', UserController::class);
    
    // Route::resource('Product', ProductController::class);
    Route::prefix('Product')->group(function () {
        Route::resource('/', ProductController::class);
        Route::get('/latest-products/{categoryId}', [ProductController::class, 'getLatestProductsInCategory'])->name('latest-products');
        Route::get('/best-selling-products/{categoryId}', [ProductController::class, 'getBestSellingProductsInCategory'])->name('best-selling-products');
        Route::get('indexByCate/{categoryId}', [ProductController::class, 'indexByCategory']); 
       
        
    
    });

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
        Route::get('Display/{productId}', [ProductImageController::class, 'displayByProductId']);
        Route::post('upload/{productId}', [ProductImageController::class,'upload']); 
        Route::resource('/', ProductImageController::class); 
    });


    Route::resource('ProductReview', ProductReviewController::class);


    Route::resource('ProductSize', ProductSizeController::class);


    Route::resource('ShippingMethod', ShippingMethodController::class);


    Route::resource('ShoppingCart', ShoppingCartController::class);


    Route::resource('Transaction', TransactionController::class);

    Route::resource('UserPayment', UserPaymentController::class);
});


