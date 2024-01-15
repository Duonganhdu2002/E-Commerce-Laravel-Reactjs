import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Checked from "../../assets/icon/check-badge-svgrepo-com.svg";
import Delivery from "../../assets/icon/delivery-truck-svgrepo-com.svg";
import Reply from "../../assets/icon/reply-arrow-direction-right-svgrepo-com.svg";
import Size from "../../assets/icon/size-actual-svgrepo-com.svg";
import StarHalfLeftO from "../../assets/icon/star-half-left-o-svgrepo-com.svg";
import StarO from "../../assets/icon/star-o-svgrepo-com.svg";
import Star from "../../assets/icon/star-svgrepo-com.svg";
import Voucher from "../../assets/icon/voucher-discount-tag-svgrepo-com.svg";
import Img1 from "../../assets/image/img1.jpg";
import Profile from "../../assets/public/profile/1703940723832khunghinh.net.png";
import ImageReviews from "../../assets/public/reviews/bed-5.jpg";
import BackgroundShop from "../../assets/sale/sale5.png";
import { productInformation } from "../../services/productService";
import { Breadcrumbs, Button } from "@material-tailwind/react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";

export default function ProductDetails() {
    const { productId } = useParams();
    const [productInfor, setProductInfor] = useState([]);
    // Lưu trữ index của ảnh
    const [indexImage, setIndexImage] = useState(0);

    useEffect(() => {
        getProductInformation(productId);
    }, [productId]);

    const getProductInformation = async () => {
        try {
            let res = await productInformation(productId);
            if (res && res.data) {
                setProductInfor(res.data);
            }
        } catch (error) {
            console.error("Error fetching fields:", error);
        }
    };

    // Cập nhật lại ảnh khi click vào các ảnh nhỏ
    const handleClickIndexImage = (index) => {
        setIndexImage(index);
    };

    // console.log(productId)
    // console.log(productInfor)

    return (
        <div className="flex flex-col justify-center">
            <div className="pb-8 pt-4">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Breadcrumbs className=" mb-8">
                        <a href="#" className="opacity-60">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 -mt-1"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                            </svg>
                        </a>
                        <a href="#" className="opacity-60">
                            <span>Components</span>
                        </a>
                        <a href="#">Breadcrumbs</a>
                    </Breadcrumbs>
                    <div className="flex flex-col md:flex-row -mx-4">
                        <div className="flex-1 px-4">
                            <div className=" flex">
                                <div className="w-[120px] h-[460px] overflow-y-auto">
                                    {/* In những hình ảnh của sản phẩm theo chiều dọc */}
                                    {productInfor.image_urls &&
                                        productInfor.image_urls.length > 0 &&
                                        productInfor.image_urls.map(
                                            (image, index) => (
                                                <img
                                                    onClick={() =>
                                                        handleClickIndexImage(
                                                            index
                                                        )
                                                    }
                                                    key={index}
                                                    className="w-[120px] h-[120px] object-cover mb-2 rounded-xl cursor-pointer"
                                                    src={`../../../src/assets/image/${image}`}
                                                    alt={`Image ${index}`}
                                                />
                                            )
                                        )}
                                </div>
                                {/* In sản phẩm lớn  */}
                                {productInfor.image_urls &&
                                    productInfor.image_urls.length > 1 && (
                                        <div className="w-full h-[460px] rounded-2xl bg-gray-300 mb-4 mx-2">
                                            <img
                                                className="w-full h-full object-cover rounded-2xl"
                                                src={`../../../src/assets/image/${productInfor.image_urls[indexImage]}`}
                                                alt={`Product Image 2`}
                                            />
                                        </div>
                                    )}
                            </div>

                            <div className="flex -mx-2 mb-4">
                                <div className="w-1/2 px-2">
                                    <Button className="w-full h-12 bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 ">
                                        Buy now
                                    </Button>
                                </div>
                                <div className="w-1/2 px-2">
                                    <Button className="w-full h-12 bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300 ">
                                        Buy now
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="md:flex-1 px-4">
                            <h2 className="text-2xl font-bold text-gray-800 mb-2">
                                {productInfor.name}
                            </h2>
                            <div className="flex mb-4">
                                <div className="mr-4">
                                    <span className="font-bold text-gray-700 ">
                                        Price:
                                    </span>
                                    <span className="text-gray-600 ">
                                        ${productInfor.price}
                                    </span>
                                </div>
                                <div>
                                    <span className="font-bold text-gray-700 ">
                                        Availability: <span> </span>
                                    </span>
                                    <span className="text-gray-600">
                                        {productInfor.stock}
                                    </span>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700">
                                    Select Color:
                                </span>
                                <div className="flex items-center mt-2">
                                    <button className="w-6 h-6 rounded-full bg-gray-800  mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-red-500  mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-blue-500  mr-2"></button>
                                    <button className="w-6 h-6 rounded-full bg-yellow-500  mr-2"></button>
                                </div>
                            </div>
                            <div className="mb-4">
                                <span className="font-bold text-gray-700 ">
                                    Select Size:
                                </span>
                                <div className="flex items-center mt-2">
                                    <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                                        S
                                    </button>
                                    <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                                        M
                                    </button>
                                    <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                                        L
                                    </button>
                                    <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                                        XL
                                    </button>
                                    <button className="bg-gray-300  text-gray-700  py-2 px-4 rounded-full font-bold mr-2 hover:bg-gray-400 ">
                                        XXL
                                    </button>
                                </div>
                            </div>
                            <div>
                                <span className="font-bold text-gray-700 ">
                                    Product Description:
                                </span>
                                <p className="text-gray-600 text-sm mt-2">
                                    {productInfor.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Div của shop */}
            <div className=" flex items-center p-4 px-4 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-4 mb-4">
                <div className=" flex items-center w-full rounded-xl">
                    <img
                        src={BackgroundShop}
                        alt=""
                        className="object-cover aspect-ratio relative w-full h-36 rounded-xl"
                        style={{ filter: "blur(10px)" }}
                    />
                </div>

                <div className="absolute flex ">
                    <div className="flex items-center pl-8 relative ">
                        <img
                            src={Profile}
                            alt=""
                            className="rounded-3xl border-light-blue-900 border-4 w-24"
                        />
                        <img
                            src={Checked}
                            alt=""
                            className=" w-10 ml-12 sm:ml-16 mt-16 absolute bg-white rounded-full"
                        />
                    </div>
                    <div className=" flex items-center">
                        <p className=" font-semibold text-xl ml-6 mr-10 inline-block bg-white/60 p-2 px-4 rounded-lg w-fit">
                            Shop uy tin so 1 VietNam
                        </p>
                    </div>
                </div>
            </div>
            {/* Div dánh giá sản phẩm */}
            <div className="flex justify-around float-left px-4 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-4">
                <div className="flex items-center flex-col float-left px-4 w-[100%]">
                    <p className=" my-2 text-xl font-bold">PRODUCT REVIEWS</p>
                    {/* Div lọc sao đánh giá */}
                    <div className=" flex items-center justify-center py-2 w-full mb-2">
                        <button className=" flex items-center justify-center h-10 w-20 border-[#1e293b] border rounded-xl mr-2 bg-white">
                            All
                        </button>
                        <button className="flex items-center justify-center h-10 w-20 border-[#1e293b] border rounded-xl mr-2 bg-white">
                            5 Star
                        </button>
                        <button className="flex items-center justify-center h-10 w-20 border-[#1e293b] border rounded-xl mr-2 bg-white">
                            4 Star
                        </button>
                        <button className="flex items-center justify-center h-10 w-20 border-[#1e293b] border rounded-xl mr-2 bg-white">
                            3 Star
                        </button>
                        <button className="flex items-center justify-center h-10 w-20 border-[#1e293b] border rounded-xl mr-2 bg-white">
                            2 Star
                        </button>
                        <button className="flex items-center justify-center h-10 w-20 border-[#1e293b] border rounded-xl mr-2 bg-white">
                            1 Star
                        </button>
                    </div>
                    {/* Div đánh giá */}
                    <div className=" flex flex-col mt-8 bg-[#e2e8f0]/70 w-full px-4 border-b-2 border-[#1e293b] rounded-t-3xl">
                        {/* Div của profile và đánh giá sao, ngày giờ đánh giá */}
                        <div className="flex my-4">
                            <div>
                                <img
                                    src={Profile}
                                    alt=""
                                    className=" rounded-full border-black border w-14"
                                />
                            </div>
                            <div>
                                <p className=" ml-4">D*******0</p>
                                <div className="flex items-center mb-1 ml-4 ">
                                    <img src={Star} alt="" className="w-5" />
                                    <img src={Star} alt="" className="w-5" />
                                    <img src={Star} alt="" className="w-5" />
                                    <img
                                        src={StarHalfLeftO}
                                        alt=""
                                        className="w-5"
                                    />
                                    <img src={StarO} alt="" className="w-5" />
                                </div>
                                <p className=" flex ml-4">
                                    2024-01-18 &nbsp;13:23
                                </p>
                            </div>
                        </div>
                        {/* Div của phần bình luận đánh giá, ảnh đánh giá */}
                        <div className="flex flex-col">
                            <div>
                                <p>Good, good!!!!!!!!</p>
                            </div>
                            <div className=" flex my-2">
                                <img
                                    src={ImageReviews}
                                    alt=""
                                    className="w-[18%] md:w-[12vh] h-full mr-4 rounded-xl"
                                />
                                <img
                                    src={ImageReviews}
                                    alt=""
                                    className=" w-[18%] md:w-[12vh] h-full md:h-auto mr-4 rounded-xl"
                                />
                                <img
                                    src={ImageReviews}
                                    alt=""
                                    className=" w-[18%] md:w-[12vh] h-full md:h-auto mr-4 rounded-xl"
                                />
                                <img
                                    src={ImageReviews}
                                    alt=""
                                    className=" w-[18%] md:w-[12vh] h-full md:h-auto mr-4 rounded-xl"
                                />
                            </div>
                        </div>
                        {/* Div phản hồi của nhà bán hàng */}
                        <div className=" flex bg-white/90 my-4 p-3 rounded-xl">
                            <img src={Reply} alt="" className="w-5 mr-2" />
                            <p>
                                Thank you so much for taking the time to share
                                your positive feedback with us!
                            </p>
                        </div>
                    </div>
                </div>
                <div className="items-center justify-center flex-col hidden lg:block w-[30%]">
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
