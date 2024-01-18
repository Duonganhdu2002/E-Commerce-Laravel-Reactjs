import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { productSugession } from "../../services/productService";
import { Typography } from "@material-tailwind/react";



const ProductSuggestion = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        getProductSugession(1);
    }, [1]);

    const getProductSugession = async () => {
        try {
            let res = await productSugession(1);
            if (res && res.data) {
                setData(res.data);
            }
        } catch (error) {
            console.error("Error fetching fields:", error);
        }
    };

    // console.log(data);

    return (
        <div className=" flex justify-center items-center">
            <div className=" w-[95%] md:w-[90%] lg:w-[80%]">
                <div className=" w-full">
                    <Typography className=" text-xl my-8" variant="lead">
                        MAY YOU LIKE IT
                    </Typography>
                    <section
                        id="Projects"
                        className=" mx-auto grid grid-cols-1 lg:grid-cols-3  md:grid-cols-2 2xl:grid-cols-4 justify-items-center justify-center gap-y-8 gap-x-6 mt-6 mb-5"
                    >
                        {data &&
                            data.length > 0 &&
                            data.map((product, index) => (
                                <Link key={index} to={`/product/${product.product_id}`}>
                                    <div className="w-full h-[550px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                        <img
                                            className=" h-[80%] w-[340px] object-cover rounded-t-xl"
                                            src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/image/${product.images[1]}?raw=true`}
                                            alt="Product"
                                        />
                                        <div className="px-4 py-3 h-[20%] w-full">
                                            <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                            <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                                            <div className="flex items-center">
                                                <p className="text-lg font-semibold text-black cursor-auto my-3">${(product.price - (product.price) * 0.3).toFixed(2)}</p>
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
