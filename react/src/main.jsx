import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet, Navigate } from "react-router-dom";
import "./index.css";
import PopupChat from "./components/ui/PopupChat";
import { UserProvider } from "./context/UserContext";
import SubFooter from "./components/ui/Subfooter";
import User from "./pages/User";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
import MenuBarBusiness from "./components/ui-business/MenuBar";
import LoginBusiness from "./components/ui-business/Login";
import RegisterBusiness from "./components/ui-business/Register";
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
import Banking from "./components/ui/user/Banking";
import Address from "./components/ui/user/Address";
import ChangePassword from "./components/ui/user/ChangePassword";
import MenuBar from "./components/ui/MenuBar";
import Checkout from "./components/ui/Checkout";
import SubFooter2 from "./components/ui/SubFooter2";
import SearchLayout from "./components/ui/SearchLayout";
import Purchase from "./components/ui/user/Purchase";
import UpdateOrder from "./components/ui/user/UpdateOrder";
import Promotion from "./components/ui/user/Promotion";
import UpdateCompany from "./components/ui/user/UpdateCompany";
import UpdateWallet from "./components/ui/user/UpdateWallet";
import VoucherWallet from "./components/ui/user/VoucherWallet";
import Error404 from "./components/ui/error404";
import { useSelector } from 'react-redux'
import { ShopRating } from "./components/ui-business/ShopRating";
import { ShopInformation } from "./components/ui-business/ShopInformation";
import MyShipment from "./components/ui-business/MyShipment";
import Success from "./components/ui/Success";
import { UserList } from "./components/ui-admin/UserList";
import FieldList from "./components/ui-admin/FieldList";
import CategoryList from "./components/ui-admin/CategoryList";
import BrandList from "./components/ui-admin/BrandList";
import OrderList from "./components/ui-admin/OrderList";
import OrderStatusList from "./components/ui-admin/OrderStatus";
import ProductList from "./components/ui-admin/ProductList";
import ReviewList from "./components/ui-admin/ReviewList";
import ReviewUserList from "./components/ui-admin/ReviewUser";
import ShoppingMethodList from "./components/ui-admin/ShoppingMethod";
import Setting from "./components/ui-admin/Setting";
import Payment from "./components/ui/Payment";


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
            <div className="fixed bg-gray-100 w-full h-full -z-10"></div>
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

const PrivateAdminRoute = ({ element }) => {

    const admin = useSelector((state) => state.admin.admin);

    if (!admin) {
        return <Navigate to="/admin/login" />;
    }

    if (admin.type_account_id === 1) {
        return element;
    } else {
        return <Navigate to="/admin/login" />;
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
                                <Route path="checkout" element={<PrivateCustomerRoute element={<Checkout />} />} />
                                <Route path="payment" element={<PrivateCustomerRoute element={<Payment />} />} />
                                <Route path="search/:searchKey" element={<SearchLayout />} />
                                <Route path="success" element={<PrivateCustomerRoute element={<Success />} />} />
                                {/* {User} */}
                                <Route path="/user" element={<User />}>
                                    <Route path="profile" element={<PrivateCustomerRoute element={<Profile />} />} />
                                    <Route path="banking" element={<PrivateCustomerRoute element={<Banking />} />} />
                                    <Route path="address" element={<PrivateCustomerRoute element={<Address />} />} />
                                    <Route path="password" element={<PrivateCustomerRoute element={<ChangePassword />} />} />
                                    <Route path="purchase" element={<PrivateCustomerRoute element={<Purchase />} />} />
                                    <Route path="order" element={<PrivateCustomerRoute element={<UpdateOrder />} />} />
                                    <Route path="promotion" element={<PrivateCustomerRoute element={<Promotion />} />} />
                                    <Route path="wallet" element={<PrivateCustomerRoute element={<UpdateWallet />} />} />
                                    <Route path="company" element={<PrivateCustomerRoute element={<UpdateCompany />} />} />
                                    <Route path="voucher-wallet" element={<PrivateCustomerRoute element={<VoucherWallet />} />} />
                                </Route>
                                <Route path="orderstatus" element={<PrivateCustomerRoute element={<OrderStatus />} />} />
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
                                <Route path="dashboard" element={<PrivateBusinessRoute element={<Business />} />} />
                                <Route path="inbox" element={<PrivateBusinessRoute element={<InboxBusiness />} />} />
                            </Route>

                            {/* Admin */}

                            <Route path="/admin" element={<Admin />}>
                                <Route index element={<PrivateAdminRoute element={<DashboardAdmin />} />} />
                                <Route path="login" element={<LoginAdmin />} />
                                <Route path="register" element={<RegisterAdmin />} />
                                <Route path="user-list" element={<PrivateAdminRoute element={<UserList />} />} />
                                <Route path="field-list" element={<PrivateAdminRoute element={<FieldList />} />} />
                                <Route path="category-list" element={<PrivateAdminRoute element={<CategoryList />} />} />
                                <Route path="brand-list" element={<PrivateAdminRoute element={<BrandList />} />} />
                                <Route path="order-list" element={<PrivateAdminRoute element={<OrderList />} />} />
                                <Route path="order-status-list" element={<PrivateAdminRoute element={<OrderStatusList />} />} />
                                <Route path="product-list" element={<PrivateAdminRoute element={<ProductList />} />} />
                                <Route path="review-list" element={<PrivateAdminRoute element={<ReviewList />} />} />
                                <Route path="review-user-list" element={<PrivateAdminRoute element={<ReviewUserList />} />} />
                                <Route path="shopping-method-list" element={<PrivateAdminRoute element={<ShoppingMethodList />} />} />
                                <Route path="dashboard" element={<PrivateAdminRoute element={<DashboardAdmin />} />} />
                                <Route path="profile" element={<PrivateAdminRoute element={<ProfileAdmin />} />} />
                                <Route path="settings" element={<PrivateAdminRoute element={<Setting />} />} />
                                <Route path="logout" element={<PrivateAdminRoute element={<div>Cancelation</div>} />} />
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
