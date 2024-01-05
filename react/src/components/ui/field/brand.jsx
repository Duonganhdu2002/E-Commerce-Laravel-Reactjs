import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchBrandsByFieldId } from "../../../services/brandService";

export default function Brand() {
    const { fieldId } = useParams(); //Nhận tham số từ URL
    const [listBrandById, setListBrandById] = useState([]);

    useEffect(() => {
        getFetchBrandsByFieldId();
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

    console.log(listBrandById);

    // console.log(fieldId);

    const scrollLeft = () => {
        // Tính toán khoảng cách cuộn về bên trái
        const scrollDistance = -420; // Điều chỉnh giá trị theo ý muốn
        document.getElementById("brandContainer").scrollBy({
            left: scrollDistance,
            behavior: "smooth",
        });
    };

    const scrollRight = () => {
        // Tính toán khoảng cách cuộn về bên phải
        const scrollDistance = 420; // Điều chỉnh giá trị theo ý muốn
        document.getElementById("brandContainer").scrollBy({
            left: scrollDistance,
            behavior: "smooth",
        });
    };

    return (
        <div className="relative px-0 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-4 overflow-hidde mt-4">
            <div
                id="brandContainer"
                className="flex px-8 sm:px-4 md:px-8 xl:px-0 items-center overflow-x-hidden relative"
            >
                {listBrandById &&
                    listBrandById.length > 0 &&
                    listBrandById.map((brands, index) => (
                        <div
                            className="flex-shrink-0 flex justify-center items-center p-3 w-[20%] sm:w-[20%] md:w-[14%] lg:w-[12%] xl:w-[10%] relative z-10 sm:h-28 lg:h-32"
                            key={index}
                        >
                            <img
                                className="w-full h-auto"
                                src={`/src/assets/icon_brand/${brands.logo}`}
                                alt="img"
                            />
                        </div>
                    ))}
            </div>
            <div className="flex justify-between h-full absolute top-0 left-0 right-0 z-20  px-0 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-0  xl:hidden">
                <button
                    onClick={scrollLeft}
                    className=" w-8 bg-gray-200/70 hover:bg-gray-500/60"
                >
                    &lt;
                </button>
                <button
                    onClick={scrollRight}
                    className=" w-8  bg-gray-200/70 hover:bg-gray-500/60"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}
