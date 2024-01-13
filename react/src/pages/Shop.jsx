import React from "react";
import LayoutShop from "../components/ui/LayoutShop";
import Header from "../components/ui/Header";
import SuggestedProducts from "../components/ui/SuggestedProducts";
import SubFooter from "../components/ui/Subfooter";
import Footer from "../components/ui/Footer";
import SellingProducts from "../components/ui/SellingProducts";
import BestSellingProducts from "../components/ui/BestSellingProducts";


export default function Shop() {
    return (
        <div>
            <LayoutShop />
            <BestSellingProducts/>
            <SellingProducts/>
            <SuggestedProducts />
        </div>
    );
}
