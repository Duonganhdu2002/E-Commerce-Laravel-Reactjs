import React from "react";
import LayoutProductDetails from "../components/ui/LayoutProductDetails";
import LayoutShopInformation from "../components/ui/LayoutShopInformation";
import ProductPreview from "../components/ui/ProductPreview";
import ShopAccount from "../components/ui/ShopAccount";

export default function ProductDetails() {
    return (
        <div>
            <LayoutProductDetails />
            <ShopAccount/>
            <ProductPreview />
        </div>
    );
}
