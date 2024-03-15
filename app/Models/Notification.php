<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $table = 'notification';
    protected $fillable = ['notification_id', 'user_id', 'title', 'content', 'read', 'created_at','updated_at'];
    protected $primaryKey = 'notification_id';

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id', 'user_id');
    }

}
