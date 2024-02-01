import { Button, Checkbox } from "@material-tailwind/react";
import Lock from "../../assets/icon/lock-svgrepo-com.svg";
import Visa from "../../assets/icon/visa-svgrepo-com.svg";
import AmericanExpress from "../../assets/icon/american-express-logo-svgrepo-com.svg";
import Mastercard from "../../assets/icon/mastercard-svgrepo-com.svg";
import PayPal from "../../assets/icon/paypal-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { getCart } from "../../services/cartService";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'

const Layoutcart = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const user_id = useSelector((state) => state.user.user.user_id || '');

    useEffect(() => {

        const getFetchBrandsByFieldId = async () => {
            try {
                setLoading(true);
                let res = await getCart(user_id);
                if (res && res.data) {
                    setData(res.data);
                }
            } catch (error) {
                console.error("Error fetching fields:", error);
                setError("Error fetching data");
            } finally {
                setLoading(false);
            }
        };

        getFetchBrandsByFieldId();

        const intervalId = setInterval(() => {
            getFetchBrandsByFieldId();
        }, 3000);

        return () => clearInterval(intervalId);

    }, [user_id]);

    return (
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
            <div className="flex justify-start item-start space-y-2 flex-col ">
                <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">Your cart</h1>
            </div>
            <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
                <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
                    <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
                        <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">List product</p>
                        {
                            data && data.length > 0 && data.map((carts, index) => (
                                <div key={index} className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                    <div className=" w-[5%]">
                                        <Checkbox defaultChecked={false ? true : false} />
                                    </div>
                                    <Link to={`/product/${carts.product_id}`}>
                                        <div className="pb-4 md:pb-8 w-full md:w-40">
                                            <img className="w-full hidden md:block" src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/image/${carts.img}?raw=true`} alt="dress" />
                                            <img className="w-full md:hidden" src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/image/${carts.img}?raw=true`} alt="dress" />
                                        </div>
                                    </Link>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{carts.name}</h3>
                                            <div className="flex justify-start items-start flex-col space-y-2">

                                                <p className="text-sm leading-none text-gray-800">
                                                    <span className="text-gray-300">Size: </span> {carts.size}
                                                </p>
                                                <p className="text-sm leading-none text-gray-800">
                                                    <span className="text-gray-300">Color: </span> {carts.color}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex justify-between space-x-8 items-start w-full">
                                            <p className="text-base xl:text-lg leading-6">
                                                ${carts.price}
                                            </p>
                                            <p className="text-base xl:text-lg leading-6 text-gray-800">{carts.quantity}</p>
                                            <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">  ${parseFloat((carts.price * carts.quantity).toFixed(2))}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>

                </div>
                <div className=" flex flex-col justify-center w-full xl:w-[40%] h-auto xl:ml-20 ">
                    <div className="rounded-2xl p-8 border">
                        <div className="">
                            <p className=" text-2xl font-bold">
                                Order Summary
                            </p>
                        </div>
                        <div className="">
                            <div className="flex justify-between items-center py-4 border-b text-gray-600">
                                <p>Subtotal</p>
                                <p>$723</p>
                            </div>
                            <div className="flex justify-between items-center py-4 border-b text-gray-600">
                                <p>Discount</p>
                                <p>$29</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center py-4 text-2xl font-bold">
                            <p>Total</p>
                            <p>$2,090</p>
                        </div>
                        <div className=" py-2">
                            <Link to={'/checkout'}>
                                <Button className="w-full bg-black/80 hover:shadow-md my-2">
                                    CHECKOUT
                                </Button></Link>
                            <Button className="w-full bg-white hover:bg-gray-300 hover:shadow-none shadow-none text-black my-2">
                                CONTINUE
                            </Button>
                        </div>
                        <div>
                            <p className="flex items-center justify-center text-gray-500">
                                Tax included. Shipping calculated at
                                checkout.
                            </p>
                        </div>
                    </div>

                    <div className=" flex flex-col">
                        <div className="flex justify-center items-center p-4">
                            <img src={Lock} alt="" className=" w-4 mr-2" />
                            <p className=" font-semibold text-[#9e9e9e]">
                                Secured Payment by Paddle with:
                            </p>
                        </div>
                        <div className="flex justify-center items-center pb-6">
                            <img src={Visa} alt="" className=" w-12 mr-2" />
                            <img src={Mastercard} alt="" className=" w-12 mr-2" />
                            <img src={AmericanExpress} alt="" className=" w-12 mr-2" />
                            <img src={PayPal} alt="" className=" w-12 mr-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Layoutcart;
