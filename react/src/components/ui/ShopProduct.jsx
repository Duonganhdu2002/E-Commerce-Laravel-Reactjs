import React, { useEffect, useState } from 'react'
import { bestSellerUser } from '../../services/productService';
import { Link } from 'react-router-dom';
import Star0 from "../../assets/icon/star-svgrepo-com.svg";
import Star1 from "../../assets/icon/star-outline.svg";
import Cart from "../../assets/icon/add-to-cart.svg";

const ShopProduct = ({ data, user_id }) => {

    const [dataBestSeller, setDataBestSeller] = useState([]);

    useEffect(() => {

        const fectchData = async () => {
            try {
                let res = await bestSellerUser(user_id)
                setDataBestSeller(res.data)
            } catch (error) {
                console.log(error)
            }
        }

        fectchData()

    }, [user_id]);


    // console.log(dataBestSeller)

    return (
        <div className="pb-16">
            <div className="flex flex-col justify-center items-center pt-9 sm:pt-12 lg:pt-16 pb-24 sm:pb-52">
                <div className="2xl:container 2xl:mx-auto flex flex-col justify-center items-center sm:pb-12 lg:pb-0 space-y-4 px-4 md:px-6 2xl:px-0">
                    <div>
                        <p className="text-3xl lg:text-4xl font-semibold leading-9 text-center text-gray-800">Best Seller Products</p>
                    </div>
                    <div>
                        <p className="text-base leading-normal sm:leading-none text-center text-gray-600">Explore products that are bought most frequently by people</p>
                    </div>
                </div>
            </div>
            <div className="-mt-16 sm:-mt-48 lg:-mt-32 xl:-mt-40 2xl:container 2xl:mx-auto flex justify-center items-center space-y-4 px-4 md:px-6 2xl:px-0 mb-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">


                    {
                        dataBestSeller && dataBestSeller.length > 0 && dataBestSeller.map((products, index) => (
                            <Link key={index} to={`/product/${products.product_id}`}>
                                <div className="w-full h-[350px] md:h-[380px] lg:h-[450px] xl:h-[510px]  bg-white shadow-md shadow-gray-300 rounded-xl duration-500 hover:scale-105 hover:shadow-2xl">
                                    <img
                                        className=" h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[280px] lg:w-[280px] xl:h-[320px] xl:w-[320px] object-cover rounded-t-xl"
                                        src={`../../../src/assets/image/${products.images[0]}`}
                                        alt="Product"
                                    />
                                    <div className="px-4  mt-6 py-3 h-[20%] w-full">
                                        <p className="text-md lg:text-lg xl:text-xl font-bold text-black truncate block capitalize">{products.name}</p>
                                        <div className="space-x-1 flex justify-center mt-2 md:mt-4 lg:mt-6 xl:mt-8">
                                            {Array.from({ length: Math.round(products.average_rating) }, (_, index) => (
                                                <img className="w-5" key={index} src={Star0} alt="" />
                                            ))}
                                            {Array.from({ length: 5 - Math.round(products.average_rating) }, (_, index) => (
                                                <img className="w-5" key={index} src={Star1} alt="" />
                                            ))}
                                        </div>
                                        <div className="flex items-center mt-4">
                                            <p className="text-md lg:text-lg xl:text-xl font-semibold text-black cursor-auto my-1">${products.price}</p>
                                            <div className="ml-auto">
                                                <img src={Cart} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default ShopProduct