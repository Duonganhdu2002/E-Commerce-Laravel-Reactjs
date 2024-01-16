import React from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Input,
    Select,
    Option,
    Button,
} from "@material-tailwind/react";

import { CameraIcon } from "@heroicons/react/24/solid";

import Facebook from "../../assets/icon/facebook-svgrepo-com.svg";
import Twitter from "../../assets/icon/icons8-twitter.svg";
import Instagram from "../../assets/icon/instagram-1-svgrepo-com.svg";

export default function LayoutProfile() {
    return (
        <div className=" flex justify-center my-16">
            <div className="xl:flex xl:justify-between justify-center 2xl:w-[80%] xl:w-[95%] w-[90%]">
                <div className="flex xl:justify-start justify-center xl:w-[33%] h-fit">
                    <Card className="w-96">
                        <CardHeader floated={false} className="h-80">
                                <img
                                    src="https://docs.material-tailwind.com/img/team-3.jpg"
                                    alt="profile-picture"
                                    className=" w-full h-full object-cover"
                                />
                        </CardHeader>
                        <CardBody className="flex flex-col justify-center items-center text-center">
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className="mb-2"
                            >
                                Natalie Paisley
                            </Typography>
                            <Typography
                                color="blue-gray"
                                className="font-medium"
                                textGradient
                            >
                                CEO / Co-Founder
                            </Typography>
                            <Button
                                    variant="outlined"
                                    className="flex justify-center mt-6 w-[40%]"
                                >
                                    <CameraIcon className=" w-8" />
                                </Button>
                        </CardBody>
                        <CardFooter className="flex justify-center gap-7 pt-2">
                            <Tooltip content="Like">
                                <Typography
                                    as="a"
                                    href="#facebook"
                                    variant="lead"
                                    color="blue"
                                    textGradient
                                >
                                    <img
                                        src={Facebook}
                                        alt=""
                                        className=" w-8"
                                    />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#twitter"
                                    variant="lead"
                                    color="light-blue"
                                    textGradient
                                >
                                    <img
                                        src={Twitter}
                                        alt=""
                                        className=" w-8"
                                    />
                                </Typography>
                            </Tooltip>
                            <Tooltip content="Follow">
                                <Typography
                                    as="a"
                                    href="#instagram"
                                    variant="lead"
                                    color="purple"
                                    textGradient
                                >
                                    <img
                                        src={Instagram}
                                        alt=""
                                        className=" w-8"
                                    />
                                </Typography>
                            </Tooltip>
                        </CardFooter>
                    </Card>
                </div>

                <div className="flex xl:justify-center w-[100%] xl:w-[63%] mt-10 xl:mt-0">
                    <Card className=" w-full px-8">
                        <CardHeader
                            floated={false}
                            className=" -ml-0 px-8 w-full bg-gray-800"
                        >
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className=" my-2 text-white"
                            >
                                Profile
                            </Typography>
                        </CardHeader>
                        <CardBody className=" px-8 w-full">
                            <div className=" md:flex">
                                <div className="w-full mb-6 mr-8">
                                    <Input label="Username" />
                                </div>
                                <div className="w-full mb-6">
                                    <Input label="Full Name" />
                                </div>
                            </div>
                            <div className=" md:flex">
                                <div className="w-full mb-6 mr-8">
                                    <Input label="Email" />
                                </div>
                                <div className="w-full mb-6">
                                    <Input label="Phone Number" />
                                </div>
                            </div>
                            <div className=" md:flex">
                                <div className="w-full mb-6 mr-8">
                                    <Select label="Select Gender" required>
                                        <Option>Male</Option>
                                        <Option>Female</Option>
                                        <Option>Other</Option>
                                    </Select>
                                </div>
                                <div className="w-full mb-6">
                                    <Input label="Birthday" type="date" />
                                </div>
                            </div>
                        </CardBody>

                        <CardHeader
                            floated={false}
                            className=" -ml-0 mt-0 px-8 w-full bg-gray-800"
                        >
                            <Typography
                                variant="h4"
                                color="blue-gray"
                                className=" my-2 text-white"
                            >
                                Select Delivery Information
                            </Typography>
                        </CardHeader>

                        <CardBody className=" px-8 w-full">
                            <div className=" md:flex">
                                <div className="w-full mb-6 mr-8">
                                    <Input label="Username" />
                                </div>
                                <div className="w-full mb-6">
                                    <Input label="Full Name" />
                                </div>
                            </div>
                            <div className=" md:flex">
                                <div className="w-full mb-6 mr-8">
                                    <Input label="Email" />
                                </div>
                                <div className="w-full mb-6">
                                    <Input label="Phone Number" />
                                </div>
                            </div>
                            <div className=" md:flex">
                                <div className="w-full mb-6 mr-8">
                                    <Select label="Select Gender" required>
                                        <Option>Male</Option>
                                        <Option>Female</Option>
                                        <Option>Other</Option>
                                    </Select>
                                </div>
                                <div className="w-full mb-6">
                                    <Input label="Birthday" type="date" />
                                </div>
                            </div>

                            <div className=" md:flex">
                                <div className="w-full mb-6">
                                    <Input label="Address" />
                                </div>
                            </div>

                            <div className="md:flex justify-end">
                                <Button
                                    variant="gradient"
                                    color="red"
                                    className=" mr-4"
                                >
                                    delete
                                </Button>

                                <Button variant="gradient" color="blue">
                                    save
                                </Button>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
}
