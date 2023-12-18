import React from 'react'
import Header from '../components/public/Header'
import SubFooter from '../components/public/SubFooter'
import Footer from '../components/public/Footer'
import Navbar from '../components/public/navbar'
import MenuBar from '../components/public/menuBar'
import Container from '../components/public/Container'

export default function Home() {
  return (
    <div>
      <Header/>
      <Navbar/>
      <MenuBar/>
      <Container/>
      <SubFooter/>
      <Footer/>
    </div>
  )
}
