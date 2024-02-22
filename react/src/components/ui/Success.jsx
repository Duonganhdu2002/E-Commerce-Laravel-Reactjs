import React from 'react'
import SuccessImg from '../../assets/image/success_7518748.png';
import { Button } from '@material-tailwind/react';
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <div className=' py-14'>
            <div className='flex justify-center items-center'><img src={SuccessImg} alt="" className=' w-64' /></div>
            <div>
                <p className='flex justify-center text-4xl font-semibold mt-10'>Successful Purchase</p>
                <p className='flex justify-center mt-5'>You have successfully purchased, please click the button below to return to our homepage!</p>
                <div className=' flex justify-center mt-10'>
                <Link to="/">
                <Button>Back to the homepage</Button></Link>
                </div>
            </div>
        </div>
    )
}

export default Success
