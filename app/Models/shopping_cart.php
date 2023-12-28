<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class shopping_cart extends Model
{
    use HasFactory;
    protected $table = 'shopping_cart';
    protected $fillable = ['shopping_cart_id','user_id','product_id','quantity','created_at','modified_at'];

    protected $primaryKey = 'shopping_cart_id';
}
