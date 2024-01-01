import React from "react";
import Checked from "../../assets/icon/check-badge-svgrepo-com.svg";
import ImagePoduct from "../../assets/public/smart-phone/tecnocamon20_5.jpg";
import Back from "../../assets/icon/back-svgrepo-com.svg";
import Next from "../../assets/icon/next-svgrepo-com.svg";
import Voucher from "../../assets/icon/voucher-discount-tag-svgrepo-com.svg";
import Delivery from "../../assets/icon/delivery-truck-svgrepo-com.svg";
import { Link } from "react-router-dom";

export default function Layoutcart() {
    return (
        <div>
            <div className=" bg-slate-400/30 hidden md:block">
                <div className="flex flex-col w-[100%] md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] mx-auto">
                    {/* Div của dòng đầu tiên */}
                    <div className=" flex items-center bg-white px-4 h-[5vh] mt-4 font-bold shadow-2xl rounded-lg">
                        <div className=" flex items-center justify-center h-full w-[6vh]">
                            {" "}
                            <input type="checkbox" className=" w-5 h-5" />
                        </div>
                        <div className=" w-[48%] flex justify-center border-l ">
                            Product
                        </div>
                        <div className=" w-[12%] flex justify-center border-l">
                            Unit price
                        </div>
                        <div className=" w-[12%] flex justify-center border-l">
                            Quantity
                        </div>
                        <div className=" w-[12%] flex justify-center border-l">
                            Total Price
                        </div>
                        <div className=" w-[12%] flex justify-center border-l border-r">
                            Operation
                        </div>
                    </div>
                    {/* Div của sản phẩm */}
                    <div className=" mt-6 bg-white px-4 rounded-lg shadow-xl">
                        <div className=" flex items-center border-b-4 h-[6vh]">
                            <div className=" flex items-center justify-center h-full w-[6vh]">
                                <input type="checkbox" className=" w-5 h-5" />
                            </div>
                            <div className=" flex font-semibold text-slate-800">
                                <p>Techno Phone</p>
                                <img
                                    src={Checked}
                                    alt=""
                                    className=" w-5 ml-2"
                                />
                            </div>
                        </div>
                        <div className=" flex items-center my-3">
                            <div className=" flex items-center justify-center h-full w-[6vh]">
                                <input type="checkbox" className=" w-5 h-5" />
                            </div>
                            <div className="flex w-[48%]">
                                <div className=" flex w-[70%]">
                                    <img
                                        src={ImagePoduct}
                                        alt=""
                                        className=" flex justify-center h-24"
                                    />
                                    <p className="px-4">
                                        SmartPhone Techno Camon 20
                                    </p>
                                </div>
                                <div className="flex-col w-[30%] px-4">
                                    <div className=" flex items-center mt-1">
                                        <p>Color: &nbsp;</p>
                                        <p>Dark Blue</p>
                                    </div>
                                    <div className=" flex items-center mt-1">
                                        <p>Size: &nbsp;</p>
                                        <p>XXL</p>
                                    </div>
                                    <div className=" flex items-center mt-1">
                                        <p>Type: &nbsp;</p>
                                        <p>Pro</p>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-center justify-center w-[12%] px-6 h-28">
                                $899
                            </div>
                            <div className=" flex items-center justify-center w-[12%] px-6 h-28">
                                3
                            </div>
                            <div className=" flex items-center justify-center w-[12%] px-6 h-28">
                                $2640
                            </div>
                            <div className=" flex items-center justify-center w-[12%] px-6 h-28">
                                Hoho
                            </div>
                        </div>
                        {/* Div của voucher */}
                        <div className="flex justify-between border-t-2 px-10 h-10 cursor-pointer hover:bg-slate-300/30">
                            <div className="flex items-center">
                                <img
                                    src={Voucher}
                                    alt=""
                                    className="w-8 mr-4"
                                />
                                <p>Add Voucher</p>
                            </div>
                            <div className="flex items-center">
                                <img src={Next} alt="" className=" w-5 ml-2" />
                            </div>
                        </div>
                        {/* Div của phương thức vận chuyển */}
                        <div className="flex justify-between border-t-2 px-10 h-10 cursor-pointer hover:bg-slate-300/30">
                            <div className="flex items-center">
                                <img
                                    src={Delivery}
                                    alt=""
                                    className="w-7 mr-5"
                                />
                                <p>Shipping method: &nbsp;</p>
                                <p>Freeship</p>
                            </div>
                            <div className="flex items-center">
                                <img src={Next} alt="" className=" w-5 ml-2" />
                            </div>
                        </div>
                    </div>
                    {/* Div của  Tổng tiền sản phẩm và các tính năng xóa, chọn toàn bộ sản phẩm*/}
                    <nav className="sticky top-0 z-40 bg-white flex px-4 items-center justify-between rounded-xl shadow-2xl my-6 h-20 bottom-4 w-full">
                        <div className=" flex items-center justify-center h-full w-[6vh]">
                            <input type="checkbox" className=" w-5 h-5" />
                        </div>
                        <div className="flex">
                            <Link to="#" className=" mr-4">
                                Check All (1) &nbsp;
                            </Link>
                            <Link to="#">Delete</Link>
                        </div>

                        <div className="flex flex-col justify-center text-base ml-auto mr-8 ">
                            <div className="flex">
                                <p>Total Price: &nbsp;</p>
                                <p>(3 products)</p>
                            </div>
                            <div className=" ml-auto">
                                <p className=" font-bold text-3xl">$2640</p>
                            </div>
                        </div>
                        <div>
                            <button className=" w-52 h-14 bg-slate-600 text-white rounded-xl hover:bg-neutral-700">
                                Buy Now
                            </button>
                        </div>
                    </nav>
                </div>
            </div>
            {/* Div dành riêng cho thiết bị điện thoại */}
            <div className=" block md:hidden bg-slate-400/30 flex-col">
                <div className=" flex justify-between h-11 bg-white border-b-2">
                    <div className=" flex">
                        <img src={Back} className=" p-2" />
                        <p className=" flex items-center ml-2">Cart</p>
                    </div>
                    <div className="flex">
                        <Link to="#" className="flex items-center mr-5">
                            Edit
                        </Link>
                    </div>
                </div>
                <div className=" bg-white mb-4">
                    <div className=" flex items-center border-b-2 h-[6vh]">
                        <div className=" flex items-center justify-center h-full w-[4vh]">
                            <input type="checkbox" className=" w-4 h-4" />
                        </div>
                        <div className=" flex font-semibold text-slate-800">
                            <p>Techno Phone</p>
                            <img src={Checked} alt="" className=" w-5 ml-2" />
                        </div>
                    </div>
                    <div className=" flex my-2">
                        <div className=" flex items-center justify-center h-24 w-[4vh]">
                            <input type="checkbox" className=" w-4 h-4" />
                        </div>
                        <div className="w-24">
                            <img src={ImagePoduct} alt="" />
                        </div>
                        <div className="flex-col mb-2 ml-4 w-[55%]">
                            <div className=" ">
                                <p>SmartPhone Techno Camon 20</p>
                            </div>
                            <div className=" flex items-center mt-2">
                                <p className=" mr-3">Color:</p>
                                <p>Dark Blue</p>
                            </div>
                            <div className=" flex items-center mt-2">
                                <p className=" mr-6">Size:</p>
                                <p>XXL</p>
                            </div>
                            <div className=" flex items-center mt-2">
                                <p className=" mr-4">Type:</p>
                                <p>Pro</p>
                            </div>
                            <div className=" flex items-center mt-2">
                                <p className=" mr-3">Unit price:</p>
                                <p>$899</p>
                            </div>
                            <div className=" flex items-center mt-2">
                                <p className=" mr-5">Quantity:</p>
                                <p>3</p>
                            </div>
                            <div className=" flex items-center mt-2">
                                <p className=" mr-2">Total Price:</p>
                                <p>$2640</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between border-t-2 px-10 h-10">
                        <div className="flex items-center">
                            <img src={Voucher} alt="" className="w-8 mr-4" />
                            <p>Add Voucher</p>
                        </div>
                        <div className="flex items-center">
                            <img src={Next} alt="" className=" w-5 ml-2" />
                        </div>
                    </div>
                    <div className="flex justify-between border-t-2 px-10 h-10">
                        <div className="flex items-center">
                            <img src={Delivery} alt="" className="w-7 mr-5" />
                            <p>Shipping method: &nbsp;</p>
                            <p>Freeship</p>
                        </div>
                        <div className="flex items-center">
                            <img src={Next} alt="" className=" w-5 ml-2" />
                        </div>
                    </div>
                </div>
                <nav className="sticky top-0 z-40 bg-white flex px-4 items-center justify-between h-20 bottom-0 w-full border-t-sky-950 border-y-2">
                    <div className=" flex flex-col my-2">
                        <p>Total Price:</p>
                        <p className=" font-bold text-2xl">$2640</p>
                    </div>
                    <div className=" flex items-center">
                        <button className=" w-40 h-14 bg-slate-600 text-white rounded-xl">
                            Buy Now
                        </button>
                    </div>
                </nav>
            </div>
        </div>
    );
}
