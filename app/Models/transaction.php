<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class transaction extends Model
{
    use HasFactory;
    protected $table = 'transaction';
    protected $fillable = ['transaction_id','buyer_id','seller_id','order_id','payment_id','transaction_status','total_amount','created_at','modified_at'];

}
