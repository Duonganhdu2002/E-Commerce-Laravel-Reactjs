import React from "react";
import Header from "../components/public/Header";
import SubFooter from "../components/public/SubFooter";
import Footer from "../components/public/Footer";
import Navbar from "../components/public/Navbar";
import Banner1 from "../components/public/Banner1";
import MenuBar from "../components/public/MenuBar";
import Container from "../components/public/Container";
import FurniturePrview from "../components/public/FurniturePrview";
import SmartPhone from "../components/public/SmartPhone";
import Watch from "../components/public/Watch";
import Banner2 from "../components/public/Banner2";
import HeadPhone from "../components/public/HeadPhone";
import PopupAdvertisement from "../components/public/popupadvertisement";
import MyComponent from "../data/userApi";
import CheckPasswordComponent from "../data/PasswordCheck";

export default function Home() {
    return (
        <div>
            {/* <PopupAdvertisement /> */}
            <Header />
            <MyComponent/>
            <CheckPasswordComponent/>
            <Navbar />
            <MenuBar />
            <Container />
            <Banner1 />
            <FurniturePrview />
            <SmartPhone />
            <Watch />
            <Banner1 />
            <HeadPhone />
            <SubFooter />
            <Footer />
        </div>
    );
}
