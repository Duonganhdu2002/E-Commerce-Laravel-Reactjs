// App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Content from "./components/ui-bussiness/Content";

export default function App() {
    return (
        <div>
            <Routes>
                {/* Bussiness Route */}
                <Route path="/bussiness" element={<Content />} />
            </Routes>
        </div>
    );
}
