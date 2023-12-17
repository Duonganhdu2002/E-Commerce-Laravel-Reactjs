import { createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Dangnhap from "./views/Dangnhap";
import Login from "./views/login";
const router = createBrowserRouter([
    {
        path : '/',
        element : <Dangnhap/>
    },
    {
        path : '/login',
        element : <Login/>
    },
]);

export default router;