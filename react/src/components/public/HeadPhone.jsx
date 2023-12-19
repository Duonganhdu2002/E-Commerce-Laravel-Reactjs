import React from 'react'
import img1 from '../../assets/public/furniture/img1.jpg'

export default function HeadPhone() {
    return (
        <div className='flex justify-center'>
            <div className='h-auto w-[80%] mt-4 mb-4'>
                <div>
                    <div className='w-1/4 p-2 flex flex-col items-center justify-center float-left'>
                        <p className=' text-lg text-sky-950'>LIMITED TIME OFFER</p>
                        <p className=' text-xl'>PREMEUM AUDIO</p>
                        <p className=' text-neutral-500'>QUALITY HEADPHONES</p>
                        <a href="">
                            <button className=' text-white px-6 p-2 bg-slate-900 border rounded-3xl'>Visit Store</button>
                        </a>
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
                    <div className='w-1/4 p-2 float-right'>
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
