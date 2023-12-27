import React from 'react'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import MenuBar from '../components/MenuBar'
import SubFooter from '../components/Subfooter'
import Footer from '../components/Footer'
import LayoutLogin from '../components/Layoutlogin'



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
