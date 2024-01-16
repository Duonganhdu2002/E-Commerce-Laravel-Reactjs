import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import PopupChat from "./components/ui/PopupChat";
import { UserProvider } from "./context/UserContext";
import SubFooter from "./components/ui/Subfooter";
import Footer from "./components/ui/Footer";
import BackgroundHeader from "./components/ui/BackgroundHeader";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import MenuBarBussiness from "./components/ui-bussiness/MenuBar";
import TaskBar from "./components/ui-bussiness/TaskBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Field from "./pages/Field";
import BrandPage from "./pages/BrandPage";
import CategoryPage from "./pages/CategoryPage";
import ProductDetails from "./pages/ProductDetails";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import MenuBar from "./components/ui/MenuBar";

const Customer = () => {
    return (
        <div>
            <BackgroundHeader />
            <MenuBar/>
            <Outlet />
            <PopupChat />
            <SubFooter />
            <Footer />
        </div>
    );
}

const Bussiness = () => {
    return (
        <div>
            <MenuBarBussiness />
            <div className='flex flex-col md:flex-row'>
                <div className='hidden md:block md:w-auto'>
                    <TaskBar />
                </div>
                <div className='hidden md:block w-[100%] md:w-[70%]'>
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/bussiness" element={<Bussiness />}>
                        <Route path="login" element={<div>Default Page login</div>} />
                        <Route
                            index
                            element={<div>Default Page Content</div>}
                        />
                    </Route>
                    <Route path="/" element={<Customer />}>
                        <Route index element={<Home/>} />
                        <Route path="login" element={<Login/>} />
                        <Route path="register" element={<Register/>} />
                        <Route path="cart" element={<Cart/>} />
                        <Route path="fields/:fieldId" element={<Field/>} />
                        <Route path="brand/:brandId" element={<BrandPage/>} />
                        <Route path="category/:categoryId" element={<CategoryPage/>} />
                        <Route path="product/:productId" element={<ProductDetails/>} />
                        <Route path="shop" element={<Shop/>} />
                        <Route path="profile" element={<Profile/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    </Provider>
);
