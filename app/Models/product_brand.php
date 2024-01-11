<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product_brand extends Model
{
    use HasFactory;
    public $table = 'product_brand';
    protected $fillable = ['product_brand_id', 'field_id', 'product_brand_name', 'description', 'logo', 'created_at', 'modified_at', 'deleted_at'];
    protected $primaryKey = 'product_brand_id';

    public function products()
    {
        return $this->hasMany(Product::class, 'product_brand_id', 'product_brand_id');
    }
}