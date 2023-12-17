import React from "react";
import facebook from "../../assets/public/facebook.svg";
import instagram from "../../assets/public/instagram.svg";
import linkedin from "../../assets/public/linkedin.svg";
import message from "../../assets/public/message.svg";

export default function Header() {
  return (
    <div className="bg-slate-900 text-white flex justify-between px-60 h-12 items-center">
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
            <span className="border-r px-4 h-3 flex items-center">CONTACT</span>
          </a>
          <a href="" className="pr-2 flex items-center">
            <span className="border-r px-4 h-3 flex items-center">FAQS</span>
          </a>
          <a href="" className="flex items-center">
            <span className="px-4 h-3 flex items-center">HELP</span>
          </a>
        </div>
      </div>
    </div>
  );
}
