<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FieldController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ShoppingCartController;
use App\Http\Controllers\OrderController;


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('auth')->group(function () {
    // Đăng ký người dùng
    Route::post('register', [UserController::class, 'createUser'])->name('register');

    // Đăng nhập người dùng
    Route::post('login', [UserController::class, 'loginUser']);

    // Đăng xuất người dùng
    Route::post('logout', [UserController::class, 'logoutUser'])->name('logout');

    // Lấy tổng số người dùng
    Route::get('auth-total', [UserController::class, 'getTotalUsers']);

    // Lấy danh sách người dùng
    Route::get('auth-list', [UserController::class, 'userList'])->name('userList');

    // Phân trang người dùng
    Route::get('auth', [UserController::class, 'userPagination']);
});


Route::prefix('admin')->middleware(['auth:sanctum', 'check.role:1'])->group(function () {
    // Vào trang admin
    // Chỉnh sửa Payment_type
    // Ban seller và customer
    // 
});


Route::prefix('seller')->middleware(['auth:sanctum', 'check.role:2'])->group(function () {
});

Route::prefix('customer')->middleware(['auth:sanctum', 'check.role:3'])->group(function () {
});


Route::prefix('public')->group(function () { // truy xuất dữ liệu ra trang public 

    Route::prefix('product')->group(function () {
        Route::get('latest-products/{categoryId}', [ProductController::class, 'getLatestProductsInCategory'])->name('latest-products');
        Route::get('best-selling-products/{categoryId}', [ProductController::class, 'getBestSellingProductsInCategory'])->name('best-selling-products');
        Route::get('product-with-category/{categoryId}', [ProductController::class, 'listProductWithCategory']);
        Route::get('indexByCate/{categoryId}', [ProductController::class, 'indexByCategory']);
        Route::get('products/user/{userId}', [ProductController::class, 'indexByUser']);
        Route::get('/search-products', [ProductController::class, 'search']);

        
        Route::prefix('img')->group(function () { 
            Route::get('display/{productId}', [ProductImageController::class, 'displayByProductId']);
            Route::post('upload/{productId}', [ProductImageController::class, 'upload']);
            Route::resource('/', ProductImageController::class);
        });
    });

    Route::prefix('field')->group(function () {
        Route::get('list', [FieldController::class, 'index']);
    });

    Route::prefix('brand')->group(function () {
        Route::get('list', [BrandController::class, 'index']);
        Route::get('id={fieldId}', [BrandController::class, 'showByld']);
    });

    Route::prefix('category')->group(function () {
        Route::get('list', [ProductCategoryController::class, 'index']);
        Route::get('id={categoryId}', [ProductCategoryController::class, 'showById']);
    });

    Route::prefix('cart')->group(function () {
       Route::post('/', [ShoppingCartController::class, 'store']);
    });

    Route::prefix('order')->group(function () {
        Route::post('/', [OrderController::class, 'checkout']);
        Route::post('/{id}', [OrderController::class, 'total']);
     });

});


Route::prefix('pageAdmin')->group(function () { // truy vấn dữ liệu ra trang admin

});