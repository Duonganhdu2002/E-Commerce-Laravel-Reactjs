import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/public/furniture/img1.jpg'

export default function HeadPhone() {
    return (
        <div className='flex justify-center'>

            <div className='h-auto w-[80%] mt-4 mb-4'>

                <div className=' lg:flex'>

                    <div className='w-full p-2 flex flex-col items-center justify-center float-left lg:w-[25%]'>
                        <p className=' font-bold text-md md:text-xl text-sky-950'>LIMITED TIME OFFER</p>
                        <p className=' text-md md:text-lg my-2 opacity-80'>PREMEUM AUDIO</p>
                        <p className=' font-bold text-neutral-700 text-md md:text-2xl'>QUALITY HEADPHONES</p>
                        <Link to="#" className='my-6'>
                            <button className=' text-white px-6 p-2 bg-slate-900 border rounded-3xl'>Visit Store</button>
                        </Link>
                    </div>

                    <div className='w-full lg:w-[75%]'>
                        <div className='w-1/2 p-2 float-left md:w-1/3'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div className='w-1/2 p-2 float-left md:w-1/3'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div className='w-1/3 p-2 float-right hidden md:block'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
