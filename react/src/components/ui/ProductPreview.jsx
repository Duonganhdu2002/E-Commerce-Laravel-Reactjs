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
            </div>
        </div>
    );
}
