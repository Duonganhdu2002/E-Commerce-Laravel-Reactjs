import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home";
import Login from "./views/Login";
const router = createBrowserRouter([
    {
        path : '/',
        element : <Home/>
    },
    {
        path : '/login',
        element : <Login/>
    },
]);

export default router;