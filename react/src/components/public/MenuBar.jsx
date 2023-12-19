import React from 'react'

export default function MenuBar() {
  return (
    <div className=' flex justify-center'>
      <div className=' w-[80%] flex border-2 h-[7vh]'>
        <div className='w-1/4 bg-slate-900 justify-center items-center flex'>
          <p className=' text-white text-xl'>Browser By Categorgy</p>
        </div>
        <div className='flex space-x-2 w-2/4 items-center'>
          <a href="" className="px-6">Home</a>
          <span className="text-gray-500">|</span>
          <a href="" className="px-6">Shop</a>
          <span className="text-gray-500">|</span>
          <a href="" className="px-6">Blog</a>
          <span className="text-gray-500">|</span>
          <a href="" className="px-6">About</a>
          <span className="text-gray-500">|</span>
          <a href="" className="px-6">Buy</a>
        </div>
        <div className='w-1/4 flex items-center'>
          <a href="">SPECIAL OFFERS</a>
        </div>
      </div>
    </div>
  )
}
