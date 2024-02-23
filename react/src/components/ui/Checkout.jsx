import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { useSelector } from "react-redux";
import { Input, Select, Option, Button } from "@material-tailwind/react";
import { districtList, provincesList, wardList } from "../../services/locationService";
import { handleOrder } from "../../services/orderService";

export default function Checkout() {

    //Loading
    const [loading, setLoading] = useState(false);

    // Navigate
    const navigate = useNavigate();

    // Mảng chứa dữ liệu được gọi từ API
    const [provincesListData, setProvincesListData] = useState([]);
    const [districtListData, setDistrictListData] = useState([]);
    const [wardListData, setWardListData] = useState([]);

    // Redux thông tin giỏ hàng và giá ship
    const selectedItems = useSelector(state => state.cart.items);
    const selectedShippingPrice = useSelector(state => state.cart.selectedShippingPrice);
    const selectedShippingMethod = useSelector(state => state.cart.selectedShippingMethod);

    //Redux store id user
    const userId = useSelector(state => state.user.user.user_id || '');

    // Các biến chứa id của Tỉnh, huyện, xã
    const [selectedProvinceId, setSelectedProvinceId] = useState(null);
    const [selectedDistrictId, setSelectedDistrictId] = useState(null);
    const [selectedWardId, setSelectedWardId] = useState(null);

    // Các biến chứa tên của Tỉnh, huyện, xã
    const [selectedProvince, setSelectedProvince] = useState(null);
    const [selectedDistrict, setSelectedDistrict] = useState(null);
    const [selectedWard, setSelectedWard] = useState(null);

    // Dữ liệu nhập từ form thông tin 
    const [name, setName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [streetAndNumber, setStreetAndNumber] = useState("");
    const [note, setNote] = useState("");

    // Tính tổng tất cả các mặt hàng 
    const subtotal = selectedItems.reduce((total, item) => {
        const itemTotal = parseFloat(item.Price) * item.newQuantity;
        return total + itemTotal;
    }, 0);

    // Province API
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await provincesList();
                setProvincesListData(res);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    // District API
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await districtList(parseInt(selectedProvinceId));
                setDistrictListData(res);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [selectedProvinceId]);

    // Ward API
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await wardList(parseInt(selectedDistrictId));
                setWardListData(res);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [selectedDistrictId]);

    const handlechangeProvince = (e) => {
        const selectedProvinceId = parseInt(e);
        setSelectedProvinceId(selectedProvinceId);
        const selectedProvinceInfo = provincesListData.find((province) => province.province_id === selectedProvinceId);
        if (selectedProvinceInfo) {
            setSelectedProvince(selectedProvinceInfo.province_name);
        }
    };

    const handlechangeDistrict = (e) => {
        const selectedDistrictId = parseInt(e);
        setSelectedDistrictId(selectedDistrictId);
        const selectedDistrictInfo = districtListData.find((district) => district.districts_id === selectedDistrictId);
        if (selectedDistrictInfo) {
            setSelectedDistrict(selectedDistrictInfo.name);
        }
    };

    const handlechangeWard = (e) => {
        const selectedWardId = parseInt(e);
        setSelectedWardId(selectedWardId);
        const selectedWardInfo = wardListData.find((ward) => ward.wards_id === selectedWardId);
        if (selectedWardInfo) {
            setSelectedWard(selectedWardInfo.name);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case "name":
                setName(value);
                break;
            case "phoneNumber":
                setPhoneNumber(value);
                break;
            case "streetAndNumber":
                setStreetAndNumber(value);
                break;
            case "note":
                setNote(value);
                break;
            default:
                break;
        }
    };

    const handleProceedToPayment = async () => {
        if (!name || !phoneNumber || !streetAndNumber || !selectedWard || !selectedDistrict || !selectedProvince) {
            alert('Vui lòng điền đầy đủ thông tin để tiếp tục đặt hàng.');
            return;
        }

        try {
            await fetchData();
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    console.log(selectedItems)

    const fetchData = async () => {
        try {
            setLoading(true);
            const updatedDataOrder = {
                'user_id': userId,
                'product': selectedItems.map(item => ({
                    'product_id': item.itemId,
                    'quantity': item.newQuantity
                })),
                'shipping_method_id': selectedShippingMethod,
                "order_address": streetAndNumber + ', ' + selectedWard + ', ' + selectedDistrict + ', ' + selectedProvince,
                "order_phone": phoneNumber,
                "order_name": name,
                "total": (subtotal + parseFloat(selectedShippingPrice)).toFixed(2),
                'order_note': note,
            };
            console.log(updatedDataOrder)
            await handleOrder(updatedDataOrder);
            setLoading(false);
            navigate('/success');
        } catch (error) {
            console.error("Error setting data order:", error);
            setLoading(false)
        }
    };

    return (
        <div className="overflow-y-hidden">
            <div className="flex justify-center items-center 2xl:container 2xl:mx-auto lg:py-16 md:py-12 py-9 px-4 md:px-6 lg:px-20 xl:px-44 ">
                <div className="flex w-full sm:w-9/12 lg:w-full flex-col lg:flex-row justify-center items-center lg:space-x-10 2xl:space-x-36 space-y-12 lg:space-y-0">
                    <div className="flex w-full  flex-col justify-start items-start">
                        <div>
                            <div className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">
                                Check out
                            </div>
                        </div>
                        <div className="mt-2">
                            <Link
                                to="/cart"
                                className="text-base leading-4 underline  hover:text-gray-800 text-gray-600"
                            >
                                Back to my bag
                            </Link>
                        </div>
                        <div className="mt-12">
                            <p className="text-xl font-semibold leading-5 text-gray-800">
                                Shipping Details
                            </p>
                        </div>
                        <div className="mt-8 flex flex-col justify-start items-start w-full space-y-8 ">
                            <Input variant="standard" label="Your name" placeholder="Standard" name="name" value={name} onChange={handleInputChange} />
                            <Input variant="standard" label="Phone number" placeholder="Standard" name="phoneNumber" value={phoneNumber} onChange={handleInputChange} />
                            <div className=" flex">
                                <Select className=" w-[95%]" variant="standard" label="Province" onChange={handlechangeProvince}>
                                    {
                                        provincesListData.map((province, index) => (
                                            <Option value={String(province.province_id)} key={index}>{province.province_name}</Option>
                                        ))
                                    }
                                </Select>
                                <Select disabled={selectedProvinceId === null} variant="standard" label="District" onChange={handlechangeDistrict}>
                                    {
                                        districtListData.map((district, index) => (
                                            <Option value={String(district.districts_id)} key={index}>{district.name}</Option>
                                        ))
                                    }
                                </Select>
                            </div>
                            <Select disabled={selectedDistrictId === null} variant="standard" label="Ward" onChange={handlechangeWard}>
                                {
                                    wardListData.map((ward, index) => (
                                        <Option value={String(ward.wards_id)} key={index}>{ward.name}</Option>
                                    ))
                                }
                            </Select>
                            <Input variant="standard" label="Street and number" placeholder="Standard" name="streetAndNumber" value={streetAndNumber} onChange={handleInputChange} />
                            <Input variant="standard" label="Note" placeholder="Standard" name="note" value={note} onChange={handleInputChange} />
                        </div>
                        <Button loading={loading} className=" mt-12 py-5 text-center" fullWidth onClick={handleProceedToPayment}>Proceed to payment</Button>
                    </div>
                    <div className="flex flex-col justify-start bg-gray-50 w-full p-6 md:p-14">
                        <div>
                            <h1 className="text-2xl font-semibold leading-6 text-gray-800">
                                Order Summary
                            </h1>
                        </div>
                        <div className="flex mt-7 flex-col items-end w-full space-y-6">
                            <div className="flex justify-between w-full mb-4 items-center">
                                <p className="text-lg leading-4 text-gray-600">
                                    Total items
                                </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">
                                    {selectedItems.length}
                                </p>
                            </div>
                            {
                                selectedItems && selectedItems.length > 0 && selectedItems.map((carts, index) => (
                                    <div className="flex justify-between w-full mb-24 items-center" key={index}>
                                        <p className="text-lg leading-4 text-gray-600">
                                            {carts.itemName}
                                        </p>
                                        <p className="text-lg font-semibold leading-4 text-gray-600">
                                            {carts.newQuantity} x {carts.Price}
                                        </p>
                                    </div>
                                ))
                            }

                        </div>
                        <div className=" space-y-4">

                            <div className="flex justify-between w-full items-center mt-24">
                                <p className="text-lg leading-4 text-gray-600">
                                    Shipping charges
                                </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">
                                    ${selectedShippingPrice}
                                </p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-lg leading-4 text-gray-600">
                                    Sub total
                                </p>
                                <p className="text-lg font-semibold leading-4 text-gray-600">
                                    ${subtotal.toFixed(2)}
                                </p>
                            </div>
                            <div className="flex justify-between w-full items-center">
                                <p className="text-xl font-semibold leading-4 text-gray-800">
                                    Estimated Total
                                </p>
                                <p className="text-lg font-semibold leading-4 text-gray-800">
                                    ${(subtotal + parseFloat(selectedShippingPrice)).toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
