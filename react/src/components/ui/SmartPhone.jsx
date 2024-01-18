import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Banner6 from '../../assets/banner/banner_6.png';
import Banner7 from '../../assets/banner/banner_7.png';
import { fetchTop6CategoryById } from '../../services/productService';

export default function SmartPhone() {
    const [listTop6SmartPhone, setListTop6SmartPhone] = useState([]);

    useEffect(() => {
        getFetchTop6CategoryById();
    }, []);

    const getFetchTop6CategoryById = async () => {
        try {
            let res = await fetchTop6CategoryById(1);
            if (res && res.data) {
                setListTop6SmartPhone(res.data);
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    return (
        <div className="flex justify-center items-center">
            <div className="h-auto w-[80%] mt-8 mb-8">
                <div className="my-auto justify-between items-center grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-8 gap-x-6 ">
                    <div className="h-[200px] w-full relative text-center flex">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>NEW ARRIVALS</p>
                            <p>
                                <span className=" font-bold text-2xl">Bedroom</span>{" "}
                                <span>Sets</span>
                            </p>
                            <p>Temport sem finibus</p>
                            <p className=" font-bold">$299.00</p>
                            <Link to="#">
                                <button className=" mt-4 bg-slate-800 bg-opacity-70 p-2 px-4 border rounded-full">See more</button>
                            </Link>
                        </div>
                        <img
                            src={Banner6}
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                    <div className="h-[200px] w-full relative text-center mt-4 ">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>BEST OFFERS</p>
                            <p>
                                <span className=" font-bold text-2xl">Soft</span>{" "}
                                <span>Chairs</span>
                            </p>
                            <p>Temport sem finibus</p>
                            <p className=" font-bold">$179.00</p>
                            <Link to="#">
                                <button className=" mt-4 bg-slate-800 bg-opacity-70 p-2 px-4 border rounded-full">See more</button>
                            </Link>
                        </div>
                        <img
                            src={Banner7}
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>
                </div>

                <div className="w-[100%] mt-12">
                    <section
                        id="Projects"
                        className=" mx-auto grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-8 gap-x-6 mt-6 mb-5"
                    >
                        {listTop6SmartPhone &&
                            listTop6SmartPhone.length > 0 &&
                            listTop6SmartPhone.map((product, index) => (
                                <Link key={index} to={`/product/${product.product_id}`}>
                                    <div className="w-full h-[550px] bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                        <img
                                            className=" h-[80%] w-[380px] object-cover rounded-t-xl"
                                            src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/image/${product.images[0]}?raw=true`}
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
