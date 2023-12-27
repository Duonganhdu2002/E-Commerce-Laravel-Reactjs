import React from "react";
import Header from "../components/ui/Header";
import Navbar from "../components/ui/Navbar";
import MenuBar from "../components/ui/MenuBar";
import SubFooter from "../components/ui/Subfooter";
import Footer from "../components/ui/Footer";
import LayoutRegister from "../components/ui/Layoutregister";

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
