import { Carousel } from "@material-tailwind/react";

import sale3 from "../../assets/sale/sale3.png";
import sale4 from "../../assets/sale/sale4.png";
import sale5 from "../../assets/sale/sale5.png";
import sale6 from "../../assets/sale/sale6.png";
import sale7 from "../../assets/sale/sale7.png";
import sale8 from "../../assets/sale/sale8.png";

const Container = () => {
    const imagePaths = [sale3, sale4, sale5, sale6, sale7, sale8];

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
                {imagePaths.map((path, index) => (
                    <img key={index} src={path} alt="" className="rounded-3xl h-full p-2 object-cover object-center" />
                ))}
            </Carousel>
        </div>
    );
};

export default Container;
