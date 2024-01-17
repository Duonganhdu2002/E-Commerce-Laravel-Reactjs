import React from "react";
import LayoutProductDetails from "../components/ui/LayoutProductDetails";
import LayoutShopInformation from "../components/ui/LayoutShopInformation";
import ProductPreview from "../components/ui/ProductPreview";

export default function ProductDetails() {
    return (
        <div>
            <LayoutProductDetails />
            <LayoutShopInformation/>
            <ProductPreview />
        </div>
    );
}
