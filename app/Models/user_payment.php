<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_payment extends Model
{
    use HasFactory;
    protected $table = 'user_payment';
    protected $fillable = ['payment_id','user_id','payment_type_id','card_name_hash','card_number_hash','expiration_date','cvv','paypal_email'];

}
