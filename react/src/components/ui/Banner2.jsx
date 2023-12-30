import React from 'react'
import { Link } from 'react-router-dom';
import Banner_1 from "../../assets/banner/banner_1.png";
import Banner_2 from "../../assets/banner/banner_2.png";

export default function Banner2() {
  return (
    <div className=" flex justify-center">
            <div className="2xl:w-[80%] md:w-[95%] sm:w-[95%] w-[95%] flex justify-center py-3 ">
                <div className=" bg-slate-200 w-5/12 h-80 mr-4 rounded-2xl flex justify-between items-center">
                    <div className="justify-between items-center pl-10 w-9/12 hidden md:block">
                        <Link to="#" className="font-bold text-sm text-slate-800">
                            #New Collection
                          </Link>
                        <p className=" font-bold text-3xl text-slate-800">
                            Under Armour Men's Running Shoe
                        </p>
                        <button className="flex justify-center items-center mt-8 border-2 border-slate-800 rounded-2xl w-28 h-10 text-slate-800 text-lg font-bold transition-all duration-200 hover:bg-slate-800 hover:text-white">
                            Buy Now
                        </button>
                    </div>

                    <div className="justify-between items-center w-9/12 px-2 block md:hidden">
                        <Link to="#" className="font-bold text-sm text-slate-800">
                            #New Collection
                        </Link>
                        <p className=" font-bold text-2xl text-slate-800">
                            Under Armour Men's Running Shoe
                        </p>
                        <button className="flex justify-center items-center mt-8 border-2 border-slate-800 rounded-2xl w-28 h-10 text-slate-800 text-lg font-bold transition-all duration-200 hover:bg-slate-800 hover:text-white">
                            Buy Now
                        </button>
                    </div>
                    {/* Thẻ div này để chèn ảnh banner */}
                    <div className=" justify-between items-center w-80 ml-auto pr-10 hidden md:block">
                        <img className="" src={Banner_2} alt="banner" />
                    </div>
                </div>
                <div className=" flex justify-between items-center bg-slate-800 rounded-2xl  w-7/12 h-80 relative ">
                    <div className="justify-between items-center w-6/12 w h-auto pl-10  absolute hidden md:block">
                        <Link to="#" className=" font-bold text-sm text-white">
                            #New Gaming Platform
                        </Link>
                        <p className="font-bold text-3xl text-white">
                            Oculus Quest 2 Virtual Reality Headset
                        </p>
                        <button className=" flex justify-center items-center mt-8 border-2 white rounded-2xl w-28 h-10 text-white text-lg font-bold transition-all duration-200 hover:bg-white hover:text-slate-800">
                            Buy Now
                        </button>
                    </div>
                    <img className=" rounded-2xl" src={Banner_1} alt="banner" />
                    <div className=" flex-col justify-between items-center w-7/12 h-auto ml-5 absolute md:hidden">
                        <Link to="#" className="font-bold text-sm text-white">
                            #New Gaming Platform
                        </Link>
                        <p className="font-bold text-2xl text-white">
                            Oculus Quest 2 Virtual Reality Headset
                        </p>
                        <button className=" flex justify-center items-center mt-8 border-2 white rounded-2xl w-28 h-10 text-white text-lg font-bold transition-all duration-200 hover:bg-white hover:text-slate-800">
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
  )
}
