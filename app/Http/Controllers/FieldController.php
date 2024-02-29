<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Resources\FieldResource;
use App\Models\Field;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\ModelNotFoundException;

class FieldController extends Controller
{

    public function index()
    {

        $f = Field::all();

        $arr = [
            'status' => true,
            'message' => 'Danh sách field',
            'data' => FieldResource::collection($f)
        ];

        return response()->json($arr, 200);
    }

    public function show(string $id)
    {
        $field = Field::find($id);

        if (empty($field)) {
            $arr = [
                'status' => false,
                'message' => 'Không có người dùng này',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $arr = [
            'status' => true,
            'message' => "Thông tin",
            'data' => $field,
        ];
        return response()->json($arr, 200);
    }

    public function update(Request $request, string $id)
    {
        $field = Field::find($id);

        if (empty($field)) {
            $arr = [
                'status' => false,
                'message' => 'Không có lĩnh vực này',
                'data' => null
            ];
            return response()->json($arr, 404);
        }

        $input = $request->all();

        $validator = Validator::make($input, [
            'field_name' => 'required',
        ]);

        if ($validator->fails()) {
            $arr = [
                'success' => false,
                'message' => 'Lỗi kiểm tra dữ liệu',
                'data' => $validator->errors()
            ];
            return response()->json($arr, 200);
        }

        $field->update($input);

        $arr = [
            'status' => true,
            'message' => 'Thông tin lĩnh vực đã được cập nhật thành công',
            'data' => new FieldResource($field)
        ];

        return response()->json($arr, 200);
    }


    public function delete(string $id)
    {
        try {
            $field = Field::findOrFail($id);
            $field->delete();

            $arr = [
                'status' => true,
                'message' => 'Lĩnh vực đã được xóa thành công',
                'data' => null
            ];

            return response()->json($arr, 200);
        } catch (ModelNotFoundException $e) {
            $arr = [
                'success' => false,
                'message' => 'Lĩnh vực dùng không tồn tại',
                'data' => null
            ];

            return response()->json($arr, 404);
        }
    }

    public function addField(Request $request)
    {
        try {
            $input = $request->all();

            $validator = Validator::make($input, [
                'field_name' => 'required',
                'icon_field' => 'required',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'status' => 400,
                    'message' => 'Validation error',
                    'errors' => $validator->errors()
                ], 400);
            }

            $field = Field::create([
                'field_name' => $input['field_name'],
                'icon_field' => $input['icon_field'],
            ]);

            return response()->json([
                'status' => 201,
                'message' => 'Field Created Successfully',
                'data' => $field,
            ], 201);
        } catch (\Exception $e) {
            return response()->json([
                'status' => 500,
                'message' => 'Error creating field',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}