import React from 'react'
import Header from '../components/ui/Header'
import Navbar from '../components/ui/Navbar'
import MenuBar from '../components/ui/MenuBar'
import Layoutcart from '../components/ui/Layoutcart'
import SubFooter from '../components/ui/Subfooter'
import Footer from '../components/ui/Footer'
import SuggestedProducts from '../components/ui/SuggestedProducts'



export default function Cart() {
  return (
    <div>
    <Header/>
    <Navbar/>
    <MenuBar/>
    <Layoutcart/>
    <SuggestedProducts/>
    <SubFooter/>
    <Footer/>
    </div>
  )
}
