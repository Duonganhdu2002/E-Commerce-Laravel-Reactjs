import React, { useState } from "react";
import facebook from "../../assets/public/facebook.svg";
import instagram from "../../assets/public/instagram.svg";
import linkedin from "../../assets/public/linkedin.svg";
import message from "../../assets/public/message.svg";
import more from "../../assets/public/more.svg";

const PopupMenu = ({ items, onClose }) => {
  return (
    <div className="absolute right-2 bg-slate-900 text-white p-4 rounded-xl shadow-xl">
      <ul>
        {items.map((item, index) => (
          <li key={index} className="py-2.5">
            <a href={item.link} className="flex items-center">
              <span>{item.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const menuItems = [
    { title: "NEWSLATER", link: "#" },
    { title: "CONTACT", link: "#" },
    { title: "FAQS", link: "#" },
    { title: "HELP", link: "#" },
  ];

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };
  return (
    <div>
      <div className="hidden md:block">
        <div className="bg-slate-900 text-white flex justify-between px-52 h-12 items-center">
          <div className="">
            <p>FREE SHIPPING FOR ALL ORDER OF $150</p>
          </div>

          <div className="flex justify-between ">
            <div className="flex items-center border-r px-4 h-3">
              <a href="" className="px-2">
                <img className="h-6 w-6 mr-2" src={message} alt="icon" />
              </a>
              <a href="" className="px-2">
                <img className="h-6 w-6 mr-2" src={linkedin} alt="icon" />
              </a>
              <a href="" className="px-2">
                <img className="h-6 w-6 mr-2" src={facebook} alt="icon" />
              </a>
              <a href="" className="px-2">
                <img className="h-6 w-6 mr-2" src={instagram} alt="icon" />
              </a>
            </div>
            <div className="flex">
              <a href="" className="pr-2 flex items-center">
                <span className="border-r px-4 h-3 flex items-center">
                  NEWSLATER
                </span>
              </a>
              <a href="" className="pr-2 flex items-center">
                <span className="border-r px-4 h-3 flex items-center">
                  CONTACT
                </span>
              </a>
              <a href="" className="pr-2 flex items-center">
                <span className="border-r px-4 h-3 flex items-center">
                  FAQS
                </span>
              </a>
              <a href="" className="flex items-center">
                <span className="px-4 h-3 flex items-center">HELP</span>
              </a>
            </div>
          </div>
        </div>
      </div>



      <div className="block md:hidden">
        <div className="bg-slate-900 text-white flex justify-between px-100 h-12 items-center">
          <div className="flex justify-between px-5 items-center">
            <div className="flex items-center">
              <a href="" className="px-2">
                <img className="h-6 w-6 mr-2" src={message} alt="icon" />
              </a>
              <a href="" className="px-2">
                <img className="h-6 w-6 mr-2" src={linkedin} alt="icon" />
              </a>
              <a href="" className="px-2">
                <img className="h-6 w-6 mr-2" src={facebook} alt="icon" />
              </a>
              <a href="" className="px-2">
                <img className="h-6 w-6 mr-2" src={instagram} alt="icon" />
              </a>
            </div>
          </div>
          <div className="flex items-center px-2">
            <a href="#" className="px-2" onClick={togglePopup}>
            <img className="h-6 w-6 mr-2" src={more} alt="icon" />
            </a>
          </div>
        </div>
      </div>
      {isPopupOpen && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 bg-gray-800 opacity-50"
          onClick={togglePopup}
        ></div>
      )}
      {isPopupOpen && <PopupMenu items={menuItems} onClose={togglePopup} />}
    </div>
  );
};

export default Header;
