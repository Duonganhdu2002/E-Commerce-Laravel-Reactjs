import StarOutline from "../../assets/icon/star-outline.svg";
import StarO from "../../assets/icon/star-o-svgrepo-com.svg";
import Star from "../../assets/icon/star-svgrepo-com.svg";

import { Button } from "@material-tailwind/react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Progress,
} from "@material-tailwind/react";

import outlined from "@material-tailwind/react/theme/components/timeline/timelineIconColors/outlined";
import Reviews from "./Reviews";

export default function LayoutBannerShop() {
    return (
        <div className="flex flex-col justify-center">
            {/* Div dánh giá sản phẩm */}
            <div className="flex justify-around float-left px-4 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-4">
                <div className="flex items-center flex-col float-left px-4 w-full">
                    <p className=" my-2 text-xl font-bold">PRODUCT REVIEWS</p>
                    {/* Div lọc sao đánh giá */}
                    <div
                        id="ReviewsRoot"
                        className="flex flex-col py-10 justify-between gap-8 w-full font-sans items-start"
                    >
                        <div className="flex flex-col gap-6 w-full items-start">
                            <div className="flex flex-row justify-between ml-1 w-full items-start">
                                <div className="flex">
                                    <div className="text-right font-bold leading-[24px] text-[#607d8b] mr-2">
                                        4.7
                                    </div>
                                    <div className="flex flex-row mt-px w-1/3 items-start">
                                        <img
                                            src={Star}
                                            alt="Star"
                                            id="Star"
                                            className="w-5"
                                        />
                                        <img
                                            src={Star}
                                            alt="Star1"
                                            id="Star1"
                                            className="w-5"
                                        />
                                        <img
                                            src={Star}
                                            alt="Star2"
                                            id="Star2"
                                            className="w-5"
                                        />
                                        <img
                                            src={Star}
                                            alt="Star3"
                                            id="Star3"
                                            className="w-5"
                                        />
                                        <img
                                            src={StarO}
                                            alt="Star4"
                                            id="Star4"
                                            className="w-5"
                                        />
                                    </div>
                                </div>

                                <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b] mt-px">
                                    Based on 134 Reviews
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-row justify-between ml-1 w-full font-sans items-start">
                            <div className="flex flex-col justify-between gap-2 w-8 items-start">
                                <div className="flex flex-row gap-1 w-8 items-start">
                                    <div className="text-right font-medium leading-[24px] text-[#607d8b]">
                                        5
                                    </div>
                                    <img
                                        src={Star}
                                        alt="Star5"
                                        id="Star5"
                                        className="mt-px w-5"
                                    />
                                </div>
                                <div className="flex flex-row gap-1 w-8 items-start">
                                    <div className="text-right font-medium leading-[24px] text-[#607d8b]">
                                        4
                                    </div>
                                    <img
                                        src={Star}
                                        alt="Star6"
                                        id="Star6"
                                        className="mt-px w-5"
                                    />
                                </div>
                                <div className="flex flex-row gap-1 w-8 font-sans items-start">
                                    <div className="text-right font-medium leading-[24px] text-[#607d8b]">
                                        3
                                    </div>
                                    <img
                                        src={Star}
                                        alt="Star7"
                                        id="Star7"
                                        className="mt-px w-5"
                                    />
                                </div>
                                <div className="flex flex-row gap-1 w-8 font-sans items-start">
                                    <div className="text-right font-medium leading-[24px] text-[#607d8b]">
                                        2
                                    </div>
                                    <img
                                        src={StarOutline}
                                        alt="Star8"
                                        id="Star8"
                                        className="mt-px w-5"
                                    />
                                </div>
                                <div className="flex flex-row gap-1 w-8 font-sans items-start">
                                    <div className="text-right font-medium leading-[24px] text-[#607d8b]">
                                        1
                                    </div>
                                    <img
                                        src={StarOutline}
                                        alt="Star9"
                                        id="Star9"
                                        className="mt-px w-5"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-2 w-5/6 h-36 items-start">
                                <div className="flex w-full flex-col gap-4 mb-4">
                                    <Progress value={75} color="amber" />
                                </div>
                                <div className="flex w-full flex-col gap-4 mb-4">
                                    <Progress value={10} color="amber" />
                                </div>
                                <div className="flex w-full flex-col gap-4 mb-4">
                                    <Progress value={25} color="amber" />
                                </div>
                                <div className="flex w-full flex-col gap-4 mb-4">
                                    <Progress value={0} color="amber" />
                                </div>
                                <div className="flex w-full flex-col gap-4 mb-2">
                                    <Progress value={0} color="amber" />
                                </div>
                            </div>
                            <div className="flex flex-col justify-between mt-px gap-3 w-6 font-sans items-start">
                                <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b]">
                                    75%
                                </div>
                                <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b]">
                                    10%
                                </div>
                                <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b]">
                                    25%
                                </div>
                                <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b] ml-2">
                                    0%
                                </div>
                                <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b] ml-2">
                                    0%
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-full font-sans items-start">
                            <div className="text-xl font-semibold leading-[30px] text-[#212121]">
                                We value your opinion
                            </div>
                            <div className="leading-[27.2px] text-[#607d8b] w-full">
                                The time is now for it to be okay to be great.
                                People in this world shun people for being
                                great.{" "}
                            </div>
                        </div>
                        <Button id="ButtonFilled" className="w-full">
                            write a review
                        </Button>
                    </div>
                    {/* Div đánh giá */}
                    <Reviews/>
                </div>
                <div className="items-center justify-end flex-col hidden lg:block w-[35%] ml-10">
                    <Card className=" w-80 mb-8">
                        <CardHeader
                            shadow={false}
                            floated={false}
                            className="h-96"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
                                alt="card-image"
                                className="h-full w-full object-cover"
                            />
                        </CardHeader>
                        <CardBody>
                            <div className="mb-2 flex items-center justify-between">
                                <Typography
                                    color="blue-gray"
                                    className="font-medium"
                                >
                                    Apple AirPods
                                </Typography>
                                <Typography
                                    color="blue-gray"
                                    className="font-medium"
                                >
                                    $95.00
                                </Typography>
                            </div>
                            <Typography
                                variant="small"
                                color="gray"
                                className="font-normal opacity-75"
                            >
                                With plenty of talk and listen time,
                                voice-activated Siri access, and an available
                                wireless charging case.
                            </Typography>
                        </CardBody>
                        <CardFooter className="pt-0">
                            <Button
                                ripple={false}
                                fullWidth={true}
                                className="bg-blue-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100"
                            >
                                Buy now
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
