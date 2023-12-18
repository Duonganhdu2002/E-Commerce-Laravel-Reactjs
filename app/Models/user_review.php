<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class user_review extends Model
{
    use HasFactory;
    protected $table = 'user_review';
    protected $fillable = ['user_review_id','reviewer_id','reviewee_id','rating','comment','created_at','modified_at'];

}
