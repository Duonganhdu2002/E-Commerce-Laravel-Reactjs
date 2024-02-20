import React, { useState } from "react";
import { Input, Button, Card, CardBody } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Logo from "../../assets/icon/logo-single.svg";
import { loginSeller } from "../../redux/slices/sellerSlice";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.seller.loading);

    const handleLogin = async (e) => {

        e.preventDefault();
        let userCredential = {
            email, password
        }
        dispatch(loginSeller(userCredential)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                navigate("/business")
            }
        });
    };

    return (
        <Card className=" h-fit w-1/2 p-12 mx-auto mt-24">
            <CardBody className="w-full">
                <img src={Logo} alt="" className=" w-full h-20 py-2" />
                <p className="text-xl text-gray-600 text-center">
                    Welcome back!
                </p>

                <form className="space-y-6" onSubmit={handleLogin}>
                    <div className="mt-12">
                        <Input label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" type="email" autoComplete="email" />
                    </div>
                    <div className="mt-4">
                        <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" />
                    </div>
                    <div className="mt-12">
                        <Button className="flex w-full justify-center bg-[#1e293b] text-white " type="submit" loading={loading}>
                            {loading ? "Loading" : "Log in"}
                        </Button>
                    </div>
                    <Link to="../register">
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <div
                                href="#"
                                className="text-xs text-gray-500 uppercase"
                            >
                                or sign up
                            </div>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </Link>
                </form>
            </CardBody>
        </Card>
    );
};

export default Login;
