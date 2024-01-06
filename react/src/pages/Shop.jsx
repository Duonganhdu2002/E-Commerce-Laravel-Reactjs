import React from "react";
import LayoutShop from "../components/ui/LayoutShop";
import Header from "../components/ui/Header";
import Navbar from "../components/ui/Navbar";
import SuggestedProducts from "../components/ui/SuggestedProducts";
import SubFooter from "../components/ui/Subfooter";
import Footer from "../components/ui/Footer";

export default function Shop() {
    return (
        <div>
            <Header />
            <Navbar />
            <LayoutShop />
            <SuggestedProducts />
            <SubFooter />
            <Footer />
        </div>
    );
}
