<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\PaymentIntent;
use Stripe\Exception\ApiErrorException as Error;

class PaymentController extends Controller
{
    public function createPaymentIntent(Request $request)
    {
        try {
            // Retrieve JSON from POST body
            $jsonStr = $request->getContent();
            $jsonObj = json_decode($jsonStr);

            if (!property_exists($jsonObj, 'items')) {
                throw new \InvalidArgumentException('Missing "items" property in JSON payload');
            }

            // Set up Stripe API key
            Stripe::setApiKey(env('STRIPE_SECRET'));

            // Create a PaymentIntent with amount and currency
            $paymentIntent = PaymentIntent::create([
                'amount' => $this->calculateOrderAmount($jsonObj->items),
                'currency' => 'usd',
                'automatic_payment_methods' => [
                    'enabled' => true,
                ],
            ]);

            $output = [
                'clientSecret' => $paymentIntent->client_secret,
                'amout' => $this->calculateOrderAmount($jsonObj->items)
            ];

            return response()->json($output);
        } catch (\InvalidArgumentException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (Error $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    private function calculateOrderAmount(array $items): int
    {
        $totalAmount = 0;

        foreach ($items as $item) {
            $itemArray = (array) $item;
            if (isset($itemArray['id'], $itemArray['price'], $itemArray['quantity'])) {
                $totalAmount += $itemArray['price'] * $itemArray['quantity'];
            }
        }
        return $totalAmount;
    }
}
