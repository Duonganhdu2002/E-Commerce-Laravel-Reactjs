import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllCategoryByFieldId } from '../../../services/categoryService';

export default function Category() {
    const { fieldId } = useParams();
    const [listCategoryById, setListCategoryById] = useState([]);

    useEffect(() => {
        getFetchCategoryByFieldId();
    }, [fieldId]);

    const getFetchCategoryByFieldId = async () => {
        try {
            let res = await fetchAllCategoryByFieldId(fieldId);
            if (res && res.data) {
                setListCategoryById(res.data);
            }
        } catch (error) {
            console.error('Error fetching fields:', error);
        }
    }

    // console.log(listCategoryById);
    // console.log(fieldId);

    const scrollLeft = () => {
        const scrollDistance = -420;
        document.getElementById("categoryContainer").scrollBy({
            left: scrollDistance,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        const scrollDistance = 420;
        document.getElementById("categoryContainer").scrollBy({
            left: scrollDistance,
            behavior: "smooth",
        });
    };


    return (
        <div className=" flex justify-center items-center">
            <div className=" w-[100%] md:[w-90%] lg:[80%]">
                <p className='text-sm md:text-lg lg:text-xl text-gray-700 ml-2 my-2 md:my-4 lg:my-6 md:ml-[5%] lg:ml-[10%]'>CATGEGORY</p>
                <div className="relative px-0 lg:px-[10%] md:px-[5%] overflow-hidde">
                    <div
                        id="categoryContainer"
                        className="flex px-8 sm:px-4 md:px-8 xl:px-0 items-center overflow-x-hidden relative"
                    >
                        {listCategoryById &&
                            listCategoryById.length > 0 &&
                            listCategoryById.map((categories, index) => (
                                <div
                                    className="flex-shrink-0 flex flex-col justify-center items-center cursor-pointer w-[100px] h-[80px] md:w-[120px] md:h-[120px] lg:w-[140px] lg:h-[140px] relative border px-2"
                                    key={index}
                                >
                                    <img
                                        className=" w-[60%] h-[70%]"
                                        src={`/src/assets/icon_category/${categories.icon}`}
                                        alt="img"
                                    />
                                    <p className=' h-[20%] text-xs md:text-sm lg:text-lg'>{categories.name}</p>
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
