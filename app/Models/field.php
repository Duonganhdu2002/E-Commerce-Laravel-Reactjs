<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class field extends Model
{
    use HasFactory;
    public $table = 'field';
    protected $fillable = ['field_id', 'field_name', 'icon_field', 'created_at', 'modified_at', 'deleted_at'];

    protected $primaryKey = 'field_id';
}