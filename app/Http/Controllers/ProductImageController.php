<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\product_image as PI;
use App\Http\Resources\ProductImageResource ;
use Illuminate\Database\Eloquent\ModelNotFoundException;



class ProductImageController extends Controller //chua test
{
    public function display() 
    {
       
        $pi = PI::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách',
            'data' => ProductImageResource::collection($pi)
        ];

        return response()->json($arr, 200);
    }
    public function upload(Request $request, string $productId) 
    {
        $request->validate([
            'image_url' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

      
        $image = $request->file('image');
        $imageName = time().'.'.$image->extension();
        $image->move(public_path('images'), $imageName);

     
        $pi = new PI([
            'product_id' => $productId,
            'image_url' => 'images/'.$imageName,
        ]);
        $pi->save();

        $arr = [
            'status' => true,
            'message' => 'đã lưu thành công',
            'data' => new ProductImageResource($pi),
        ];

        return response()->json($arr, 201);
    }

    public function destroy(string $id)
    {
        try {
            $pi = PI::findOrFail($id);
            $pi->delete();

            $arr = [
                'status' => true,
                'message' => 'đã được xóa thành công',
                'data' => null
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'success' => false,
                'message' => ' không tồn tại',
                'data' => null
            ];

            return response()->json($arr, 404);
        }
    }
}
