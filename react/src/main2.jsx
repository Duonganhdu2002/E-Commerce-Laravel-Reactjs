import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App2 from "./App2";
import MenuBar from "./components/ui-bussiness/MenuBar";
import TaskBar from "./components/ui-bussiness/TaskBar";
import ContentMobile from "./pages/bussiness/ContentMoblie";


ReactDOM.createRoot(document.getElementById("root2")).render(
    <BrowserRouter>
        <MenuBar />
        <div className=' flex flex-col md:flex-row'>
            <div className='hidden md:block md:w-auto'>
                <TaskBar />
            </div>
            <div className=' hidden md:block w-[100%] md:w-[70%]'>
                <App2 />
            </div>
            <div className=' md:hidden'>
                <ContentMobile/>
            </div>
        </div>
    </BrowserRouter>
);
