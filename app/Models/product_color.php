<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product_color extends Model
{
    use HasFactory;
    protected $table = 'product_color';
    protected $fillable = ['color_id','color_name','product_id'];
    protected $primaryKey ='color_id';
    public $timestamps = false;
}
