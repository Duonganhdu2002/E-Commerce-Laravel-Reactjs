import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

    // console.log(fieldId);

    const scrollLeft = () => {
        const scrollDistance = -420; 
        document.getElementById("brandContainer").scrollBy({
            left: scrollDistance,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        const scrollDistance = 420;
        document.getElementById("brandContainer").scrollBy({
            left: scrollDistance,
            behavior: "smooth",
        });
    };

    return (
        <div className=" flex justify-center items-center">
            <div className=" w-[100%] md:[w-90%] lg:[80%]">
                <p className='text-sm md:text-lg lg:text-xl text-gray-700 ml-2 my-2 md:my-4 lg:my-6 md:ml-[5%] lg:ml-[10%]'>BRAND</p>
                <div className="relative px-0 lg:px-[10%] md:px-[5%] overflow-hidde">
                    <div
                        id="brandContainer"
                        className="flex px-8 sm:px-4 md:px-8 xl:px-0 items-center overflow-x-hidden relative"
                    >
                        {listBrandById &&
                            listBrandById.length > 0 &&
                            listBrandById.map((brands, index) => (
                                <div
                                    className="flex-shrink-0 flex justify-center items-center cursor-pointer w-[70px] h-[70px] md:w-[90px] md:h-[90px] lg:w-[100px] lg:h-[100px] relative border px-2"
                                    key={index}
                                >
                                    <img
                                        className=" w-[80%]"
                                        src={`/src/assets/icon_brand/${brands.logo}`}
                                        alt="img"
                                    />
                                </div>
                            ))}
                    </div>
                    <div className="flex justify-between h-full absolute top-0 left-0 right-0 z-20  px-0 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-0  xl:hidden">
                        <button
                            onClick={scrollLeft}
                            className=" w-6 bg-gray-200/80 hover:bg-gray-500/40"
                        >
                            <p className=" text-xl text-slate-500">&lt;</p>

                        </button>
                        <button
                            onClick={scrollRight}
                            className="  w-6 bg-gray-200/80 hover:bg-gray-500/40"
                        >
                            <p className=" text-xl text-slate-500">&gt;</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
