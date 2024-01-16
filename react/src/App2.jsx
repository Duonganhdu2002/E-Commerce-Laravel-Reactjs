// App.jsx
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Content from "./components/ui-bussiness/Content";
import Content2 from "./components/ui-bussiness/Content2";

export default function App2() {
    return (
        <div>
            <Routes>
                <Route path="/bussiness" element={<Content />}>
                    <Route path="products" element={<Content2 />} />
                </Route>
            </Routes>
        </div>
    );
}
