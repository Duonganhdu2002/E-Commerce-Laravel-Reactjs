import React from "react";
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
import { Link } from "react-router-dom";
import Logo from "../../assets/icon/logo-single.svg";

const Login = () => {

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <Card className="w-1/2 mx-auto mt-12">
            <CardBody className="w-full p-12">
                <form action="post">
                    <img src={Logo} alt="" className=" w-full h-20 py-2" />
                    <p className="text-xl text-gray-600 text-center">
                        Welcome back!
                    </p>
                    <div className="2xl:flex 2xl:justify-between mt-12">
                        <div className=" 2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input
                                    label="Username"
                                    id="username"
                                    name="username"
                                    type="text"
                                    autoComplete="username"
                                />
                            </div>
                        </div>

                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input
                                    label="Phone number"
                                    id="phonenumber"
                                    name="phonenumber"
                                    type="text"
                                    autoComplete="phonenumber"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="2xl:flex justify-between">
                        <div className="2xl:w-[47%] w-full my-2">
                            <div className="w-full">
                                <Input
                                    label="Full Name"
                                    id="fullname"
                                    name="fullname"
                                    type="text"
                                    autoComplete="fullname"
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
                                />
                            </div>
                        </div>
                    </div>

                    <div className=" pb-2 mt-2">
                        <div className="w-full">
                            <Input
                                label="Password"
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
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
                            className="w-full"
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
