<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class shipping_method extends Model
{
    use HasFactory;
    protected $table = 'shipping_method';
    protected $fillable = ['shipping_method_id','shipping_method_name','shipping_method_price'];
    protected $primaryKey ='shipping_method_id';
    public $timestamps = false;
}
