import React from "react";
import Revenue from "../../assets/icon/revenue-alt.svg";
import NewCustomers from "../../assets/icon/users-medical.svg";
import NewOrders from "../../assets/icon/apps-add.svg";

const InformationCard = () => {
    return (
        <div>
            <div className="grid gap-8 2xl:grid-cols-3 xl:grid-cols-2 p-8">
                {/* Revenue */}
                <div className="sm:flex justify-between relative p-6 rounded-2xl bg-white shadow">
                    <div className="flex flex-col justify-center space-y-2">
                        <div className="flex justify-center sm:justify-start items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                            <span>Revenue</span>
                        </div>
                        <div className="flex justify-center sm:justify-start items-center text-3xl">$192.1k</div>
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
                    <div className="flex justify-center 2xl:my-0 my-6">
                        <div className="w-20 h-20 2xl:mt-1.5 rounded-full bg-blue-gray-100/70 absolute"></div>
                        <img src={Revenue} alt="" className="mt-3 2xl:mt-0 flex justify-cente w-12 relative" />
                    </div>
                </div>

                {/* New customers */}
                <div className="sm:flex justify-between relative p-6 rounded-2xl bg-white shadow">
                    <div className="flex flex-col justify-center space-y-2">
                        <div className="flex justify-center sm:justify-start items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                            <span>New customers</span>
                        </div>
                        <div className="flex justify-center sm:justify-start items-center w-full text-3xl">1340</div>
                        <div className="flex justify-center items-center space-x-1 rtl:space-x-reverse text-sm font-medium text-red-600">
                            <span>3% decrease</span>
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
                    <div className="flex justify-center 2xl:my-0 my-6">
                        <div className="w-20 h-20 2xl:mt-1.5 rounded-full bg-blue-gray-100/70 absolute"></div>
                        <img src={NewCustomers} alt="" className="mt-4 2xl:mt-0 flex justify-cente w-12 relative" />
                    </div>
                </div>

                {/* New orders */}
                <div className="sm:flex justify-between relative p-6 rounded-2xl bg-white shadow">
                    <div className="flex flex-col justify-center space-y-2">
                        <div className="flex justify-center sm:justify-start items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                            <span>New orders</span>
                        </div>
                        <div className="flex justify-center sm:justify-start items-center w-full text-3xl">3543</div>
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
                    <div className="flex justify-center 2xl:my-0 my-6">
                        <div className="w-20 h-20 2xl:mt-1.5 rounded-full bg-blue-gray-100/70 absolute"></div>
                        <img src={NewOrders} alt="" className="mt-3 2xl:mt-0 flex justify-cente w-12 relative" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationCard;
