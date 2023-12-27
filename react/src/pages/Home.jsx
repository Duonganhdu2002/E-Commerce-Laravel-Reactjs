import React from "react";
import Header from "../components/Header";
import SubFooter from "../components/Subfooter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Banner1 from "../components/Banner1";
import MenuBar from "../components/MenuBar";
import Container from "../components/Container";
import FurniturePrview from "../components/FurniturePrview";
import SmartPhone from "../components/SmartPhone";
import Watch from "../components/Watch";
import Banner2 from "../components/Banner2";
import HeadPhone from "../components/HeadPhone";
import PopupAdvertisement from "../components/PopupAdvertisement";
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
