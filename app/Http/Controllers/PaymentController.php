<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
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

            // Check if the 'items' property exists in the JSON payload
            if (!property_exists($jsonObj, 'items')) {
                throw new \InvalidArgumentException('Missing "items" property in JSON payload');
            }

            // Set up Stripe API key
            Stripe::setApiKey(env('STRIPE_SECRET'));

            // Calculate total amount
            $totalAmount = $this->calculateOrderAmount($jsonObj->items);

            // Create a PaymentIntent with amount and currency
            $paymentIntent = PaymentIntent::create([
                'amount' => $this->calculateOrderAmount($jsonObj->items),
                'currency' => 'usd',
                'automatic_payment_methods' => [
                    'enabled' => true,
                ],
            ]);

            // Save transaction history
            $this->saveTransactionHistory($jsonObj, $totalAmount);

            $output = [
                'clientSecret' => $paymentIntent->client_secret,
            ];

            return response()->json($output);
        } catch (\InvalidArgumentException $e) {
            return response()->json(['error' => $e->getMessage()], 400);
        } catch (Error $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    private function saveTransactionHistory($jsonObj, $totalAmount)
    {
        // Create a new Transaction instance and fill it with the provided data
        $transaction = new Transaction([
            'buyer_id' => $jsonObj->buyer_id,
            'seller_id' => $jsonObj->seller_id,
            'order_id' => $jsonObj->order_id,
            'payment_id' => $jsonObj->payment_id,
            'transaction_status' => $jsonObj->transaction_status,
            'total_amount' => $totalAmount,
            'created_at' => now(),
        ]);

        // Save the transaction to the database
        $transaction->save();
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
