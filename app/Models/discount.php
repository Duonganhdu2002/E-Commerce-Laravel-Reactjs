<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class discount extends Model
{
    use HasFactory;
    protected $table = 'discount';
    protected $fillable = ['discount_id', 'created_by_user_id','name','description','discount_percent','created_at','modified_at','deleted_at'];
    protected $primaryKey = 'discount_id';
}