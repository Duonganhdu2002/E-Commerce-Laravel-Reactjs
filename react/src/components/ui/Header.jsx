import React, { useState } from "react";
import { Link } from "react-router-dom";
import facebook from "../../assets/icon/facebook.svg";
import instagram from "../../assets/icon/instagram.svg";
import linkedin from "../../assets/icon/linkedin.svg";
import message from "../../assets/icon/message.svg";
import more from "../../assets/icon/more.svg";
import user from "../../assets/icon/user-svgrepo-com.svg";

const PopupMenu = ({ items, onClose }) => (
    <div className="absolute right-2 bg-[#1e293b] text-white p-4 rounded-xl shadow-xl z-50 mt-2">
        <ul>
            {items.map((item, index) => (
                <li key={index} className="py-2.5">
                    <Link to={item.link} className="flex items-center">
                        {item.imageSrc && (
                            <img
                                className="w-6 h-6 mr-2"
                                src={item.imageSrc}
                                alt={`icon-${index}`}
                            />
                        )}
                        <span>{item.title}</span>
                    </Link>
                </li>
            ))}
        </ul>
    </div>
);

const Header = () => {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const newImageItem = {
        title: " ",
        link: "#",
        imageSrc: user,
    };

    const menuItems = [
        { title: "NEWSLATER", link: "#" },
        { title: "CONTACT", link: "#" },
        { title: "FAQS", link: "#" },
        { title: "HELP", link: "#" },
        newImageItem,
    ];

    const togglePopup = () => {
        setPopupOpen(!isPopupOpen);
    };
    return (
        <div>
            <div className="hidden lg:block">
                <div className=" bg-[#1e293b] text-white flex justify-between px-52 items-center h-[4vh]">
                    <div className="hidden xl:block">
                        <Link to="#">BUSINESS LOGIN</Link>
                    </div>

                    <div className="block xl:hidden">
                        <div className="flex items-center">
                            <Link to="#" className="px-2">
                                <img
                                    className="h-6 w-6"
                                    src={message}
                                    alt="icon"
                                />
                            </Link>
                            <Link to="#" className="px-2">
                                <img
                                    className="h-6 w-6"
                                    src={linkedin}
                                    alt="icon"
                                />
                            </Link>
                            <Link to="#" className="px-2">
                                <img
                                    className="h-6 w-6"
                                    src={facebook}
                                    alt="icon"
                                />
                            </Link>
                            <Link to="#" className="px-2">
                                <img
                                    className="h-6 w-6"
                                    src={instagram}
                                    alt="icon"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="hidden 2xl:block">
                        <div className="flex justify-between ">
                            <div className="flex items-center">
                                <Link to="" className="px-2">
                                    <img
                                        className="h-6 w-6 mr-2"
                                        src={message}
                                        alt="icon"
                                    />
                                </Link>
                                <Link to="" className="px-2">
                                    <img
                                        className="h-6 w-6 mr-2"
                                        src={linkedin}
                                        alt="icon"
                                    />
                                </Link>
                                <Link to="" className="px-2">
                                    <img
                                        className="h-6 w-6 mr-2"
                                        src={facebook}
                                        alt="icon"
                                    />
                                </Link>
                                <Link to="" className="px-2">
                                    <img
                                        className="h-6 w-6 mr-2"
                                        src={instagram}
                                        alt="icon"
                                    />
                                </Link>
                            </div>
                            <div className="flex">
                                <Link to="" className="pr-2 flex items-center">
                                    <span className="border-r px-4 h-3 flex items-center">
                                        NEWSLATER
                                    </span>
                                </Link>
                                <Link to="" className="pr-2 flex items-center">
                                    <span className="border-r px-4 h-3 flex items-center">
                                        CONTACT
                                    </span>
                                </Link>
                                <Link to="" className="pr-2 flex items-center">
                                    <span className="border-r px-4 h-3 flex items-center">
                                        FAQS
                                    </span>
                                </Link>
                                <Link to="" className="flex items-center">
                                    <span className="px-4 h-3 flex items-center">
                                        HELP
                                    </span>
                                </Link>
                                <Link to="" className="flex items-center">
                                    <div>
                                        <img
                                            className=" w-6 h-6"
                                            src={user}
                                            alt=""
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className=" block 2xl:hidden">
                        <div className="flex items-center py-2">
                            <div className=" hidden xl:block">
                                <div className="flex items-center">
                                    <Link to="" className="px-2">
                                        <img
                                            className="h-6 w-6"
                                            src={message}
                                            alt="icon"
                                        />
                                    </Link>
                                    <Link to="" className="px-2">
                                        <img
                                            className="h-6 w-6"
                                            src={linkedin}
                                            alt="icon"
                                        />
                                    </Link>
                                    <Link to="" className="px-2">
                                        <img
                                            className="h-6 w-6"
                                            src={facebook}
                                            alt="icon"
                                        />
                                    </Link>
                                    <Link to="" className="px-2">
                                        <img
                                            className="h-6 w-6"
                                            src={instagram}
                                            alt="icon"
                                        />
                                    </Link>
                                </div>
                            </div>
                            <div className="flex ml-auto">
                                <Link to="" className=" flex items-center">
                                    <span className="border-r px-4 h-3 flex items-center">
                                        NEWSLATER
                                    </span>
                                </Link>
                                <Link to="" className=" flex items-center">
                                    <span className="border-r px-4 h-3 flex items-center">
                                        CONTACT
                                    </span>
                                </Link>
                                <Link to="" className="flex items-center">
                                    <span className="border-r px-4 h-3 flex items-center">
                                        FAQS
                                    </span>
                                </Link>
                                <Link to="" className="flex items-center">
                                    <span className="px-4 h-3 flex items-center">
                                        HELP
                                    </span>
                                </Link>
                                <Link to="" className="flex items-center">
                                    <div>
                                        <img
                                            className=" w-6 h-6"
                                            src={user}
                                            alt=""
                                        />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block lg:hidden">
                <div className="bg-[#1e293b] text-white flex justify-between px-100 h-8 items-center">
                    <div className="flex justify-between px-5 items-center">
                        <div className="flex items-center">
                            <Link to="" className="px-2">
                                <img
                                    className="h-4 w-4"
                                    src={message}
                                    alt="icon"
                                />
                            </Link>
                            <Link to="" className="px-2">
                                <img
                                    className="h-4 w-4"
                                    src={linkedin}
                                    alt="icon"
                                />
                            </Link>
                            <Link to="" className="px-2">
                                <img
                                    className="h-4 w-4"
                                    src={facebook}
                                    alt="icon"
                                />
                            </Link>
                            <Link to="" className="px-2">
                                <img
                                    className="h-4 w-4"
                                    src={instagram}
                                    alt="icon"
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center px-2">
                        <Link to="#" className="px-2" onClick={togglePopup}>
                            <img
                                className="h-4 w-4 mr-2"
                                src={more}
                                alt="icon"
                            />
                        </Link>
                    </div>
                </div>
            </div>
            {isPopupOpen && (
                <div
                    className="fixed top-0 left-0 right-0 bottom-0 opacity-50"
                    onClick={togglePopup}
                ></div>
            )}
            {isPopupOpen && (
                <PopupMenu items={menuItems} onClose={togglePopup} />
            )}
        </div>
    );
};

export default Header;
