import React, { useState } from "react";
import {
    Card,
    Checkbox,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
    Select,
    Option,
} from "@material-tailwind/react";

import Slape from "../../assets/icon/staple.svg";
import Maps from "../../assets/icon/maps.svg";
import ImageFile from "../../assets/icon/image.svg";
import CodeFile from "../../assets/icon/code.svg";
import Emoji from "../../assets/icon/emoji.svg";
import AddList from "../../assets/icon/add-list.svg";
import Settings from "../../assets/icon/setting.svg";
import Pictrue from "../../assets/icon/pictrue.svg";

const TABLE_HEAD = [
    "Check all",
    "STT",
    "Product Name",
    "Price",
    "Quantity",
    "Edit",
    "Delete",
];

const TABLE_ROWS = [
    {
        stt: "1",
        name: "John Michael",
        price: "$123",
        quantity: "152",
    },
    {
        stt: "2",
        name: "Alexa Liras",
        price: "$123",
        quantity: "12",
    },
    {
        stt: "3",
        name: "Laurent Perrier",
        price: "$123",
        quantity: "12",
    },
    {
        stt: "4",
        name: "Michael Levi",
        price: "$123",
        quantity: "12",
    },
    {
        stt: "5",
        name: "Richard Gran",
        price: "$123",
        quantity: "12",
    },
];

export function MyProductsAdmin() {
    const [open, setOpen] = useState(false);
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const handleDeleteConfirmationOpen = () =>
        setDeleteConfirmationOpen(!deleteConfirmationOpen);

    return (
        <div>
            <div className="flex justify-end mb-8">
                <Button onClick={handleOpen}>Add Products</Button>
            </div>
            <Card className="h-fit w-full overflow-auto">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <div
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70 mb-2"
                                    >
                                        {head}
                                    </div>
                                    <div>
                                        <Input></Input>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ stt, name, price, quantity }) => (
                            <tr key={name} className="even:bg-blue-gray-50/50">
                                <td className="w-fit p-4">
                                    <div>
                                        <Checkbox />
                                    </div>
                                </td>

                                <td className=" p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-medium"
                                    >
                                        {stt}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {name}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {price}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {quantity}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-medium cursor-pointer"
                                        onClick={handleOpen}
                                    >
                                        Edit
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-medium cursor-pointer text-red-700"
                                        onClick={handleDeleteConfirmationOpen}
                                    >
                                        Delete
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <Dialog
                    open={open}
                    handler={handleOpen}
                    size="xl"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                >
                    <DialogHeader>Product Name... #1</DialogHeader>
                    <DialogBody>
                        <div className="flex px-8">
                            <div className=" grid h-72 w-60 place-items-center rounded-lg bg-gray-300">
                                <img
                                    src={Pictrue}
                                    alt=""
                                    className=" w-20 h-20"
                                />
                            </div>
                            <div className="flex  flex-col h-full w-full pl-[5%]">
                                <div className="flex justify-between w-full mb-4">
                                    <div className=" w-[45%]">
                                        <Input
                                            label="Product Name"
                                            placeholder="Product Name"
                                        />
                                    </div>
                                    <div className=" w-[45%]">
                                        <Input
                                            label="Price"
                                            placeholder="Price"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between w-full mb-4">
                                    <div className=" w-[45%]">
                                        <Input
                                            label="Quantity"
                                            placeholder="Quantity"
                                        />
                                    </div>
                                    <div className=" w-[45%]">
                                        <Input
                                            label="Discount (%)"
                                            placeholder="Discount"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between w-full mb-4">
                                    <div className=" w-[45%]">
                                        <Input
                                            label="Color"
                                            placeholder="Color"
                                        />
                                    </div>
                                    <div className=" w-[45%]">
                                        <Input
                                            label="Size"
                                            placeholder="Size"
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-between w-full mb-4">
                                    <div className=" w-[45%]">
                                        <Select label="Select Brand">
                                            <Option>
                                                Material Tailwind HTML
                                            </Option>
                                            <Option>
                                                Material Tailwind React
                                            </Option>
                                            <Option>
                                                Material Tailwind Vue
                                            </Option>
                                            <Option>
                                                Material Tailwind Angular
                                            </Option>
                                            <Option>
                                                Material Tailwind Svelte
                                            </Option>
                                        </Select>
                                    </div>
                                    <div className=" w-[45%]">
                                        <Select label="Select Category">
                                            <Option>
                                                Material Tailwind HTML
                                            </Option>
                                            <Option>
                                                Material Tailwind React
                                            </Option>
                                            <Option>
                                                Material Tailwind Vue
                                            </Option>
                                            <Option>
                                                Material Tailwind Angular
                                            </Option>
                                            <Option>
                                                Material Tailwind Svelte
                                            </Option>
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
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button
                            variant="gradient"
                            color="green"
                            onClick={handleOpen}
                        >
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog>

                {/* Delete Confirmation Dialog */}
                <Dialog
                    open={deleteConfirmationOpen}
                    handler={handleDeleteConfirmationOpen}
                    size="sm"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0.9, y: -100 },
                    }}
                >
                    <DialogHeader>Delete Product</DialogHeader>
                    <DialogBody>
                        Are you sure you want to delete this product?
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={handleDeleteConfirmationOpen}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button
                            variant="gradient"
                            color="green"
                            onClick={handleDeleteConfirmationOpen}
                        >
                            <span>Delete</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Card>
        </div>
    );
}
