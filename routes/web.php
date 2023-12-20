<?php

use Illuminate\Support\Facades\Route;
use App\Models\user;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

// Route::get('test', function () {
//     // return DB::table('user')->where('user_id',1)->get();

//     $elm = user::find(1);
//     return $elm->user_address;
// });
