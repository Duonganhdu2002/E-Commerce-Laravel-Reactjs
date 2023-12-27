import React from 'react'
import {Link} from 'react-router-dom'
import img1 from '../../assets/public/furniture/img1.jpg'
import Banner6 from '../../assets/public/banner/banner_6.png'
import Banner7 from '../../assets/public/banner/banner_7.png'

export default function SmartPhone() {
    return (
        <div className='flex justify-center'>
            <div className='h-auto w-[80%] flex mb-8 justify-center items-center'>

                <div className='w-[80%] hidden md:block'>
                    <div className=' text-xl border-b-2 p-4 flex justify-between items-center'>
                        <Link to="#" className='p-6'>New arrivals</Link>
                        <Link to="#" className='p-6'>Best sales</Link>
                        <Link to="#" className='p-6'>SmartPhones</Link>
                    </div>
                    <div>
                        <div className='w-[33%] p-4 float-left'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div className='w-[33%] p-4 float-left'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div className='w-[33%] p-4 float-left'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div className='w-[33%] p-4 float-left'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div className='w-[33%] p-4 float-left'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div className='w-[33%] p-4 float-left'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[100%] md:w-[20%]'>
                    <h2 className='py-2 font-medium text-xl md:hidden' >Smart phone</h2>
                    <div className="h-1/2 relative text-center ">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>AVAILABLE NOW</p>
                            <p className=" font-bold text-2xl">
                                IPhone X
                            </p>
                            <p className=" font-bold">$1120.00</p>
                            <Link to="#">
                                <button className=" md:hidden mt-4 bg-slate-800 bg-opacity-70 p-2 px-4 border rounded-full">See more</button>
                            </Link>
                        </div>
                        <img
                            src={Banner6}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="h-1/2 relative text-center mt-4 ">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>AVAILABLE NOW</p>
                            <p className=" font-bold text-2xl">
                                IPhone 12 Pro Max
                            </p>
                            <p className=" font-bold">$1630.00</p>
                            <Link to="#">
                                <button className=" md:hidden mt-4 bg-slate-800 bg-opacity-70 p-2 px-4 border rounded-full">See more</button>
                            </Link>
                        </div>
                        <img
                            src={Banner7}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
