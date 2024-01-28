import React from "react";
import { Input, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import BannerLogin from "../../assets/banner/banner_8.png";
import LogoGoogle from "../../assets/icon/Google__G__logo.svg";
import Logo from "../../assets/icon/logo-single.svg";
const Login = () => {
    return (
        <div className="py-16">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-5xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover">
                    <img
                        src={BannerLogin}
                        className=" w-full h-full object-cover"
                    />
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <img src={Logo} alt="" className=" w-full h-20 py-2" />
                    <p className="text-xl text-gray-600 text-center">
                        Welcome back!
                    </p>
                    <Button
                        href="#"
                        className="flex items-center justify-center w-full mt-4"
                        variant="outlined"
                    >
                        <div className="">
                            <img src={LogoGoogle} alt="" className="h-6 w-6" />
                        </div>
                        <h1 className="px-4 text-center font-bold">
                            Sign in with Google
                        </h1>
                    </Button>
                    <div className="mt-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a
                            href="#"
                            className="text-xs text-center text-gray-500 uppercase"
                        >
                            or login with email
                        </a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <div className="mt-4">
                        <Input label="Username" required />
                    </div>
                    <div className="mt-4">
                        <div className="flex justify-between mb-4">
                            <a href="#" className="text-xs text-gray-500">
                                Forget Password?
                            </a>
                        </div>
                        <Input label="Password" required />
                    </div>
                    <div className="mt-6">
                        <Button className="bg-gray-700 text-white font-bold py-3 px-4 w-full hover:bg-gray-600">
                            Login
                        </Button>
                    </div>
                    <Link to="../register">
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <div
                                href="#"
                                className="text-xs text-gray-500 uppercase"
                            >
                                or sign up
                            </div>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
