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
import InboxBussiness from "./components/ui-bussiness/Inbox";
import MyProductsBussiness from "./pages/bussiness/MyProducts";
import DashboardBussiness from "./pages/bussiness/Dashboard";
import AddProductsBussiness from "./components/ui-bussiness/AddProducts";
import { MyOrdersBussiness } from "./components/ui-bussiness/MyOrders";
import TaskBar from "./components/ui-bussiness/TaskBar";
import MenuBarAdmin from "./components/ui-admin/MenuBar";
import LoginAdmin from "./components/ui-admin/Login";
import RegisterAdmin from "./components/ui-admin/Register";
import ProfileAdmin from "./components/ui-admin/Profile";
import InboxAdmin from "./components/ui-admin/Inbox";
import MyProductsAdmin from "./pages/admin/MyProducts";
import DashboardAdmin from "./pages/admin/Dashboard";
import TaskBarAdmin from "./components/ui-admin/TaskBar";
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
import { useSelector } from 'react-redux'
import { ShopRating } from "./components/ui-bussiness/ShopRating";
import { ShopInformation } from "./components/ui-bussiness/ShopInformation";

const Customer = () => {
    return (
        <div>
            <div className="flex h-20 md:h-24"></div>
            <MenuBar />
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
        <div className="flex flex-col h-screen relative ">
            <div className="fixed bg-gray-100 w-full h-full -z-10"></div>
            <div className=" top-0 z-10 mt-1">
                <MenuBarAdmin />
            </div>

            <div className="flex flex-grow md:flex-row mt-24 px-2">
                <div className="hidden md:block md:w-auto static left-0 bottom-0">
                    <TaskBarAdmin />
                </div>
                <div className="flex-grow w-full md:w-3/4 md:ml-80 px-8">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

const App = () => {
    const user = useSelector((state) => state.user.user);
    return (
        <div>
            <BrowserRouter>
                <Provider store={store}>
                    <UserProvider>
                        <Routes>

                            {/* Error 404 */}
                            <Route path="*" element={<Error404 />} />

                            {/* Public */}

                            <Route path="/" element={<Customer />}>
                                <Route index element={<Home />} />
                                <Route path="login" element={<Login />} />
                                <Route path="register" element={<Register />} />
                                <Route path={user ? "/cart" : "/login"} element={<Cart />} />
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
                                <Route index element={<DashboardBussiness />} />
                                <Route path="login" element={<LoginBussiness />} />
                                <Route path="register" element={<RegisterBussiness />} />
                                <Route path="my-shipment" element={<div>My shipment</div>} />
                                <Route path="my-oders" element={<MyOrdersBussiness />} />
                                <Route path="cancelation" element={<div>Cancelation</div>} />
                                <Route path="my-products" element={<MyProductsBussiness />} />
                                <Route path="add-new-product" element={<AddProductsBussiness />} />
                                <Route path="shop-rating" element={<ShopRating />} />
                                <Route path="shop-information" element={<ShopInformation />} />
                                <Route path="shop-category" element={<div>Shop Category</div>} />
                                <Route path="dashboard" element={<div>Dashboard Content</div>} />
                                <Route path="inbox" element={<InboxBussiness />} />
                                <Route path="profile" element={<ProfileBussiness />} />
                                <Route path="logout" element={<div>Logout Content</div>} />
                            </Route>

                            {/* Admin */}

                            <Route path="/admin" element={<Admin />}>
                                <Route index element={<DashboardAdmin />} />
                                <Route path="login" element={<LoginAdmin />} />
                                <Route path="register" element={<RegisterAdmin />} />
                                <Route path="my-shipment" element={<div>My shipment</div>} />
                                <Route path="mass-ship" element={<div>Mass ship</div>} />
                                <Route path="shipping-setting" element={<div>Shipping setting</div>} />
                                <Route path="my-oders" element={<div>My oders</div>} />
                                <Route path="return-refun" element={<div>Return/Refun</div>} />
                                <Route path="cancelation" element={<div>Cancelation</div>} />
                                <Route path="my-products" element={<MyProductsAdmin />} />
                                <Route path="add-new-product" element={<div>Add New Product</div>} />
                                <Route path="product-violations" element={<div>Product Violations</div>} />
                                <Route path="product-setting" element={<div>Product Settings</div>} />
                                <Route path="shop-rating" element={<div>Shop Rating</div>} />
                                <Route path="shop-information" element={<div>Shop Information</div>} />
                                <Route path="shop-category" element={<div>Shop Category</div>} />
                                <Route path="my-report" element={<div>My Report</div>} />
                                <Route path="dashboard" element={<div>Dashboard Content</div>} />
                                <Route path="inbox" element={<InboxAdmin />} />
                                <Route path="profile" element={<ProfileAdmin />} />
                                <Route path="settings" element={<div>Settings Content</div>} />
                                <Route path="logout" element={<div>Logout Content</div>} />
                            </Route>

                        </Routes>
                    </UserProvider>
                </Provider>
            </BrowserRouter>
        </div>
    );
};

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <UserProvider>
            <App/>
        </UserProvider>
    </Provider>
);
