import { Button, Input, Option, Select } from "@material-tailwind/react";
import React from "react";

import AddList from "../../assets/icon/add-list.svg";
import CodeFile from "../../assets/icon/code.svg";
import Emoji from "../../assets/icon/emoji.svg";
import ImageFile from "../../assets/icon/image.svg";
import Maps from "../../assets/icon/maps.svg";
import Pictrue from "../../assets/icon/pictrue.svg";
import Settings from "../../assets/icon/setting.svg";
import Slape from "../../assets/icon/staple.svg";

export default function AddProducts() {
    return (
        <div className="w-full h-fit md:p-4 p-2 bg-white rounded-xl">
            <div className=" text-3xl font-semibold mb-4 px-8">
                Product Name
            </div>
            <div>
                <div className="xl:flex px-8">
                    <div className="grid h-72 xl:w-60 mb-8 xl:mb-0 place-items-center rounded-lg bg-gray-300">
                        <img src={Pictrue} alt="" className=" w-20 h-20" />
                    </div>
                    <div className="flex flex-col h-full w-full lg:pl-[5%]">
                        <div className="lg:flex justify-between w-full mb-4">
                            <div className="mb-4 lg:mb-0 lg:w-[45%]">
                                <Input
                                    label="Product Name"
                                    placeholder="Product Name"
                                />
                            </div>
                            <div className=" lg:w-[45%]">
                                <Input label="Price" placeholder="Price" />
                            </div>
                        </div>
                        <div className="lg:flex justify-between w-full mb-4">
                            <div className="mb-4 lg:mb-0 lg:w-[45%]">
                                <Input
                                    label="Quantity"
                                    placeholder="Quantity"
                                />
                            </div>
                            <div className="lg:w-[45%]">
                                <Input
                                    label="Discount (%)"
                                    placeholder="Discount"
                                />
                            </div>
                        </div>
                        <div className="lg:flex justify-between w-full mb-4">
                            <div className="mb-4 lg:mb-0 lg:w-[45%]">
                                <Input label="Color" placeholder="Color" />
                            </div>
                            <div className="lg:w-[45%]">
                                <Input label="Size" placeholder="Size" />
                            </div>
                        </div>
                        <div className="lg:flex justify-between w-full mb-4">
                            <div className="mb-4 lg:mb-0 lg:w-[45%]">
                                <Select label="Select Brand">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                            <div className="lg:w-[45%]">
                                <Select label="Select Category">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                        </div>

                        {/* Form textarea */}
                        <form>
                            <div className="w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                                <div className="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                                        <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                                            <button
                                                type="button"
                                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                            >
                                                <img
                                                    src={Slape}
                                                    alt=""
                                                    className=" w-4 h-4"
                                                />
                                            </button>
                                            <button
                                                type="button"
                                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                            >
                                                <img
                                                    src={Maps}
                                                    alt=""
                                                    className=" w-4 h-4"
                                                />
                                            </button>
                                            <button
                                                type="button"
                                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                            >
                                                <img
                                                    src={ImageFile}
                                                    alt=""
                                                    className=" w-4 h-4"
                                                />
                                            </button>
                                            <button
                                                type="button"
                                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                            >
                                                <img
                                                    src={CodeFile}
                                                    alt=""
                                                    className=" w-4 h-4"
                                                />
                                            </button>
                                            <button
                                                type="button"
                                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                            >
                                                <img
                                                    src={Emoji}
                                                    alt=""
                                                    className=" w-4 h-4"
                                                />
                                            </button>
                                        </div>
                                        <div className="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                                            <button
                                                type="button"
                                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                            >
                                                <img
                                                    src={AddList}
                                                    alt=""
                                                    className=" w-4 h-4"
                                                />
                                            </button>
                                            <button
                                                type="button"
                                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600"
                                            >
                                                <img
                                                    src={Settings}
                                                    alt=""
                                                    className=" w-4 h-4"
                                                />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                                    <label className="sr-only">
                                        Publish post
                                    </label>
                                    <textarea
                                        id="editor"
                                        rows="8"
                                        className="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"
                                        placeholder="Descriptions..."
                                        required
                                    ></textarea>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
                <Button variant="text" color="red" className="mr-1">
                    <span>Cancel</span>
                </Button>
                <Button variant="gradient" color="green">
                    <span>Confirm</span>
                </Button>
            </div>
        </div>
    );
}
