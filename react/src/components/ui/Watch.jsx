import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import { fetchRandomFourCategoryAndGetFourProduct } from "../../services/productService";
import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "../../assets/icon/add-to-cart.svg";


export default function Watch() {

    const [data, setData] = useState([]);

    useEffect(() => {
        GetFetchRandomFourCategoryAndGetFourProduct();
    }, []);

    const GetFetchRandomFourCategoryAndGetFourProduct = async () => {
        try {
            let res = await fetchRandomFourCategoryAndGetFourProduct();
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
        <div className=" flex justify-center items-center">
            <div className=" w-[95%] md:w-[90%] lg:w-[80%]">

                <Tabs id="custom-animation" value="html">
                    <TabsHeader>
                        {data.map(({ category_id, product_category_name }) => (
                            <Tab key={category_id} value={category_id}>
                                {product_category_name}
                            </Tab>
                        ))}
                    </TabsHeader>
                    <TabsBody
                        animate={{
                            initial: { y: 500 },
                            mount: { y: 0 },
                            unmount: { y: 500 },
                        }}
                    >
                        {data.map(({ category_id, top_products }) => (
                            <TabPanel key={category_id} value={category_id}>
                                <section
                                    className=" mx-auto grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-8 gap-x-6 mt-6 mb-5"
                                >
                                    {top_products &&
                                        top_products.length > 0 &&
                                        top_products.map((product, index) => (
                                            <Link key={index} to={`/product/${product.product_id}`}>
                                                <div className="w-full h-[550px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                                    <img
                                                        className=" h-[80%] w-[380px] object-cover rounded-t-xl"
                                                        src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/image/${product.images[1]}?raw=true`}
                                                        alt="Product"
                                                    />
                                                    <div className="px-4 py-3 h-[20%] w-full">
                                                        <span className="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                                        <p className="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                                                        <div className="flex items-center">
                                                            <p className="text-lg font-semibold text-black cursor-auto my-3">${(product.price - (product.price) * 0.1).toFixed(2)}</p>
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
                            </TabPanel>
                        ))}
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    );
}