import Sale3 from "../../assets/public/sale/sale3.png";
import Sale4 from "../../assets/public/sale/sale4.png";
import Sale5 from "../../assets/public/sale/sale5.png";
import Sale6 from "../../assets/public/sale/sale6.png";
import Sale7 from "../../assets/public/sale/sale7.png";
import Sale8 from "../../assets/public/sale/sale8.png";
import { useState, useEffect } from "react";

const Container = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Mảng chứa các đường dẫn ảnh
    const imagePaths = [Sale3, Sale4, Sale5, Sale6, Sale7, Sale8];

    // Thời gian giữa các lần thay đổi ảnh (5 giây)
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
        <div className=" flex items-center justify-around md:px-10 lg:px-32 xl:px-46  2xl:px-48 sm:px-4   mt-2 md:mt-6 lg:mt-8 xl:mt-10 2xl:mt-10">
            <div
                className="flex justify-center items-center"
            >
                <img
                    src={imagePaths[currentIndex]}
                    alt=""
                    className="transition-all duration-500 ease-in-out animate-slideLeft cursor-pointer sm:rounded-2xl"
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
