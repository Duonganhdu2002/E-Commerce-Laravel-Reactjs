import { Link } from 'react-router-dom';
import React from "react";
import logo from "../../assets/public/logo.svg";
import sale1 from "../../assets/public/sale/sale1.png";

export default function LayoutLogin() {
    return (
        <div className=" flex items-center justify-around bg-slate-200/50 lg:px-10 sm:px-10">
            <div
                style={{ width: "650px", height: "700px" }}
                className="flex items-center px-8"
            >
                <div className="flex flex-1 flex-col justify-center px-6 py-12 bg-white shadow-xl rounded-3xl">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link to="/">
                            <img
                                className="mx-auto h-28"
                                src={logo}
                                alt="Your Company"
                            /></Link>
                        <h2 className="mt-6 text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
                            Welcome to company! Please Login.
                        </h2>
                    </div>

                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium leading-6 text-gray-900"
                                >
                                    Username or Email address or Phone number *
                                </label>
                                <div className="mt-2">
                                    <input
                                        id=" username"
                                        name=" username"
                                        type=" username"
                                        autoComplete=" username"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Password *
                                    </label>
                                    <div className="text-sm">
                                        <a
                                            href="#"
                                            className="font-semibold text-slate-500 hover:text-slate-900"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-slate-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-slate-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>

                        <p className="mt-6 text-center text-gray-500 relative">
                            <span className="mb-10 relative z-10 bg-white px-2 text-base">
                                Or, login with{" "}
                            </span>
                            <span className="flex-1 absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700/50"></span>
                        </p>
                    </div>
                </div>
            </div>

            <div className="hidden md:block">
                <a href="">
                    <img
                        src={sale1}
                        alt=""
                        style={{ width: "550px", height: "auto" }}
                    />
                </a>
            </div>

            <div className="block md:hidden"></div>
        </div>
    );
}
