import React from "react";
import { Link } from "react-router-dom";
import logo_google_1 from "../../assets/public/Google__G__logo.svg";
import logo from "../../assets/public/logo.svg";

export default function LayoutRegister() {
    return (
        <div className=" flex items-center justify-around bg-slate-200/50">
            <div
                className="flex items-center px-10 h-[880px]"
            >
                <div className="flex flex-1 flex-col justify-center px-14 py-8 bg-white shadow-xl rounded-3xl">
                    <Link to="/">
                        <img
                            className="mx-auto h-28"
                            src={logo}
                            alt="Your Company"
                        />
                    </Link>
                    <h2 className="text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
                        Create your Company Account.
                    </h2>

                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-xl md:max-w-xl">
                        <form className="space-y-4" action="#" method="POST">
                            <div className="flex justify-between">
                                <div className=" w-[47%] ">
                                    <label
                                        htmlFor="username"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >
                                        Username *
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id=" username"
                                            name=" username"
                                            type=" username"
                                            autoComplete=" username"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-4"
                                        />
                                    </div>
                                </div>

                                <div className="w-[47%]">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        PhoneNumber *
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="text"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-4"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between ">
                                <div className="w-[47%]">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Full name *
                                    </label>
                                    <div className="mt-2">
                                        <input className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-4" />
                                    </div>
                                </div>

                                <div className="w-[47%]">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Email
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="email"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-4"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between ">
                                <div className="w-[47%] ">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Birthday
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            type="date"
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-4"
                                        />
                                    </div>
                                </div>

                                <div className="w-[47%] ">
                                    <label className="block text-sm font-medium leading-6 text-gray-900">
                                        Gender
                                    </label>
                                    <div className="mt-2">
                                        <select
                                            id="gender"
                                            name="gender"
                                            className=" block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-4"
                                        >
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>
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
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-slate-600 sm:text-sm sm:leading-6 px-4"
                                    />
                                </div>
                            </div>

                            <div className="flex items-center">
                                <input type="checkbox" name="" id="" className=" w-8 h-4" />
                                <p className=" ml-2">I have agreed to all terms of Company e-commerce platform</p>
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

                        <p className="mt-3 text-center text-gray-500 relative">
                            <span className="mb-10 relative z-10 bg-white px-2 text-base">
                                Or, sign up with{" "}
                            </span>
                            <span className="flex-1 absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700/50"></span>
                        </p>

                        <div className=" flex items-center justify-center my-3 h-12 rounded-xl border-2 cursor-pointer">
                            <img src={logo_google_1} alt="" className=" w-10" />
                            <p
                                href=""
                                className=" mb-2 mr-5 ml-3 font-light text-xl"
                            >
                                |
                            </p>
                            <p
                                href=""
                                className=" mb-1 font-semibold text-2xl text-slate-500/90"
                            >
                                Google
                            </p>
                        </div>

                        <div className=" mt-5">
                            Already member?&nbsp;
                            <Link to="/Login">
                                <a className="font-semibold text-slate-500 hover:text-black hover:underline">
                                    {/* &nbsp; là dấu cách */}
                                    Login
                                </a>
                            </Link>
                            &nbsp;here.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
