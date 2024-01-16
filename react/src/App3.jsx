// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ProductMobile from "./pages/bussiness/ProductMobile";
import ContentMobile from "./pages/bussiness/ContentMoblie";

export default function App3() {
    return (
        <div>
            <Routes>
                {/* Business Route */}
                <Route path="/bussiness" element={<ContentMobile/>} />
                <Route path="/bussiness/products" element={<ProductMobile />} />
            </Routes>
        </div>
    );
}
