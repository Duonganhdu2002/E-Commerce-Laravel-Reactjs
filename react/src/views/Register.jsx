import React from "react";
import Header from "../components/public/Header";
import Navbar from "../components/public/navbar";
import MenuBar from "../components/public/MenuBar";
import SubFooter from "../components/public/SubFooter";
import Footer from "../components/public/Footer";
import LayoutRegister from "../components/public/Layoutregister";

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
