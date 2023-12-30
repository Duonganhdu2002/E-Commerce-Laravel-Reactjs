import React from 'react'
import img1 from '../../assets/image/img1.jpg'
import { Link } from 'react-router-dom'

export default function Watch() {
    return (
        <div className='flex justify-center'>
            <div className='h-auto w-[80%] mt-4 mb-4 hidden md:block'>
                <div className=' text-xl w-full border-b-2'>
                    <Link to="#" className='p-6'>New arrivals</Link>
                    <Link to="#" className='p-6'>Best sales</Link>
                    <Link to="#" className='p-6'>SmartPhones</Link>
                    <Link to="#" className='p-6'>HeadPhones</Link>
                </div>
                <div>
                    <div className='w-1/4 p-2 float-left'>
                        <img className='w-full h-full' src={img1} alt="" />
                        <p className=' text-xl'>Product name</p>
                        <p className=' text-neutral-500'>Best sales</p>
                        <p className=' text-lg text-slate-800'>$193.00</p>
                    </div>
                    <div className='w-1/4 p-2 float-left'>
                        <img className='w-full h-full' src={img1} alt="" />
                        <p className=' text-xl'>Product name</p>
                        <p className=' text-neutral-500'>Best sales</p>
                        <p className=' text-lg text-slate-800'>$193.00</p>
                    </div>
                    <div className='w-1/4 p-2 float-left'>
                        <img className='w-full h-full' src={img1} alt="" />
                        <p className=' text-xl'>Product name</p>
                        <p className=' text-neutral-500'>Best sales</p>
                        <p className=' text-lg text-slate-800'>$193.00</p>
                    </div>
                    <div className='w-1/4 p-2 float-left'>
                        <img className='w-full h-full' src={img1} alt="" />
                        <p className=' text-xl'>Product name</p>
                        <p className=' text-neutral-500'>Best sales</p>
                        <p className=' text-lg text-slate-800'>$193.00</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
