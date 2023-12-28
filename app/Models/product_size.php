<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product_size extends Model
{
    use HasFactory;
    protected $table = 'product_size';
    protected $fillable = ['size_id','size_name'];
    protected $primaryKey = 'size_id';
    public $timestamps = false;
}
