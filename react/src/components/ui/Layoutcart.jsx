import React from "react";
import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import img from "../../assets/image/Bedroom10.jpg"
import CancleIcon from "../../assets/icon/cancle.svg"

export default function Layoutcart() {
    return (
        <div className=" flex justify-center items-center">
            <div className=" w-[95%] md:w-[90%] lg:w-[80%]">
                <div>
                    <p className=" text-3xl md:text-4xl font-bold text-center mt-8 md:mt-12">Shopping Cart</p>
                    <p className=" text-md md:text-lg text-center my-4 mb-12">You are eligible for Free Shipping.</p>
                </div>
                <div className=" flex flex-col md:flex-row ">
                    <div className=" w-full h-[320px] md:w-[65%] ">
                        <div className=" border-b-2  flex mb-10 pb-14">
                            <div className=" w-[45%] flex justify-center ">
                                <img className=" w-36 h-60 object-cover" src={img} alt="" />
                            </div>
                            <div className=" w-[55%]">
                                <div className=" flex justify-between">
                                    <p className=" text-lg text-gray-900 font-semibold">product name</p>
                                    <Button size="sm" variant="text">
                                        <img className=" w-4 h-4" src={CancleIcon} alt="" />
                                    </Button>
                                </div>
                                <div>
                                    <div className=" text-sm my-6 flex">
                                        <p className=" text-gray-600">Silk</p>
                                        <span className=" mx-12 text-gray-600">|</span>
                                        <p className=" text-gray-600">Size: S</p>
                                    </div>
                                    <div className="w-2 my-4 min-w-[100px]">
                                        <Select label="Select">
                                            <Option>Material</Option>
                                            <Option>Material</Option>
                                            <Option>Material</Option>
                                            <Option>Material</Option>
                                            <Option>Material</Option>
                                        </Select>
                                    </div>
                                    <div className="">
                                        <p className=" text-sm font-medium text-green-800 my-6">in stock</p>
                                        <p className=" font-semibold text-2xl">$1208</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className=" w-full h-auto md:w-[35%] bg-blue-gray-100">
                            cart
                    </div>
                </div>
            </div>
        </div>
    );
}
