import React from 'react'
import Header from '../components/ui/Header'
import MenuBar from '../components/ui/MenuBar'
import SubFooter from '../components/ui/Subfooter'
import Footer from '../components/ui/Footer'
import Brand from '../components/ui/field/Brand'
import Category from '../components/ui/field/Category'

export default function Field() {
    return (
        <div>
            <Brand/>
            <Category/>
        </div>
    )
}
