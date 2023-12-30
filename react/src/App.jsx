import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from "./pages/Cart";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
