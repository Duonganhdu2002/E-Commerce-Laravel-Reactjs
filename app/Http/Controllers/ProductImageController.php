<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\product_image as ProductImage;
use App\Http\Resources\ProductImageResource;
use Illuminate\Database\Eloquent\ModelNotFoundException;



class ProductImageController extends Controller
{
    public function display()
    {

        $pi = ProductImage::all();

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
            $pi = ProductImage::where('product_id', $productId)->get();

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
    public function upload(Request $request)
    {
        $request->validate([
            'product_id' => 'required|integer',
            'image_urls' => 'required|array',
            'image_urls.*' => 'image|mimes:jpeg,png,jpg,gif,svg|max:2048',
        ]);

        $productId = $request->input('product_id');
        $imageUrls = [];

        if ($request->hasFile('image_urls')) {
            foreach ($request->file('image_urls') as $key => $image) {
                $imageName = time() . '_' . $key . '.' . $image->extension();

                $destinationPath = base_path('react/src/assets/image');

                if (!file_exists($destinationPath)) {
                    mkdir($destinationPath, 0755, true);
                }

                $image->move($destinationPath, $imageName);

                $imageUrls[] = $imageName;
            }

            foreach ($imageUrls as $imageUrl) {
                $pi = new ProductImage([
                    'product_id' => $productId,
                    'image_url' => $imageUrl,
                ]);
                $pi->save();
            }

            $arr = [
                'status' => true,
                'message' => 'Đã lưu thành công',
                'data' => $imageUrls,
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
            $pi = ProductImage::findOrFail($id);
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
