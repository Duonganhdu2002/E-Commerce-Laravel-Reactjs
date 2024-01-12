<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class search_history extends Model
{
    use HasFactory;
    protected $table = 'search_history';
    protected $fillable = ['search_history_id', 'user_id', 'key_word', 'created_at'];
    protected $primaryKey = 'search_history_id';


}