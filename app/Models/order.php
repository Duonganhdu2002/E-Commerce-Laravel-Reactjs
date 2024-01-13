<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    use HasFactory;
    protected $table = 'order';
    protected $fillable = ['order_id','user_id','order_status_id','shipping_method_id','total','created_at','modified_at'];
    protected $primaryKey = 'order_id';

    public function products()
    {
        return $this->belongsToMany(Product::class, 'order_items', 'order_id', 'product_id');
    }

    public function items()
    {
        return $this->hasMany(order_items::class, 'order_id', 'order_id');
    }

}
