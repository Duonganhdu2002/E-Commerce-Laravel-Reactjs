import React from "react";
import { Input, Button, Card, CardHeader, CardBody, CardFooter, } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import Logo from "../../assets/icon/logo-single.svg";
const Login = () => {
    return (
        <Card className=" h-fit w-1/2 p-12 mx-auto mt-24">
            <CardBody className="w-full">
                <img src={Logo} alt="" className=" w-full h-20 py-2" />
                <p className="text-xl text-gray-600 text-center">
                    Welcome back!
                </p>
                
                <div className="mt-12">
                    <Input label="Username" required />
                </div>
                <div className="mt-4">
                    <Input label="Password" required />
                </div>
                <div className="mt-12">
                    <Button className=" w-full">
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
            </CardBody>
        </Card>
    );
};

export default Login;
