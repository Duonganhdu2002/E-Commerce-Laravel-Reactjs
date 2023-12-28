import React from 'react'
import Header from '../components/ui/Header'
import Navbar from '../components/ui/Navbar'
import MenuBar from '../components/ui/MenuBar'
import SubFooter from '../components/ui/Subfooter'
import Footer from '../components/ui/Footer'
import LayoutLogin from '../components/ui/Layoutlogin'



export default function Login() {
  return (
    <div>
    <Header/>
    <Navbar/>
    <MenuBar/>
    <LayoutLogin />
    <SubFooter/>
    <Footer/>
    </div>
  )
}
