import React, { useEffect, useState } from 'react'
import useSWR from "swr";
import { Link } from 'react-router-dom'
import Banner6 from '../../assets/banner/banner_6.png'
import Banner7 from '../../assets/banner/banner_7.png'
import { fetchTop6CategoryById } from '../../services/productService'


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

    // console.log(listTop6SmartPhone);

    return (
        <div className='flex justify-center'>
            <div className='h-auto w-[80%] flex mb-8 justify-center items-center'>

                <div className='w-[80%] hidden md:block'>
                    <div className=' text-xl border-b-2 p-4 flex justify-between items-center'>
                        <Link to="#" className='p-6'>New arrivals</Link>
                        <Link to="#" className='p-6'>Best sales</Link>
                        <Link to="#" className='p-6'>SmartPhones</Link>
                    </div>
                    <div className="">
                        {
                            listTop6SmartPhone && listTop6SmartPhone.length > 0 && listTop6SmartPhone.map((product, index) => (
                                <div key={index} className="w-[33%] p-4 float-left">
                                    <img className="w-full h-[220px] lg:h-[300px] xl:h-[330px] 2xl:h-[500px] object-cover rounded-xl" src={`/src/assets/image/${product.images[0]}`} alt="img" />
                                    <p className="mt-2 text-xl font-semibold">{product.name}</p>
                                    <p className="text-neutral-500">Best sales</p>
                                    <p className="text-lg text-slate-700 font-medium">${product.price}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='w-[100%] md:w-[20%]'>
                    <h2 className='py-2 font-medium text-xl md:hidden' >Smart phone</h2>
                    <div className="h-1/2 relative text-center ">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>AVAILABLE NOW</p>
                            <p className=" font-bold text-2xl">
                                IPhone X
                            </p>
                            <p className=" font-bold">$1120.00</p>
                            <Link to="#">
                                <button className=" md:hidden mt-4 bg-slate-800 bg-opacity-70 p-2 px-4 border rounded-full">See more</button>
                            </Link>
                        </div>
                        <img
                            src={Banner6}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="h-1/2 relative text-center mt-4 ">
                        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-base">
                            <p>AVAILABLE NOW</p>
                            <p className=" font-bold text-2xl">
                                IPhone 12 Pro Max
                            </p>
                            <p className=" font-bold">$1630.00</p>
                            <Link to="#">
                                <button className=" md:hidden mt-4 bg-slate-800 bg-opacity-70 p-2 px-4 border rounded-full">See more</button>
                            </Link>
                        </div>
                        <img
                            src={Banner7}
                            alt=""
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
