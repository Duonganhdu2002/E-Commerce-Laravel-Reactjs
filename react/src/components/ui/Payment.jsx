import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";
import { Spinner } from "@material-tailwind/react";

import CheckoutForm from "./CheckoutForm";
import "../../App.css";
import { paymentAction } from "../../services/paymentService";


const stripePromise = loadStripe("pk_test_51OrgAxGsQVxhhN2xWaQ6M9xIGpVwC93X9iDRwSMIWxQpwou7NP5MjNn55WtsQu1ia1ChmO46b8I3qsiiNPz6k3qS00KEa4XTlA");


export default function Payment() {

    const [clientSecret, setClientSecret] = useState("");
    const selectedItems = useSelector(state => state.cart.items);
    console.log(selectedItems)
    const userId = useSelector(state => state.user.user.user_id || '');

    const data = {
        "items": selectedItems,
        "buyer_id": userId,
        "seller_id": selectedItems[0].shop_id,
        "order_id": 84,
        "payment_id": 2,
        "transaction_status": "Thanh cong"
    }


    useEffect(() => {
        const FetchData = async () => {
            try {
                let res = await paymentAction(data)
                setClientSecret(res.clientSecret)
            } catch (error) {
                console.error(error)
            }
        }
        FetchData();


    }, []);


    const appearance = {
        theme: 'stripe',
    };
    const options = {
        clientSecret,
        appearance,
    };

    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Bắt đầu loading
                let res = await paymentAction(data);
                setClientSecret(res.clientSecret);
                setLoading(false); // Kết thúc loading
            } catch (error) {
                console.error(error);
                setLoading(false); // Kết thúc loading nếu có lỗi
            }
        };
        fetchData();
    }, []);


    return (
        <div className="flex h-[50vh] items-center">
            {loading ? (
                <div className="flex flex-col gap-y-4 items-center w-full">
                    <div className="flex justify-center"><Spinner className=" h-12 w-12" /></div>

                    <p className="flex justify-center text-xl font-semibold">Loading</p>
                </div>
            ) : (
                clientSecret && (
                    <Elements options={options} stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                )
            )}
        </div>
    );
}
