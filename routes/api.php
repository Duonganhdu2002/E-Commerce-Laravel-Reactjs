<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProductImageController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\FieldController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\ProductCategoryController;
use App\Http\Controllers\ShoppingCartController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\SearchHistoryController;

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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function ($router) {

    Route::post('login', [AuthController::class, 'login']);
    Route::get('profile', [AuthController::class, 'profile']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);

});



Route::prefix('user')->group(function () {
    // Đăng ký người dùng
    Route::post('register', [UserController::class, 'createUser'])->name('register');

    // Lấy tổng số người dùng
    Route::get('auth-total', [UserController::class, 'getTotalUsers']);

    // Lấy danh sách người dùng
    Route::get('auth-list', [UserController::class, 'userList'])->name('userList');

    // Phân trang người dùng
    Route::get('auth', [UserController::class, 'userPagination']);
});



Route::prefix('public')->group(function () { // truy xuất dữ liệu ra trang public 

    Route::prefix('product')->group(function () {

        // index, store, update, destroy
        // Route::resource('/', ProductController::class);

        Route::get('show/{id}', [ProductController::class, 'show']);

        //xuất ra 6 sản phẩm mới nhất
        Route::get('latest-products/{categoryId}', [ProductController::class, 'getLatestProductsInCategory'])->name('latest-products');

        // xuất ra 6 sản phẩm best seller
        Route::get('best-selling-products/{categoryId}', [ProductController::class, 'getBestSellingProductsInCategory'])->name('best-selling-products');

        // xuất ra những sản phẩm bởi id của category
        Route::get('indexByCate/{categoryId}', [ProductController::class, 'indexByCategory']);

        // Lọc sản phẩm theo danh mục và có trạng thái là 3
        Route::get('listProductWithCategory/{categoryId}', [ProductController::class, 'listProductWithCategory'])->name('product-with-category');

        // Lọc sản phẩm theo thương hiệu và có trạng thái là 3
        Route::get('listProductWithBrand/{categoryId}', [ProductController::class, 'listProductWithBrand']);

        // xuất ra những sản phẩm của user tạo ra
        // Route::get('products/user/{userId}', [ProductController::class, 'indexByUser']);

        // chức năng tìm kiếm sản phẩm theo tên của sản phẩm, brand, category
        Route::get('/search-products', [SearchHistoryController::class, 'search']);

        // Lọc sản phẩm theo giá
        // Route::get('/filter-by-price', [ProductController::class, 'filterByPrice']);

        // Lọc sản phẩm theo đánh giá
        // Route::get('/filter-by-rating', [ProductController::class, 'filterByRating']);

        // Lọc sản phẩm theo địa chỉ của shop
        // Route::get('/filter-by-address', [ProductController::class, 'filterByAddress']);

        //Gợi ý sản phẩm theo lịch sử tìm kiếm gần nhất theo 5 từ khóa gần nhất và mỗi từ khóa ứng vs 5 sản phẩm
        Route::get('recommend/{user_id}', [ProductController::class, 'recommendBaseOnSearch']);

        // Lấy NGẪU NHIÊN 4 danh mục và show 4 sản phẩm bán chạy nhất của 4 danh mục đó
        Route::get('getRandomCategories', [ProductController::class, 'getRandomCategories']);

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
        Route::post('add-to-cart', [ShoppingCartController::class, 'store']);
        Route::get('/delete/{product_id}', [ShoppingCartController::class, 'destroy']);
        Route::put('/update/{product_id}', [ShoppingCartController::class, 'update']);
    });

    Route::prefix('order')->group(function () {
        Route::post('/', [OrderController::class, 'checkout']);
        Route::post('/{id}', [OrderController::class, 'total']);
        //chi tiết đơn hàng
        Route::get('/details/{order_id}', [OrderController::class, 'getOrderDetails']);
    });

});


Route::prefix('pageAdmin')->group(function () { // truy vấn dữ liệu ra trang admin

});

Route::prefix('admin')->middleware(['auth:sanctum', 'check.role:1'])->group(function () {
});


Route::prefix('seller')->middleware(['auth:sanctum', 'check.role:2'])->group(function () {
});

Route::prefix('customer')->middleware(['auth:sanctum', 'check.role:3'])->group(function () {
});