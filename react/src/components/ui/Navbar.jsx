import { Link } from "react-router-dom";
import React from "react";
import logo from "../../assets/icon/logo.svg";
import logoSingle from "../../assets/icon/logo-single.svg";
import search from "../../assets/icon/search.svg";
import cart from "../../assets/icon/cart.svg";

export default function Navbar() {
    return (
        <div className="flex justify-center items-center">
            <div className="bg-white flex justify-between items-center h-[10vh] w-[100%] md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%] px-2">
                {/* Logo */}
                <div className="flex w-2/12 justify-center items-center">
                    <Link to="/">
                        <img
                            className=" lg:hidden xl:hidden 2xl:hidden w-12 h-12"
                            src={logoSingle}
                            alt=""
                        />
                        <img
                            className="hidden lg:block xl:block 2xl:block w-20 h-20"
                            src={logo}
                            alt=""
                        />
                    </Link>
                </div>

                {/* Search bar */}
                <div className="w-7/12 md:w-8/12 lg:w-8/12 xl:w-8/12 2xl:w-8/12 flex justify-center ">
                    <div className="relative w-full md:w-[90%]">
                        <input
                            placeholder="What do you need?"
                            className="w-full border rounded-md p-2 pr-8"
                            style={{ border: "1px solid gray" }}
                        />
                        <img
                            src={search}
                            alt="Search Icon"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 w-5 h-5"
                        />
                    </div>
                </div>

                {/* User/Login Section */}
                <div className="w-1/12">
                    <div className="flex justify-center items-center">
                        <Link to="/cart">
                            <img
                                className="w-11 h-11 cursor-pointer"
                                src={cart}
                                alt=""
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
