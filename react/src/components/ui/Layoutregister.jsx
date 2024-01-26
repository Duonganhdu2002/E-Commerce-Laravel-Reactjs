import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import LogoGoogle1 from "../../assets/icon/Google__G__logo.svg";
import Logo from "../../assets/icon/logo.svg";
import {
    Input,
    Checkbox,
    Typography,
} from "@material-tailwind/react";
import { userRegister } from '../../services/authService';

const LayoutRegister = () => {

    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        full_name: '',
        telephone: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleRegistration = async () => {
        try {
            const response = await userRegister(userData);
            // console.log(response);
            navigate('/login')

        } catch (error) {
            console.error(error.response);
        }
    };

    return (
        <div className=" flex items-center justify-around bg-slate-200/50">
            <div className="flex items-center px-10 h-[880px]">
                <div className="flex flex-1 flex-col justify-center px-14 py-8 bg-white shadow-xl rounded-3xl">
                    <Link to="/">
                        <img
                            className="mx-auto h-28"
                            src={Logo}
                            alt="Your Company"
                        />
                    </Link>
                    <h2 className="text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
                        Create your Company Account.
                    </h2>

                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-xl md:max-w-xl">
                        <form className="space-y-4" action="#" method="POST">
                            <div className="flex justify-between pb-2">
                                <div className=" w-[47%] ">
                                    <div className="w-full">
                                        <Input
                                            label="Username"
                                            name="username"
                                            autoComplete='username'
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>

                                <div className="w-[47%]">
                                    <div className="w-full">
                                        <Input
                                            label="Phone number"
                                            name='telephone'
                                            onChange={handleInputChange}
                                            autoComplete='telephone'
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex justify-between pb-2">
                                <div className="w-[47%]">
                                    <div className="w-full">
                                        <Input
                                            label="Full Name"
                                            onChange={handleInputChange}
                                            name="full_name"
                                            autoComplete='full_name'
                                        />
                                    </div>
                                </div>

                                <div className="w-[47%]">
                                    <div className="w-full">
                                        <Input
                                            label="Email"
                                            name="email"
                                            autoComplete='email'
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className=" pb-2">
                                <div className="w-full">
                                    <Input
                                        label="Password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        onChange={handleInputChange}
                                    />
                                </div>
                            </div>

                            <div className="flex items-center text-black">
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
                                    onClick={handleRegistration}
                                    type="button"
                                    className="flex w-full justify-center bg-[#1e293b] text-white "
                                >
                                    Sign up
                                </Button>
                            </div>
                        </form>

                        <p className="mt-3 text-center text-gray-500 relative">
                            <span className="mb-10 relative z-10 bg-white px-2 text-base">
                                Or, sign up with{" "}
                            </span>
                            <span className="flex-1 absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700/50"></span>
                        </p>

                        <div>
                            {" "}
                            <Button
                                size="lg"
                                variant="outlined"
                                color="blue-gray"
                                className="flex w-full justify-center items-center mt-4"
                            >
                                <img
                                    src={LogoGoogle1}
                                    alt="metamask"
                                    className="h-6 w-6"
                                />
                                GOOGLE
                            </Button>
                        </div>

                        <div className=" mt-5">
                            Already member?&nbsp;
                            <Link
                                to="/Login"
                                className="font-semibold text-slate-500 hover:text-black hover:underline"
                            >
                                {/* &nbsp; là dấu cách */}
                                Login
                            </Link>
                            &nbsp;here.
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default LayoutRegister;
