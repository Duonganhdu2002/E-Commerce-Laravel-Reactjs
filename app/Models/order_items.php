<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order_items extends Model
{
    use HasFactory;
    protected $table = 'order_items';
    protected $fillable = ['order_items_id','order_id','product_id','quantity'];
    protected $primaryKey = 'order_items_id';

    public function product()
    {
        return $this->belongsTo(Product::class, 'product_id', 'product_id');
    }

}
