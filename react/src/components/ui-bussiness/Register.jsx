import React, { useState } from "react";
import { useSelector } from 'react-redux'

import {
    Input,
    Button,
    Checkbox,
    Typography,
    Select,
    Option,
    Card,
    CardBody,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/icon/logo-single.svg";
import { sellerRegister } from "../../services/authService";

const Login = () => {

    const seller = useSelector((state) => state.seller.seller);
    console.log(seller)
    const navigate = useNavigate();

    const [sellerData, setSellerData] = useState({
        shop_username: '',
        email: '',
        password: '',
        full_name: '',
        telephone: '',
        shop_name: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSellerData({ ...sellerData, [name]: value });
    };

    const handleRegistration = async () => {
        try {
            const response = await sellerRegister(sellerData);
            // console.log(response);
            navigate('/business/login')

        } catch (error) {
            console.error(error.response);
        }
    };

    return (
        <Card className="w-1/2 mx-auto mt-12">
            <CardBody className="w-full p-12">
                <form action="post">
                    <img src={Logo} alt="" className=" w-full h-20 py-2" />
                    <p className="text-xl text-gray-600 text-center">
                        Become an seller professional!
                    </p>
                    <div className="2xl:flex 2xl:justify-between mt-12">
                        <div className=" 2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input
                                    label="Username"
                                    id="shop_username"
                                    name="shop_username"
                                    type="text"
                                    autoComplete="shop_username"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input
                                    label="Phone number"
                                    id="telephone"
                                    name="telephone"
                                    type="text"
                                    autoComplete="telephone"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="2xl:flex justify-between">
                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input
                                    label="Full Name"
                                    id="full_name"
                                    name="full_name"
                                    type="text"
                                    autoComplete="full_name"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input
                                    label="Email"
                                    id="email"
                                    name="email"
                                    autoComplete="email"
                                    type="email"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="2xl:flex justify-between">
                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input
                                    label="Password"
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="password"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input
                                    label="Password confirm"
                                    id="passwordconfirm"
                                    name="passwordconfirm"
                                    type="password"
                                    autoComplete="passwordconfirm"
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="w-full mt-2">
                        <Input
                            label="Shop name"
                            id="shop_name"
                            name="shop_name"
                            type="text"
                            autoComplete="shop_name"
                            onChange={handleInputChange}
                        />
                    </div>


                    <div className="flex items-center text-black my-4">
                        <Checkbox
                            label={
                                <Typography
                                    color="blue-gray"
                                    className="flex font-medium text-sm"
                                >
                                    I agree with the
                                    <Typography
                                        as="a"
                                        href="#"
                                        color="blue"
                                        className="font-medium transition-colors hover:text-blue-700 text-sm"
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
                            className="w-full"
                            onClick={handleRegistration}
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
                                have an account
                            </div>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </Link>
                </form>
            </CardBody>
        </Card>
    );
};

export default Login;
