<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class payment_type extends Model
{
    use HasFactory;
    protected $table = 'payment_type_id';
    protected $fillable = ['payment_type_id','payment_type_name'];

}
