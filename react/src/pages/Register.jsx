import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import MenuBar from "../components/MenuBar";
import SubFooter from "../components/Subfooter";
import Footer from "../components/Footer";
import LayoutRegister from "../components/Layoutregister";

export default function Register() {
    return (
        <div>
            <Header />
            <Navbar />
            <MenuBar />
            <LayoutRegister />
            <SubFooter />
            <Footer />
        </div>
    );
}
