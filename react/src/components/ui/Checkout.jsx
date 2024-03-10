import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "../../App.css";
import { paymentAction } from "../../services/paymentService";


const stripePromise = loadStripe("pk_test_51OrgAxGsQVxhhN2xWaQ6M9xIGpVwC93X9iDRwSMIWxQpwou7NP5MjNn55WtsQu1ia1ChmO46b8I3qsiiNPz6k3qS00KEa4XTlA");

export default function Checkout() {

    const [clientSecret, setClientSecret] = useState("");

    const data = {
        "amount": 1000,
        "price": 19.99,
        "quantity": 5
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

    return (
        <div className="App">
            {clientSecret && (
                <Elements options={options} stripe={stripePromise}>
                    <CheckoutForm />
                </Elements>
            )}
        </div>
    );
}