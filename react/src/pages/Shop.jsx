import React from "react";
import LayoutShop from "../components/ui/LayoutShop";
import SellingProducts from "../components/ui/SellingProducts";
import BestSellingProducts from "../components/ui/BestSellingProducts";


export default function Shop() {
    return (
        <div>
            <LayoutShop />
            <BestSellingProducts/>
            <SellingProducts/>
        </div>
    );
}
