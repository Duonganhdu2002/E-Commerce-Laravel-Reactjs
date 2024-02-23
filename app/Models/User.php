<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use Tymon\JWTAuth\Contracts\JWTSubject;

class User extends Authenticatable implements JWTSubject
{
    use HasApiTokens, HasFactory, Notifiable;
    protected $table = 'users';

    protected $fillable = [
        'username',
        'email',
        'password',
        'type_account_id',
        'full_name',
        'telephone',
        'shop_name',
        'shop_username',
        'shop_avt',
        'shop_background',
        'shop_introduce',
    ];

    protected $primaryKey = 'user_id';


    protected $hidden = [
        'password',
        'remember_token',
    ];

    
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];

    public function getJWTIdentifier()
    {
        return $this->getKey();
    }


    public function getJWTCustomClaims()
    {
        return [];
    }

    public function user_address()
    {
        return $this->hasMany(user_address::class, 'user_id', 'user_id');
    }

    public function products()
    {
        return $this->hasMany(product::class, 'created_by_user_id', 'user_id');
    }
}