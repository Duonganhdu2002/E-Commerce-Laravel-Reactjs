import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { productInformation } from "../../services/productService";
import { Select, Option, Button } from "@material-tailwind/react";
import starBlackImg from "../../assets/icon/star-black.svg"
import starWhiteImg from "../../assets/icon/star-white.svg"


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
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">

                {/* <!-- Description Div --> */}

                <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    {/* <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">Home / Furniture / Wooden Stool</p> */}
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

                        {/* <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">22 reviews</p> */}
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

                {/* <!-- Preview Images Div For larger Screen--> */}

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
        </div>
    );
};


export default LayoutProductDetails;

