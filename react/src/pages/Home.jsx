import React from "react";
import Banner1 from "../components/ui/Banner1";
import Container from "../components/ui/Container";
import FurniturePrview from "../components/ui/FurniturePrview";
import SmartPhone from "../components/ui/SmartPhone";
import Watch from "../components/ui/Watch";
import PopupAdvertisement from "../components/ui/PopupAdvertisement";
import FiledLayout from "../components/ui/FiledLayout";
import Modal from "../components/commom/modal/modal";
import CategoryBar from "../components/ui/CategoryBar";
import ProductSuggestion from "../components/ui/ProductSuggestion";


export default function Home() {
    return (
        <div>
            {/* <PopupAdvertisement /> */}
        
            <FiledLayout/>
            {/* <Modal/> */}
            {/* <UserPagination/> */}
            <Container />
            <ProductSuggestion/>
            <CategoryBar/>
            <Banner1 />
            <FurniturePrview />
            <SmartPhone />
            <Watch />
            <Banner1 />            
        </div>
    );
}
