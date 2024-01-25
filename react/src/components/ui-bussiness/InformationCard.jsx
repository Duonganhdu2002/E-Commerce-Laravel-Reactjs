import React, { useEffect, useState } from "react";
import Views from "../../assets/icon/eye.svg";
import Carts from "../../assets/icon/shopping-cart.svg";
import Users from "../../assets/icon/users-alt.svg";
import Products from "../../assets/icon/apps-add.svg";

const InformationCard = () => {
    const [viewsValue, setViewsValue] = useState(0);
    const [cartsValue, setCartsValue] = useState(0);
    const [productsValue, setProductsValue] = useState(0);
    const [usersValue, setUsersValue] = useState(0);

    const startCounterAnimation = (endValue, setValue) => {
        const duration = 2000;
        let startTimestamp;

        const startAnimation = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            const easing = (progress) =>
                1 - Math.pow(1 - progress / duration, endValue / 10);

            if (progress < duration) {
                const nextValue = Math.floor(
                    easing(progress / duration) * endValue
                );
                setValue(nextValue);
                requestAnimationFrame(startAnimation);
            } else {
                setValue(endValue);
            }
        };

        requestAnimationFrame(startAnimation);
    };

    useEffect(() => {
        startCounterAnimation(192100, setViewsValue);
        startCounterAnimation(192100, setCartsValue);
        startCounterAnimation(40200, setProductsValue);
        startCounterAnimation(3543, setUsersValue);
    }, []);
    return (
        <div>
            <div className="grid gap-8 xl:grid-cols-2 py-8">
                {/* Revenue */}
                <div className="sm:flex justify-between relative p-6 rounded-2xl bg-white shadow">
                    <div className="flex flex-col justify-center space-y-2">
                        <div className="flex justify-center sm:justify-start items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                            <span>Total Views</span>
                        </div>
                        <div className="flex justify-center sm:justify-start items-center text-3xl">
                            $ {viewsValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </div>
                        <div className="flex justify-center items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                            <span>32k increase</span>
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center items-center 2xl:my-0 my-6 mx-6">
                        <div className="w-16 h-16 rounded-full bg-blue-gray-50 absolute"></div>
                        <img
                            src={Views}
                            alt=""
                            className="mt-3 2xl:mt-0 flex justify-cente w-7 relative"
                        />
                    </div>
                </div>

                <div className="sm:flex justify-between relative p-6 rounded-2xl bg-white shadow">
                    <div className="flex flex-col justify-center space-y-2">
                        <div className="flex justify-center sm:justify-start items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                            <span>Total Profit</span>
                        </div>
                        <div className="flex justify-center sm:justify-start items-center text-3xl">
                            $ {cartsValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </div>
                        <div className="flex justify-center items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                            <span>32k increase</span>
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center items-center 2xl:my-0 my-6 mx-6">
                        <div className="w-16 h-16 rounded-full bg-blue-gray-50 absolute"></div>
                        <img
                            src={Carts}
                            alt=""
                            className="mt-3 2xl:mt-0 flex justify-cente w-7 relative"
                        />
                    </div>
                </div>

                {/* New customers */}
                <div className="sm:flex justify-between relative p-6 rounded-2xl bg-white shadow">
                    <div className="flex flex-col justify-center space-y-2">
                        <div className="flex justify-center sm:justify-start items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                            <span>Total Products</span>
                        </div>
                        <div className="flex justify-center sm:justify-start items-center w-full text-3xl">
                            $ {productsValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </div>
                        <div className="flex justify-center items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">
                            <span>7% decrease</span>
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center items-center 2xl:my-0 my-6 mx-6">
                        <div className="w-16 h-16 rounded-full bg-blue-gray-50 absolute"></div>
                        <img
                            src={Products}
                            alt=""
                            className="mt-3 2xl:mt-0 flex justify-cente w-7 relative"
                        />
                    </div>
                </div>

                {/* New orders */}
                <div className="sm:flex justify-between relative p-6 rounded-2xl bg-white shadow">
                    <div className="flex flex-col justify-center space-y-2">
                        <div className="flex justify-center sm:justify-start items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                            <span>Total Users</span>
                        </div>
                        <div className="flex justify-center sm:justify-start items-center w-full text-3xl">
                            $ {usersValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        </div>
                        <div className="flex justify-center items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-green-600">
                            <span>7% increase</span>
                            <svg
                                className="w-4 h-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </div>
                    </div>
                    <div className="flex justify-center items-center 2xl:my-0 my-6 mx-6">
                        <div className="w-16 h-16 rounded-full bg-blue-gray-50 absolute"></div>
                        <img
                            src={Users}
                            alt=""
                            className="mt-3 2xl:mt-0 flex justify-cente w-7 relative"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationCard;
