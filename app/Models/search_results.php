<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class search_results extends Model
{
    use HasFactory;
    protected $table = 'search_results';
    protected $fillable = ['search_results_id', 'search_history_id', 'product_id'];
    protected $primaryKey = 'search_results_id';
    
    // Mối quan hệ nhiều-một với SearchHistory
    public function searchHistory()
    {
        return $this->belongsTo(search_history::class);
    }

    // Mối quan hệ một-nhiều với Product
    public function product()
    {
        return $this->hasMany(product::class);
    }

}