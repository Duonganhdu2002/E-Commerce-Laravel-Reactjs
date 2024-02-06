import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { Input, Select, Option } from "@material-tailwind/react";

export default function Checkout() {

    const [dropdown1, setDropdown1] = useState(false);
    const [dropdown2, setDropdown2] = useState(false);
    const [dropdown3, setDropdown3] = useState(false);
    const [changeText1, setChangeText1] = useState("City");
    const selectedItems = useSelector(state => state.cart.items);
    const selectedShippingPrice = useSelector(state => state.cart.selectedShippingPrice);

    const subtotal = selectedItems.reduce((total, item) => {
        const itemTotal = parseFloat(item.Price) * item.newQuantity;
        return total + itemTotal;
    }, 0);
    // useEffect(() => {
    //     console.log('Selected Items:', selectedItems);

    // }, [selectedItems]);

    const HandleText1 = (e) => {
        setChangeText1(e);
        setDropdown1(false);
    };

    return (
        <div className=" w-[95%] md:w-[90%] lg:w-[80%] mx-auto" >
            <div className="2xl:mx-auto pt-6 px-4 md:px-6 lg:px-20 xl:px-44 ">
                <div>
                    <div className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                        Check out
                    </div>
                </div>
                <div className="mt-2">
                    <Link
                        to="/cart"
                        className="text-base leading-4 underline  hover:text-gray-800 text-gray-600"
                    >
                        Back to my bag
                    </Link>
                </div>
            </div>
            <div className="flex justify-center items-center 2xl:mx-auto lg:pb-16 md:pb-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">

                <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">

                    <div className="flex flex-col justify-start bg-gray-50 w-full p-6 md:p-14">
                        <div>
                            <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                                Order Summary
                            </h1>
                        </div>
                        <div className="flex mt-7 flex-col items-end w-full space-y-6">
                            <div className="flex justify-between w-full mb-4 items-center">
                                <p className="text-lg leading-4 text-gray-600">
                                    Total items
                                </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">
                                    {selectedItems.length}
                                </p>
                            </div>
                            {
                                selectedItems && selectedItems.length > 0 && selectedItems.map((carts, index) => (
                                    <div className="flex justify-between w-full mb-24 items-center" key={index}>
                                        <p className="text-lg leading-4 text-gray-600">
                                            {carts.itemId}
                                        </p>
                                        <p className="text-lg font-semibold leading-4 text-gray-600">
                                            {carts.newQuantity} x {carts.Price}
                                        </p>
                                    </div>
                                ))
                            }

                        </div>
                        <div className=" space-y-4">

                            <div className="flex justify-between w-full items-center mt-24">
                                <p className="text-lg leading-4 text-gray-600">
                                    Shipping charges
                                </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">
                                    ${selectedShippingPrice}
                                </p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">
                                    Sub total
                                </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">
                                    ${subtotal.toFixed(2)}
                                </p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-xl font-semibold leading-4 text-gray-800">
                                    Estimated Total
                                </p>
                                <p className="text-lg font-semibold leading-4 text-gray-800">
                                    ${(subtotal + parseFloat(selectedShippingPrice)).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full  flex-col justify-start items-start">

                        <div className="mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800">
                                Shipping Details
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                            <Input variant="standard" label="Your name" placeholder="Standard" />
                            <Input variant="standard" label="Phone number" placeholder="Standard" />
                            <Input variant="standard" label="Email" placeholder="Standard" />
                            <div className=" flex w-full">
                                <Select className=" w-[95%]" variant="standard" label="Provine">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                                <Select variant="standard" label="District">
                                    <Option>Material Tailwind HTML</Option>
                                    <Option>Material Tailwind React</Option>
                                    <Option>Material Tailwind Vue</Option>
                                    <Option>Material Tailwind Angular</Option>
                                    <Option>Material Tailwind Svelte</Option>
                                </Select>
                            </div>
                            <Select variant="standard" label="Ward">
                                <Option>Material Tailwind HTML</Option>
                                <Option>Material Tailwind React</Option>
                                <Option>Material Tailwind Vue</Option>
                                <Option>Material Tailwind Angular</Option>
                                <Option>Material Tailwind Svelte</Option>
                            </Select>
                            <Input variant="standard" label="Street and number" placeholder="Standard" />
                            <Input variant="standard" label="Note" placeholder="Standard" />
                        </div>
                        <button className="focus:outline-none focus:ring-gray-500 focus:ring-offset-2 mt-8 text-base font-medium focus:ring-2 focus:ring-ocus:ring-gray-800 leading-4 hover:bg-black py-4 w-full md:w-4/12 lg:w-full text-white bg-gray-800">
                            Proceed to payment
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
}
