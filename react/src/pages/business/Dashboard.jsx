import React from "react";
import InformationCard from "../../components/ui-business/InformationCard";
import Graph1 from "../../components/ui-business/Graph1";
import Graph2 from "../../components/ui-business/Graph2";
import Graph3 from "../../components/ui-business/Graph3";
import Graph4 from "../../components/ui-business/Graph4";

export default function Dashboard() {
    return (
        <div className=" mt-8">
            {/* <TodayOrderSold /> */}
            <InformationCard/>
            <div className=" xl:flex justify-between w-full mt-12">
                <div className=" xl:w-[66%] w-full xl:mr-8 mb-8">
                    <Graph1 />
                </div>
                <div className=" xl:w-[32%] w-full mb-8">
                    <Graph2 />
                </div>
            </div>
            {/* <div className=" xl:flex justify-between w-full">
                <div className=" xl:w-[32%] w-full xl:mr-8">
                    <Graph3 />
                </div>
                <div className=" xl:w-[66%] w-full">
                    <Graph4 />
                </div>
            </div> */}
        </div>
    );
}
