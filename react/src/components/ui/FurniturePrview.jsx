import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Banner4 from "../../assets/banner/banner_4.png";
import Banner5 from "../../assets/banner/banner_5.png";
import Cart from "../../assets/icon/add-to-cart.svg"
import { fetchTop6CategoryById } from "../../services/productService";

export default function FurniturePrview() {

    const [listTop6Furniture, setListTop6Furniture] = useState([]);

    useEffect(() => {
        getFetchTop6CategoryById();
    }, []);

    const getFetchTop6CategoryById = async () => {
        try {
            let res = await fetchTop6CategoryById(27);
            if (res && res.data) {
                setListTop6Furniture(res.data);
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    }

    // console.log(listTop6Furniture);

    return (
        <div className="flex justify-center">

            <div className="h-auto w-[80%] mt-8 mb-8">

                <div className="my-auto justify-between items-center grid grid-cols-1 md:grid-cols-2 justify-items-center gap-y-8 gap-x-6 ">

                    <div className="h-[200px] w-full relative text-center flex">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>NEW ARRIVALS</p>
                            <p>
                                <span className=" font-bold text-2xl">Bedroom</span> <span>Sets</span>
                            </p>
                            <p>Temport sem finibus</p>
                            <p className=" font-bold">$299.00</p>
                            <Link to="#">
                                <button className=" mt-4 bg-slate-800 bg-opacity-70 p-2 px-4 border rounded-full">See more</button>
                            </Link>
                        </div>
                        <img
                            src={Banner4}
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>



                    <div className="h-[200px] w-full relative text-center mt-4 ">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>BEST OFFERS</p>
                            <p>
                                <span className=" font-bold text-2xl">Soft</span> <span>Chairs</span>
                            </p>
                            <p>Temport sem finibus</p>
                            <p className=" font-bold">$179.00</p>
                            <Link to="#">
                                <button className=" mt-4 bg-slate-800 bg-opacity-70 p-2 px-4 border rounded-full">See more</button>
                            </Link>

                        </div>
                        <img
                            src={Banner5}
                            alt=""
                            className="w-full h-full object-cover rounded-xl"
                        />
                    </div>

                </div>

                <div className="w-[100%] mt-12">

                    <section id="Projects"
                        class=" mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-8 gap-x-6 mt-6 mb-5">
                        {
                            listTop6Furniture && listTop6Furniture.length > 0 && listTop6Furniture.map((product, index) => (
                                <div key={index} class="w-full bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
                                    <a href="#">
                                        <img src={`/src/assets/image/${product.images[1]}`}
                                            alt="Product" class=" h-120 w-full object-cover rounded-t-xl" />
                                        <div class="px-4 py-3 w-full">
                                            <span class="text-gray-400 mr-3 uppercase text-xs">Brand</span>
                                            <p class="text-lg font-bold text-black truncate block capitalize">{product.name}</p>
                                            <div class="flex items-center">
                                                <p class="text-lg font-semibold text-black cursor-auto my-3">${product.price - (product.price) * 0.1}</p>
                                                <del>
                                                    <p class="text-sm text-gray-600 cursor-auto ml-2">${product.price}</p>
                                                </del>
                                                <div class="ml-auto">
                                                    <img src={Cart} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            ))
                        }
                    </section>
                </div>

            </div>
        </div>
    );
}
