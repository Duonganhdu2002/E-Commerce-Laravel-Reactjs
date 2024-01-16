import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import PopupChat from "./components/ui/PopupChat";
import { UserProvider } from "./context/UserContext";
import SubFooter from "./components/ui/Subfooter";
import Footer from "./components/ui/Footer";
import MenuBar from "./components/ui/MenuBar";
import BackgroundHeader from "./components/ui/BackgroundHeader";
import { Provider } from "react-redux";
import { store } from "./redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
    <Provider store={store}>
        <UserProvider>
            <BrowserRouter>
                <BackgroundHeader />
                <MenuBar />
                <App />
                <PopupChat />
                <SubFooter />
                <Footer />
            </BrowserRouter>
        </UserProvider>
    </Provider>
);
