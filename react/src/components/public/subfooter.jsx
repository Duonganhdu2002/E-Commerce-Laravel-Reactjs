import React from "react";
import shiped from "../../assets/public/shiped.svg";
import returns from "../../assets/public/return.svg";
import telephone from "../../assets/public/telephone.svg";
import shield from "../../assets/public/shield.svg";

export default function SubFooter() {
    return (
        <div>
            <div className="hidden sm:block">
                <div className=" hidden 2xl:block">
                    <div
                        className="bg-slate-900 text-white flex justify-around px-52 h-auto"
                        style={{ height: "150px" }}
                    >
                        <div className="flex items-center">
                            <div>
                                <img
                                    className="h-30 w-20 mr-30"
                                    src={shiped}
                                    alt="icon"
                                />
                            </div>
                            <div className=" w-80 ml-8">
                                <div className=" text-xl font-bold">
                                    <p>Free Shipping</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="h-30 w-20 mr-30"
                                    src={returns}
                                    alt="icon"
                                />
                            </div>
                            <div className=" w-80 ml-8">
                                <div className=" text-xl font-bold">
                                    <p>Easy Returns</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="h-30 w-20 mr-30"
                                    src={telephone}
                                    alt="icon"
                                />
                            </div>
                            <div className=" w-80 ml-8">
                                <div className=" text-xl font-bold">
                                    <p>24/7 Support</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="h-30 w-20 mr-30"
                                    src={shield}
                                    alt="icon"
                                />
                            </div>
                            <div className=" w-80 ml-8">
                                <div className=" text-xl font-bold">
                                    <p>100% Seacure and Safe</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className=" block 2xl:hidden">
                    <div
                        className="bg-slate-900 text-white flex justify-around"
                        style={{ height: "170px" }}
                    >
                        <div className="flex items-center justify-between">
                            <div>
                                <img
                                    className="h-12 w-16"
                                    src={shiped}
                                    alt="icon"
                                />
                            </div>
                            <div className=" w-40 ml-2">
                                <div className=" text-lg font-bold">
                                    <p>Free Shipping</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="h-12 w-16"
                                    src={returns}
                                    alt="icon"
                                />
                            </div>
                            <div className=" w-40 ml-2">
                                <div className=" text-lg font-bold">
                                    <p>Easy Returns</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="h-12 w-16"
                                    src={telephone}
                                    alt="icon"
                                />
                            </div>
                            <div className=" w-40 ml-2">
                                <div className=" text-lg font-bold">
                                    <p>24/7 Support</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                            <div>
                                <img
                                    className="h-12 w-16"
                                    src={shield}
                                    alt="icon"
                                />
                            </div>
                            <div className=" w-40 ml-2">
                                <div className=" text-lg font-bold">
                                    <p>100% Seacure and Safe</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block sm:hidden">
                <div
                    className="bg-slate-900 text-white"
                    style={{ height: "450px" }}
                >
                    <div>
                        <div className="flex items-center justify-center py-5">
                            <div className=" pr-10">
                                <img
                                    className=" h-16 w-16"
                                    src={shiped}
                                    alt="icon"
                                />
                            </div>
                            <div className="">
                                <div className=" text-xl font-bold">
                                    <p>Free Shipping</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center py-5">
                            <div className="pr-10">
                                <img
                                    className="h-16 w-16"
                                    src={returns}
                                    alt="icon"
                                />
                            </div>
                            <div className="">
                                <div className=" text-xl font-bold">
                                    <p>Easy Returns</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center py-5">
                            <div className="pr-10">
                                <img
                                    className="h-16 w-16"
                                    src={telephone}
                                    alt="icon"
                                />
                            </div>
                            <div className="">
                                <div className=" text-xl font-bold">
                                    <p>24/7 Support</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center py-5">
                            <div className="pr-10">
                                <img
                                    className="h-16 w-16"
                                    src={shield}
                                    alt="icon"
                                />
                            </div>
                            <div className=" w-48">
                                <div className=" text-xl font-bold">
                                    <p>100% Seacure and Safe</p>
                                </div>
                                <div>
                                    <p>Proin condimentu sagtties</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
