<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class product_category extends Model
{
    use HasFactory;
    protected $table = 'product_category';
    protected $fillable = ['product_category_id','field_id','name','description','discount_percent','created_at','modified_at','deleted_at'];
    protected $primaryKey = 'product_category_id';

    public function products()
    {
        return $this->hasMany(Product::class, 'product_category_id');
    }
}
