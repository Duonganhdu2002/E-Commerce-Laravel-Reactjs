<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_address extends Model
{
    use HasFactory;
    protected $table = 'user_address';
    protected $fillable = ['user_address_id','user_id','username','number','street','commune','district','province','country','postal_code'];
    protected $primaryKey = 'user_address_id';
}
