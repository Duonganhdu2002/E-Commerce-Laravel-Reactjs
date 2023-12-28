<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product extends Model
{
    use HasFactory;
    protected $table = 'product';
    protected $fillable = ['product_id','name','description','color_id','size_id','created_by_user_id','product_brand_id','product_category_id','price','stock','discount_id','created_at','modified_at','deleted_at'];
    protected $primaryKey = 'product_id';

}
