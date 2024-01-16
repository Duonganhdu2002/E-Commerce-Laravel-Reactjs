// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/bussiness/HomePage";

export default function App() {
    return (
        <div>
            <Routes>

                {/* Bussiness Route */}

                <Route path="/bussiness" element={<HomePage/>} />

                
            </Routes>
        </div>
    );
}
