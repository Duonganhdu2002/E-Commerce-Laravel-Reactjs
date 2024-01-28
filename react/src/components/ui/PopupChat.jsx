// src/components/PopupChat.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "../../assets/public/profile/thaicong.jpg";
import Send from "../../assets/icon/send-2-svgrepo-com.svg";
import Chats from "../../assets/icon/comment.svg";
import BackgroundShop from "../../assets/sale/sale8.png";
import Return from "../../assets/icon/back-svgrepo-com.svg";
import React from "react";
import { Drawer, Button, IconButton } from "@material-tailwind/react";

const PopupChat = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSendMessage = () => {
        // Do something with the message, for now, just log it
        console.log("Sending message:", message);
        // You can add your logic to send the message to the chat system
        setMessage("");
    };

    // Change this
    const [open, setOpen] = React.useState(false);

    // To this
    const [drawerOpen, setDrawerOpen] = useState(false);

    // Update functions
    const openDrawer = () => setDrawerOpen(true);
    const closeDrawer = () => setDrawerOpen(false);

    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <div className="flex flex-col h-full fixed bottom-0 right-0 left-0 top-0 p-4 z-50 mobile-chat-container">
                        {/* Your chat content goes here */}
                        <div className="w-full h-full flex flex-col bg-white p-4 shadow-2xl rounded-lg ">
                            <div className=" flex justify-between ">
                                <div className="flex">
                                    <div className=" flex">
                                        <img
                                            src={Avatar}
                                            alt=""
                                            className="w-14 h-14 mr-4 rounded-xl border-2 border-gray-500"
                                        />
                                    </div>
                                    <div className=" flex flex-col">
                                        <p className=" font-bold text-lg inline-block bg-gray-300 px-2 rounded-lg mb-2 w-fit">
                                            Thai Cong Shop
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        onClick={togglePopup}
                                        className=" bg-red-900 text-white px-4 py-2 rounded-md ml-2"
                                    >
                                        X
                                    </button>
                                </div>
                            </div>

                            <div className=" cursor-pointer mt-2 px-2">
                                <Button
                                    className="bg-gray-300 text-black w-full h-8 flex items-center"
                                    onClick={openDrawer}
                                >
                                    <img
                                        src={Return}
                                        alt=""
                                        className=" w-5 h-5 mr-2"
                                    />
                                    <a>Show Chat</a>
                                </Button>
                            </div>

                            <div className=" w-full h-full p-2">
                                <Drawer
                                    open={drawerOpen}
                                    onClose={closeDrawer}
                                    direction="right"
                                    className=""
                                >
                                    <IconButton
                                        variant="text"
                                        color="blue-gray"
                                        onClick={closeDrawer}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="h-5 w-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </IconButton>
                                    <div
                                        className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40"
                                        onClick={closeDrawer}
                                    >
                                        <div className=" flex">
                                            <img
                                                src={Avatar}
                                                alt=""
                                                className="w-14 h-14 mr-4 rounded-xl border-2 border-gray-500"
                                            />
                                        </div>
                                        <div className="">
                                            <p className=" font-medium">
                                                Thai Cong Shop
                                            </p>
                                            <p className=" text-gray-500">
                                                This is the cha...
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40"
                                        onClick={closeDrawer}
                                    >
                                        <div className=" flex">
                                            <img
                                                src={Avatar}
                                                alt=""
                                                className="w-14 h-14 mr-4 rounded-xl border-2 border-gray-500"
                                            />
                                        </div>
                                        <div className="">
                                            <p className=" font-medium">
                                                Thai Cong Shop
                                            </p>
                                            <p className=" text-gray-500">
                                                This is the cha...
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40"
                                        onClick={closeDrawer}
                                    >
                                        <div className=" flex">
                                            <img
                                                src={Avatar}
                                                alt=""
                                                className="w-14 h-14 mr-4 rounded-xl border-2 border-gray-500"
                                            />
                                        </div>
                                        <div className="">
                                            <p className=" font-medium">
                                                Thai Cong Shop
                                            </p>
                                            <p className=" text-gray-500">
                                                This is the cha...
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40"
                                        onClick={closeDrawer}
                                    >
                                        <div className=" flex">
                                            <img
                                                src={Avatar}
                                                alt=""
                                                className="w-14 h-14 mr-4 rounded-xl border-2 border-gray-500"
                                            />
                                        </div>
                                        <div className="">
                                            <p className=" font-medium">
                                                Thai Cong Shop
                                            </p>
                                            <p className=" text-gray-500">
                                                This is the cha...
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40"
                                        onClick={closeDrawer}
                                    >
                                        <div className=" flex">
                                            <img
                                                src={Avatar}
                                                alt=""
                                                className="w-14 h-14 mr-4 rounded-xl border-2 border-gray-500"
                                            />
                                        </div>
                                        <div className="">
                                            <p className=" font-medium">
                                                Thai Cong Shop
                                            </p>
                                            <p className=" text-gray-500">
                                                This is the cha...
                                            </p>
                                        </div>
                                    </div>
                                    <div
                                        className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40"
                                        onClick={closeDrawer}
                                    >
                                        <div className=" flex ">
                                            <img
                                                src={Avatar}
                                                alt=""
                                                className="w-14 h-14 mr-4 rounded-xl border-2 border-gray-500"
                                            />
                                        </div>
                                        <div className="">
                                            <p className=" font-medium">
                                                Thai Cong Shop
                                            </p>
                                            <p className=" text-gray-500">
                                                This is the cha...
                                            </p>
                                        </div>
                                    </div>
                                </Drawer>

                                <div className="flex flex-col max-h-[80vh] w-full h-full bg-gray-300/50 rounded-xl border-gray-500 border-l-2 p-2 overflow-auto">
                                    <div className="flex flex-col py-2 h-full overflow-auto">
                                        <p className="flex justify-center my-2">
                                            10:38 AM
                                        </p>
                                        <p className="text-left relative inline-block bg-white p-3 rounded-lg border-l-2 border-gray-700 mr-auto w-[75%] my-2">
                                            This is the chat content.
                                        </p>
                                        <p className="text-right relative inline-block bg-gray-800 text-white p-3 rounded-lg ml-auto w-[75%] my-2 mr-4">
                                            This is the chat contentdấdsada awh
                                            dhwka dkaw dkja djkw kaf dkjawf
                                            akwjfjakwfka awkjf ja wfkwq k
                                            kjafkjwbfdjka dibqwbdiqw quibwdbq
                                            wdih id q ưi dihq hiw diqw dqih dihq
                                            ưi.
                                        </p>
                                        <p className="flex justify-center my-2">
                                            11:25 AM
                                        </p>
                                        <p className="text-left relative inline-block bg-white p-3 rounded-lg border-l-2 border-gray-700 mr-auto w-[75%] my-2">
                                            This is the chat content.
                                        </p>
                                        <p className="text-right relative inline-block bg-gray-800 text-white p-3 rounded-lg ml-auto w-[75%] my-2 mr-4">
                                            This is the chat contentdấdsada awh
                                            dhwka dkaw dkja djkw kaf dkjawf
                                            akwjfjakwfka awkjf ja wfkwq k
                                            kjafkjwbfdjka dibqwbdiqw quibwdbq
                                            wdih id q ưi dihq hiw diqw dqih dihq
                                            ưi.
                                        </p>
                                        <p className="text-right mr-4 text-gray-500/80">
                                            Watched
                                        </p>
                                    </div>
                                    <div className="flex mt-2">
                                        <input
                                            type="text"
                                            value={message}
                                            onChange={handleInputChange}
                                            placeholder="Type your message..."
                                            className="border rounded-md p-2 mr-2 w-full"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            className="flex justify-between bg-gray-800 text-white p-2 rounded-md w-[50px]"
                                        >
                                            <img
                                                src={Send}
                                                alt=""
                                                className="w-6"
                                            />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </AnimatePresence>
            {!isOpen && (
                <div className="fixed bottom-0 right-0 p-4 mobile-chat-trigger">
                    <button
                        onClick={togglePopup}
                        className="fixed bottom-0 right-0 mb-6 p-3 bg-gray-900 text-white rounded-full transform hover:scale-110 transition-transform"
                    >
                        <img src={Chats} alt="" className="w-8 h-8" />
                    </button>
                </div>
            )}
        </div>
    );
};

export default PopupChat;
