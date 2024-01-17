import Profile from "../../assets/public/profile/thaicong.jpg";

import { Button } from "@material-tailwind/react";

export default function LayoutShopInformation() {
    return (
        <div className="flex flex-col justify-center">
            {/* Div của shop */}
            <div className="md:flex items-center justify-center p-4 px-4 2xl:px-[10%] xl:px-[10%] lg:px-[10%] md:px-[5%] sm:px-4 mb-4 ">
                <div className=" flex flex-row justify-center sm:px-4 py-4 bg-gray-900 w-full rounded-2xl">
                    <div className="flex items-center ">
                        <img
                            src={Profile}
                            alt=""
                            className="rounded-3xl border-gray-300 border-4 w-24"
                        />
                    </div>
                    <div className=" flex items-center ml-10 mr-10 w-1/4 sm:w-3/4">
                        <p className=" font-bold text-lg md:text-2xl text-white">
                            Thai Cong Shop
                        </p>
                    </div>
                </div>
                <div className="flex flex-col justify-center md:px-4 py-3 md:w-[220px] ">
                    <Button className=" mb-4" variant="outlined">
                        Chat now
                    </Button>
                    <Button variant="outlined">View Store</Button>
                </div>
            </div>
        </div>
    );
}
