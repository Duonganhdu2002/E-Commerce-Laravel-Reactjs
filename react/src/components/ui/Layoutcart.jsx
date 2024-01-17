import { Select, Option } from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import img from "../../assets/image/Bedroom10.jpg";
import CancleIcon from "../../assets/icon/cancle.svg";
import Check from "../../assets/icon/check-svgrepo-com.svg";
import Lock from "../../assets/icon/lock-svgrepo-com.svg";
import Visa from "../../assets/icon/visa-svgrepo-com.svg";
import AmericanExpress from "../../assets/icon/american-express-logo-svgrepo-com.svg";
import Mastercard from "../../assets/icon/mastercard-svgrepo-com.svg";
import PayPal from "../../assets/icon/paypal-svgrepo-com.svg";
import { Link } from "react-router-dom";

export default function Layoutcart() {
    return (
        <div className=" flex justify-center items-center">
            <div className=" w-[95%] md:w-[95%] 2xl:w-[80%]">
                <div>
                    <p className=" text-3xl md:text-4xl font-bold text-center mt-8 md:mt-12">
                        Shopping Cart
                    </p>
                    <p className=" text-md md:text-lg text-center my-4 mb-12">
                        You are eligible for Free Shipping.
                    </p>
                </div>
                <div className=" flex flex-col xl:flex-row ">
                    <div className=" w-full h-[320px] xl:w-60%] ">
                        <div className=" border-b-2  flex mb-10 pb-14">
                            <div className=" w-[45%] flex justify-center ">
                                <img
                                    className=" w-36 h-60 object-cover rounded-xl shadow-xl"
                                    src={img}
                                    alt=""
                                />
                            </div>
                            <div className=" w-[55%]">
                                <div className=" flex justify-between">
                                    <p className=" text-lg text-gray-900 font-semibold">
                                        Product Name
                                    </p>
                                    <Button size="sm" variant="text">
                                        <img
                                            className=" w-4 h-4"
                                            src={CancleIcon}
                                            alt=""
                                        />
                                    </Button>
                                </div>
                                <div>
                                    <div className=" text-sm my-6 flex">
                                        <p className=" text-gray-600">Silk</p>
                                        <span className=" mx-12 text-gray-600">
                                            |
                                        </span>
                                        <p className=" text-gray-600">
                                            Size: S
                                        </p>
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
                                    <div className="flex">
                                        <img
                                            src={Check}
                                            alt=""
                                            className=" w-4 mr-1"
                                        />
                                        <p className=" text-sm font-medium text-green-800 my-6">
                                            In Stock
                                        </p>
                                    </div>
                                    <div>
                                        <p className=" font-semibold text-2xl">
                                            $1208
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className=" flex flex-col justify-center w-full xl:w-[40%] h-auto xl:ml-20 ">
                        <div className="rounded-2xl p-8 border">
                            <div className="">
                                <p className=" text-2xl font-bold">
                                    Order Summary
                                </p>
                            </div>
                            <div className="">
                                <div className="flex justify-between items-center py-4 border-b text-gray-600">
                                    <p>Subtotal</p>
                                    <p>$2,090</p>
                                </div>
                                <div className="flex justify-between items-center py-4 border-b text-gray-600">
                                    <p>Shipping Tax</p>
                                    <p>$0</p>
                                </div>
                            </div>
                            <div className="flex justify-between items-center py-4 text-2xl font-bold">
                                <p>Total</p>
                                <p>$2,090</p>
                            </div>
                            <div className=" py-2">
                                <Link to="/checkout">
                                    <Button className="w-full bg-black/80 hover:shadow-md my-2">
                                        CHECKOUT
                                    </Button>
                                </Link>
                                <Button className="w-full bg-white hover:bg-gray-300 hover:shadow-none shadow-none text-black my-2">
                                    CONTINUE
                                </Button>
                            </div>
                            <div>
                                <p className="flex items-center justify-center text-gray-500">
                                    Tax included. Shipping calculated at
                                    checkout.
                                </p>
                            </div>
                        </div>

                        <div className=" flex flex-col">
                            <div className="flex justify-center items-center p-4">
                                <img src={Lock} alt="" className=" w-4 mr-2" />
                                <p className=" font-semibold text-[#9e9e9e]">
                                    Secured Payment by Paddle with:
                                </p>
                            </div>
                            <div className="flex justify-center items-center pb-6">
                                <img src={Visa} alt="" className=" w-12 mr-2" />
                                <img src={Mastercard} alt="" className=" w-12 mr-2" />
                                <img src={AmericanExpress} alt="" className=" w-12 mr-2" />
                                <img src={PayPal} alt="" className=" w-12 mr-2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
