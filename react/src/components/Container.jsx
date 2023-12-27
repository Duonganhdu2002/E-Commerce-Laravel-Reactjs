import Sale3 from "../assets/sale/sale3.png";
import Sale4 from "../assets/sale/sale4.png";
import Sale5 from "../assets/sale/sale5.png";
import Sale6 from "../assets/sale/sale6.png";
import Sale7 from "../assets/sale/sale7.png";
import Sale8 from "../assets/sale/sale8.png";
import { useState, useEffect } from "react";

const Container = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mảng chứa các đường dẫn ảnh
    const imagePaths = [Sale3, Sale4, Sale5, Sale6, Sale7, Sale8];

    // Thời gian giữa các lần thay đổi ảnh (7 giây)
    const intervalTime = 7000;

    useEffect(() => {
        // Hàm thay đổi ảnh
        const changeImage = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % imagePaths.length);
        };

        // Thiết lập hàm thay đổi ảnh tự động sau mỗi khoảng thời gian
        const interval = setInterval(changeImage, intervalTime);

        // Xóa interval khi component unmount
        return () => clearInterval(interval);
    }, [currentIndex, imagePaths.length]);

    return (
        <div className=" flex items-center justify-center   mt-2 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-10">
            <div
                className="2xl:w-[80%] xl:w-[80%] lg:w-[80%] md:w-[90%] w-[95%]"
            >
                <img
                    src={imagePaths[currentIndex]}
                    alt=""
                    className="transition-all duration-500 ease-in-out animate-slideLeft cursor-pointer rounded-xl"
                    onClick={() =>
                        setCurrentIndex(
                            (prevIndex) => (prevIndex + 1) % imagePaths.length
                        )
                    }
                />
            </div>
        </div>
    );
};
export default Container;
