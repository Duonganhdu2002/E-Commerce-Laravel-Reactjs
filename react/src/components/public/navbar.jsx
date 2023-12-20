import React from 'react';
import logo from '../../assets/public/logo.svg';
import logoSingle from '../../assets/public/logo-single.svg';
import search from '../../assets/public/search.svg';
import heart from '../../assets/public/heart.svg';
import cart from '../../assets/public/cart.svg';

export default function Navbar() {
    return (
        <div className='bg-white px-2 md:px-8 lg:px-16 xl:px-24 2xl:px-60 flex justify-between items-center h-[10vh]'>
            {/* Logo */}
            <div className="flex hidden sm:block">
                <a href="#">
                    <img className='hidden md:block w-24 h-24' src={logo} alt="" />
                    <img className='block md:hidden w-12 h-12 mx-6' src={logoSingle} alt="" />
                </a>
            </div>

            {/* Search bar */}
            <div className='w-11/12 flex justify-center px-2'>
                <div className='w-[100%] flex justify-center items-center border rounded-md h-auto' style={{ border: '1px solid gray' }}>
                    <div className=' w-3/12 h-full'>
                        <select className='py-3 w-full border-r text-center border-zinc-400 rounded-md' name="" id="" style={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                            <option value="">Chăn ga</option>
                            <option value="">Điện thoại</option>
                            <option value="">Gia dụng</option>
                            <option value="">Quần áo</option>
                        </select>
                    </div>
                    <div className=' w-8/12 ml-4'>Start your bill</div>
                    <div className=' w-1/12'>
                        <img src={search} alt="image" />
                    </div>
                </div>
            </div>

            {/* User/Login Section */}
            <div>
                <div className='sm:hidden flex items-center justify-center'>
                    <img className='w-7 h-7' src={heart} alt="" />
                    <img className='w-10 h-10' src={cart} alt="" />
                </div>
                {/* <div className='w-3/12 flex items-center hidden'>
                    <div className='mr-2 w-3/6'>
                        <a href="">Login</a> / <a href="">Register</a>
                    </div>
                    <div className='flex items-center w-2/6'>
                        <div className='relative inline-block'>
                            <img className='w-8 h-8' src={heart} alt="" />
                        </div>
                        <div className='relative inline-block ml-2'>
                            <img className='w-11 h-11' src={cart} alt="" />
                        </div>
                    </div>
                    <div className='ml-2 w-1/6'>
                        <p>00.00$</p>
                    </div>
                </div> */}
            </div>
        </div>
    );
}
