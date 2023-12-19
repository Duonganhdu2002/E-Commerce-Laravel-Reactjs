import React from 'react'
import img1 from '../../assets/public/furniture/img1.jpg'

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
                        <div style={{ float: "left" }} className='w-[33%] p-4'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div style={{ float: "left" }} className='w-[33%] p-4'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div style={{ float: "left" }} className='w-[33%] p-4'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div style={{ float: "left" }} className='w-[33%] p-4'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div style={{ float: "left" }} className='w-[33%] p-4'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                        <div style={{ float: "left" }} className='w-[33%] p-4'>
                            <img className='w-full h-full' src={img1} alt="" />
                            <p className=' text-xl'>Product name</p>
                            <p className=' text-neutral-500'>Best sales</p>
                            <p className=' text-lg text-slate-800'>$193.00</p>
                        </div>
                    </div>
                </div>
                <div className='w-[20%] mr-4'>
                    <div className='h-1/2 bg-slate-300'>
                        Hello
                    </div>
                    <div className='h-1/2 bg-red-200 mt-12'>
                        Hello
                    </div>
                </div>
            </div>
        </div>
    )
}
