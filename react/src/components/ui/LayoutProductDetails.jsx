import React from "react";
import { Link, useParams } from "react-router-dom";
import Checked from "../../assets/icon/check-badge-svgrepo-com.svg";
import Delivery from "../../assets/icon/delivery-truck-svgrepo-com.svg";
import Reply from "../../assets/icon/reply-arrow-direction-right-svgrepo-com.svg";
import Size from "../../assets/icon/size-actual-svgrepo-com.svg";
import StarHalfLeftO from "../../assets/icon/star-half-left-o-svgrepo-com.svg";
import StarO from "../../assets/icon/star-o-svgrepo-com.svg";
import Star from "../../assets/icon/star-svgrepo-com.svg";
import Voucher from "../../assets/icon/voucher-discount-tag-svgrepo-com.svg";
import Img1 from "../../assets/image/img1.jpg";
import Chair1 from "../../assets/public/furniture/bed-1.jpg";
import Profile from "../../assets/public/profile/1703940723832khunghinh.net.png";
import ImageReviews from "../../assets/public/reviews/bed-5.jpg";
import BackgroundShop from "../../assets/sale/sale3.png";



export default function ProductDetails() {

    const { productId } = useParams(); 
    console.log(productId)

    

    return (
        <div className="flex flex-col justify-center">
            
            <div className="py-8">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="flex-1 px-4">
                            <div className=" flex">
                                <div className=" w-[120px] h-[460px] overflow-y-auto">
                                    <img
                                        className="w-full object-cover p-1"
                                        src={Chair1}
                                    />
                                    <img
                                        className="w-full object-cover p-1"
                                        src={Chair1}
                                    />
                                    <img
                                        className="w-full object-cover p-1"
                                        src={Chair1}
                                    />
                                    <img
                                        className="w-full object-cover p-1"
                                        src={Chair1}
                                    />
                                    <img
                                        className="w-full object-cover p-1"
                                        src={Chair1}
                                    />
                                </div>
                                <div className=" w-full h-[460px] rounded-2xl bg-gray-300 mb-4">
                                    <img
                                        className="w-full h-full object-cover rounded-2xl"
                                        src={Chair1}
                                    />
                                </div>
                            </div>

                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-900  text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ">
                                        Buy now
                                    </button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <button className="w-full bg-gray-200  text-gray-800  py-2 px-4 rounded-full font-bold hover:bg-gray-300 ">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                Product Name
                            </h2>
                            <p className="text-gray-600  text-sm mb-4">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Sed sed ante justo. Integer
                                euismod libero id mauris malesuada tincidunt.
                            </p>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 ">
                                        Price:
                                    </span>
                                    <span className="text-gray-600 ">
                                        $29.99
                                    </span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 ">
                                        Availability:
                                    </span>
                                    <span className="text-gray-600">
                                        In Stock
                                    </span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700">
                                    Select Color:
                                </span>
                                <div className="flex items-center mt-2">
                                    <button className="w-6 h-6 rounded-full bg-gray-800  mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-red-500  mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-blue-500  mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-yellow-500  mr-2"></button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 ">
                                    Select Size:
                                </span>
                                <div className="flex items-center mt-2">
                                    <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                                        S
                                    </button>
                                    <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                                        M
                                    </button>
                                    <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                                        L
                                    </button>
                                    <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                                        XL
                                    </button>
                                    <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                                        XXL
                                    </button>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 ">
                                    Product Description:
                                </span>
                                <p className="text-gray-600 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Sed sed ante justo. Integer
                                    euismod libero id mauris malesuada
                                    tincidunt. Vivamus commodo nulla ut lorem
                                    rhoncus aliquet. Duis dapibus augue vel
                                    ipsum pretium, et venenatis sem blandit.
                                    Quisque ut erat vitae nisi ultrices placerat
                                    non eget velit. Integer ornare mi sed ipsum
                                    lacinia, non sagittis mauris blandit. Morbi
                                    fermentum libero vel nisl suscipit, nec
                                    tincidunt mi consectetur.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Div của shop */}
            <div className=" flex items-center border-b-2 border-t-2 p-4 px-4 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-4 my-10">
                <div className=" flex items-center bg-black w-full rounded-xl">
                    <img
                        src={BackgroundShop}
                        alt=""
                        className="object-cover aspect-ratio opacity-50 relative w-full h-28 rounded-xl"
                    />
                </div>

                <div className=" absolute flex items-center ml-8">
                    <img
                        src={Profile}
                        alt=""
                        className=" rounded-3xl border-sky-900 border-2 w-20"
                    />
                    <p className=" font-semibold text-lg ml-4 text-white">
                        Shop uy tin so 1 VietNam
                    </p>
                    <img src={Checked} alt="" className=" w-5 ml-2" />
                </div>
            </div>
            {/* Div dánh giá sản phẩm */}
            <div className="flex justify-around float-left px-4 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-4">
                <div className="flex items-center flex-col float-left px-4 w-[100%]">
                    <p className=" my-2 text-xl font-bold">PRODUCT REVIEWS</p>
                    {/* Div lọc sao đánh giá */}
                    <div className=" flex items-center justify-center py-2 w-full mb-2">
                        <button className=" flex items-center justify-center h-10 w-20 border-slate-800 border rounded-xl mr-2 bg-white">
                            All
                        </button>
                        <button className="flex items-center justify-center h-10 w-20 border-slate-800 border rounded-xl mr-2 bg-white">
                            5 Star
                        </button>
                        <button className="flex items-center justify-center h-10 w-20 border-slate-800 border rounded-xl mr-2 bg-white">
                            4 Star
                        </button>
                        <button className="flex items-center justify-center h-10 w-20 border-slate-800 border rounded-xl mr-2 bg-white">
                            3 Star
                        </button>
                        <button className="flex items-center justify-center h-10 w-20 border-slate-800 border rounded-xl mr-2 bg-white">
                            2 Star
                        </button>
                        <button className="flex items-center justify-center h-10 w-20 border-slate-800 border rounded-xl mr-2 bg-white">
                            1 Star
                        </button>
                    </div>
                    {/* Div đánh giá */}
                    <div className=" flex flex-col mt-8 bg-slate-200 w-full px-4 border-b-2 border-slate-800">
                        {/* Div của profile và đánh giá sao, ngày giờ đánh giá */}
                        <div className="flex my-4">
                            <div>
                                <img
                                    src={Profile}
                                    alt=""
                                    className=" rounded-full border-black border w-14"
                                />
                            </div>
                            <div>
                                <p className=" ml-4">D*******0</p>
                                <div className="flex items-center mb-1 ml-4 ">
                                    <img src={Star} alt="" className="w-5" />
                                    <img src={Star} alt="" className="w-5" />
                                    <img src={Star} alt="" className="w-5" />
                                    <img
                                        src={StarHalfLeftO}
                                        alt=""
                                        className="w-5"
                                    />
                                    <img src={StarO} alt="" className="w-5" />
                                </div>
                                <p className=" flex ml-4">
                                    2024-01-18 &nbsp;13:23
                                </p>
                            </div>
                        </div>
                        {/* Div của phần bình luận đánh giá, ảnh đánh giá */}
                        <div className="flex flex-col">
                            <div>
                                <p>Good, good!!!!!!!!</p>
                            </div>
                            <div className=" flex my-2">
                                <img
                                    src={ImageReviews}
                                    alt=""
                                    className="w-[18%] md:w-[12vh] h-full mr-4 rounded-xl"
                                />
                                <img
                                    src={ImageReviews}
                                    alt=""
                                    className=" w-[18%] md:w-[12vh] h-full md:h-auto mr-4 rounded-xl"
                                />
                                <img
                                    src={ImageReviews}
                                    alt=""
                                    className=" w-[18%] md:w-[12vh] h-full md:h-auto mr-4 rounded-xl"
                                />
                                <img
                                    src={ImageReviews}
                                    alt=""
                                    className=" w-[18%] md:w-[12vh] h-full md:h-auto mr-4 rounded-xl"
                                />
                            </div>
                        </div>
                        {/* Div phản hồi của nhà bán hàng */}
                        <div className=" flex bg-white/70 my-4">
                            <img src={Reply} alt="" className="w-5 mr-2" />
                            <p>
                                Thank you so much for taking the time to share
                                your positive feedback with us!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-center flex-col hidden lg:block w-[30%]">
                    <div className=" flex flex-col p-4 float-left">
                        <img className="w-full h-full" src={Img1} alt="" />
                        <p className=" text-xl">Product name</p>
                        <p className=" text-neutral-500">Best sales</p>
                        <p className=" text-lg text-slate-800">$193.00</p>
                    </div>
                    <div className=" flex flex-col p-4 float-left">
                        <img className="w-full h-full" src={Img1} alt="" />
                        <p className=" text-xl">Product name</p>
                        <p className=" text-neutral-500">Best sales</p>
                        <p className=" text-lg text-slate-800">$193.00</p>
                    </div>
                    <div className=" flex flex-col p-4 float-left">
                        <img className="w-full h-full" src={Img1} alt="" />
                        <p className=" text-xl">Product name</p>
                        <p className=" text-neutral-500">Best sales</p>
                        <p className=" text-lg text-slate-800">$193.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
