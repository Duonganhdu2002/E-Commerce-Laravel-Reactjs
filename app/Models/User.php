<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user extends Model
{
    use HasFactory;
    protected $table = 'user';
    protected $fillable = ['user_id','type_account_id','username','password','avt_image','first_name','last_name','telephone','created_at','modified_at'];

    protected $hidden = [
        'password'
    ];

}
