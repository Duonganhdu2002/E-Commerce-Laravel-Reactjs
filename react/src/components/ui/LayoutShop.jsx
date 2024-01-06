import React from "react";
import BackgroundShop from "../../assets/sale/sale3.png";
import AvatarShop from "../../assets/public/profile/1703940723832khunghinh.net.png";
import Checked from "../../assets/icon/check-badge-svgrepo-com.svg";
import Speech from "../../assets/icon/speech-bubble-15-svgrepo-com.svg";
import Star from "../../assets/icon/star-svgrepo-com-yellow.svg";
import Img1 from "../../assets/image/img1.jpg";

export default function Shop() {
    return (
        <div className=" flex flex-col justify-center">
            <div className="flex items-center justify-center flex-col my-2">
                <div className="flex items-center justify-center bg-black -z-10 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] w-[100%] md:rounded-2xl">
                    <img
                        src={BackgroundShop}
                        alt=""
                        className="object-cover aspect-ratio opacity-60 w-full sm:h-72 md:rounded-2xl"
                    />
                </div>
                <div className="absolute flex px-2 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[80%] w-[100%]">
                    <div className="  flex">
                        <div>
                            <img
                                src={AvatarShop}
                                alt=""
                                className="rounded-full border-slate-400 border-8 w-60"
                            />
                        </div>
                        <div className="flex flex-col ml-2 mb-auto">
                            <div className="flex flex-wrap item center">
                                <p className=" flex items-center font-bold text-xl text-white">
                                    Shop uy tín số 1 Việt Nam &nbsp;
                                </p>
                                <img
                                    src={Checked}
                                    alt=""
                                    className=" flex w-5"
                                />
                            </div>
                            <div className=" flex flex-wrap text-white">
                                <p>10,4M Followers</p>
                                <p>&nbsp; | &nbsp;</p>
                                <p>4.9/5.0 &nbsp;</p>
                                <img
                                    src={Star}
                                    alt=""
                                    className="w-5 fill-yellow-500"
                                />
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-wrap mt-auto ml-auto">
                        <button className=" flex items-center justify-center mr-2 border-white border rounded-lg w-24 h-10 font-medium hover:bg-slate-800 text-white my-2 ml-auto">
                            + Follow
                        </button>
                        <button className="flex items-center justify-center mr-2 border-white text-white border rounded-lg w-24 h-10 font-medium hover:bg-slate-800 my-2 ml-auto">
                            <img src={Speech} alt="" className="w-5 mr-2" />
                            Chat
                        </button>
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-center">
                <div className=" flex items-center justify-around h-12 border font-semibold 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] w-[100%]">
                    <div className=" flex w-[33%] h-full items-center justify-center border-b-2 border-sky-950">
                        <p>Shop</p>
                    </div>
                    <div className=" flex w-[33%] h-full items-center justify-center">
                        <p>Products</p>
                    </div>
                    <div className=" flex w-[33%] h-full items-center justify-center">
                        <p>Category</p>
                    </div>
                </div>
            </div>
        </div>

        // 2xl:mr-auto xl:-ml-28 lg:ml-0 md:ml-28 sm:ml-2
    );
}
