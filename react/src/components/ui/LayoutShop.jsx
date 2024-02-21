import React, { useEffect, useState } from "react";
import Speech from "../../assets/icon/speech-bubble-15-svgrepo-com.svg";
import Star from "../../assets/icon/star-svgrepo-com-yellow.svg";
import { Link, useParams } from "react-router-dom";
import { getUserInfor } from "../../services/authService";
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";
import {
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/solid";


export const LayoutShop = () => {
    return (
        <div className=" w-full">
            <h1>It really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it. And the people
            who are like offended by it, it doesn't matter.</h1>
        </div>
    );
}



export default function Shop() {

    const { user_id } = useParams();
    const [data, setData] = useState([]);

    const data1 = [
        {
            label: "Shop",
            value: "dashboard",
            icon: Square3Stack3DIcon,
            desc: <LayoutShop/>
        },
        {
            label: "Product",
            value: "profile",
            icon: UserCircleIcon,
            desc: `It really matters and then like it really doesn't matter.
            What matters is the people who are sparked by it. And the people
            who are like offended by it, it doesn't matter.`,
        },
        {
            label: "Category",
            value: "settings",
            icon: Cog6ToothIcon,
            desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
        },
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await getUserInfor(user_id);
                setData(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [user_id]);

    console.log(data)

    return (
        <div className=" flex flex-col justify-center">
            <div className="flex items-center justify-center flex-col my-2">
                <div className="flex items-center justify-center bg-black -z-10 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] w-[100%] md:rounded-2xl">
                    <img
                        src={`../../../src/assets/shop/${data.shop_background}`}
                        alt=""
                        className="object-cover aspect-ratio opacity-60 w-full sm:h-72 md:rounded-2xl"
                    />
                </div>
                <div className="absolute flex px-2 2xl:w-[70%] xl:w-[70%] lg:w-[70%] md:w-[80%] w-[100%]">
                    <div className="  flex">
                        <div>
                            <img
                                src={`../../../src/assets/shop/${data.shop_avt}`}
                                alt=""
                                className="rounded-full border-slate-400 border-8 w-60"
                            />
                        </div>
                        <div className="flex flex-col ml-2 mb-auto">
                            <div className="flex flex-wrap item center">
                                <p className=" flex items-center font-bold text-xl text-white">
                                    {data.shop_name}
                                </p>
                            </div>
                            <div className=" flex flex-wrap text-white">
                                <p className=" mt-4">4.9/5.0 &nbsp;</p>
                                <img
                                    src={Star}
                                    alt=""
                                    className="w-5 fill-yellow-500"
                                />

                            </div>
                            <div>
                                <p className=" flex items-center font-bold text-xl text-white mt-5">
                                    {data.shop_introduce}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=" flex flex-wrap mt-auto ml-auto">
                        <button className="flex items-center justify-center mr-2 border-white text-white border rounded-lg w-24 h-10 font-medium hover:bg-slate-800 my-2 ml-auto">
                            <img src={Speech} alt="" className="w-5 mr-2" />
                            Chat
                        </button>
                    </div>
                </div>
            </div>
            <div className=" flex items-center justify-center my-6">
                <div className=" flex items-center justify-around h-full border font-semibold 2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] w-[100%]">
                    <Tabs value="dashboard">
                        <TabsHeader>
                            {data1.map(({ label, value, icon }) => (
                                <Tab key={value} value={value}>
                                    <div className="flex items-center gap-2">
                                        {React.createElement(icon, { className: "w-5 h-5" })}
                                        {label}
                                    </div>
                                </Tab>
                            ))}
                        </TabsHeader>
                        <TabsBody className=" w-full">
                            {data1.map(({ value, desc }) => (
                                <TabPanel className=" w-full" key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
