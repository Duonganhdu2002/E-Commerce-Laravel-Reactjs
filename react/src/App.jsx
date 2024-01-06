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

export default function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/fields/:fieldId" element={<Field />} />
                <Route path="/productdetails" element={<ProductDetails />} />
                <Route path="/shop" element={<Shop />} />
            </Routes>
        </div>
    );
}
