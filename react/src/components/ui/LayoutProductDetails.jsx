import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { productInformation } from "../../services/productService";
import { useSelector } from 'react-redux'
import { addToCart } from "../../services/cartService";
import starBlackImg from "../../assets/icon/star-black.svg"
import starWhiteImg from "../../assets/icon/star-white.svg"
import StarOutline from "../../assets/icon/star-outline.svg";
import StarO from "../../assets/icon/star-o-svgrepo-com.svg";
import Star from "../../assets/icon/star-svgrepo-com.svg";
import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Typography,
    Progress,
    Select,
    Option,
    Alert,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Rating,
    Textarea,
} from "@material-tailwind/react";


const LayoutProductDetails = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);

    const user = useSelector((state) => state.user.user);
    const [count, setCount] = useState(1);

    const { productId } = useParams();
    const [data, setData] = useState([]);

    const starBlack = Number(data.average_rating).toFixed(0);
    const starWhite = 5 - starBlack;

    const starBlack1 = Number(data.average_rating_by_creator).toFixed(0);
    const starWhite1 = 5 - starBlack1;

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

    const [selectedSize, setSelectedSize] = useState();
    const [selectedColor, setSelectedColor] = useState();

    const handleChangeSize = (e) => {
        setSelectedSize(e);
    }
    const handleChangeColor = (e) => {
        setSelectedColor(e);
    }

    const card = {
        user_id: user ? user.user_id : 0,
        product_id: data.product_id,
        quantity: count,
        color: selectedColor,
        size: selectedSize,
        img: currentImage,
    };

    const handleAddToCart = async () => {
        try {
            if (user && selectedColor !== (null || undefined) && selectedSize !== (null || undefined) && count > 0 && count <= 10) {
                let res = await addToCart(card);
                console.log(res.message)
            }
        } catch (error) {
            console.error("Error adding to cart:", error);
        }
    };


    useEffect(() => {

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

        getProduct();

        const intervalId = setInterval(() => {
            getProduct();
        }, 3000);

        return () => clearInterval(intervalId);

    }, [productId]);


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
                            <p id="haha" className=" font-medium text-base leading-4 text-gray-600">Select quantity</p>
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

                                <div>
                                    <Select
                                        variant="standard"
                                        label="Size"
                                        onChange={handleChangeSize}
                                    >
                                        {sizes.map((size, index) => (
                                            <Option key={index} value={size}>
                                                {size}
                                            </Option>
                                        ))}
                                    </Select>

                                </div>

                                <Select
                                    variant="standard"
                                    label="Color"
                                    onChange={handleChangeColor}
                                >
                                    {colors.map((color, index) => (
                                        <Option key={index} value={color}>
                                            {color}
                                        </Option>
                                    ))}
                                </Select>

                            </div>

                        </div>
                    </div>
                    <div className="mt-4 mx-auto w-full h-12 justify-center flex">
                        <Popover placement="bottom">
                            <PopoverHandler onClick={handleAddToCart}>
                                <Button size="md" className="flex gap-3  items-center justify-center w-full">
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
                            </PopoverHandler>
                            {!user && (
                                <PopoverContent className="w-96">
                                    <Typography variant="h6" color="blue-gray" className="mb-6">
                                        You need to login first. Do you have an account?
                                    </Typography>
                                    <div className="flex gap-2 px-6 justify-between">
                                        <Link to="/login">
                                            <Button variant="outlined" className="flex-shrink-0">
                                                Login
                                            </Button>
                                        </Link>
                                        <Link to="/register">
                                            <Button variant="outlined" className="flex-shrink-0">
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </div>
                                </PopoverContent>

                            )}
                            {
                                (user && (selectedColor === (null || undefined) || selectedSize === (null || undefined))) && (
                                    <PopoverContent className="w-96">
                                        <Alert variant="outlined">
                                            <span>Size and Color must be choosen</span>
                                        </Alert>
                                    </PopoverContent>
                                )
                            }

                            {
                                (user && (count <= 0)) && (
                                    <PopoverContent className="w-96">
                                        <Alert variant="outlined">
                                            <span>The quantity must be more than 0</span>
                                        </Alert>
                                    </PopoverContent>
                                )
                            }

                            {
                                (user && (count > 10)) && (
                                    <PopoverContent className="w-96">
                                        <Alert variant="outlined">
                                            <span>We support you can buy maximum 10 product in 1 bill</span>
                                        </Alert>
                                    </PopoverContent>
                                )
                            }

                        </Popover>
                    </div>

                </div>

                <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className="w-full lg:w-8/12 flex justify-center items-center">
                        {imageUrls.length > 0 && currentImage ? (
                            <img
                                className="h-[420px] w-[360px] object-cover"
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
                                    className="h-[180px] w-[180px]"
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
                                                Number(data.average_rating).toFixed(2)
                                            }
                                        </div>
                                        <div className="flex flex-row mt-px w-1/3 items-start">
                                            {Array.from({ length: data.average_rating }, (_, index) => (
                                                <img className=" w-5" key={index} src={Star} alt="" />
                                            ))}
                                            {Array.from({ length: 5 - data.average_rating }, (_, index) => (
                                                <img className=" w-5" key={index} src={StarO} alt="" />
                                            ))}
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
                                        {data.review_counts?.["3"] && data.review_counts["3"] ? (
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
                                            2
                                        </div>
                                        {data.review_counts?.["2"] && data.review_counts["2"] ? (
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
                                            1
                                        </div>
                                        {data.review_counts?.["1"] && data.review_counts["1"] ? (
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
                                    <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b]">
                                        {data.review_counts?.["2"] ? Math.round((data.review_counts["2"] / data.total_reviews) * 100) : 0}%
                                    </div>
                                    <div className="text-right text-sm font-medium leading-[21px] text-[#607d8b]">
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
                            <Button className=" w-full text-sm" onClick={handleOpen}>Write review</Button>
                            <Dialog open={open} size="xs" handler={handleOpen}>
                                <div className="flex items-center justify-between">
                                    <DialogHeader className="flex flex-col items-start">
                                        <Typography className="mb-1" variant="h4">
                                            Product review
                                        </Typography>
                                    </DialogHeader>
                                </div>
                                <DialogBody>
                                    <Typography className="mb-10 -mt-7 " color="gray" variant="lead">
                                        Star rating, Write a review and Click on button.
                                    </Typography>
                                    <div className="flex justify-between items-center mb-4">
                                        Product Quality
                                        <Rating value={4} />
                                    </div>
                                    <div className="grid gap-6">
                                        <Textarea label="Write a review" />
                                    </div>
                                    <div className="flex flex-col sm:flex-row w-full mt-4">
                                        <Button variant="gradient" color="gray" className="sm:mr-2 mb-2 sm:mb-0">
                                            add picture
                                        </Button>
                                        <Button variant="gradient" color="gray">
                                            add video
                                        </Button>
                                    </div>
                                </DialogBody>
                                <DialogFooter className="space-x-2">
                                    <Button variant="text" color="gray" onClick={handleOpen}>
                                        cancel
                                    </Button>
                                    <Button variant="gradient" color="gray" onClick={handleOpen}>
                                        send message
                                    </Button>
                                </DialogFooter>
                            </Dialog>
                        </div>
                        {/* Div đánh giá */}

                        <div className="py-12 px-4 md:px-6 2xl:px-0 2xl:container 2xl:mx-auto flex justify-center items-center">
                            <div className="flex flex-col justify-start items-start w-full space-y-8">
                                <div className="flex justify-start items-start">
                                    <p className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Reviews</p>
                                </div>
                                <div className="w-full flex justify-start items-start flex-col bg-gray-50 p-8">
                                    {data.reviews && data.reviews.length > 0 ? (
                                        data.reviews.map((review, index) => (
                                            <div key={index} className="w-full flex justify-start items-start flex-col bg-gray-50 md:px-8 py-8">
                                                <div className="">
                                                    <div className="mt-6 flex justify-start items-center flex-row space-x-2.5">
                                                        <div>
                                                            <img src="https://i.ibb.co/RCTGZTc/Mask-Group-1.png" alt="girl-avatar" />
                                                        </div>
                                                        <div className="flex flex-col justify-start items-start space-y-2">
                                                            <p className="text-base font-medium leading-none text-gray-800">{review.username}</p>
                                                            <p className="text-sm leading-none text-gray-600">{new Date(review.created_at).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                                                        </div>
                                                    </div>
                                                    <div className="cursor-pointer mt-6">
                                                        <div className="flex flex-row space-x-3">
                                                            {Array.from({ length: review.rating }, (_, index) => (
                                                                <img className="w-4" key={index} src={starBlackImg} alt="start" />
                                                            ))}
                                                            {Array.from({ length: 5 - review.rating }, (_, index) => (
                                                                <img className="w-4" key={index} src={starWhiteImg} alt="start" />
                                                            ))}
                                                        </div>
                                                    </div>
                                                    <p className="mt-6 text-base leading-normal text-gray-600 w-full">{review.comment}</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <Typography color="gray">
                                            Product has not any reviews
                                        </Typography>
                                    )}
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

