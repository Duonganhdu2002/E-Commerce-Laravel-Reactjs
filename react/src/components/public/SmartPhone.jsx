import React from 'react'
import img1 from '../../assets/public/furniture/img1.jpg'
import Banner6 from '../../assets/public/banner/banner_6.png'
import Banner7 from '../../assets/public/banner/banner_7.png'

export default function SmartPhone() {
    return (
        <div className='flex justify-center'>
            <div className='h-auto w-[80%] flex mt-8 mb-24'>

                <div className='w-[80%]'>
                    <div className=' text-xl border-b-2 p-4'>
                        <a className='p-6' href="">New arrivals</a>
                        <a className='p-6' href="">Best sales</a>
                        <a className='p-6' href="">SmartPhones</a>
                        <a className='p-6' href="">HeadPhones</a>
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
                <div className='w-[20%] mr-4'>
                <div className="h-1/2 relative text-center ">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>AVAILABLE NOW</p>
                            <p className=" font-bold text-2xl">
                                IPhone X
                            </p>
                            <p className=" font-bold">$1120.00</p>
                        </div>
                        <img
                            src={Banner6}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="h-1/2 relative text-center mt-8 ">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>AVAILABLE NOW</p>
                            <p className=" font-bold text-2xl">
                                IPhone 12 Pro Max
                            </p>
                            <p className=" font-bold">$1630.00</p>
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
