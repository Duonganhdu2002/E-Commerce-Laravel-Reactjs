<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\product_image as PI;
use App\Http\Resources\ProductImageResource ;
use Illuminate\Database\Eloquent\ModelNotFoundException;



class ProductImageController extends Controller 
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
    public function displayByProductId(string $productId) //lấy hình ảnh của 1 sp 
    {
        try {
            $pi = PI::where('product_id', $productId)->get();

            $arr = [
                'status' => true,
                'message' => 'hình ảnh cho sản phẩm có ID ' . $productId,
                'data' => ProductImageResource::collection($pi),
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'success' => false,
                'message' => 'Sản phẩm không tồn tại hoặc không có hình ảnh',
                'data' => null,
            ];

            return response()->json($arr, 404);
        }
    }
    public function upload(Request $request, string $productId) 
{
    $request->validate([
        'image_url' => 'required|image|mimes:jpeg,png,jpg,gif,svg|max:2048',

    ]);

    if ($request->hasFile('image_url')) {
        $image = $request->file('image_url');
        $imageName = time().'.'.$image->extension();
        $image->move(public_path('image_url'), $imageName);

        $pi = new PI([
            'product_id' => $productId,
            'image_url' => $imageName,
        ]);
        $pi->save();

        $arr = [
            'status' => true,
            'message' => 'Đã lưu thành công',
            'data' => new ProductImageResource($pi),
        ];

        return response()->json($arr, 201);
    } else {
        $arr = [
            'status' => false,
            'message' => 'Không tìm thấy tệp hình ảnh trong yêu cầu',
            'data' => null,
        ];

        return response()->json($arr, 400);
    }
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
