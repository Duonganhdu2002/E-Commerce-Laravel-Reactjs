import React, { useState, useEffect } from "react";
import { fetchBrandsByFieldId } from "../../../services/brandService";
import { useParams } from "react-router-dom";

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

    return (
        <div className="px-0 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-4">
            <div className="flex overflow-x-auto items-center">
                {listBrandById &&
                    listBrandById.length > 0 &&
                    listBrandById.map((brands, index) => (
                        <div
                            className="flex-shrink-0 flex justify-center items-center p-3 w-[20%] sm:w-[16%] md:w-[14%] lg:w-[12%] xl:w-[8%]"
                            key={index}
                        >
                            <img
                                className="w-full h-auto"
                                src={`/src/assets/icon_brand/${brands.logo}`}
                                alt="img "
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}
