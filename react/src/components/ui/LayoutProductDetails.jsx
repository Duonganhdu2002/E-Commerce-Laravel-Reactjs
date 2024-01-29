import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productInformation } from "../../services/productService";
import { Select, Option, Button } from "@material-tailwind/react";
import starBlackImg from "../../assets/icon/star-black.svg"
import starWhiteImg from "../../assets/icon/star-white.svg"
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

    const [menu, setMenu] = useState(true);
    const [menu1, setMenu1] = useState(false);

    const { productId } = useParams();
    const [data, setData] = useState([]);

    const starBlack = Number(data.average_rating).toFixed(0);
    const starWhite = 5 - starBlack;

    const starBlack1 = Number(data.average_rating_by_creator).toFixed(0);
    const starWhite1 = 5 - starBlack1;

    const starYellow = Number(data.average_rating_by_creator).toFixed(0);
    const starYellowNone = 5 - starYellow;

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
                        {data.created_by_user_id?.shop_background && (
                            <img
                                className="h-56 shadow rounded-t w-full object-cover object-center"
                                src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/shop/${data.created_by_user_id.shop_background}?raw=true`}
                                alt="Shop Avatar"
                            />

                        )}
                        <div className="inset-0 m-auto w-24 h-24 absolute bottom-0 -mb-12 xl:ml-10 rounded border-2 shadow border-white">
                            {data.created_by_user_id?.shop_avt && (
                                <img
                                    className="w-full h-full overflow-hidden object-cover rounded"
                                    src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/shop/${data.created_by_user_id.shop_avt}?raw=true`}
                                    alt="Shop Avatar"
                                />

                            )}
                        </div>
                    </div>
                    <div className="px-5 xl:px-10 pb-10">
                        <div className="flex justify-center xl:justify-end w-full pt-16 xl:pt-5">
                            <div className="flex items-center">

                                <div className="flex flex-row space-x-3">
                                    {Array.from({ length: starBlack1 }, (_, index) => (
                                        <img key={index} src={starBlackImg} alt="" />
                                    ))}
                                    {Array.from({ length: starWhite1 }, (_, index) => (
                                        <img key={index} src={starWhiteImg} alt="" />
                                    ))}
                                </div>

                            </div>
                        </div>
                        <div className="pt-3 xl:pt-5 flex flex-col xl:flex-row items-start xl:items-center justify-between">
                            <div className="xl:pr-16 w-full xl:w-2/3">
                                <div className="text-center xl:text-left mb-3 xl:mb-0 flex flex-col xl:flex-row items-center justify-between xl:justify-start">
                                    <h2 className="mb-3 xl:mb-0 xl:mr-4 text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                                        {data.created_by_user_id?.shop_name && (
                                            data.created_by_user_id.shop_name
                                        )}
                                    </h2>
                                </div>
                                <p className="text-center xl:text-left mt-2 text-sm tracking-normal text-gray-600 dark:text-gray-400 leading-5">
                                    {data.created_by_user_id?.shop_introduce && (
                                        data.created_by_user_id.shop_introduce
                                    )}
                                </p>
                            </div>
                            <div className="xl:px-10 xl:border-l xl:border-r w-full py-5 flex items-start justify-center xl:w-1/3">
                                <div>
                                    <h2 className="text-gray-600 dark:text-gray-400 font-bold text-xl xl:text-2xl leading-6 mb-2 text-center">
                                        {data.number_of_products_by_creator}
                                    </h2>
                                    <p className="text-gray-800 dark:text-gray-100 text-sm xl:text-xl leading-5">Products</p>
                                </div>
                            </div>
                            <div className="w-full xl:w-2/3 flex-col md:flex-row justify-center xl:justify-end flex md:pl-6">
                                <div className="flex items-center justify-center xl:justify-start mt-1 md:mt-0 mb-5 md:mb-0">
                                    <Button size="sm" className=" mr-3">VISIT</Button>
                                    <Button size="sm">MESSAGE</Button>
                                </div>
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
                                            {
                                                Number(data.average_rating_by_creator).toFixed(2)
                                            }
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
                                        Based on {data.total_reviews} Reviews
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between ml-1 w-full font-sans items-start">
                                <div className="flex flex-col justify-between gap-2 w-8 items-start">
                                    <div className="flex flex-row gap-1 w-8 items-start">
                                        <div className="text-right font-medium leading-[24px] text-[#607d8b]">
                                            5
                                        </div>
                                        {data.review_counts?.["5"] && data.review_counts["5"] ? (
                                            <img
                                                src={Star}
                                                alt="Star5"
                                                className="mt-px w-5"
                                            />
                                        ) : (
                                            <img
                                                src={StarOutline}
                                                alt="Star9"
                                                className="mt-px w-5"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-row gap-1 w-8 items-start">
                                        <div className="text-right font-medium leading-[24px] text-[#607d8b]">
                                            4
                                        </div>
                                        {data.review_counts?.["4"] && data.review_counts["4"] ? (
                                            <img
                                                src={Star}
                                                alt="Star6"
                                                className="mt-px w-5"
                                            />
                                        ) : (
                                            <img
                                                src={StarOutline}
                                                alt="Star8"
                                                className="mt-px w-5"
                                            />
                                        )}
                                    </div>
                                    <div className="flex flex-row gap-1 w-8 font-sans items-start">
                                        <div className="text-right font-medium leading-[24px] text-[#607d8b]">
                                            3
                                        </div>
                                        <img
                                            src={Star}
                                            alt="Star7"
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
                                            className="mt-px w-5"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-between mt-2 w-5/6 h-36 items-start">
                                    <div className="flex w-full flex-col gap-4 mb-4">
                                        <Progress value={data.review_counts?.["5"] ? Math.round((data.review_counts["5"] / data.total_reviews) * 100) : 0} color="amber" />
                                    </div>
                                    <div className="flex w-full flex-col gap-4 mb-4">
                                        <Progress value={data.review_counts?.["4"] ? Math.round((data.review_counts["4"] / data.total_reviews) * 100) : 0} color="amber" />
                                    </div>
                                    <div className="flex w-full flex-col gap-4 mb-4">
                                        <Progress value={data.review_counts?.["3"] ? Math.round((data.review_counts["3"] / data.total_reviews) * 100) : 0} color="amber" />
                                    </div>
                                    <div className="flex w-full flex-col gap-4 mb-4">
                                        <Progress value={data.review_counts?.["2"] ? Math.round((data.review_counts["2"] / data.total_reviews) * 100) : 0} color="amber" />
                                    </div>
                                    <div className="flex w-full flex-col gap-4 mb-2">
                                        <Progress value={data.review_counts?.["1"] ? Math.round((data.review_counts["1"] / data.total_reviews) * 100) : 0} color="amber" />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between mt-px gap-3 w-6 font-sans items-start">
                                    <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b]">
                                        {data.review_counts?.["5"] ? Math.round((data.review_counts["5"] / data.total_reviews) * 100) : 0}%
                                    </div>
                                    <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b]">
                                        {data.review_counts?.["4"] ? Math.round((data.review_counts["4"] / data.total_reviews) * 100) : 0}%
                                    </div>
                                    <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b]">
                                        {data.review_counts?.["3"] ? Math.round((data.review_counts["3"] / data.total_reviews) * 100) : 0}%
                                    </div>
                                    <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b] ml-2">
                                        {data.review_counts?.["2"] ? Math.round((data.review_counts["2"] / data.total_reviews) * 100) : 0}%
                                    </div>
                                    <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b] ml-2">
                                        {data.review_counts?.["1"] ? Math.round((data.review_counts["1"] / data.total_reviews) * 100) : 0}%
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

                        <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
                            <div className="flex flex-col justify-start items-start w-full space-y-8">
                                <div className="flex justify-start items-start">
                                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Reviews</p>
                                </div>
                                <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
                                    {
                                        data.reviews && data.reviews.length > 0 && data.reviews.map((review, index) => (
                                            <div key={index} className="w-full flex justify-start items-start flex-col bg-gray-50 md:px-8 py-8">
                                                <div className="">
                                                    <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                                                        <div>
                                                            <img src="https://i.ibb.co/RCTGZTc/Mask-Group-1.png" alt="girl-avatar" />
                                                        </div>
                                                        <div className="flex flex-col justify-start items-start space-y-2">
                                                            <p className="text-base font-medium leading-none text-gray-800">James Schofield</p>
                                                            <p className="text-sm leading-none text-gray-600">23 June 2021</p>
                                                        </div>
                                                    </div>
                                                    <div className="cursor-pointer mt-6">
                                                        <svg width="152" height="24" viewBox="0 0 152 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <g clipPath="url(#clip0)">
                                                                <path
                                                                    d="M17.5598 24.4285C17.3999 24.4291 17.2422 24.3914 17.0998 24.3185L11.9998 21.6485L6.89982 24.3185C6.73422 24.4056 6.5475 24.4444 6.3609 24.4307C6.1743 24.4169 5.9953 24.3511 5.84425 24.2407C5.6932 24.1303 5.57616 23.9797 5.50644 23.8061C5.43671 23.6324 5.4171 23.4427 5.44982 23.2585L6.44982 17.6285L2.32982 13.6285C2.20128 13.5002 2.1101 13.3394 2.06605 13.1632C2.02201 12.987 2.02677 12.8022 2.07982 12.6285C2.13778 12.4508 2.2444 12.2928 2.38757 12.1726C2.53075 12.0525 2.70475 11.9748 2.88982 11.9485L8.58982 11.1185L11.0998 5.98849C11.1817 5.81942 11.3096 5.67683 11.4687 5.57706C11.6279 5.47729 11.812 5.42438 11.9998 5.42438C12.1877 5.42438 12.3717 5.47729 12.5309 5.57706C12.6901 5.67683 12.8179 5.81942 12.8998 5.98849L15.4398 11.1085L21.1398 11.9385C21.3249 11.9648 21.4989 12.0425 21.6421 12.1626C21.7852 12.2828 21.8919 12.4408 21.9498 12.6185C22.0029 12.7922 22.0076 12.977 21.9636 13.1532C21.9196 13.3294 21.8284 13.4902 21.6998 13.6185L17.5798 17.6185L18.5798 23.2485C18.6155 23.436 18.5968 23.6297 18.526 23.8069C18.4551 23.9841 18.335 24.1374 18.1798 24.2485C17.9987 24.3754 17.7807 24.4387 17.5598 24.4285V24.4285Z"
                                                                    fill="#1F2937"
                                                                />
                                                            </g>
                                                            <g clipPath="url(#clip1)">
                                                                <path
                                                                    d="M49.5598 24.4285C49.3999 24.4291 49.2422 24.3914 49.0998 24.3185L43.9998 21.6485L38.8998 24.3185C38.7342 24.4056 38.5475 24.4444 38.3609 24.4307C38.1743 24.4169 37.9953 24.3511 37.8443 24.2407C37.6932 24.1303 37.5762 23.9797 37.5064 23.8061C37.4367 23.6324 37.4171 23.4427 37.4498 23.2585L38.4498 17.6285L34.3298 13.6285C34.2013 13.5002 34.1101 13.3394 34.0661 13.1632C34.022 12.987 34.0268 12.8022 34.0798 12.6285C34.1378 12.4508 34.2444 12.2928 34.3876 12.1726C34.5307 12.0525 34.7047 11.9748 34.8898 11.9485L40.5898 11.1185L43.0998 5.98849C43.1817 5.81942 43.3096 5.67683 43.4687 5.57706C43.6279 5.47729 43.812 5.42438 43.9998 5.42438C44.1877 5.42438 44.3717 5.47729 44.5309 5.57706C44.6901 5.67683 44.8179 5.81942 44.8998 5.98849L47.4398 11.1085L53.1398 11.9385C53.3249 11.9648 53.4989 12.0425 53.6421 12.1626C53.7852 12.2828 53.8919 12.4408 53.9498 12.6185C54.0029 12.7922 54.0076 12.977 53.9636 13.1532C53.9196 13.3294 53.8284 13.4902 53.6998 13.6185L49.5798 17.6185L50.5798 23.2485C50.6155 23.436 50.5968 23.6297 50.526 23.8069C50.4551 23.9841 50.335 24.1374 50.1798 24.2485C49.9987 24.3754 49.7807 24.4387 49.5598 24.4285V24.4285Z"
                                                                    fill="#1F2937"
                                                                />
                                                            </g>
                                                            <g clipPath="url(#clip2)">
                                                                <path
                                                                    d="M81.5598 24.4285C81.3999 24.4291 81.2422 24.3914 81.0998 24.3185L75.9998 21.6485L70.8998 24.3185C70.7342 24.4056 70.5475 24.4444 70.3609 24.4307C70.1743 24.4169 69.9953 24.3511 69.8443 24.2407C69.6932 24.1303 69.5762 23.9797 69.5064 23.8061C69.4367 23.6324 69.4171 23.4427 69.4498 23.2585L70.4498 17.6285L66.3298 13.6285C66.2013 13.5002 66.1101 13.3394 66.0661 13.1632C66.022 12.987 66.0268 12.8022 66.0798 12.6285C66.1378 12.4508 66.2444 12.2928 66.3876 12.1726C66.5307 12.0525 66.7047 11.9748 66.8898 11.9485L72.5898 11.1185L75.0998 5.98849C75.1817 5.81942 75.3096 5.67683 75.4687 5.57706C75.6279 5.47729 75.812 5.42438 75.9998 5.42438C76.1877 5.42438 76.3717 5.47729 76.5309 5.57706C76.6901 5.67683 76.8179 5.81942 76.8998 5.98849L79.4398 11.1085L85.1398 11.9385C85.3249 11.9648 85.4989 12.0425 85.6421 12.1626C85.7852 12.2828 85.8919 12.4408 85.9498 12.6185C86.0029 12.7922 86.0076 12.977 85.9636 13.1532C85.9196 13.3294 85.8284 13.4902 85.6998 13.6185L81.5798 17.6185L82.5798 23.2485C82.6155 23.436 82.5968 23.6297 82.526 23.8069C82.4551 23.9841 82.335 24.1374 82.1798 24.2485C81.9987 24.3754 81.7807 24.4387 81.5598 24.4285V24.4285Z"
                                                                    fill="#1F2937"
                                                                />
                                                            </g>
                                                            <g clipPath="url(#clip3)">
                                                                <path
                                                                    d="M113.56 24.4285C113.4 24.4291 113.242 24.3914 113.1 24.3185L108 21.6485L102.9 24.3185C102.734 24.4056 102.548 24.4444 102.361 24.4307C102.174 24.4169 101.995 24.3511 101.844 24.2407C101.693 24.1303 101.576 23.9797 101.506 23.8061C101.437 23.6324 101.417 23.4427 101.45 23.2585L102.45 17.6285L98.3298 13.6285C98.2013 13.5002 98.1101 13.3394 98.0661 13.1632C98.022 12.987 98.0268 12.8022 98.0798 12.6285C98.1378 12.4508 98.2444 12.2928 98.3876 12.1726C98.5307 12.0525 98.7047 11.9748 98.8898 11.9485L104.59 11.1185L107.1 5.98849C107.182 5.81942 107.31 5.67683 107.469 5.57706C107.628 5.47729 107.812 5.42438 108 5.42438C108.188 5.42438 108.372 5.47729 108.531 5.57706C108.69 5.67683 108.818 5.81942 108.9 5.98849L111.44 11.1085L117.14 11.9385C117.325 11.9648 117.499 12.0425 117.642 12.1626C117.785 12.2828 117.892 12.4408 117.95 12.6185C118.003 12.7922 118.008 12.977 117.964 13.1532C117.92 13.3294 117.828 13.4902 117.7 13.6185L113.58 17.6185L114.58 23.2485C114.616 23.436 114.597 23.6297 114.526 23.8069C114.455 23.9841 114.335 24.1374 114.18 24.2485C113.999 24.3754 113.781 24.4387 113.56 24.4285V24.4285Z"
                                                                    fill="#1F2937"
                                                                />
                                                            </g>
                                                            <g clipPath="url(#clip4)">
                                                                <path d="M135.146 16.911L131.052 12.9355L136.734 12.1081L137.256 12.032L137.488 11.558L139.998 6.42798L139.998 6.42798L140 6.42443L140.004 6.4329L142.544 11.5529L142.777 12.0225L143.296 12.0981L148.978 12.9255L144.883 16.901L144.502 17.2708L144.595 17.7934L145.595 23.4234L145.595 23.4234L145.597 23.4356L145.605 23.4463L145.56 24.4285L145.556 23.4474L145.564 23.4326L140.464 20.7626L140 20.5197L139.536 20.7626L134.436 23.4326L134.434 23.4334L135.434 17.8034L135.527 17.2808L135.146 16.911Z" stroke="#1F2937" strokeWidth="2" />
                                                            </g>
                                                            <defs>
                                                                <clipPath id="clip0">
                                                                    <rect width="24" height="24" fill="white" />
                                                                </clipPath>
                                                                <clipPath id="clip1">
                                                                    <rect width="24" height="24" fill="white" transform="translate(32)" />
                                                                </clipPath>
                                                                <clipPath id="clip2">
                                                                    <rect width="24" height="24" fill="white" transform="translate(64)" />
                                                                </clipPath>
                                                                <clipPath id="clip3">
                                                                    <rect width="24" height="24" fill="white" transform="translate(96)" />
                                                                </clipPath>
                                                                <clipPath id="clip4">
                                                                    <rect width="24" height="24" fill="white" transform="translate(128)" />
                                                                </clipPath>
                                                            </defs>
                                                        </svg>
                                                    </div>
                                                    <p className="mt-6 text-base leading-normal text-gray-600 w-full md:w-9/12 xl:w-5/6">{review.comment}</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* End product review */}

        </div>
    );
};


export default LayoutProductDetails;

