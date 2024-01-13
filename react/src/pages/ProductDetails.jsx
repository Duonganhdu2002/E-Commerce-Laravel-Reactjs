import React from "react";
import Header from "../components/ui/Header";
import MenuBar from "../components/ui/MenuBar";
import SubFooter from "../components/ui/Subfooter";
import Footer from "../components/ui/Footer";
import LayoutProductDetails from "../components/ui/LayoutProductDetails";
import SuggestedProducts from "../components/ui/SuggestedProducts";

export default function ProductDetails() {
    return (
        <div>
          
            <LayoutProductDetails />
            <SuggestedProducts/>
        </div>
    );
}
