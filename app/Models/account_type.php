<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class account_type extends Model
{
    use HasFactory;
    public $table = 'account_type';
    protected $fillable = ['type_account_id','type_account_name'];


    
}
