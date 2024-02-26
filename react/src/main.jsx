import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./index.css";
import PopupChat from "./components/ui/PopupChat";
import { UserProvider } from "./context/UserContext";
import SubFooter from "./components/ui/Subfooter";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import MenuBarBusiness from "./components/ui-business/MenuBar";
import LoginBusiness from "./components/ui-business/Login";
import RegisterBusiness from "./components/ui-business/Register";
import ProfileBusiness from "./components/ui-business/Profile";
import InboxBusiness from "./components/ui-business/Inbox";
import MyProductsBusiness from "./pages/business/MyProducts";
import DashboardBusiness from "./pages/business/Dashboard";
import AddProductsBusiness from "./components/ui-business/AddProducts";
import { MyOrdersBusiness } from "./components/ui-business/MyOrders";
import { CancellationBusiness } from "./components/ui-business/Cancellation";
import TaskBar from "./components/ui-business/TaskBar";
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
import { ShopRating } from "./components/ui-business/ShopRating";
import { ShopInformation } from "./components/ui-business/ShopInformation";
import MyShipment from "./components/ui-business/MyShipment";
import ShopCategory from "./components/ui-business/ShopCategory";
import Success from "./components/ui/Success";
import Background from "./assets/image/4060492.jpg"


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

const Business = () => {
    return (
        <div className="flex flex-col h-screen relative ">
            <div className="fixed bg-gray-50 w-full h-full -z-10"><img src={Background} alt="" className=" w-full h-full object-cover"/></div>
            <div className=" top-0 z-10 mt-1">
                <MenuBarBusiness />
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
            <div className="fixed bg-gray-50 w-full h-full -z-10"><img src={Background} alt="" className=" w-full h-full object-cover"/></div>
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

const PrivateBusinessRoute = ({ element }) => {

    const seller = useSelector((state) => state.seller.seller);

    if (!seller) {
        return <Navigate to="/business/login" />;
    }

    if (seller.type_account_id === 2) {
        return element;
    } else {
        return <Navigate to="/business/login" />;
    }
};

const PrivateCustomerRoute = ({ element }) => {

    const user = useSelector((state) => state.user.user);

    if (!user) {
        return <Navigate to="/login" />;
    }

    if (user.type_account_id === 3) {
        return element;
    } else {
        return <Navigate to="/login" />;
    }
};


const App = () => {
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
                                <Route path="cart" element={<PrivateCustomerRoute element={<Cart />} />} />
                                <Route path="fields/:fieldId" element={<Field />} />
                                <Route path="brand/:brandId" element={<BrandPage />} />
                                <Route path="category/:categoryId" element={<CategoryPage />} />
                                <Route path="product/:productId" element={<ProductDetails />} />
                                <Route path="shop/:user_id" element={<Shop />} />
                                <Route path="profile" element={<PrivateCustomerRoute element={<Profile />} />} />
                                <Route path="checkout" element={<PrivateCustomerRoute element={<Checkout />} />} />
                                <Route path="search/:searchKey" element={<SearchLayout />} />
                                <Route path="orderstatus" element={<PrivateCustomerRoute element={<OrderStatus />} />} />
                                <Route path="success" element={<PrivateCustomerRoute element={<Success />} />} />
                            </Route>

                            {/* Business */}

                            <Route path="/business" element={<Business />}>
                                <Route index element={<PrivateBusinessRoute element={<DashboardBusiness />} />} />
                                <Route path="login" element={<LoginBusiness />} />
                                <Route path="register" element={<RegisterBusiness />} />
                                <Route path="my-shipment" element={<PrivateBusinessRoute element={<MyShipment />} />} />
                                <Route path="my-oders" element={<PrivateBusinessRoute element={<MyOrdersBusiness />} />} />
                                <Route path="cancelation" element={<PrivateBusinessRoute element={<CancellationBusiness />} />} />
                                <Route path="my-products" element={<PrivateBusinessRoute element={<MyProductsBusiness />} />} />
                                <Route path="add-new-product" element={<PrivateBusinessRoute element={<AddProductsBusiness />} />} />
                                <Route path="shop-rating" element={<PrivateBusinessRoute element={<ShopRating />} />} />
                                <Route path="shop-information" element={<PrivateBusinessRoute element={<ShopInformation />} />} />
                                <Route path="shop-category" element={<PrivateBusinessRoute element={<ShopCategory />} />} />
                                <Route path="dashboard" element={<PrivateBusinessRoute element={<div>Dashboard Content</div>} />} />
                                <Route path="inbox" element={<PrivateBusinessRoute element={<InboxBusiness />} />} />
                                <Route path="profile" element={<PrivateBusinessRoute element={<ProfileBusiness />} />} />
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
            <App />
        </UserProvider>
    </Provider>
);
