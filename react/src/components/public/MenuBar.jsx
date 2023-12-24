import React from 'react';
import { Link } from 'react-router-dom';

export default function MenuBar() {
  return (
    <div className='flex justify-center'>
      <div className='w-[100%] md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] flex border-2 h-[5vh] md:h-[6vh] lg:h-[7vh] xl:h-[7vh] 2xl:h-[7vh]'>
        <div className='w-1/4 bg-slate-900 justify-center items-center flex'>
          <p className='text-white text-sm'>Category</p>
        </div>
        <div className='flex w-3/4 justify-between items-center'>
          <Link to="/" className="text-black w-1/4 pl-4">Home</Link>
          <Link to="/shop" className="text-black w-1/4 pl-4">Shop</Link>
          <Link to="/sale" className="text-black w-1/4 pl-4">Sale</Link>
          <Link to="/combo" className="text-black w-1/4 pl-4">Combo</Link>
        </div>
      </div>
    </div>
  );
}
