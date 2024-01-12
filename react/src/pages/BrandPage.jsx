import React from 'react'
import Header from '../components/ui/Header'
import Navbar from '../components/ui/Navbar'
import MenuBar from '../components/ui/MenuBar'
import SubFooter from '../components/ui/Subfooter'
import Footer from '../components/ui/Footer'
import BrandProduct from '../components/ui/brand/BrandProduct'

export default function BrandPage() {
    return (
        <div>
            <Header />
            <Navbar />
            <MenuBar />
            <BrandProduct/>
            <SubFooter />
            <Footer />
        </div>
    )
}
