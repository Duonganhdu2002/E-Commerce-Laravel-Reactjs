<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product_image extends Model
{
    use HasFactory;
    protected $table = 'product_image';
    protected $fillable = ['image_id','product_id','image_url'];
    protected $primaryKey = 'image_id';
    public $timestamps = false;
}
