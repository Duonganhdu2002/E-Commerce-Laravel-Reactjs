// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Field from "./pages/Field";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import BrandPage from "./pages/BrandPage";
import CategoryPage from "./pages/CategoryPage";
import Profile from "./pages/Profile";

export default function App() {
    return (
        <div>
            <Routes>

                {/* Public route */}

                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/fields/:fieldId" element={<Field />} />
                <Route path="/brand/:brandId" element={<BrandPage/>} />
                <Route path="/category/:categoryId" element={<CategoryPage/>} />
                <Route path="/product/:productId" element={<ProductDetails />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
}
