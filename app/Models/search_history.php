<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class search_history extends Model
{
    use HasFactory;
    protected $table = 'search_history';
    protected $fillable = ['search_history_id', 'user_id', 'search_keyword', 'search_time '];
    protected $primaryKey = 'search_history_id';

    public function searchResults()
    {
        return $this->hasMany(search_results::class);
    }

}