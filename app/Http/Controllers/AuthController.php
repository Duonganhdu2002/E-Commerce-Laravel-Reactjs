<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;

class AuthController extends Controller
{
    public function __construct() // xử lí middleware
    {
        $this->middleware('auth:api', ['except' => ['login', 'refresh']]);
    }

    public function login()
    {
        $credentials = request(['email', 'password']);

        if (!$token = auth()->attempt($credentials)) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

        $data = [
            'user_id' => auth()->user()->user_id,
            'random' => rand() . time(),
            'exp' => time() + config('jwt.refresh_ttl')
        ];

        $refreshToken = $this->createRefreshToken();

        return $this->respondWithToken($token, $refreshToken);
    }

    public function profile()
    {
        try {
            return response()->json(auth()->user());
        } catch (JWTException $exception) {
            return response()->json(['error' => 'Unauthorized'], 401);
        }

    }

    public function logout()
    {
        auth()->logout();

        return response()->json(['message' => 'Successfully logged out']);
    }

    public function refresh()
    {
        $refreshToken = request()->refresh_token;
        try {
            $decoded = JWTAuth::getJWTProvider()->decode($refreshToken);
            // xử lý cấp lại token mới
            // -> lấy thông tin user
            $user = User::find($decoded['user_id']);
            if (!$user) {
                return response()->json(['error' => 'User not found'], 404);
            }

            auth()->invalidate(); // vô hiệu hóa token hiện tại

            $token = auth()->login($user); // tọa token mới
            $refreshToken = $this->createRefreshToken();

            return $this->respondWithToken($token, $refreshToken);
        } catch (JWTException $exception) {
            return response()->json(['error' => 'Refresh Token Invalid'], 500);
        }

    }

    private function respondWithToken($token, $refreshToken)
    {
        return response()->json([
            'access_token' => $token,
            'refresh_token' => $refreshToken,
            'token_type' => 'bearer',
            'expires_in' => auth()->factory()->getTTL() * 60
        ]);
    }

    private function createRefreshToken()
    {
        $data = [
            'user_id' => auth()->user()->user_id,
            'random' => rand() . time(),
            'exp' => time() + config('jwt.refresh_ttl')
        ];
        $refreshToken = JWTAuth::getJWTProvider()->encode($data);
        return $refreshToken;
    }
}