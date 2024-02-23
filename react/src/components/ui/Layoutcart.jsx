import {
    Button,
    Checkbox,
    Card,
    List,
    ListItem,
    ListItemPrefix,
    Typography,
} from "@material-tailwind/react";
import Lock from "../../assets/icon/lock-svgrepo-com.svg";
import Visa from "../../assets/icon/visa-svgrepo-com.svg";
import AmericanExpress from "../../assets/icon/american-express-logo-svgrepo-com.svg";
import Mastercard from "../../assets/icon/mastercard-svgrepo-com.svg";
import PayPal from "../../assets/icon/paypal-svgrepo-com.svg";
import { Link, useNavigate } from "react-router-dom";
import { getCart, updateCart, deleteCart } from "../../services/cartService";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Cancel from "../../assets/icon/cancle.svg";
import { clearCart, addItem, selectShippingPrice, selectShippingMethod } from "../../redux/slices/cartSlice";
import { getShippingMethod } from "../../services/shippingMethodService";

const Layoutcart = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user_id = useSelector((state) => state.user.user.user_id || '');

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [count, setCount] = useState({});
    const [totalPrice, setTotalPrice] = useState(0);
    const [cartChecked, setCartChecked] = useState({});
    const [dataShipping, setDataShipping] = useState([]);
    const [selectedShippingIndex, setSelectedShippingIndex] = useState(0);

    const productsByUser = {};

    data.forEach((carts) => {
        const userId = carts.created_by_user_id;

        if (!productsByUser[userId]) {
            productsByUser[userId] = {
                shopName: carts.shopName || null,
                products: [],
            };
        }

        productsByUser[userId].products.push(carts);
    });

    console.log(productsByUser);


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
        // const intervalId = setInterval(() => {
        //     getFetchBrandsByFieldId();
        // }, 7000);
        // return () => clearInterval(intervalId);
    }, [user_id]);

    // API shipping method 
    useEffect(() => {
        const getShippingMethodAPI = async () => {
            try {
                let res = await getShippingMethod();
                setDataShipping(res.data);
            } catch (error) {
                console.error("Error fetching fields:", error);
                setError("Error fetching data");
            }
        };
        getShippingMethodAPI();
    }, []);

    // API update quantity
    useEffect(() => {
        const updateCartData = async () => {
            try {
                const updatePromises = Object.keys(count).map(async (shoppingCartId) => {
                    const quantity = count[shoppingCartId];
                    await updateCart(shoppingCartId, { quantity });
                });
                await Promise.all(updatePromises);
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
            await deleteCart(shoppingCartId);
        } catch (error) {
            console.error('Error deleting cart:', error);
            setError('Error deleting cart');
        }
    };

    // Lưu dữ liệu vào redux
    const handleCheckout = () => {
        dispatch(clearCart());
        const selectedItems = data.filter(cart => cartChecked[cart.shopping_cart_id]);
        selectedItems.forEach(cart => {
            dispatch(addItem({ itemId: cart.product_id, itemName: cart.name, newQuantity: cart.quantity, Price: cart.price }));
        });
        // Save the selected shipping method price to Redux
        const selectedShippingPrice = dataShipping[selectedShippingIndex]?.shipping_method_price || 0;
        const selectedShippingMethod = dataShipping[selectedShippingIndex]?.shipping_method_id || 0;
        dispatch(selectShippingPrice(selectedShippingPrice));
        dispatch(selectShippingMethod(selectedShippingMethod));
        if (selectedItems.length > 0) {
            navigate("/checkout");
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

    // Checkbox select
    useEffect(() => {
        const selectedItemsTotal = data.reduce((total, cart) => {
            if (count[cart.shopping_cart_id]) {
                if (cartChecked[cart.shopping_cart_id]) {
                    const itemTotal = cart.price * count[cart.shopping_cart_id];
                    return total + itemTotal;
                }
            }
            return total;
        }, 0);
        setTotalPrice(selectedItemsTotal);
    }, [data, count, cartChecked]);

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
                            Object.keys(productsByUser).map((userId) => {
                                const product = productsByUser[userId];
                                return (
                                    <div className=" my-6" key={userId} >
                                        <p>{product.shopName}</p>
                                        {product.products.map((carts, index) => (
                                            <div key={index} className="mt-4 md:mt-6 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full ">
                                                <div className=" w-[5%]">
                                                    <Checkbox
                                                        defaultChecked={cartChecked[carts.shopping_cart_id]}
                                                        onChange={(e) => {
                                                            setCartChecked((prevCartChecked) => ({
                                                                ...prevCartChecked,
                                                                [carts.shopping_cart_id]: e.target.checked,
                                                            }));
                                                        }}
                                                    />
                                                </div>
                                                <Link to={`/product/${carts.product_id}`}>
                                                    <div className="w-full">
                                                        <img className="w-24 h-24 object-cover hidden md:block" src={`src/assets/image/${carts.img}`} alt="dress" />
                                                        <img className="w-24 h-24 object-cover md:hidden" src={`src/assets/image/${carts.img}`} alt="dress" />
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
                                        ))}
                                    </div>
                                );
                            })
                        }
                    </div>

                    <div className="flex flex-col justify-center px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                        <h3 className="text-xl font-semibold leading-5 text-gray-800">Shipping</h3>
                        <div className="flex justify-between items-start w-full">
                            <div className="flex justify-center items-center space-x-4">
                                <div className="w-8 h-8">
                                    <img className="w-full h-full" alt="logo" src="https://i.ibb.co/L8KSdNQ/image-3.png" />
                                </div>
                                <div className="flex flex-col justify-start items-center">
                                    <p className="text-lg leading-6 font-semibold text-gray-800">
                                        DPD Delivery
                                        <br />
                                        <span className="font-normal">Delivery with 24 Hours</span>
                                    </p>
                                </div>
                            </div>
                            <p className="text-lg font-semibold leading-6 text-gray-800">
                                ${dataShipping[selectedShippingIndex]?.shipping_method_price || 0}
                            </p>
                        </div>
                        <Card>
                            <List>

                                {
                                    dataShipping && dataShipping.length > 0 && dataShipping.map((dataShippings, index) => (
                                        <ListItem key={index} className="p-0">
                                            <label className="flex w-full cursor-pointer items-center px-3 py-2">
                                                <ListItemPrefix className="mr-3">
                                                    <Checkbox
                                                        checked={index === selectedShippingIndex}
                                                        onChange={() => setSelectedShippingIndex(index)}
                                                        id={`vertical-list-react-${index}`}
                                                        ripple={false}
                                                        className="hover:before:opacity-0"
                                                        containerProps={{
                                                            className: "p-0",
                                                        }}
                                                    />
                                                </ListItemPrefix>

                                                <div className="flex justify-between w-full">
                                                    <Typography color="blue-gray" className="font-medium">
                                                        {dataShippings.shipping_method_name}
                                                    </Typography>
                                                    <Typography color="blue-gray" className="font-semibold">
                                                        $ {dataShippings.shipping_method_price}
                                                    </Typography>
                                                </div>
                                            </label>
                                        </ListItem>
                                    ))
                                }


                            </List>
                        </Card>
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
                                {totalPrice >= 0 && (
                                    <p>
                                        ${totalPrice.toFixed(2)}
                                    </p>
                                )}
                            </div>
                            <div className="flex justify-between items-center py-4 border-b text-gray-600">
                                <p>Shipping dischard</p>
                                <p>
                                    ${dataShipping[selectedShippingIndex]?.shipping_method_price || 0}
                                </p>
                            </div>

                        </div>
                        <div className="flex justify-between items-center py-4 text-2xl font-bold">
                            <p>Total</p>
                            {totalPrice !== undefined && dataShipping[selectedShippingIndex]?.shipping_method_price !== undefined && (
                                <p className="text-lg font-semibold mt-4">
                                    ${(Number(totalPrice) + Number(dataShipping[selectedShippingIndex]?.shipping_method_price) || 0).toFixed(2)}
                                </p>
                            )}
                        </div>

                        <div className=" py-2">
                            <Button onClick={handleCheckout} className="w-full bg-black/80 hover:shadow-md my-2">
                                CHECKOUT
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
