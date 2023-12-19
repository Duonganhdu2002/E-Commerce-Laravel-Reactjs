import React from 'react';
import logo from '../../assets/public/logo.svg'
import logoSingle from '../../assets/public/logo-single.svg'
import search from '../../assets/public/search.svg'
import heart from '../../assets/public/heart.svg'
import cart from '../../assets/public/cart.svg'
export default function Navbar() {
    return (
        <div className='bg-white w-full px-60 flex relative justify-start items-center mx-auto h-[10vh]'>
            {/* <!-- start logo --> */}
            <div className="flex w-1/12">
                <a href="#">
                    <div className="hidden md:block">
                        <img className=' w-24 h-24 px-2' src={logo} alt="" />
                    </div>
                    <div className="block md:hidden">
                        <img className=' w-16 h-16 px-2' src={logoSingle} alt="" />
                    </div>
                </a>
            </div>
            {/* <!-- end logo --> */}
            {/* <!-- start search bar --> */}
            <div className='w-8/12 flex justify-center'>
                <div className='w-[80%] flex justify-center items-center border rounded-md h-auto' style={{ border: '1px solid gray' }}>
                    <div className=' w-2/12 h-full'>
                        <select className='py-3 w-full border-r text-center border-zinc-400 rounded-md' name="" id="" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                            <option value="">Chăn ga</option>
                            <option value="">Điện thoại</option>
                            <option value="">Gia dụng</option>
                            <option value="">Quần áo</option>
                        </select>
                    </div>
                    <div className=' w-9/12 ml-4'>Start your bill</div>
                    <div className=' w-1/12'>
                        <img src={search} alt="image" />
                    </div>
                </div>
            </div>
            {/* <!-- end search bar --> */}
            <div className='w-3/12 flex items-center'>
                <div className='mr-2 w-3/6'>
                    <a href="">Login</a> / <a href="">Register</a>
                </div>
                <div className='flex items-center w-2/6'>
                    <div className='relative inline-block'>
                        <img className='w-8 h-8' src={heart} alt="" />
                        {/* <span className='bg-red-800 border rounded-full w-6 h-4 text-white text-center absolute -top-2 -left-1'>0</span> */}
                    </div>
                    <div className='relative inline-block'>
                        <img className='w-11 h-11' src={cart} alt="" />
                        {/* <span className='bg-red-800 border rounded-full w-6 h-4 text-white text-center absolute -top-2 -left-1'>0</span> */}
                    </div>
                </div>
                <div className='ml-2 w-1/6'>
                    <p>00.00$</p>
                </div>
            </div>
        </div>
    );
}
