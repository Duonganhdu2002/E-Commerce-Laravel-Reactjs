import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchBrandsByFieldId } from "../../../services/brandService";

export default function Brand() {
    const { fieldId } = useParams(); //Nhận tham số từ URL
    const [listBrandById, setListBrandById] = useState([]);

    useEffect(() => {
        getFetchBrandsByFieldId(fieldId);
    }, [fieldId]);

    const getFetchBrandsByFieldId = async () => {
        try {
            let res = await fetchBrandsByFieldId(fieldId);
            if (res && res.data) {
                setListBrandById(res.data);
            }
        } catch (error) {
            console.error("Error fetching fields:", error);
        }
    };

    // console.log(listBrandById);

    return (
        <div className='flex justify-center items-center my-8 flex-col'>
            <p className=' font-medium text-gray-700 text-lg mb-8'>BRAND</p>

            <div className='w-[95%] md:w-[90%] lg:w-[80%] mx-auto grid grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 md:grid-cols-6 justify-items-center justify-center gap-y-8 gap-x-6'>
                {
                    listBrandById && listBrandById.length > 0 && listBrandById.map((fields, index) => (
                        <Link key={index} to={`/brand/${fields.product_brand_id}`}>

                            <div className='flex flex-col float-left w-[60px] lg:w-[90px] h-auto mx-2 duration-500 hover:scale-110 hover:transform hover:-translate-y-2'>

                                <div className='h-[60px] lg:h-[90px] border border-gray-300 rounded-xl flex justify-center items-center'>
                                    <img className=' w-8' src={`/src/assets/icon_brand/${fields.logo}`} alt="" />
                                </div>

                                <div className=' h-[20px] flex justify-center items-center my-2'>
                                    <h3 className="text-[12px] lg:text-[14px] font-medium text-gray-600 dark:text-white">{fields.field_name}</h3>
                                </div>

                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
