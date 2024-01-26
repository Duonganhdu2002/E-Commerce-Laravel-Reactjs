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
                <div className="w-[100%] mt-12">

                    <section
                        id="Projects"
                        className=" mx-auto grid grid-cols-2 lg:grid-cols-4  md:grid-cols-3 2xl:grid-cols-5 justify-items-center justify-center gap-y-8 gap-x-6 mt-6 mb-5"
                    >
                        {listTop6SmartPhone &&
                            listTop6SmartPhone.length > 0 &&
                            listTop6SmartPhone.map((product, index) => (
                                <Link key={index} to={`/product/${product.product_id}`}>
                                    <div className="w-full h-[300px] md:h-[330px] lg:h-[400px] xl:h-[460px]  bg-white shadow-md shadow-gray-300 rounded-xl duration-500 hover:scale-105 hover:shadow-2xl">
                                        <img
                                            className=" h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[280px] lg:w-[280px] xl:h-[320px] xl:w-[320px] object-cover rounded-t-xl"
                                            src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/image/${product.images[0]}?raw=true`}
                                            alt="Product"
                                        />
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
