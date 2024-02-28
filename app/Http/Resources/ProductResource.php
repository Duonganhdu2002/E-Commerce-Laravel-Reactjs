<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProductResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'product_id' => $this->product_id,
            'name' => $this->name,
            'description' => $this->description,
            'created_by_user_id' => $this->created_by_user_id,
            'product_brand_id' => $this->product_brand_id,
            'product_category_id' => $this->product_category_id,
            'price' => $this->price,
            'stock' => $this->stock,
            'discount_id' => $this->discount_id,
            'created_at' => $this->created_at,
            'modified_at' => $this->modified_at,
            'deleted_at' => $this->deleted_at,
            'category_name' => $this->productCategory->product_category_name, 
            'brand_name' => $this->productBrand->product_brand_name, 
        ];
    }
}
