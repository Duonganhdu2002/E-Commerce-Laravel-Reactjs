import React from 'react'
import Header from '../components/ui/Header'
import Navbar from '../components/ui/Navbar'
import MenuBar from '../components/ui/MenuBar'
import SubFooter from '../components/ui/Subfooter'
import Footer from '../components/ui/Footer'
import CategoryProduct from '../components/ui/category/CategoryProduct'

export default function CategoryPage() {
    return (
        <div>
            <Header />
            <Navbar />
            <MenuBar />
            <CategoryProduct/>
            <SubFooter />
            <Footer />
        </div>
    )
}
