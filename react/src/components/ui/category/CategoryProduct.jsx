import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchProductWithCategory } from "../../../services/productService";

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
                {data &&
                    data.length > 0 &&
                    data.map((product, index) => (
                        <Link key={index} to={`/product/${product.product_id}`}>
                            <section
                                className="flex flex-col items-center justify-around py-8 mt-4 bg-slate-100 text-center transform duration-500 h-[500px] w-1/2 md:w-1/4 xl:w-1/4 2xl:w-1/5 float-left cursor-pointer"
                            >
                                <div className=" flex justify-center transform duration-500 hover:-translate-y-2  ">
                                    <img
                                        className=" w-[200px] h-[250px] rounded-xl object-cover"
                                        src={`../../../../src/assets/image/${product.images[0]}`}
                                        alt=""
                                    />
                                </div>
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
                                <h1 className="text-md my-5">{product.name}</h1>
                                <h2 className=" text-xl font-semibold mb-2">
                                    ${product.price}
                                </h2>
                                {/* <div className=" flex flex-wrap mt-auto ml-auto">
                                <button className="p-1 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                                    Add To Cart
                                </button>
                                <button className="p-1 px-4 bg-purple-500 text-white rounded-md hover:bg-purple-600">
                                    Buy now
                                </button>
                            </div> */}
                            </section>
                        </Link>
                    ))}
            </div>
        </div>
    );
}
