<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Laravel\Socialite\Facades\Socialite;

class GoogleAuthController extends Controller
{
    public function redirect()
    {
        return Socialite::driver('google')->redirect();
    }

    public function callbackGoogle()
    {
       try{
        $google_user = Socialite::driver('google')->user();

        $user = User::where('google_id', $google_user->getId())->first();

        if (!$user) {
            $new_user = User::create([
                'username' => $google_user ->getName(),
                'email' => $google_user ->getEmail(),
                'google_id' => $google_user ->getId(),
            ]);

            $user = new User();
            $userController = new UserController();
            $userController->create($new_user);

              return redirect() ->intended('dashboard');
            
        }else{
            $userController = new UserController();
            $userController->login($user);

            return redirect() ->intended('dashboard');

        }
       }catch (\Throwable $th){
        dd('Wrong'.$th->getMessage());
       }
    }
}
