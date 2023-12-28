import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icon/logo.svg";
import mail_black from "../../assets/icon/mail_black.svg";
import map_black from "../../assets/icon/map_black.svg";
import phone_black from "../../assets/icon/phone_black.svg";

const Footer = () => {
    const topCategoriesAndBrands = [
        { label: "Mobile Phones", to: "/mobile-phones" },
        { label: "Home Appliances", to: "/home-appliances" },
        { label: "Mobile Accessories", to: "/mobile-accessories" },
        { label: "Laptops", to: "/laptops" },
        { label: "Medicines", to: "/medicines" },
        { label: "LED TV", to: "/led-tv" },
        { label: "Bikes", to: "/bikes" }
    ];

    const usefulLinks = [
        { label: "Privacy Policy", to: "/privacy-policy" },
        { label: "Returns", to: "/returns" },
        { label: "Terms and Conditions", to: "/terms-and-conditions" },
        { label: "Our Sitemap", to: "/sitemap" },
        { label: "Latest News", to: "/latest-news" },
        { label: "Blog", to: "/blog" }
    ];

    const letsHelpYouLinks = [
        { label: "Account", to: "/account" },
        { label: "Password Recovery", to: "/password-recovery" },
        { label: "Contact us", to: "/contact-us" },
        { label: "Get Help", to: "/get-help" },
        { label: "Purchase Information", to: "/purchase-information" },
        { label: "Purchase Details", to: "/purchase-details" }
    ];

    return (
        <div className="flex justify-center items-center">
            <div className="flex  flex-col justify-center items-center p-5 w-full md:w-[90%] lg:w-[80%] xl:w-[80%] 2xl:w-[80%]">
                <div className=" xl:flex">
                    <div className=" xl:w-1/4">
                        <div className="flex items-center p-2 mb-5">
                            <img className="h-32 w-32" src={logo} alt="" />
                            <p className="ml-10 font-bold text-xl">COMPANY NAME</p>
                        </div>
                        <p>Online Shopping BD has never been easier. Company is the best online shopping store in Viet Nam that features 20+ million products at affordable prices. As Viet Nam's online shopping landscape is expanding every year, online shopping in major cities like Hanoi, Ho Chi Minh City, Da Nang, and others are also gaining momentum. Company is among the best websites for online shopping in Viet Nam.</p>
                        <div className="mt-8 flex items-center">
                            <img className="h-6 w-6 mr-4" src={map_black} alt="icon" />
                            <p>1080 Nguyen Trong Tuyen, Phu Nhuan, Ho Chi Minh City, Viet Nam</p>
                        </div>
                        <div className="mt-4 flex items-center">
                            <img className="h-6 w-6 mr-4" src={phone_black} alt="icon" />
                            <p>Phone: 0333999789</p>
                        </div>
                        <div className="mt-4 flex items-center">
                            <img className="h-6 w-6 mr-4" src={mail_black} alt="icon" />
                            <p>Fax: 099 044 6622</p>
                        </div>
                    </div>
                    <div className=" md:flex xl:w-3/4 xl:ml-12">
                        <div className="mt-10 md:w-1/3">
                            <p className="text-xl font-bold text-slate-800">Top Categories & Brands</p>
                            <div className="mt-8">
                                {topCategoriesAndBrands.map((link, index) => (
                                    <Link key={index} to={link.to} className="flex items-center mt-4 hover:translate-x-2 hover:underline">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="mt-10 md:w-1/3">
                            <p className="text-xl font-bold text-slate-800">Useful Links</p>
                            <div className="mt-8">
                                {usefulLinks.map((link, index) => (
                                    <Link key={index} to={link.to} className="flex items-center mt-4 hover:translate-x-2 hover:underline">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="mt-10 md:w-1/3">
                            <p className="text-xl font-bold text-slate-800">Let's Help You</p>
                            <div className="mt-8">
                                {letsHelpYouLinks.map((link, index) => (
                                    <Link key={index} to={link.to} className="flex items-center mt-4 hover:translate-x-2 hover:underline">
                                        {link.label}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex w-full items-center border-t-2 border-gray-700/50 mt-10">
                    <p className="mt-4">
                        © 1997-2024. All rights reserved by{" "}
                        <Link to="/" className="text-slate-900 font-bold">
                            Company
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;
