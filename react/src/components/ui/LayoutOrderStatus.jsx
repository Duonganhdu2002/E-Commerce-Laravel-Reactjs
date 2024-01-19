import React from "react";
import { Button, Progress } from "@material-tailwind/react";
import Image1 from "../../assets/image/iphone-15-pro-blue-2.jpg";

export default function OrderStatus() {
    return (
        <div className="bg-white flex flex-col justify-center items-center px-4 py-8 lg:px-20 2xl:px-48">
            <div className="flex w-full flex-col items-stretch mt-4 mb-4 md:w-full">
                <div className="justify-between items-stretch flex gap-4 px-2.5 md:w-full md:flex-wrap">
                    <span className="justify-center items-stretch flex grow basis-[0%] flex-col md:w-full">
                        <div className=" text-3xl font-bold leading-10 md:w-full">
                            Order ID 1234
                        </div>
                        <div className="text-slate-500 text-base leading-6 md:w-full">
                            Order placed on
                            <span className="font-bold leading-6 ml-2">
                                April 1, 2023
                            </span>
                        </div>
                    </span>
                    <Button className=" bg-gray-800 my-auto px-4 py-3">
                        view invoice
                    </Button>
                </div>
                <span className="items-stretch border border-[color:var(--Gray-300,#DDE0E5)] shadow-sm bg-white flex flex-col mt-3.5 p-4 rounded-md border-solid md:w-full">
                    <div className="md:w-full">
                        <div className="gap-5 lg:flex md:items-stretch md:gap-0">
                            <div className="flex flex-col items-stretch w-full ml-0">
                                <div className="grow md:w-full">
                                    <div className="gap-5 sm:flex md:items-stretch md:gap-0">
                                        <div className="flex flex-col items-stretch w-full md:w-[150px] md:ml-0">
                                            <img
                                                src={Image1}
                                                className=" object-cover overflow-hidden md:mt-4"
                                            />
                                        </div>
                                        <div className="flex flex-col items-stretch sm:w-[79%] ml-5  md:ml-0">
                                            <span className="items-stretch flex grow flex-col md:w-full md:mt-4">
                                                <div className=" text-xl font-bold leading-8 md:w-full">
                                                    Premium Suit
                                                </div>
                                                <div className=" text-xl font-bold leading-8 mt-1 md:w-full">
                                                    $790
                                                </div>
                                                <div className="text-slate-500 text-base leading-7 mt-1 md:w-full">
                                                    The time is now for it to be
                                                    okay to be great. People in
                                                    this world shun people for
                                                    being great.
                                                </div>
                                                <div className=" text-base font-bold leading-6 mt-1 md:w-full">
                                                    Size: M
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-stretch lg:w-[19%] ml-5 w-full md:ml-0 my-4 lg:my-0">
                                <span className="items-stretch flex flex-col md:mt-8 w-full">
                                    <div className=" text-base font-semibold leading-6 whitespace-nowrap">
                                        Delivery Address
                                    </div>
                                    <div className="text-slate-500 text-base leading-7 mt-1">
                                        362 Ridgewood, Alaska 99669, USA
                                    </div>
                                </span>
                            </div>
                            <div className="flex items-stretch lg:w-[19%] ml-5 md:ml-0 my-4 lg:my-0">
                                <span className="items-stretch flex flex-col md:mt-8 w-full">
                                    <div className=" text-base font-semibold leading-6">
                                        Shipping Updates
                                    </div>
                                    <div className="text-slate-500 text-base leading-7 whitespace-nowrap mt-1">
                                        michael@email.com
                                    </div>
                                    <div className="text-slate-500 text-base leading-7 mt-1">
                                        (307) 682-8835
                                    </div>
                                    <Button className="text-gray-800 text-xs font-bold leading-5 uppercase justify-center items-stretch border border-[color:var(--blue-gray-200,#B0BEC5)] bg-white mt-4">
                                        edit
                                    </Button>
                                </span>
                            </div>
                        </div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bb685f6c6cd70a182dd90bca8bbf9e0c3ae81bdd21779f8ade6f7e98c19a14b?"
                        className="aspect-[1136] object-contain object-center w-full stroke-[0.8px] stroke-zinc-200 overflow-hidden mt-7 md:w-full"
                    />
                    <div className=" text-center text-base font-semibold leading-6 mt-8 md:w-full mb-4">
                        Preparing to ship on April 3, 2023
                    </div>
                    <Progress value={34} color="green" />
                    <div className="flex justify-between gap-5 mt-7 mx-6 items-start md:max-w-full max-md:flex-wrap max-md:mr-2.5">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b17b736c0e10cb92130309962a5048e80f82f1330a16e9964145417551a69899?"
                            className=" w-[30px] overflow-hidden max-w-full"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b17b736c0e10cb92130309962a5048e80f82f1330a16e9964145417551a69899?"
                            className=" w-[30px] overflow-hidden max-w-full"
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/dd2cb0118ead6ea7edcfabf8506458664d601d005d3c53baed7a47008e260111?"
                            className=" w-[30px] overflow-hidden max-w-full "
                        />
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c6b9d411942617914726890b9c76010a02c6e25eae3551c0b214fb1df40dbaca?"
                            className=" w-[30px] overflow-hidden max-w-full"
                        />
                    </div>
                    <span className="flex gap-0 mt-2.5 items-start max-md:max-w-full max-md:flex-wrap">
                        <div className=" text-base font-semibold leading-6 grow whitespace-nowrap">
                            Order placed
                        </div>
                        <div className=" text-center text-base font-semibold leading-6 grow shrink basis-auto">
                            Processing
                        </div>
                        <div className=" text-center text-base leading-6 self-stretch grow shrink basis-auto">
                            Shipped
                        </div>
                        <div className=" text-right text-base leading-6 self-stretch grow whitespace-nowrap">
                            Delivered
                        </div>
                    </span>
                </span>
                <div className="border border-[color:var(--Gray-300,#DDE0E5)] shadow-sm bg-white mt-9 px-4 py-4 rounded-md border-solid max-md:max-w-full">
                    <div className="gap-5 md:flex max-md:items-stretch max-md:gap-0">
                        <div className="flex flex-col items-stretch md:w-[33%]  max-md:ml-0 mb-4 md:mb-0">
                            <span className="items-stretch flex flex-col max-md:mt-10">
                                <div className=" text-base font-semibold leading-6 whitespace-nowrap">
                                    Billing Address
                                </div>
                                <div className="text-slate-500 text-base leading-7 mt-1">
                                    362 Ridgewood Dr, <br />
                                    Soldotna, Alaska 99669, USA
                                </div>
                            </span>
                        </div>
                        <div className="flex flex-col items-stretch md:w-[33%] md:ml-5 mb-8 md:mb-0">
                            <span className="items-stretch self-stretch flex flex-col max-md:mt-10">
                                <div className=" text-base font-semibold leading-6">
                                    Payment information
                                </div>
                                <div className="flex justify-between gap-4 mt-1 md:pr-16 items-start max-md:pr-5">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/b10c45887c06e6abd9069eda3d108618f30887a7d0a98a036018b2c63d55ff96?"
                                        className="aspect-[1.5] object-contain object-center w-12 justify-center items-center overflow-hidden shrink-0 max-w-full"
                                    />
                                    <span className="items-stretch self-stretch flex grow basis-[0%] flex-col">
                                        <div className=" text-base leading-7">
                                            Visa 1234
                                        </div>
                                        <div className="text-slate-500 text-base leading-7">
                                            Expiry 06/2026
                                        </div>
                                    </span>
                                </div>
                            </span>
                        </div>
                        <div className="flex flex-col items-stretch md:w-[33%] md:ml-5  max-md:ml-0">
                            <div className="items-stretch self-stretch shadow-sm flex grow flex-col rounded-xl max-md:mt-10">
                                <span className="items-stretch flex justify-between gap-5">
                                    <div className="text-slate-500 text-base leading-7">
                                        Subtotal
                                    </div>
                                    <div className="text-slate-500 text-right text-base leading-7">
                                        $600
                                    </div>
                                </span>
                                <span className="items-stretch flex justify-between gap-5 mt-2">
                                    <div className="text-slate-500 text-base leading-7">
                                        Shipping estimate
                                    </div>
                                    <div className="text-slate-500 text-right text-base leading-7">
                                        $0
                                    </div>
                                </span>
                                <span className="items-stretch flex justify-between gap-5 mt-2">
                                    <div className="text-slate-500 text-base leading-7">
                                        Tax estimate
                                    </div>
                                    <div className="text-slate-500 text-right text-base leading-7">
                                        $5
                                    </div>
                                </span>
                                <span className="items-stretch flex justify-between gap-5 mt-6">
                                    <div className=" text-base font-semibold leading-6">
                                        Order Total
                                    </div>
                                    <div className=" text-right text-base font-semibold leading-6">
                                        $605
                                    </div>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
