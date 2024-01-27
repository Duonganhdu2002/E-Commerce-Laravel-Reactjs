import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productInformation } from "../../services/productService";
import { Select, Option, Button } from "@material-tailwind/react";
import starBlackImg from "../../assets/icon/star-black.svg"
import starWhiteImg from "../../assets/icon/star-white.svg"
import Reviews from "./Reviews";
import StarOutline from "../../assets/icon/star-outline.svg";
import StarO from "../../assets/icon/star-o-svgrepo-com.svg";
import Star from "../../assets/icon/star-svgrepo-com.svg";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Progress,
} from "@material-tailwind/react";


const LayoutProductDetails = () => {

    const [count, setCount] = useState(0);

    const { productId } = useParams();
    const [data, setData] = useState([]);

    const starBlack = Number(data.average_rating).toFixed(0);
    const starWhite = 5 - starBlack;

    const sizes = data.sizes || [];
    const colors = data.colors || [];

    const imageUrls = data.image_urls || [];
    const limitedImageUrls = imageUrls.slice(0, 3);
    const [currentImage, setCurrentImage] = useState(imageUrls[0]);

    const handleThumbnailClick = (imageUrl) => {
        setCurrentImage(imageUrl);
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await productInformation(productId);
                if (res && res.data) {
                    setData(res.data);

                    if (res.data.image_urls && res.data.image_urls.length > 0) {
                        setCurrentImage(res.data.image_urls[0]);
                    }
                }
            } catch (error) {
                console.error("Error fetching fields:", error);
            }
        };

        fetchData();
    }, [productId]);

    useEffect(() => {
        getProduct(productId);
    }, [productId]);

    const getProduct = async () => {
        try {
            let res = await productInformation(productId);
            if (res && res.data) {
                setData(res.data);

            }
        } catch (error) {
            console.error("Error fetching fields:", error);
        }
    };

    // console.log(data);
    // console.log(starBlack);
    // console.log(starWhite);

    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    const minusCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">

            {/* Product detail */}

            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{data.name}</h2>

                    <div className=" flex flex-row justify-between  mt-5">
                        <div className="flex flex-row space-x-3">
                            {Array.from({ length: starBlack }, (_, index) => (
                                <img key={index} src={starBlackImg} alt="" />
                            ))}
                            {Array.from({ length: starWhite }, (_, index) => (
                                <img key={index} src={starWhiteImg} alt="" />
                            ))}
                        </div>
                    </div>

                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{data.description}</p>
                    <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 ">${data.price}</p>

                    <div className="lg:mt-11 mt-10">
                        <div className="flex flex-row justify-between">
                            <p className=" font-medium text-base leading-4 text-gray-600">Select quantity</p>
                            <div className="flex">
                                <span onClick={minusCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
                                    -
                                </span>
                                <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center w-14 pb-1" type="text" value={count} onChange={(e) => e.target.value} />
                                <span onClick={addCount} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 ">
                                    +
                                </span>
                            </div>
                        </div>
                        <hr className=" bg-gray-200 w-full my-2" />
                        <div className=" flex flex-row justify-between items-center mt-4">
                            <div className="flex w-full gap-6 justify-between text-blue-gray-900">
                                <Select variant="standard" label="Size">
                                    {sizes.map((size, index) => (
                                        <Option key={index}>{size}</Option>
                                    ))}
                                </Select>
                                <Select variant="standard" label="Color">
                                    {colors.map((color, index) => (
                                        <Option key={index}>{color}</Option>
                                    ))}
                                </Select>
                            </div>
                        </div>
                    </div>

                    <Button className="flex items-center justify-center gap-3 mt-4 mx-auto w-full h-12">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={2}
                            stroke="currentColor"
                            className="h-5 w-5"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
                            />
                        </svg>
                        Add to cart
                    </Button>
                </div>

                <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className="w-full lg:w-8/12 flex justify-center items-center">
                        {imageUrls.length > 0 && currentImage ? (
                            <img
                                className="h-[360px] w-[360px] object-cover"
                                src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/image/${currentImage}?raw=true`}
                                alt={data.name}
                            />
                        ) : (
                            <div></div>
                        )}
                    </div>

                    <div className="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-3 grid-cols-2 gap-6">
                        {limitedImageUrls.map((imageUrl, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center py-4 cursor-pointer"
                                onClick={() => handleThumbnailClick(imageUrl)}
                            >
                                <img
                                    className="h-[180px] w-[180px] object-cover"
                                    src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/image/${imageUrl}?raw=true`}
                                    alt={`${data.name} - preview ${index + 1}`}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* End product detail */}

            {/* Shop account */}

            <div className="flex items-center justify-center w-full py-8">
                <div className="bg-white dark:bg-gray-800 shadow rounded">
                    <div className="relative">
                        <img className="h-56 shadow rounded-t w-full object-cover object-center" src="https://tuk-cdn.s3.amazonaws.com/assets/components/grid_cards/gc_29.png" />
                        <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                            <img className="w-full h-full overflow-hidden object-cover rounded" src="https://image.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg" />
                        </div>
                    </div>
                    <div className="px-5 xl:px-10 pb-10">
                        <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
                            <div className="flex items-center">
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 mr-1 text-yellow-400 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                                <svg className="w-4 text-gray-200 icon icon-tabler icon-tabler-star" xmlns="http://www.w3.org/2000/svg" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
                                    <path stroke="none" fill="none" d="M0 0h24v24H0z" />
                                    <path fill="currentColor" d="M12 17.75l-6.172 3.245 1.179-6.873-4.993-4.867 6.9-1.002L12 2l3.086 6.253 6.9 1.002-4.993 4.867 1.179 6.873z" />
                                </svg>
                            </div>
                        </div>
                        <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                            <div className="xl:pr-16 w-full xl:w-2/3">
                                <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                                    <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">Marshall Mathers</h2>
                                    <div className="text-sm bg-indigo-700 dark:bg-indigo-600 text-white px-5 py-1 font-normal rounded-full">Pro</div>
                                </div>
                                <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">HI, I am a direct response copywriter from the US. When you work with me, we have the same goal. Maximizing your ROI</p>
                            </div>
                            <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">82</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Reviews</p>
                                </div>
                                <div className="mr-6 xl:mr-10">
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">28</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Projects</p>
                                </div>
                                <div>
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">42</h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Approved</p>
                                </div>
                            </div>
                            <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                                <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                                    <div className="rounded-full bg-gray-200 text-gray-600 dark:text-gray-400 text-sm px-6 py-2 flex justify-center items-center">Remote</div>
                                    <div className="ml-5 rounded-full bg-green-200 text-green-500 text-sm px-6 py-2 flex justify-center items-center">Available</div>
                                </div>
                                <button className="focus:outline-none ml-0 md:ml-5 bg-indigo-700 dark:bg-indigo-600 transition duration-150 ease-in-out hover:bg-indigo-600 rounded text-white px-3 md:px-6 py-2 text-sm">Message</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* End shop account */}


            {/* Product review */}

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
                        <Reviews />
                    </div>
                    
                </div>
            </div>

            {/* End product review */}

        </div>
    );
};


export default LayoutProductDetails;

