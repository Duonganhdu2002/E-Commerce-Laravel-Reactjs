import { useState, useEffect } from "react";
import Banner3 from "../../assets/banner/banner_3.png";

const PopupAdvertisement = () => {
    const [isPopupVisible, setPopupVisible] = useState(
        sessionStorage.getItem("popupDisplayed") !== "true"
    );

    const closePopup = () => {
        setPopupVisible(false);
        // Lưu trạng thái đã hiển thị quảng cáo vào sessionStorage
        sessionStorage.setItem("popupDisplayed", "true");
    };

    useEffect(() => {
        // Nếu đã hiển thị quảng cáo, không cần lưu trạng thái vào sessionStorage nữa
        if (!isPopupVisible) {
            sessionStorage.setItem("popupDisplayed", "true");
        }
    }, [isPopupVisible]);

    return (
        isPopupVisible && (
            <div className="fixed flex items-center justify-around top-0 right-0 bottom-0 left-0 z-50 bg-slate-950/80">
                <div className="relative w-100 flex items-center justify-around ">
                    <img src={Banner3} alt="Banner" className="w-3/5" />
                    <button
                        className="absolute top-0 right-40 p-2 text-xl w-12 h-12 rounded-full cursor-pointer bg-white"
                        onClick={closePopup}
                    >
                        X
                    </button>
                </div>
            </div>
        )
    );
};

export default PopupAdvertisement;
