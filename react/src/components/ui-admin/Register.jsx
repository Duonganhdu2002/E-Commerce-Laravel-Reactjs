import React from "react";
import {
    Input,
    Button,
    Checkbox,
    Typography,
    Select,
    Option,
} from "@material-tailwind/react";
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
                            Sign up with Google
                        </h1>
                    </Button>
                    <div className="my-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a
                            href="#"
                            className="text-xs text-center text-gray-500 uppercase"
                        >
                            or signup with email
                        </a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <div className="2xl:flex 2xl:justify-between">
                        <div className=" 2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input
                                    label="Username"
                                    id=" username"
                                    name=" username"
                                    type=" username"
                                    autoComplete=" username"
                                    required
                                />
                            </div>
                        </div>

                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input label="Phone number" required />
                            </div>
                        </div>
                    </div>

                    <div className="2xl:flex justify-between">
                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input label="Full Name" required />
                            </div>
                        </div>

                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input label="Email" required />
                            </div>
                        </div>
                    </div>

                    <div className="2xl:flex justify-between">
                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input label="Birthday" type="date" required />
                            </div>
                        </div>

                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Select label="Select Gender" required>
                                    <Option>Male</Option>
                                    <Option>Female</Option>
                                    <Option>Other</Option>
                                </Select>
                            </div>
                        </div>
                    </div>

                    <div className=" pb-2">
                        <div className="w-full">
                            <Input
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center text-black mb-4">
                        <Checkbox
                            label={
                                <Typography
                                    color="blue-gray"
                                    className="flex font-medium"
                                >
                                    I agree with the
                                    <Typography
                                        as="a"
                                        href="#"
                                        color="blue"
                                        className="font-medium transition-colors hover:text-blue-700"
                                    >
                                        &nbsp;terms and conditions
                                    </Typography>
                                    .
                                </Typography>
                            }
                        />
                    </div>

                    <div>
                        <Button
                            type="button"
                            className="flex w-full justify-center bg-[#1e293b] text-white "
                        >
                            Sign up
                        </Button>
                    </div>
                    <Link to="../login">
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <div
                                href="#"
                                className="text-xs text-gray-500 uppercase"
                            >
                                or sign in
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
