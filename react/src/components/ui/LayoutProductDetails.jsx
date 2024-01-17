import { productInformation } from "../../services/productService";
import { Breadcrumbs, Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";

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
            <div className="pb-8 pt-4 ">
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


        </div>
    );
}
