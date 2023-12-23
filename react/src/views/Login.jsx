import React from 'react'
import Header from '../components/public/Header'
import Navbar from '../components/public/navbar'
import MenuBar from '../components/public/MenuBar'
import SubFooter from '../components/public/SubFooter'
import Footer from '../components/public/Footer'
import LayoutLogin from '../components/public/Layoutlogin'



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
