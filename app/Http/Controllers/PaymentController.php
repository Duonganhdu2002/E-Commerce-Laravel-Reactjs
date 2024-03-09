<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;

class PaymentController extends Controller
{
    public function createPaymentIntent(Request $request)
    {
        // Thiết lập khóa Stripe
        Stripe::setApiKey(env('STRIPE_SECRET'));

        // Tạo PaymentIntent
        $paymentIntent = PaymentIntent::create([
            'amount' => $request->amount,
            'currency' => 'usd', 
        ]);

        return response()->json(['clientSecret' => $paymentIntent->client_secret]);
    }
}
