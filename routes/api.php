<?php

use App\Http\Controllers\ShippingMethodController;
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
use App\Http\Controllers\SearchHistoryController;
use App\Http\Controllers\ProvincesController;
use App\Http\Controllers\RevenueController;
use App\Http\Controllers\ProductReviewController;


Route::prefix('user')->group(function () {

    // Quyền admin
    Route::post('createAdmin', [UserController::class, 'createAdmin'])->name('createAdmin');
    Route::post('createBusiness', [UserController::class, 'createBusiness'])->name('createBusiness');
    Route::post('register', [UserController::class, 'createUser'])->name('register');
    // xóa user
    Route::delete('/{id}', [UserController::class, 'delete']);
    // sửa user
    Route::put('/{id}', [UserController::class, 'update']);


    Route::post('login', [UserController::class, 'login'])->name('login');
    Route::post('loginBusiness', [UserController::class, 'loginBusiness'])->name('loginBusiness');
    Route::post('loginAdmin', [UserController::class, 'loginAdmin'])->name('loginAdmin');

    Route::get('info/{user_id}', [UserController::class, 'info'])->name('info');
    Route::get('auth-total', [UserController::class, 'getTotalUsers'])->name('getTotalUsers');
    Route::get('auth-list', [UserController::class, 'userList'])->name('userList');
});

Route::prefix('public')->group(function () {
    Route::prefix('product')->group(function () {
        Route::get('all', [ProductController::class, 'index']);
        Route::get('show/{id}', [ProductController::class, 'show']);
        Route::delete('delete/{id}', [ProductController::class, 'destroy']);
        Route::post('add', [ProductController::class, 'store']);
        Route::put('update/{id}', [ProductController::class, 'update']);

        //xuất ra 6 sản phẩm mới nhất
        Route::get('latest-products/{categoryId}', [ProductController::class, 'getLatestProductsInCategory'])->name('latest-products');

        // xuất ra 6 sản phẩm best seller
        Route::get('best-selling-products/{categoryId}', [ProductController::class, 'getBestSellingProductsInCategory'])->name('best-selling-products');

        // xuất ra những sản phẩm bởi id của category
        Route::get('indexByCate/{categoryId}', [ProductController::class, 'indexByCategory'])->name('indexByCategory');

        // xuất ra 8 sản phẩm best seller của user
        Route::get('best-selling-user-products/{userId}', [ProductController::class, 'getBestSellingUserProducts'])->name('best-selling-user-products');

        // xuất ra những sản phẩm bởi id của brand và phân trang = 10 sp
        Route::get('indexByBrand/{brandId}', [ProductController::class, 'indexByBrand'])->name('indexByBrand');

        // Lọc sản phẩm theo danh mục và có trạng thái là 3
        Route::get('listProductWithCategory/{categoryId}', [ProductController::class, 'listProductWithCategory'])->name('product-with-category');

        // Lọc sản phẩm theo thương hiệu và có trạng thái là 3
        Route::get('listProductWithBrand/{categoryId}', [ProductController::class, 'listProductWithBrand']);

        // xuất ra những sản phẩm của user tạo ra( chủ shop)
        Route::get('user/{id}', [ProductController::class, 'indexByUser']);
        Route::get('shop/{id}', [ProductController::class, 'createByShop']);

        // chức năng tìm kiếm sản phẩm theo tên của sản phẩm, brand, category
        Route::get('/search-products', [SearchHistoryController::class, 'search']);

        // Lọc sản phẩm theo category và brand
        Route::post('/filterByCategoriesAndBrands', [ProductController::class, 'filterByCategoriesAndBrands'])->name('filterByCategoriesAndBrands');

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

        //hiển thị danh sách sản phẩm theo sắp xếp
        // Route::get('/sort-products/{sortBy}', [ProductController::class, 'sortProducts']);

        //hiển thị danh sách sản phẩm theo sắp xếp
        // Route::get('/sort-products/{sortBy}/{user_id}', [ProductController::class, 'sortUserProducts']);

        Route::get('revenue/{shop_id}/{type}/{date}', [RevenueController::class, 'calculateShopRevenue']);
        Route::get('rating/{shop_id}/{rating?}', [ProductReviewController::class, 'shopReviews']);
    });


    Route::prefix('revenue')->group(function () {
        Route::get('/total/{shopId}', [RevenueController::class, 'calculateRevenue']);
    });

    Route::prefix('field')->group(function () {
        Route::get('list', [FieldController::class, 'index']);
        Route::get('/{id}', [FieldController::class, 'show']);
        Route::put('/{id}', [FieldController::class, 'update']);
        Route::delete('/{id}', [FieldController::class, 'delete']);
        Route::post('/addField', [FieldController::class, 'addField']);

    });

    Route::prefix('brand')->group(function () {
        Route::get('list', [BrandController::class, 'index']);
        //Danh sách các brand có field_id
        Route::get('id={fieldId}', [BrandController::class, 'showByld']);

        Route::get('/{id}', [BrandController::class, 'show']);
        Route::put('/{id}', [BrandController::class, 'update']);
        Route::delete('/{id}', [BrandController::class, 'delete']);
        Route::post('/addBrand', [BrandController::class, 'addBrand']);
    });

    Route::prefix('category')->group(function () {
        Route::get('list', [ProductCategoryController::class, 'index']);
        //show category theo field
        Route::get('id={categoryId}', [ProductCategoryController::class, 'showById']);
        //show category theo user
        Route::get('{user_id}', [ProductCategoryController::class, 'showUserCategories']);
        //show category theo user có phân trang
        Route::get('paging/{user_id}', [ProductCategoryController::class, 'showUserCategorieswithP']);

        Route::get('show/{id}', [ProductCategoryController::class, 'show']);
        Route::put('update/{id}', [ProductCategoryController::class, 'update']);
        Route::delete('delete/{id}', [ProductCategoryController::class, 'delete']);
        Route::post('/addCategory', [ProductCategoryController::class, 'addCategory']);

    });

    Route::prefix('cart')->group(function () {
        Route::post('add-to-cart', [ShoppingCartController::class, 'store']);
        Route::get('show/{user_id}', [ShoppingCartController::class, 'index']);
        Route::delete('delete/{product_id}', [ShoppingCartController::class, 'destroy']);
        Route::put('update/{product_id}', [ShoppingCartController::class, 'update']);
    });

    Route::prefix('order')->group(function () {
        Route::get('list', [OrderController::class, 'index']);
        Route::post('make', [OrderController::class, 'checkout']);
        Route::get('details/{order_id}', [OrderController::class, 'getOrderDetails']);
        //show các đơn hàng được đặt của seller
        Route::get('{user_id}', [OrderController::class, 'getSellerOrders']);
        //show don hang duoc tim kiem theo username cua 1 shop
        Route::get('search', [SearchHistoryController::class, 'searchOrdersByUsername']);
        //show cac don hang bị huy
        Route::get('disable/{user_id}', [OrderController::class, 'getDisableOrdersForShop']);
        // Hiển thị các đơn hàng đang được vận chuyển 
        Route::get('shipped-orders/{user_id}', [OrderController::class, 'showShippingOrdersByUserId']);
    });

    Route::prefix('location')->group(function () {
        Route::get('/', [ProvincesController::class, 'index']);
        Route::get('province={provinceId}', [ProvincesController::class, 'getDistricts']);
        Route::get('district={districtId}', [ProvincesController::class, 'getWards']);
    });
});

Route::prefix('shopping-method')->group(function () {
    Route::get('show', [ShippingMethodController::class, 'index']);
});

Route::prefix('pageAdmin')->group(function () { // truy vấn dữ liệu ra trang admin

});

Route::prefix('admin')->middleware(['auth:sanctum', 'check.role:1'])->group(function () {
});

Route::prefix('seller')->middleware(['auth:sanctum', 'check.role:2'])->group(function () {
});

Route::prefix('customer')->middleware(['auth:sanctum', 'check.role:3'])->group(function () {
});