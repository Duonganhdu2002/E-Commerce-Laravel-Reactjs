import React from "react";
import logo from "../../assets/public/logo.svg";
import mail_black from "../../assets/public/mail_black.svg";
import map_black from "../../assets/public/map_black.svg";
import phone_black from "../../assets/public/phone_black.svg";

export default function Footer() {
    return (
        <footer>
            <div className="hidden md:block">
                <div className="px-52 h-12" style={{ height: "510px" }}>
                    <div className="flex justify-around items-center">
                        <div className=" mt-12 mb-10 ">
                            <div className="flex items-center w-96">
                                <div>
                                    <div className="flex items-center">
                                        <img
                                            className="h-30 w-20 mr-30"
                                            src={logo}
                                            alt="icon"
                                        />
                                        <p className=" ml-10 font-bold text-xl">
                                            COMPANY
                                        </p>
                                    </div>
                                    <div className=" mt-8">
                                        <p>
                                            Online Shopping BD has never been
                                            easier. Company is best online
                                            shopping store in Biet Nam that
                                            features 20+ million products at
                                            affordable prices. As vietnam's
                                            online shopping landscape is
                                            expanding every year online shopping
                                            in dhaka, chittagong, khulna, sylhet
                                            and other big cities are also
                                            gaining momentum. Company is among
                                            best websites for online shopping in
                                            Viet Nam.
                                        </p>
                                    </div>
                                    <div className=" mt-8 flex items-center">
                                        <img
                                            className="h-6 w-6 mr-4"
                                            src={map_black}
                                            alt="icon"
                                        />
                                        <p>
                                            1080 Nguyen Trong Tuyen, Phu Nhuan,
                                            Ho Chi Minh City, Viet Nam
                                        </p>
                                    </div>
                                    <div className=" mt-4 flex items-center">
                                        <img
                                            className="h-6 w-6 mr-4"
                                            src={phone_black}
                                            alt="icon"
                                        />
                                        <p>Phone: 0333999789</p>
                                    </div>
                                    <div className=" mt-4 flex items-center">
                                        <img
                                            className="h-6 w-6 mr-4"
                                            src={mail_black}
                                            alt="icon"
                                        />
                                        <p>Fax: 099 044 6622</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center mb-40 mt-6">
                            <div>
                                <div>
                                    <p className=" text-xl font-bold text-slate-800">
                                        Top Categories & Brands
                                    </p>
                                </div>
                                <div className="mt-8">
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Mobile Phones
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Home Appliene
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Mobile Accesories
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Laptops
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Medicines
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        LED TV
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Bikes
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mb-40 mt-6">
                            <div>
                                <div>
                                    <p className=" text-xl font-bold text-slate-800">
                                        Useful Links
                                    </p>
                                </div>
                                <div className=" mt-8">
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Privacy Policy
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Returns
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Tearms and Conditions
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Our Sitemap
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Latest News
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Blog
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-10 hover:translate-x-2 hover:underline"
                                    ></a>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center mb-40 mt-6">
                            <div className="grid-cols-4">
                                <div>
                                    <p className=" text-xl font-bold text-slate-800">
                                        Lets Help You
                                    </p>
                                </div>
                                <div className=" mt-8">
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Account
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Password Recovery
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Contact us
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Get Help
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Purchase Information
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-4 hover:translate-x-2 hover:underline"
                                    >
                                        Pursache Details
                                    </a>
                                    <a
                                        href=""
                                        className="flex items-center mt-10 hover:translate-x-2 hover:underline"
                                    ></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className=" flex items-center border-t-2 border-gray-700/50"
                        style={{ height: "50px" }}
                    >
                        <p className="">
                            © 1997-2024. All right reseved by{" "}
                            <a href="" className=" text-slate-900 font-bold">
                                Company
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="block md:hidden">
                <div className="flex justify-center">
                    <div className="flex justify-between items-center ">
                        <div className=" mt-12 mb-10 grid-cols-1	">
                            <div className="flex items-center w-96">
                                <div>
                                    <div className="flex items-center">
                                        <img
                                            className="h-30 w-20 mr-30"
                                            src={logo}
                                            alt="icon"
                                        />
                                        <p className=" ml-10 font-bold text-xl">
                                            COMPANY
                                        </p>
                                    </div>
                                    <div className=" mt-8">
                                        <p>
                                            Online Shopping BD has never been
                                            easier. Company is best online
                                            shopping store in Biet Nam that
                                            features 20+ million products at
                                            affordable prices. As vietnam's
                                            online shopping landscape is
                                            expanding every year online shopping
                                            in dhaka, chittagong, khulna, sylhet
                                            and other big cities are also
                                            gaining momentum. Company is among
                                            best websites for online shopping in
                                            Viet Nam.
                                        </p>
                                    </div>
                                    <div className=" mt-8 flex items-center">
                                        <img
                                            className="h-6 w-6 mr-4"
                                            src={map_black}
                                            alt="icon"
                                        />
                                        <p>
                                            1080 Nguyen Trong Tuyen, Phu Nhuan,
                                            Ho Chi Minh City, Viet Nam
                                        </p>
                                    </div>
                                    <div className=" mt-4 flex items-center">
                                        <img
                                            className="h-6 w-6 mr-4"
                                            src={phone_black}
                                            alt="icon"
                                        />
                                        <p>Phone: 0333999789</p>
                                    </div>
                                    <div className=" mt-4 flex items-center">
                                        <img
                                            className="h-6 w-6 mr-4"
                                            src={mail_black}
                                            alt="icon"
                                        />
                                        <p>Fax: 099 044 6622</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    className=" flex items-center border-t-2 border-gray-700/50 justify-center"
                    style={{ height: "50px" }}
                >
                    <p className="">
                        © 1997-2024. All right reseved by{" "}
                        <a href="" className=" text-slate-900 font-bold">
                            Company
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
