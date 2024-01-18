import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductWithCategory } from "../../../services/productService";
import Cart from "../../../assets/icon/add-to-cart.svg";

export default function CategoryProduct() {
    const { categoryId } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        getFetchProductWithCategory(categoryId);
    }, [categoryId]);

    const getFetchProductWithCategory = async () => {
        try {
            let res = await fetchProductWithCategory(categoryId);
            if (res && res.data) {
                setData(res.data);
            }
        } catch (error) {
            console.error("Error fetching fields:", error);
        }
    };

    // console.log(data);
    // console.log(categoryId);

    return (
        <div className="flex justify-center items-center py-5">
            <div className="w-[95%] md:w-[90%] lg:w-[80%]">
                <section
                    id="Projects"
                    className=" mx-auto grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 2xl:grid-cols-4 justify-items-center justify-center gap-y-8 gap-x-6 mt-6 mb-5"
                >
                    {data &&
                        data.length > 0 &&
                        data.map((product, index) => (
                            <Link key={index} to={`/product/${product.product_id}`}>
                                <div className="w-full h-[600px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                    <img
                                        className=" h-[70%] w-[340px] object-cover rounded-t-xl"
                                        src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/image/${product.images[1]}?raw=true`}
                                        alt="Product"
                                    />
                                    <div className="px-4 py-3 h-[20%] w-full">
                                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                        <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                                        <div className="space-x-1 flex justify-center mt-10">
                                            <svg
                                                className="w-4 h-4 mx-px fill-current text-orange-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                            >
                                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                            </svg>
                                            <svg
                                                className="w-4 h-4 mx-px fill-current text-orange-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                            >
                                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                            </svg>
                                            <svg
                                                className="w-4 h-4 mx-px fill-current text-orange-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                            >
                                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                            </svg>
                                            <svg
                                                className="w-4 h-4 mx-px fill-current text-orange-600"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                            >
                                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                            </svg>
                                            <svg
                                                className="w-4 h-4 mx-px fill-current text-gray-300"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 14 14"
                                            >
                                                <path d="M6.43 12l-2.36 1.64a1 1 0 0 1-1.53-1.11l.83-2.75a1 1 0 0 0-.35-1.09L.73 6.96a1 1 0 0 1 .59-1.8l2.87-.06a1 1 0 0 0 .92-.67l.95-2.71a1 1 0 0 1 1.88 0l.95 2.71c.13.4.5.66.92.67l2.87.06a1 1 0 0 1 .59 1.8l-2.3 1.73a1 1 0 0 0-.34 1.09l.83 2.75a1 1 0 0 1-1.53 1.1L7.57 12a1 1 0 0 0-1.14 0z"></path>
                                            </svg>
                                        </div>
                                        <div className="flex items-center">
                                            <p className="text-lg font-semibold text-black cursor-auto my-3">${(product.price - (product.price) * 0.3).toFixed(2)}</p>
                                            <del>
                                                <p className="text-sm text-gray-600 cursor-auto ml-2">${product.price}</p>
                                            </del>
                                            <div className="ml-auto">
                                                <img src={Cart} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                        ))}
                </section>
            </div>
        </div>
    );
}
