import React from "react";
import Banner_1 from "../../assets/public/banner/banner_1.png";
import Banner_2 from "../../assets/public/banner/banner_2.png";

export default function Banner1() {
    return (
        <div className=" flex justify-center">
            <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] w-[95%] justify-center py-3 ">

                {/* Banner 1 */}

                <div className=" bg-slate-200 w-full h-auto p-4 rounded-2xl flex justify-between items-center">

                    <div className="w-4/6">
                        <div className="justify-between items-center">
                            <a href="" className="font-bold text-sm text-slate-800">
                                #New Collection
                            </a>
                            <p className=" font-bold text-2xl text-slate-800">
                                Under Armour Men's Running Shoe
                            </p>
                            <button className="flex my-2 justify-center items-center border-2 border-slate-800 rounded-2xl w-28 h-10 text-slate-800 text-lg font-bold transition-all duration-200 hover:bg-slate-800 hover:text-white">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="w-2/6 justify-between items-center my-2 ">
                        <img className="w-full h-full" src={Banner_2} alt="banner" />
                    </div>

                </div>

                {/* Banner 2 */}

                <div className=" flex justify-between items-center mt-3 bg-slate-800 rounded-2xl  w-full h-80 relative ">
                    
                    <div className="justify-between items-center w-6/12 w h-auto pl-10  absolute hidden md:block">
                        <a href="" className=" font-bold text-sm text-white">
                            #New Gaming Platform
                        </a>
                        <p className=" font-bold text-3xl text-white">
                            Oculus Quest 2 Virtual Reality Headset
                        </p>
                        <button className=" flex justify-center items-center mt-8 border-2 white rounded-2xl w-28 h-10 text-white text-lg font-bold transition-all duration-200 hover:bg-white hover:text-slate-800">
                            Buy Now
                        </button>
                    </div>

                    <img className=" rounded-2xl" src={Banner_1} alt="banner" />
                    
                    <div className=" flex-col justify-between items-center w-7/12 h-auto ml-5 absolute md:hidden">
                        <a href="" className="font-bold text-sm text-white">
                            #New Gaming Platform
                        </a>
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
    );
}
