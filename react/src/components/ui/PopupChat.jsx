// src/components/PopupChat.js
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Avatar from "../../assets/public/profile/thaicong.jpg";
import Send from "../../assets/icon/send-2-svgrepo-com.svg";
import BackgroundShop from "../../assets/sale/sale5.png";

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

    return (
        <div>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed bottom-0 right-0 p-6 z-50"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Your chat content goes here */}
                        <div className=" fixed bottom-0 right-0 mr-4 mb-4 bg-white p-4 shadow-2xl rounded-lg w-[700px] hidden md:block">
                            <div className=" flex ">
                                <div>
                                    <button
                                        onClick={togglePopup}
                                        className=" bg-red-900 text-white px-4 py-2 rounded-md ml-2"
                                    >
                                        X
                                    </button>
                                </div>
                                <div className="flex ml-[225px]">
                                    <div className=" flex">
                                        <img
                                            src={Avatar}
                                            alt=""
                                            className="w-14 h-14 mr-4 rounded-xl border-2 border-gray-500"
                                        />
                                    </div>
                                    <div className="  fixed -z-40 w-[385px] h-[56px] rounded-l-xl">
                                        <img
                                            src={BackgroundShop}
                                            alt=""
                                            className=" w-[385px] h-[56px] rounded-l-xl"
                                            style={{ filter: "blur(5px)" }}
                                        />
                                    </div>
                                    <div className=" flex flex-col">
                                        <p className=" font-bold text-lg inline-block bg-white/60 px-2 rounded-lg mb-2 w-fit">
                                            Thai Cong Shop
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex p-2">
                                <div className="w-[40%] h-[366px] overflow-y-auto mr-2 border-gray-500 border-y-2">
                                    <div className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40">
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
                                    <div className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40">
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
                                    <div className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40">
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
                                    <div className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40">
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
                                    <div className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40">
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
                                    <div className="flex px-4 py-2 border-t-2 cursor-pointer hover:bg-blue-gray-100/40">
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
                                </div>

                                <div className="bg-gray-300/50 rounded-xl w-[60%] border-gray-500 border-l-2 px-4 py-2">
                                    <div className="flex flex-col py-2 h-[300px] overflow-y-auto">
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
                                            className="border rounded-md p-2 mr-2 w-[88%]"
                                        />
                                        <button
                                            onClick={handleSendMessage}
                                            className="bg-gray-800 text-white p-2 rounded-md w-[12%]"
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
                    </motion.div>
                )}
            </AnimatePresence>
            {!isOpen && (
                <motion.div
                    className="fixed bottom-0 right-0 p-6"
                    initial={{ scale: 1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <button
                        onClick={togglePopup}
                        className="fixed bottom-0 right-0 mr-4 p-3 bg-gray-900 text-white rounded-t-2xl transform hover:scale-110 transition-transform w-32 hidden md:block"
                    >
                        Open Chat
                    </button>
                </motion.div>
            )}
        </div>
    );
};

export default PopupChat;
