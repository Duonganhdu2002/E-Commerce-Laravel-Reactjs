import React from "react";
import Banner1 from "../components/ui/Banner1";
import Container from "../components/ui/Container";
import FurniturePrview from "../components/ui/FurniturePrview";
import SmartPhone from "../components/ui/SmartPhone";
import Watch from "../components/ui/Watch";
import PopupAdvertisement from "../components/ui/PopupAdvertisement";
import FiledLayout from "../components/ui/FiledLayout";
import Modal from "../components/commom/modal/modal";
import ProductSuggestion from "../components/ui/ProductSuggestion";
import Banner3 from "../components/ui/Banner3";
import Banner4 from "../components/ui/Banner4";


export default function Home() {
    return (
        <div>
            {/* <PopupAdvertisement /> */}

            <FiledLayout/>
            {/* <Modal/> */}
            {/* <UserPagination/> */}
            <Container />
            <ProductSuggestion/>
            <Banner3/>
            <Banner1 />
            <FurniturePrview />
            <Banner4/>
            <SmartPhone />
            {/* <Watch /> */}
        </div>
    );
}
