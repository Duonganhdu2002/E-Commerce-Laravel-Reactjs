import { createBrowserRouter } from "react-router-dom";
import Home from "./views/Home"
import Login from "./views/Login";
import Signup from "./views/Signup";
const router = createBrowserRouter([
    {
        path : '/',
        element : <Home/>
    },
    {
        path : '/login',
        element : <Login/>
    },
    {
        path : '/signup',
        element : <Signup/>
    },
]);

export default router;