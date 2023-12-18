import React from "react";
import shiped from "../../assets/public/shiped.svg";
import returns from "../../assets/public/return.svg";
import telephone from "../../assets/public/telephone.svg";
import shield from "../../assets/public/shield.svg";

export default function SubFooter() {
  return (
    <footer>
      <div className="hidden md:block">
        <div
          className="bg-slate-900 text-white flex justify-between px-52 h-12 items-center"
          style={{ height: "150px" }}
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <div>
                <img className="h-30 w-20 mr-30" src={shiped} alt="icon" />
              </div>
              <div className=" w-80 ml-8">
                <div className=" text-xl font-bold">
                  <p>Free Shipping</p>
                </div>
                <div>
                  <p>Proin condimentu sagtties</p>
                </div>
              </div>
              <div>
                <img className="h-30 w-20 mr-30" src={returns} alt="icon" />
              </div>
              <div className=" w-80 ml-8">
                <div className=" text-xl font-bold">
                  <p>Easy Returns</p>
                </div>
                <div>
                  <p>Proin condimentu sagtties</p>
                </div>
              </div>
              <div>
                <img className="h-30 w-20 mr-30" src={telephone} alt="icon" />
              </div>
              <div className=" w-80 ml-8">
                <div className=" text-xl font-bold">
                  <p>24/7 Support</p>
                </div>
                <div>
                  <p>Proin condimentu sagtties</p>
                </div>
              </div>
              <div>
                <img className="h-30 w-20 mr-30" src={shield} alt="icon" />
              </div>
              <div className=" w-80 ml-8">
                <div className=" text-xl font-bold">
                  <p>100% Seacure and Safe</p>
                </div>
                <div>
                  <p>Proin condimentu sagtties</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="block md:hidden">
        <div
          className="bg-slate-900 text-white flex justify-between px-5 items-center"
          style={{ height: "50px" }}
        >
        </div>
      </div>
    </footer>
  );
}
