<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class order extends Model
{
    use HasFactory;
    protected $table = 'order';
    protected $fillable = [
        'order_id',
        'user_id',
        'order_status_id',
        'shipping_method_id',
        'order_note',
        'order_address',
        'order_phone',
        'order_name',
        'total',
    ];
    
    protected $primaryKey = 'order_id';
    public function orderItems()
    {
        return $this->hasMany(Order_Items::class, 'order_id', 'order_id');
    }

}
