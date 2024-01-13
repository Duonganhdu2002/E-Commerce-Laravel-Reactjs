import React from "react";
import { Link } from "react-router-dom";
import Banner_1 from "../../assets/banner/banner_1.png";
import Banner_2 from "../../assets/banner/banner_2.png";

export default function Banner1() {
    return (
        <div className=" flex justify-center">
            <div className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] w-[95%] justify-center py-3 md:flex mt-4 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-10">
                {/* Banner 1 */}

                <div className=" bg-[#30415c5c]/10 w-full h-auto p-4 rounded-2xl flex justify-between items-center md:w-5/12 md:mr-6 lg:mr-8 xl:mr-10 2xl:mr-10 mb-3 md:mb-0 md:p-6 lg:p-8 xl:p-10 2xl:p-10 ">
                    <div className="w-4/6">
                        <div className="justify-between items-center">
                            <Link
                                to="#"
                                className="font-bold text-sm text-slate-800"
                            >
                                #New Collection
                            </Link>
                            <p className=" font-bold text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-slate-800 md:py-4">
                                Under Armour Men&apos;s Running Shoe
                            </p>
                            <button className="flex my-2 justify-center items-center border-2 border-gray-800 rounded-2xl w-28 h-10 text-slate-800 text-lg font-bold transition-all duration-200 hover:bg-gray-800 hover:text-white">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="w-2/6 justify-between items-center my-2 ">
                        <img
                            className="w-full h-full"
                            src={Banner_2}
                            alt="banner"
                        />
                    </div>
                </div>

                {/* Banner 2 */}

                <div className=" bg-[#1e293b] w-full h-auto p-4 rounded-2xl flex justify-between items-center md:w-7/12 md:p-6 lg:p-8 xl:p-10 2xl:p-10">
                    <div className="w-4/6">
                        <div className="justify-between items-center">
                            <Link
                                to="#"
                                className="font-bold text-sm text-white"
                            >
                                #New Gaming Platform
                            </Link>
                            <p className=" font-bold text-2xl md:text-2xl lg:text-4xl xl:text-4xl 2xl:text-4xl text-white md:py-4">
                                Oculus Quest 2 Virtual Reality Headset
                            </p>
                            <button className="flex my-2 justify-center items-center border-2 rounded-2xl w-28 h-10 text-white text-lg font-bold transition-all duration-300 hover:bg-gray-100 hover:text-black">
                                Buy Now
                            </button>
                        </div>
                    </div>

                    <div className="w-2/6 justify-between items-center my-2 ">
                        <img
                            className="w-full h-full"
                            src={Banner_1}
                            alt="banner"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
