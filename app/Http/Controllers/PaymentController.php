<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;
use PhpParser\Node\Stmt\TryCatch;
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
                'amount' => $totalAmount,
                'currency' => 'usd',
                'automatic_payment_methods' => [
                    'enabled' => true,
                ],
            ]);

            // Save transaction history
            $this->saveTransactionHistory($request, $totalAmount);

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

    public function saveTransactionHistory(Request $request, $totalAmount)
    {
        try {
            $transaction = new Transaction([
                'buyer_id' => $request->buyer_id,
                'seller_id' => $request->seller_id,
                'order_id' => $request->order_id,
                'payment_id' => $request->payment_id,
                'total_amount' => $request->total_amount, // Use calculated total amount
                'created_at' => now(),
            ]);

            $transaction->save();

            return response()->json($transaction);
        } catch (\Throwable $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    private function calculateOrderAmount(array $items): int
    {
        $totalAmount = 0;

        foreach ($items as $item) {
            $itemArray = (array) $item;
            if (isset($itemArray['Price'], $itemArray['newQuantity'])) {
                $totalAmount += $itemArray['Price'] * $itemArray['newQuantity'];
            }
        }
        return $totalAmount;
    }
}
