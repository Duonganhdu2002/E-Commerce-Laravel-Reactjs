import React, { useState } from "react";
import AddImageIcon from "../../assets/icon/image (1).png";

import {
    Card,
    CardBody,
    Input,
    Select,
    Option,
    Textarea,
    Button,
} from "@material-tailwind/react";

export default function AddProducts() {

    const [imageList, setImageList] = useState([AddImageIcon, AddImageIcon, AddImageIcon]);

    const handleImageChange = (event, index) => {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const newImageList = [...imageList];
                newImageList[index] = reader.result;
                setImageList(newImageList);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <Card className="w-full p-4 bg-white rounded-xl">
            <CardBody>
                <div className="flex">
                    <div className="w-[15%]">Product Images</div>
                    <div className="w-[85%]">
                        <p>Image (You can upload max 3 images)</p>
                        <div className=" flex">
                            {imageList.map((imageSrc, index) => (
                                <div key={index} className="p-6 px-8  mr-4 border-2 hover:bg-gray-200 border-dashed border-gray-400 w-fit h-fit mt-5 rounded-md hover:border-gray-600 transition-colors duration-300">
                                    <div className="mb-4">
                                        <input
                                            type="file"
                                            className="hidden"
                                            onChange={(event) => handleImageChange(event, index)}
                                            data-index={index}
                                        />
                                        <img
                                            className="w-24 h-24 object-cover cursor-pointer"
                                            src={imageSrc}
                                            alt={`Image ${index + 1}`}
                                            onClick={() => document.querySelector(`input[type="file"][data-index="${index}"]`).click()}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex gap-x-20 py-24">
                    <div className="w-[50%]">
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Product name
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Field
                            </div>
                            <div className=" w-[80%]">
                                <Select label="Select Version">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Category
                            </div>
                            <div className=" w-[80%]">
                                <Select label="Select Version">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                        </div>
                    </div>
                    <div className="w-[50%]">
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Brand
                            </div>
                            <div className=" w-[80%]">
                                <Select label="Select Version">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Stock
                            </div>
                            <div className=" w-[80%]">
                                <Input label="Input" />
                            </div>
                        </div>
                        <div className=" flex mt-8">
                            <div className=" w-[20%]">
                                Description
                            </div>
                            <div className=" w-[80%]">
                                <Textarea color="gray" label="Textarea Gray" />
                            </div>
                        </div>
                    </div>
                </div>


                <Button className=" w-fit">Add New Products</Button>
            </CardBody>
        </Card>
    );
}
