import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Products from "../../assets/icon/apps-add.svg";
import Views from "../../assets/icon/eye.svg";
import Carts from "../../assets/icon/shopping-cart.svg";
import Users from "../../assets/icon/users-alt.svg";
import { getTotalRevenue } from "../../services/revenue";

const Skeleton = () => {
    return (
        <div className="animate-pulse bg-gray-200 rounded-2xl p-6 w-full h-full">
        </div>
    );
};

const InformationCard = () => {
    const [dailyRevenue, setDailyRevenue] = useState(0);
    const [weeklyRevenue, setWeeklyRevenue] = useState(0);
    const [monthlyRevenue, setMonthlyRevenue] = useState(0);
    const [annualRevenue, setAnnualRevenue] = useState(0);
    const [data, setData] = useState([]);

    const seller = useSelector((state) => state.seller.seller);
    const userID = seller.user_id;

    useEffect(() => {
        const fetchData = async () => {
            let res = await getTotalRevenue(userID);
            if (res && res.monthlyRevenue && res.annualRevenue) {
                setData(res);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const { dailyRevenue, weeklyRevenue, monthlyRevenue, annualRevenue } = data;

        if (dailyRevenue && dailyRevenue.length > 0) {
            animateNumber(dailyRevenue[0].total_revenue, setDailyRevenue);
        }
        if (weeklyRevenue && weeklyRevenue.length > 0) {
            animateNumber(weeklyRevenue[0].total_revenue, setWeeklyRevenue);
        }
        if (monthlyRevenue && monthlyRevenue.length > 0) {
            animateNumber(monthlyRevenue[0].total_revenue, setMonthlyRevenue);
        }
        if (annualRevenue && annualRevenue.length > 0) {
            animateNumber(annualRevenue[0].total_revenue, setAnnualRevenue);
        }
    }, [data]);

    const animateNumber = (targetNumber, setNumber) => {
        let start = 0;
        const increment = Math.ceil(targetNumber/42);
        const animation = setInterval(() => {
            if (start >= targetNumber) {
                clearInterval(animation);
                setNumber(targetNumber);
            } else {
                setNumber(start);
                start += increment;
            }
        }, 50);
    };




    return (
        <div>
            {data && Object.keys(data).length > 0 ? (
                <div className="grid gap-8 xl:grid-cols-4 mb-4">
                    {/* Revenue */}
                    <div className="sm:flex justify-between relative p-6 rounded-2xl bg-white shadow">
                        <div className="flex flex-col justify-center space-y-2">
                            <div className="flex justify-center sm:justify-start items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                                <span>Daily Revenue</span>
                            </div>
                            <div className="flex justify-center sm:justify-start items-center text-3xl">
                                $ {dailyRevenue}
                            </div>
                            <div className={`flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium ${data.revenueChangeYesterday < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                <span className={data.revenueChangeYesterday < 0 ? 'text-red-600' : 'text-green-600'}>
                                    {data.revenueChangeYesterday < 0 ? Math.abs(data.revenueChangeYesterday).toFixed(2) + '% decrease' : data.revenueChangeYesterday.toFixed(2) + '% increase'}
                                </span>
                                <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d={data.revenueChangeYesterday < 0 ? "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" : "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"}
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-center items-center 2xl:my-0 my-6 mx-6">
                            <div className="w-16 h-16 rounded-full bg-blue-gray-50/60 absolute"></div>
                            <img
                                src={Views}
                                alt=""
                                className="mt-3 2xl:mt-0 flex justify-center w-5 relative"
                            />
                        </div>
                    </div>

                    <div className="sm:flex justify-between relative p-6 rounded-2xl bg-white shadow">
                        <div className="flex flex-col justify-center space-y-2">
                            <div className="flex justify-center sm:justify-start items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                                <span>Weekly Revenue</span>
                            </div>
                            <div className="flex justify-center sm:justify-start items-center text-3xl">
                                $ {weeklyRevenue}
                            </div>
                            <div className={`flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium ${data.revenueChangeLastWeek < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                <span className={data.revenueChangeLastWeek < 0 ? 'text-red-600' : 'text-green-600'}>
                                    {data.revenueChangeLastWeek < 0 ? Math.abs(data.revenueChangeLastWeek).toFixed(2) + '% decrease' : data.revenueChangeLastWeek.toFixed(2) + '% increase'}
                                </span>
                                <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d={data.revenueChangeLastWeek < 0 ? "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" : "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"}
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-center items-center 2xl:my-0 my-6 mx-6">
                            <div className="w-16 h-16 rounded-full bg-blue-gray-50/60 absolute"></div>
                            <img
                                src={Carts}
                                alt=""
                                className="mt-3 2xl:mt-0 flex justify-center w-5 relative"
                            />
                        </div>
                    </div>


                    {/* Monthly Revenue */}
                    <div className="sm:flex justify-between relative p-6 rounded-2xl bg-white shadow">
                        <div className="flex flex-col justify-center space-y-2">
                            <div className="flex justify-center sm:justify-start items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                                <span>Monthly Revenue {data.monthlyRevenue && data.monthlyRevenue.length > 0 ? data.monthlyRevenue[0].month : ''}/{data.monthlyRevenue && data.monthlyRevenue.length > 0 ? data.monthlyRevenue[0].year : ''}</span>
                            </div>
                            <div className="flex justify-center sm:justify-start items-center w-full text-3xl">
                                $ {monthlyRevenue}
                            </div>
                            <div className={`flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium ${data.revenueChangeLastMonth < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                <span className={data.revenueChangeLastMonth < 0 ? 'text-red-600' : 'text-green-600'}>
                                    {data.revenueChangeLastMonth < 0 ? Math.abs(data.revenueChangeLastMonth).toFixed(2) + '% decrease' : data.revenueChangeLastMonth.toFixed(2) + '% increase'}
                                </span>
                                <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d={data.revenueChangeLastMonth < 0 ? "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" : "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"}
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-center items-center 2xl:my-0 my-6 mx-6">
                            <div className="w-16 h-16 rounded-full bg-blue-gray-50/60 absolute"></div>
                            <img
                                src={Products}
                                alt=""
                                className="mt-3 2xl:mt-0 flex justify-center w-5 relative"
                            />
                        </div>
                    </div>

                    {/* Annual Revenue */}
                    <div className="sm:flex justify-between relative p-6 rounded-2xl bg-white shadow">
                        <div className="flex flex-col justify-center space-y-2">
                            <div className="flex justify-center sm:justify-start items-center space-x-2 rtl:space-x-reverse text-sm font-medium text-gray-500 dark:text-gray-200">
                                <span>Annual Revenue {data.annualRevenue && data.annualRevenue.length > 0 ? data.annualRevenue[0].year : ''}</span>
                            </div>
                            <div className="flex justify-center sm:justify-start items-center w-full text-3xl">
                                $ {annualRevenue}
                            </div>
                            <div className={`flex items-center space-x-1 rtl:space-x-reverse text-sm font-medium ${data.revenueChangeLastYear < 0 ? 'text-red-600' : 'text-green-600'}`}>
                                <span className={data.revenueChangeLastYear < 0 ? 'text-red-600' : 'text-green-600'}>
                                    {data.revenueChangeLastYear < 0 ? Math.abs(data.revenueChangeLastYear).toFixed(2) + '% decrease' : data.revenueChangeLastYear.toFixed(2) + '% increase'}
                                </span>
                                <svg
                                    className="w-4 h-4"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d={data.revenueChangeLastYear < 0 ? "M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z" : "M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"}
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div className="flex justify-center items-center 2xl:my-0 my-6 mx-6">
                            <div className="w-16 h-16 rounded-full bg-blue-gray-50/60 absolute"></div>
                            <img
                                src={Users}
                                alt=""
                                className="mt-3 2xl:mt-0 flex justify-center w-5 relative"
                            />
                        </div>
                    </div>
                </div>
            ) : (
                // If data is not available, show skeleton for each card
                <div className="grid gap-8 xl:grid-cols-4 mb-4 h-[15vh]">
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                    <Skeleton />
                </div>
            )}
        </div>
    );
};

export default InformationCard;
