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

        // index, store, show, update, destroy
        // Route::resource('/', ProductController::class);

        Route::get('/{id}', [ProductController::class, 'show']);

        //xuất ra 6 sản phẩm mới nhất
        Route::get('latest-products/{categoryId}', [ProductController::class, 'getLatestProductsInCategory'])->name('latest-products');

        // xuất ra 6 sản phẩm best seller
        Route::get('best-selling-products/{categoryId}', [ProductController::class, 'getBestSellingProductsInCategory'])->name('best-selling-products');

        // xuất ra những sản phẩm bởi id của category
        Route::get('indexByCate/{categoryId}', [ProductController::class, 'indexByCategory']);

        // Lọc sản phẩm theo danh mục và có trạng thái là 3
        Route::get('listProductWithCategory/{categoryId}', [ProductController::class, 'listProductWithCategory']);

        // Lọc sản phẩm theo thương hiệu và có trạng thái là 3
        Route::get('listProductWithBrand/{categoryId}', [ProductController::class, 'listProductWithBrand']);

        // xuất ra những sản phẩm của user tạo ra
        Route::get('products/user/{userId}', [ProductController::class, 'indexByUser']);

        // chức năng tìm kiếm sản phẩm theo tên của sản phẩm, brand, category
        Route::get('/search-products', [ProductController::class, 'search']);

        // Lọc sản phẩm theo giá
        Route::get('/filter-by-price', [ProductController::class, 'filterByPrice']);

        // Lọc sản phẩm theo đánh giá
        Route::get('/filter-by-rating', [ProductController::class, 'filterByRating']);

        // Lọc sản phẩm theo địa chỉ của shop
        Route::get('/filter-by-address', [ProductController::class, 'filterByAddress']);



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