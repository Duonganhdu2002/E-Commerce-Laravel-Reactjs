import React from 'react'
import Header from '../components/ui/Header'
import Navbar from '../components/ui/Navbar'
import MenuBar from '../components/ui/MenuBar'
import SubFooter from '../components/ui/Subfooter'
import Footer from '../components/ui/Footer'
import Brand from '../components/ui/field/brand'
import Category from '../components/ui/field/Category'

export default function Field() {
    return (
        <div>
            <Header />
            <Navbar />
            <MenuBar />
            <Brand/>
            <Category/>
            <SubFooter />
            <Footer />
        </div>
    )
}
