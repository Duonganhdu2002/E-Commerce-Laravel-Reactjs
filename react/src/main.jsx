import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./index.css";
import PopupChat from "./components/ui/PopupChat";
import { UserProvider } from "./context/UserContext";
import SubFooter from "./components/ui/Subfooter";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import MenuBarBussiness from "./components/ui-bussiness/MenuBar";
import LoginBussiness from "./components/ui-bussiness/Login";
import RegisterBussiness from "./components/ui-bussiness/Register";
import ProfileBussiness from "./components/ui-bussiness/Profile";
import Dashboard from "./pages/bussiness/Dashboard";
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
import OrderStatus from "./pages/OrderStatus";
import MenuBar from "./components/ui/MenuBar";
import Checkout from "./components/ui/Checkout";
import SubFooter2 from "./components/ui/SubFooter2";
import SearchLayout from "./components/ui/SearchLayout";
import Error404 from "./components/ui/error404";

const Customer = () => {
    return (
        <div>
            <div className="flex h-20 md:h-24"></div>
            <MenuBar/>
            <Outlet />
            <PopupChat />
            <SubFooter />
            <SubFooter2 />
        </div>
    );
}

const Bussiness = () => {
    return (
        <div className="flex flex-col h-screen relative ">
        <div className="fixed bg-gray-100 w-full h-full -z-10"></div>
            <div className=" top-0 z-10 mt-1">
                <MenuBarBussiness />
            </div>

            <div className="flex flex-grow md:flex-row mt-24 px-2">
                <div className="hidden md:block md:w-auto static left-0 bottom-0">
                    <TaskBar />
                </div>
                <div className="flex-grow w-full md:w-3/4 md:ml-80 px-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};


const Admin = () => {
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

                    {/* Error 404 */}
                    <Route path="*" element={<Error404 />} />

                    {/* Public */}

                    <Route path="/" element={<Customer />}>
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path="register" element={<Register />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="fields/:fieldId" element={<Field />} />
                        <Route path="brand/:brandId" element={<BrandPage />} />
                        <Route path="category/:categoryId" element={<CategoryPage />} />
                        <Route path="product/:productId" element={<ProductDetails />} />
                        <Route path="shop" element={<Shop />} />
                        <Route path="profile" element={<Profile />} />
                        <Route path="checkout" element={<Checkout />} />
                        <Route path="search/:searchKey" element={<SearchLayout />} />
                        <Route path="orderstatus" element={<OrderStatus />} />
                    </Route>

                    {/* Bussiness */}

                    <Route path="/bussiness" element={<Bussiness />}>
                        <Route index element={<Dashboard />} />
                        <Route path="login" element={<LoginBussiness />} />
                        <Route path="register" element={<RegisterBussiness />} />
                        <Route path="my-shipment" element={<div>My shipment</div>} />
                        <Route path="mass-ship" element={<div>Mass ship</div>} />
                        <Route path="shipping-setting" element={<div>Shipping setting</div>} />
                        <Route path="my-oders" element={<div>My oders</div>} />
                        <Route path="return-refun" element={<div>Return/Refun</div>} />
                        <Route path="cancelation" element={<div>Cancelation</div>} />
                        <Route path="my-products" element={<div>My products</div>} />
                        <Route path="add-new-product" element={<div>Add New Product</div>} />
                        <Route path="product-violations" element={<div>Product Violations</div>} />
                        <Route path="product-setting" element={<div>Product Settings</div>} />
                        <Route path="shop-rating" element={<div>Shop Rating</div>} />
                        <Route path="shop-information" element={<div>Shop Information</div>} />
                        <Route path="shop-category" element={<div>Shop Category</div>} />
                        <Route path="my-report" element={<div>My Report</div>} />
                        <Route path="dashboard" element={<div>Dashboard Content</div>} />
                        <Route path="inbox" element={<div>Inbox Content</div>} />
                        <Route path="profile" element={<ProfileBussiness />} />
                        <Route path="settings" element={<div>Settings Content</div>} />
                        <Route path="logout" element={<div>Logout Content</div>} />
                    </Route>

                    {/* Admin */}

                    <Route path="/admin" element={<Admin />}>
                        <Route index element={<div>Default Admin</div>} />
                        <Route path="login" element={<div>Default Admin login</div>} />
                    </Route>

                </Routes>
            </BrowserRouter>
        </UserProvider>
    </Provider>
);
