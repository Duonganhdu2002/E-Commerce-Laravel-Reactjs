import React from "react";

function Banner4() {
    return (
        <>
            <div className="w-[95%] md:w-[90%] lg:w-[80%] mx-auto">
                <div className="mx-auto bg-gray-200 rounded-2xl">
                    <div className="lg:flex md:flex block justify-between items-center">
                        <div className="md:p-10 p-4">
                            <p className="text-base leading-none text-gray-800">
                                Save upto 30%
                            </p>
                            <p className="text-3xl font-semibold leading-9 text-gray-800 py-4">
                                Summer Sale
                            </p>
                            <p className="text-base leading-normal text-gray-600">
                                Want to save some cash and still look like a fashion diva ?
                                <br />
                                Checkout our summer sale now !!!
                            </p>
                        </div>
                        <div className="md:p-10 p-4">
                            <img
                                src="https://tuk-cdn.s3.amazonaws.com/can-uploader/ec2.png"
                                className="w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Banner4;
