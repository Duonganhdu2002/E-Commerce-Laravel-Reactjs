import React from "react";
import Header from "../components/ui/Header";
import SubFooter from "../components/ui/Subfooter";
import Footer from "../components/ui/Footer";
import Navbar from "../components/ui/Navbar";
import Banner1 from "../components/ui/Banner1";
import MenuBar from "../components/ui/MenuBar";
import Container from "../components/ui/Container";
import FurniturePrview from "../components/ui/FurniturePrview";
import SmartPhone from "../components/ui/SmartPhone";
import Watch from "../components/ui/Watch";
import Banner2 from "../components/ui/Banner2";
import HeadPhone from "../components/ui/HeadPhone";
import PopupAdvertisement from "../components/ui/PopupAdvertisement";
import FiledLayout from "../components/ui/FiledLayout";

export default function Home() {
    return (
        <div>
            {/* <PopupAdvertisement /> */}
            <Header />
            <Navbar />
            <MenuBar />
            <FiledLayout/>
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
