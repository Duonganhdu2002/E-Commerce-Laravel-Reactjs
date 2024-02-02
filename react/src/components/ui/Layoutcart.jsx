import { Button, Checkbox } from "@material-tailwind/react";
import Lock from "../../assets/icon/lock-svgrepo-com.svg";
import Visa from "../../assets/icon/visa-svgrepo-com.svg";
import AmericanExpress from "../../assets/icon/american-express-logo-svgrepo-com.svg";
import Mastercard from "../../assets/icon/mastercard-svgrepo-com.svg";
import PayPal from "../../assets/icon/paypal-svgrepo-com.svg";
import { Link } from "react-router-dom";
import { getCart, updateCart, deleteCart } from "../../services/cartService";
import { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import Cancel from "../../assets/icon/cancle.svg"
const Layoutcart = () => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const user_id = useSelector((state) => state.user.user.user_id || '');
    const [count, setCount] = useState({});

    // Call API cart

    useEffect(() => {
        const getFetchBrandsByFieldId = async () => {
            try {
                setLoading(true);
                let res = await getCart(user_id);
                if (res && res.data) {
                    const newCount = {};
                    res.data.forEach(cart => {
                        newCount[cart.shopping_cart_id] = cart.quantity;
                    });
                    setCount(newCount);
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
        }, 5000);

        return () => clearInterval(intervalId);
    }, [user_id]);

    // API update quantity

    useEffect(() => {
        const updateCartData = async () => {
            try {
                const updatePromises = Object.keys(count).map(shoppingCartId => {
                    const quantity = count[shoppingCartId];
                    return updateCart(shoppingCartId, { quantity });
                });

                await Promise.all(updatePromises);

                // console.log('Carts updated successfully');
            } catch (error) {
                console.error('Error updating carts:', error);
                setError('Error updating carts');
            }
        };

        updateCartData();
    }, [count]);

    // API delete cart 
    // Function delete product 

    const handleDeleteCart = async (shoppingCartId) => {
        try {
            let res = await deleteCart(shoppingCartId);
            console.log(res);
        } catch (error) {
            console.error('Error deleting cart:', error);
            setError('Error deleting cart');
        }
    };


    // Tăng số lượng sp
    const addCount = (shoppingCartId) => {
        setCount(prevCount => ({
            ...prevCount,
            [shoppingCartId]: (prevCount[shoppingCartId] || 0) + 1,
        }));
    };

    // Giảm số lượng sp
    const minusCount = (shoppingCartId) => {
        if (count[shoppingCartId] > 0) {
            setCount(prevCount => ({
                ...prevCount,
                [shoppingCartId]: prevCount[shoppingCartId] - 1,
            }));
        }
    };

    return (
        <div className=" w-[95%] md:w-[90%] lg:w-[80%] mx-auto my-6">
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
                                        <div className="w-full">
                                            <img className="w-24 h-24 object-cover hidden md:block" src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/image/${carts.img}?raw=true`} alt="dress" />
                                            <img className="w-24 h-24 object-cover md:hidden" src={`https://github.com/Duonganhdu2002/E-Commerce/blob/main/react/src/assets/image/${carts.img}?raw=true`} alt="dress" />
                                        </div>
                                    </Link>
                                    <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full h-full  pb-6 space-y-4 md:space-y-0">
                                        <div className="w-full flex flex-col justify-start items-start space-y-8">
                                            <h4 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">{carts.name}</h4>
                                            <div className="flex justify-start items-start flex-col space-y-2">

                                                <p className="text-sm leading-none text-gray-800 mb-2">
                                                    <span className="text-gray-300">Size: </span> {carts.size}
                                                </p>
                                                <p className="text-sm leading-none text-gray-800">
                                                    <span className="text-gray-300">Color: </span> {carts.color}
                                                </p>
                                            </div>
                                        </div>
                                        <div className=" flex flex-col relative h-full">
                                            <div className="flex justify-between space-x-8 items-end w-full">
                                                <p className="text-base xl:text-lg leading-6">
                                                    ${carts.price}
                                                </p>
                                                <div className="flex justify-center">
                                                    <span onClick={() => minusCount(carts.shopping_cart_id)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-r-0 w-7 h-7 flex items-center justify-center pb-1">
                                                        -
                                                    </span>
                                                    <input id="counter" aria-label="input" className="border border-gray-300 h-full text-center w-14 pb-1" type="text" value={count[carts.shopping_cart_id] || 0} onChange={(e) => e.target.value} />
                                                    <span onClick={() => addCount(carts.shopping_cart_id)} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer border border-gray-300 border-l-0 w-7 h-7 flex items-center justify-center pb-1 ">
                                                        +
                                                    </span>
                                                </div>
                                                <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">  ${parseFloat((carts.price * carts.quantity).toFixed(2))}</p>
                                            </div>
                                            <div className=" flex justify-end absolute right-0 bottom-0">
                                                <img onClick={() => handleDeleteCart(carts.shopping_cart_id)} className="w-6 h-6 cursor-pointer" src={Cancel} alt="" />
                                            </div>
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
                                </Button>
                            </Link>
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
