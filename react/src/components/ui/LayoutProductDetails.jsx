import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Checked from "../../assets/icon/check-badge-svgrepo-com.svg";
import Delivery from "../../assets/icon/delivery-truck-svgrepo-com.svg";
import Reply from "../../assets/icon/reply-arrow-direction-right-svgrepo-com.svg";
import Size from "../../assets/icon/size-actual-svgrepo-com.svg";
import StarOutline from "../../assets/icon/star-outline.svg";
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
                                        Add to cart
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

                <div className="absolute flex flex-row justify-center sm:px-10">
                    <div className="flex items-center relative ">
                        <img
                            src={Profile}
                            alt=""
                            className="rounded-3xl border-light-blue-900 border-4 w-24"
                        />
                        <img
                            src={Checked}
                            alt=""
                            className=" w-10 ml-16 mt-16 absolute bg-white rounded-full"
                        />
                    </div>
                    <div className=" flex items-center ml-6 mr-10 w-1/4 sm:w-3/4">
                        <p className=" font-semibold text-xl   inline-block bg-white/60 p-2 px-4 rounded-lg w-fit">
                            Shop uy tin so 1 VietNam
                        </p>
                    </div>
                </div>
            </div>
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
                            <div className="flex flex-col justify-between mt-2 w-5/6 h-32 items-start">
                                <div className="bg-[#eceff1] flex flex-row w-full items-start rounded-sm">
                                    <div className="bg-[#ffc107] w-1/2 h-1 rounded-sm" />
                                </div>
                                <div className="bg-[#eceff1] flex flex-row w-full items-start rounded-sm">
                                    <div className="bg-[#ffc107] w-1/2 h-1 rounded-sm" />
                                </div>
                                <div className="bg-[#eceff1] flex flex-row w-full items-start rounded-sm">
                                    <div className="bg-[#ffc107] w-1/2 h-1 rounded-sm" />
                                </div>
                                <div className="bg-[#eceff1] w-full h-1 rounded-sm" />
                                <div className="bg-[#eceff1] w-full h-1 rounded-sm" />
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
                        <button
                            id="ButtonFilled"
                            className="text-xs font-bold leading-[18px] uppercase text-white shadow-[0px_2px_4px_-2px_rgba(33,_33,_33,_0.2),_0px_4px_6px_-1px_rgba(33,_33,_33,_0.2)] bg-[#212121] flex flex-row justify-center pt-3 w-full h-10 cursor-pointer items-start rounded-lg"
                        >
                            write a review
                        </button>
                    </div>
                    {/* Div đánh giá */}
                    <div
                        id="ReviewListRoot"
                        className="flex flex-col justify-between gap-8 w-full font-sans items-start"
                    >
                        <div className="flex flex-col justify-between gap-6 w-full items-start">
                            <div className="flex flex-row w-1/6 items-start">
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
                            <div className="leading-[27.2px] text-[#607d8b] w-full">
                                If everything I did failed - which it
                                doesn&apos;t, it actually succeeds - just the
                                fact that I&apos;m willing to fail is an
                                inspiration. People are so scared to lose that
                                they don&apos;t even try. Like, one thing people
                                can&apos;t say is that I&apos;m not trying, and
                                I&apos;m not trying my hardest, and I&apos;m not
                                trying to do the best way I know how.
                            </div>
                            <div className="flex flex-row gap-4 w-3/4 items-start">
                                <img
                                    src="https://file.rendit.io/n/3PWsyMyIJ3OvZF0bNi8q.png"
                                    alt="Avatars"
                                    id="Avatars"
                                    className="mt-px w-12"
                                />
                                <div className="flex flex-col w-3/5 font-sans items-start">
                                    <div
                                        id="SarahLamalo"
                                        className="font-medium leading-[24px] text-[#212121]"
                                    >
                                        Ryan Samuel
                                    </div>
                                    <div
                                        id="INeedMoreInformat"
                                        className="leading-[27.2px] text-[#607d8b]"
                                    >
                                        03 March 2023
                                    </div>
                                </div>
                            </div>
                            <div
                                id="Line"
                                className="bg-[#eceff1] w-4/5 h-px"
                            />
                        </div>
                        <div className="flex flex-col justify-between gap-6 w-full items-start">
                            <div className="flex flex-row w-1/6 items-start">
                                <img
                                    src={Star}
                                    alt="Star5"
                                    id="Star5"
                                    className="w-5"
                                />
                                <img
                                    src={Star}
                                    alt="Star6"
                                    id="Star6"
                                    className="w-5"
                                />
                                <img
                                    src={Star}
                                    alt="Star7"
                                    id="Star7"
                                    className="w-5"
                                />
                                <img
                                    src={Star}
                                    alt="Star8"
                                    id="Star8"
                                    className="w-5"
                                />
                                <img
                                    src={StarO}
                                    alt="Star9"
                                    id="Star9"
                                    className="w-5"
                                />
                            </div>
                            <div className="leading-[27.2px] text-[#607d8b] w-full">
                                If everything I did failed - which it
                                doesn&apos;t, it actually succeeds - just the
                                fact that I&apos;m willing to fail is an
                                inspiration. People are so scared to lose that
                                they don&apos;t even try. Like, one thing people
                                can&apos;t say is that I&apos;m not trying, and
                                I&apos;m not trying my hardest, and I&apos;m not
                                trying to do the best way I know how.
                            </div>
                            <div className="flex flex-row gap-4 w-3/4 items-start">
                                <img
                                    src="https://file.rendit.io/n/BIJGxab32P9hQOKRTmo2.png"
                                    alt="Avatars1"
                                    id="Avatars1"
                                    className="mt-px w-12"
                                />
                                <div className="flex flex-col w-2/3 font-sans items-start">
                                    <div
                                        id="SarahLamalo1"
                                        className="font-medium leading-[24px] text-[#212121]"
                                    >
                                        Emma Roberts
                                    </div>
                                    <div
                                        id="INeedMoreInformat1"
                                        className="leading-[27.2px] text-[#607d8b]"
                                    >
                                        14 February 2023
                                    </div>
                                </div>
                            </div>
                            <div
                                id="Line1"
                                className="bg-[#eceff1] w-4/5 h-px"
                            />
                        </div>
                        <div className="flex flex-col justify-between gap-6 w-full font-sans items-start">
                            <div className="flex flex-row w-1/6 items-start">
                                <img
                                    src={Star}
                                    alt="Star10"
                                    id="Star10"
                                    className="w-5"
                                />
                                <img
                                    src={Star}
                                    alt="Star11"
                                    id="Star11"
                                    className="w-5"
                                />
                                <img
                                    src={Star}
                                    alt="Star12"
                                    id="Star12"
                                    className="w-5"
                                />
                                <img
                                    src={Star}
                                    alt="Star13"
                                    id="Star13"
                                    className="w-5"
                                />
                                <img
                                    src={StarO}
                                    alt="Star14"
                                    id="Star14"
                                    className="w-5"
                                />
                            </div>
                            <div className="leading-[27.2px] text-[#607d8b] w-full">
                                If everything I did failed - which it
                                doesn&apos;t, it actually succeeds - just the
                                fact that I&apos;m willing to fail is an
                                inspiration. People are so scared to lose that
                                they don&apos;t even try. Like, one thing people
                                can&apos;t say is that I&apos;m not trying, and
                                I&apos;m not trying my hardest, and I&apos;m not
                                trying to do the best way I know how.
                            </div>
                            <div className="flex flex-row gap-4 w-3/4 items-start">
                                <img
                                    src="https://file.rendit.io/n/PhZjbaMDN2MCgEvCbwAD.png"
                                    alt="Avatars2"
                                    id="Avatars2"
                                    className="mt-px w-12"
                                />
                                <div className="flex flex-col w-2/3 font-sans items-start">
                                    <div
                                        id="SarahLamalo2"
                                        className="font-medium leading-[24px] text-[#212121]"
                                    >
                                        Bruce Mars
                                    </div>
                                    <div
                                        id="INeedMoreInformat2"
                                        className="leading-[27.2px] text-[#607d8b]"
                                    >
                                        10 February 2023
                                    </div>
                                </div>
                            </div>
                            <div
                                id="Line2"
                                className="bg-[#eceff1] w-4/5 h-px"
                            />
                        </div>
                    </div>
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
