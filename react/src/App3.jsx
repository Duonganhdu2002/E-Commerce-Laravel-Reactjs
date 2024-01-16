// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import ContentMobile from "./pages/bussiness/ContentMoblie";
import ProductMobile from "./pages/bussiness/ProductMobile";

export default function App3() {
    return (
        <div>
            <Routes>
                {/* Bussiness Route */}
                <Route path="/bussiness" element={<ContentMobile/>} />
                <Route path="/bussiness/products" element={<ProductMobile/>} />
            </Routes>
        </div>
    );
}
