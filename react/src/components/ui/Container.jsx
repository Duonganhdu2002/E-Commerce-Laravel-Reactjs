import React, { useState, useEffect } from 'react';
import { Carousel } from "@material-tailwind/react";

import sale3 from "../../assets/sale/sale3.png";
import sale4 from "../../assets/sale/sale4.png";
import sale5 from "../../assets/sale/sale5.png";
import sale6 from "../../assets/sale/sale6.png";
import sale7 from "../../assets/sale/sale7.png";
import sale8 from "../../assets/sale/sale8.png";

import { Spinner } from "@material-tailwind/react";

const Container = () => {
    const imagePaths = [sale3, sale4, sale5, sale6, sale7, sale8];
    const [loading, setLoading] = useState(true); // Thêm state để theo dõi trạng thái tải ảnh

    useEffect(() => {
        const loadImage = () => {
            // Simulate loading time
            const timer = setTimeout(() => {
                setLoading(false);
            }, 2000);

            return () => clearTimeout(timer);
        };

        loadImage();
    }, []);

    return (
        <div className="flex items-center justify-center mx-auto">
            <Carousel
                className="rounded-xl lg:w-[80%] md:w-[90%] w-[95%] md:h-auto h-[450px]"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                                    activeIndex === i
                                        ? "w-8 bg-white"
                                        : "w-4 bg-white/50"
                                }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
                autoplay={true}
                loop={true}
            >
                {loading ? (
                    // Hiển thị skeleton loader trong khi ảnh đang được tải
                    <div className="rounded-xl xl:h-[650px] lg:h-[550px] md:h-[450px] sm:h-[450px] h-[450px]  p-2 animate-pulse bg-gray-300 flex justify-center items-center">
                    
                    </div>
                ) : (
                    // Hiển thị ảnh khi đã tải xong
                    imagePaths.map((path, index) => (
                        <img key={index} src={path} alt="" className="rounded-3xl h-full p-2 object-cover object-center" />
                    ))
                )}
            </Carousel>
        </div>
    );
};

export default Container;
