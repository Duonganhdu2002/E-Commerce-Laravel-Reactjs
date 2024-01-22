import React from "react";
import InformationCard from "../../components/ui-bussiness/InformationCard";
import Graph1 from "../../components/ui-bussiness/Graph1";
import Graph2 from "../../components/ui-bussiness/Graph2";

export default function Dashboard() {
    return (
        <div>
            <InformationCard />
            <div className=" xl:flex justify-between w-full">
                <div className=" xl:w-[66%] w-full xl:mr-8 mb-8">
                    <Graph1 />
                </div>
                <div className=" xl:w-[32%] w-full mb-8">
                    <Graph2 />
                </div>
            </div>
        </div>
    );
}
