import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
import { productSugession } from "../../services/productService";
import { Typography } from "@material-tailwind/react";



const ProductSuggestion = () => {

    const [data, setData] = useState([]);
    const user = useSelector((state) => state.user.user);
    const user_id = user ? user.user_id : 1;

    useEffect(() => {
        if (user_id !== 1) {
            getProductSuggestion();
        }
    }, [user_id]);

    const getProductSuggestion = async () => {
        try {
            let res = await productSugession(user_id);
            if (res && res.data) {
                setData(res.data);
            }
        } catch (error) {
            console.error("Error fetching fields:", error);
        }
    };

    return (
        <div className=" flex justify-center items-center">
            <div className=" w-[95%] md:w-[90%] lg:w-[80%]">
                <div className=" w-full">
                    <Typography className=" text-xl my-8" variant="lead">
                        MAY YOU LIKE IT
                    </Typography>
                    <section
                        id="Projects"
                        className=" mx-auto grid grid-cols-2 lg:grid-cols-4  md:grid-cols-3 2xl:grid-cols-5 justify-items-center justify-center gap-y-8 gap-x-6 mt-6 mb-5"
                    >
                        {data &&
                            data.length > 0 &&
                            data.map((product, index) => (
                                <Link key={index} to={`/product/${product.product_id}`}>
                                    <div className="w-full h-[300px] md:h-[330px] lg:h-[400px] xl:h-[460px]  bg-white shadow-md shadow-gray-300 rounded-xl duration-500 hover:scale-105 hover:shadow-2xl">
                                        {product.images?.[1] ? (
                                            <img
                                                className=" h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[280px] lg:w-[280px] xl:h-[320px] xl:w-[320px] object-cover rounded-t-xl"
                                                src={`src/assets/image/${product.images[1]}`}
                                                alt="Product"
                                            />
                                        ) : (
                                            <img
                                                className=" h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[280px] lg:w-[280px] xl:h-[320px] xl:w-[320px] object-cover rounded-t-xl"
                                                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`}
                                                alt="Product"
                                            />
                                        )}

                                        <div className="px-4 py-3 h-[20%] w-full">
                                            <span className="text-gray-400 mr-3 uppercase text-[12px] lg:text-[14px]">Brand</span>
                                            <p className="text-md lg:text-lg xl:text-xl font-bold text-black truncate block capitalize">{product.name}</p>
                                            <div className="flex items-center">
                                                <p className="text-md lg:text-lg xl:text-xl font-semibold text-black cursor-auto my-1">${(product.price - (product.price) * 0.3).toFixed(2)}</p>
                                                <del>
                                                    <p className="text-sm text-gray-600 cursor-auto ml-2">${product.price}</p>
                                                </del>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                    </section>
                </div>
            </div>
        </div>
    );
}

export default ProductSuggestion;
