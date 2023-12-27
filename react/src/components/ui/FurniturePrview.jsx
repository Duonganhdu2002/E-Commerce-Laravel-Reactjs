import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/image/img1.jpg";
import Banner4 from "../../assets/banner/banner_4.png";
import Banner5 from "../../assets/banner/banner_5.png";

export default function FurniturePrview() {
    return (
        <div className="flex justify-center">

            <div className="h-auto w-[80%] flex mt-8 mb-8 justify-center items-center">

                <div className="w-[100%] md:w-[20%]">

                    <h2 className='py-2 font-medium text-xl md:hidden' >Furniture</h2>


                    <div className="hidden text-md border-b-2 p-4 px-8 justify-between">
                        <Link to="#" className="">
                            Best sale
                        </Link>
                        <Link to="#" className="">
                            Featured
                        </Link>
                        <Link to="#" className="" >
                            New arrivals
                        </Link>
                    </div>

                    <div className="h-1/2 relative text-center ">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>NEW ARRIVALS</p>
                            <p>
                                <span className=" font-bold text-2xl">Bedroom</span> <span>Sets</span>
                            </p>
                            <p>Temport sem finibus</p>
                            <p className=" font-bold">$299.00</p>
                            <Link to="#">
                                <button className=" md:hidden mt-4 bg-slate-800 bg-opacity-70 p-2 px-4 border rounded-full">See more</button>
                            </Link>
                        </div>
                        <img
                            src={Banner4}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>



                    <div className="h-1/2 relative text-center mt-4 ">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>BEST OFFERS</p>
                            <p>
                                <span className=" font-bold text-2xl">Soft</span> <span>Chairs</span>
                            </p>
                            <p>Temport sem finibus</p>
                            <p className=" font-bold">$179.00</p>
                            <Link to="#">
                                <button className=" md:hidden mt-4 bg-slate-800 bg-opacity-70 p-2 px-4 border rounded-full">See more</button>
                            </Link>

                        </div>
                        <img
                            src={Banner5}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>

                <div className="w-[80%] hidden md:block">
                    <div className=" text-xl border-b-2 p-4">
                        <Link to="#" className="p-6">
                            Best sale
                        </Link>
                        <Link to="#" className="p-6">
                            Featured
                        </Link>
                        <Link to="#" className="p-6">
                            New arrivals
                        </Link>
                    </div>
                    <div>
                        <div className="w-[33%] p-4 float-left">
                            <img className="w-full h-full" src={img1} alt="" />
                            <p className=" text-xl">Product name</p>
                            <p className=" text-neutral-500">Best sales</p>
                            <p className=" text-lg text-slate-800">$193.00</p>
                        </div>
                        <div className="w-[33%] p-4 float-left">
                            <img className="w-full h-full" src={img1} alt="" />
                            <p className=" text-xl">Product name</p>
                            <p className=" text-neutral-500">Best sales</p>
                            <p className=" text-lg text-slate-800">$193.00</p>
                        </div>
                        <div className="w-[33%] p-4 float-left">
                            <img className="w-full h-full" src={img1} alt="" />
                            <p className=" text-xl">Product name</p>
                            <p className=" text-neutral-500">Best sales</p>
                            <p className=" text-lg text-slate-800">$193.00</p>
                        </div>
                        <div className="w-[33%] p-4 float-left">
                            <img className="w-full h-full" src={img1} alt="" />
                            <p className=" text-xl">Product name</p>
                            <p className=" text-neutral-500">Best sales</p>
                            <p className=" text-lg text-slate-800">$193.00</p>
                        </div>
                        <div className="w-[33%] p-4 float-left">
                            <img className="w-full h-full" src={img1} alt="" />
                            <p className=" text-xl">Product name</p>
                            <p className=" text-neutral-500">Best sales</p>
                            <p className=" text-lg text-slate-800">$193.00</p>
                        </div>
                        <div className="w-[33%] p-4 float-left">
                            <img className="w-full h-full" src={img1} alt="" />
                            <p className=" text-xl">Product name</p>
                            <p className=" text-neutral-500">Best sales</p>
                            <p className=" text-lg text-slate-800">$193.00</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
