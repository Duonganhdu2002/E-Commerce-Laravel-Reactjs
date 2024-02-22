<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\ShoppingCartResource;
use App\Models\product;
use App\Models\shopping_cart as ShoppingCart;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;



class ShoppingCartController extends Controller
{

    protected $shoppingCart;

    public function __construct(ShoppingCart $shoppingCart)
    {
        $this->shoppingCart = $shoppingCart;
    }

    public function index($user_id)
    {
        try {
            $shoppingCartItems = ShoppingCart::where('user_id', $user_id)
                ->join('product', 'shopping_cart.product_id', '=', 'product.product_id')
                ->select('shopping_cart.*', 'product.price as price', 'product.name as name')
                ->get();

            if ($shoppingCartItems->isEmpty()) {
                $response = [
                    'status' => true,
                    'message' => 'No products in the shopping cart.',
                    'data' => []
                ];
            } else {
                $response = [
                    'status' => true,
                    'message' => 'Danh sách',
                    'data' => ShoppingCartResource::collection($shoppingCartItems)
                ];
            }

            return response()->json($response, 200);
        } catch (\Exception $e) {
            return response()->json(['status' => false, 'message' => $e->getMessage()], 500);
        }
    }

    public function store(Request $request)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'user_id' => 'required|exists:users,user_id',
            'product_id' => 'required|exists:product,product_id',
            'quantity' => 'required|integer|min:1',
        ]);

        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $user_id = $input['user_id'];
        $product_id = $input['product_id'];
        $quantity = $input['quantity'];
        $color = $input['color'];
        $size = $input['size'];
        $img = $input['img'];


        // Check if the product already exists in the shopping cart
        $existingCartItem = ShoppingCart::where('user_id', $user_id)
            ->where('product_id', $product_id)
            ->first();

        if ($existingCartItem) {
            // If it exists, update the quantity
            $existingCartItem->update(['quantity' => $existingCartItem->quantity + $quantity]);

            $arr = [
                'status' => true,
                'message' => 'Đã cập nhật số lượng sản phẩm trong giỏ hàng',
            ];

            return response()->json($arr, 200);
        }

        $count = ShoppingCart::where('user_id', $user_id)->count();

        if ($count >= 50) {
            $arr = [
                'status' => false,
                'message' => 'Giỏ hàng chỉ được phép chứa tối đa 50 sản phẩm',
                'data' => null,
            ];

            return response()->json($arr, 400);
        }

        try {
            ShoppingCart::create([
                'user_id' => $user_id,
                'product_id' => $product_id,
                'quantity' => $quantity,
                'color' => $color,
                'size' => $size,
                'img' => $img,
            ]);

            $arr = [
                'status' => true,
                'message' => 'Đã thêm sản phẩm vào giỏ hàng',
            ];

            return response()->json($arr, 201);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi khi thêm sản phẩm vào giỏ hàng',
            ];

            return response()->json($arr, 500);
        }
    }


    public function update(Request $request, string $id)
    {
        $input = $request->all();

        $validator = Validator::make($input, [
            'quantity' => 'numeric|min:1',
        ]);

        if ($validator->fails()) {
            $arr = [
                'status' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $sc = ShoppingCart::find($id);

        if (!$sc) {
            $arr = [
                'status' => false,
                'message' => 'không tồn tại',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $sc->update($input);

        $arr = [
            'status' => true,
            'message' => 'cập nhật thành công',
            'data' => new ShoppingCartResource($sc)
        ];

        return response()->json($arr, 200);
    }
    public function destroy( $user_id, $product_id)
    {
        try {
            $validator = Validator::make(
                [
                    'user_id' => $user_id,
                    'product_id' => $product_id,
                ],
                [
                    'user_id' => 'required|exists:shopping_cart,user_id',
                    'product_id' => 'required|exists:product,product_id',
                ]
            );

            if ($validator->fails()) {
                return response()->json(['status' => false, 'message' => 'Lỗi kiểm tra dữ liệu', 'data' => $validator->errors()], 400);
            }

            
            $shoppingCart = ShoppingCart::where('user_id', $user_id)->first();
                
            if ($shoppingCart) {
                $productInCart = $shoppingCart->products()->where('product_id', $product_id)->first();
                if ($productInCart) {
                    
                    $productInCart->delete();

                    return response()->json(['status' => true, 'message' => 'Sản phẩm đã được xóa khỏi giỏ hàng', 'data' => null], 200);
                } else {
                    return response()->json(['status' => false, 'message' => 'Sản phẩm không có trong giỏ hàng', 'data' => null], 404);
                }
            } else {
                return response()->json(['status' => false, 'message' => 'Giỏ hàng không tồn tại', 'data' => null], 404);
            }
        } catch (ModelNotFoundException $e) {
            
            $arr = [
                'success' => false,
                'message' => 'Giỏ hàng không tồn tại hoặc sản phẩm không có trong giỏ hàng',
                'data' => null
            ];

            return response()->json($arr, 404);
        }
    }
}
