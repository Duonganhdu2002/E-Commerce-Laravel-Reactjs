import React from "react";
import Back from "../../assets/icon/back-svgrepo-com.svg";
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
export default function ProductDetails() {
    return (
        <div className="flex flex-col justify-center">
            {/* Div Để quay lại trang trước */}
            <div className=" flex my-2 px-0 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-0">
                <a href="" className=" flex">
                    <img src={Back} alt="" className=" w-5" />
                    Back to results
                </a>
            </div>
            <div className="md:flex w-full px-0 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-0">
                {/* Div ảnh */}
                <div className=" flex h-[55vh] w-[100%] justify-center bg-slate-200/50">
                    <img src={Chair1} alt="" className=" rounded-2xl" />
                </div>
                {/* Div tiêu đề và giá sản phẩm */}
                <div className="flex flex-col my-2 px-8">
                    {/* Div tiêu đề */}
                    <div className=" flex">
                        <p className=" text-xl font-medium">
                            Sumptuous Slumber: Unveiling the Elegance of Our
                            Premium Bed Collection
                        </p>
                    </div>
                    <div className=" flex justify-between items-center mb-2">
                        {/* Div giá sản phẩm niêm yết và giá sản phẩm đã giảm */}
                        <div className="flex items-center">
                            <p className=" text-3xl font-bold mr-4 text-slate-800">
                                $2,989.00
                            </p>
                            <p className=" text-xl  line-through text-slate-500">
                                $3,589.00
                            </p>
                        </div>
                        {/* Div riêng để icon tượng trưng là sản phẩm có hỗ trợ ship và có voucher*/}
                        <div className=" flex items-center">
                            <img src={Delivery} alt="" className="w-8 mr-2" />
                            <img src={Voucher} alt="" className="w-8" />
                        </div>
                    </div>
                    {/* Div dưới về đánh giá sao, tổng review, tổng mặt hàng đã bán  */}
                    <div className="flex items-center border-t-2 border-b-2">
                        {/* Div về sao đánh giá */}
                        <div className="flex items-center my-2 mr-4 ">
                            <p className=" mr-2">3.6</p>
                            <img src={Star} alt="" className="w-5" />
                            <img src={Star} alt="" className="w-5" />
                            <img src={Star} alt="" className="w-5" />
                            <img src={StarHalfLeftO} alt="" className="w-5" />
                            <img src={StarO} alt="" className="w-5" />
                        </div>
                        {/* Div tổng reviews */}
                        <div className=" flex items-center my-2 border-l border-black">
                            <a href="" className=" mx-4">
                                41 Reviews
                            </a>
                        </div>
                        {/* Div tổng lượng hàng đã bán ra */}
                        <div className=" flex items-center my-2 border-l border-black">
                            <a href="" className=" mx-4">
                                149 Sold
                            </a>
                        </div>
                    </div>
                    {/* Div chọn phương thức giao sản phẩm và voucher giảm giá */}
                    <div className=" flex flex-col">
                        <div className="flex items-center my-2">
                            <img src={Delivery} alt="" className="w-7 mr-3" />
                            <p className="mr-4">Shipping Method:</p>
                            <select
                                id="gender"
                                name="gender"
                                className=" border-2 w-28 h-10 rounded-lg"
                            >
                                <option value="male">Medium</option>
                                <option value="female">Fast</option>
                            </select>
                        </div>
                        <div className="flex items-center my-2">
                            <img src={Voucher} alt="" className="w-7 mr-3" />
                            <p className="mr-4">Voucher:</p>
                            <select
                                id="gender"
                                name="gender"
                                className=" border-2 w-28 h-10 rounded-lg"
                            >
                                <option value="male">sale 50%</option>
                                <option value="female">sale 20%</option>
                                <option value="female">sale 70%</option>
                                <option value="female">sale 15%</option>
                            </select>
                        </div>
                        <div className="flex items-center my-2">
                            <img src={Size} alt="" className="w-6 mr-4" />
                            <p className="mr-4">Size:</p>
                            <select
                                id="gender"
                                name="gender"
                                className=" border-2 w-32 h-10 rounded-lg"
                            >
                                <option value="male">100 x 102</option>
                                <option value="female">200 x 402</option>
                                <option value="female">202 x 602</option>
                                <option value="female">105 x 808</option>
                            </select>
                        </div>
                        <div className="flex items-center my-2">
                            <p className="mr-4">Quantity:</p>
                            <input
                                type="number"
                                className="border-2 w-32 h-10 rounded-lg px-2"
                            />
                        </div>
                    </div>
                    {/* Div để ấn vào mua ngay và thêm vào giỏ hàng */}
                    <div className=" flex items-center justify-between my-6">
                        <button className=" bg-slate-800 text-white w-[45%] h-14 rounded-2xl text-xl font-medium hover:bg-slate-800/80">
                            Buy now
                        </button>
                        <button className=" text-slate-800 border-slate-800 border-2 w-[45%] h-14 rounded-2xl text-xl font-medium hover:bg-slate-400/20">
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            {/* Div của shop */}
            <div className=" flex items-center border-b-2 border-t-2 p-4 px-4 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-4 my-10">
                <img
                    src={Profile}
                    alt=""
                    className=" rounded-3xl border-sky-900 border-2 w-20"
                />
                <p className=" font-semibold text-lg ml-4">
                    Shop uy tin so 1 VietNam
                </p>
                <img src={Checked} alt="" className=" w-5 ml-2" />
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
