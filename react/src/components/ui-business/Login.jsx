import React, { useState } from "react";
import { Input, Button, Card, CardBody, Alert } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import Logo from "../../assets/icon/logo-single.svg";
import { loginSeller } from "../../redux/slices/sellerSlice";

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
        </svg>
    );
}

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const loading = useSelector((state) => state.seller.loading);

    const handleLogin = async (e) => {

        e.preventDefault();

        // Kiểm tra trường email
        if (email === "") {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        // Kiểm tra trường password
        if (password === "") {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }

        // Nếu có lỗi ở bất kỳ trường nào, không thực hiện đăng nhập
        if (email === "" || password === "") {
            return;
        }

        let userCredential = {
            email, password
        }
        dispatch(loginSeller(userCredential)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                navigate("/business")
            } else {
                setShowAlert(true); // Đặt showAlert thành true nếu đăng nhập không thành công
            }
        }).catch(() => {
            setShowAlert(true); // Xử lý lỗi cũng đặt showAlert thành true
        });
    };

    return (
        <div>
            {showAlert && (
                <Alert icon={<Icon />} color="red" variant="outlined" className="w-96 right-0 top-20 mr-10 mt-8 fixed bg-white z-20" onClick={() => setShowAlert(false)} visible={showAlert}>
                    Incorrect email or password. Please try again.
                </Alert>
            )}
            <Card className=" h-fit w-1/2 p-12 mx-auto mt-24">
                <CardBody className="w-full">
                    <img src={Logo} alt="" className=" w-full h-20 py-2" />
                    <p className="text-xl text-gray-600 text-center">
                        Welcome back!
                    </p>

                    <form className="space-y-6" onSubmit={handleLogin}>
                        <div className="mt-12">
                            <Input label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" autoComplete="email" error={emailError} />
                            {emailError && <p className="text-red-500 text-sm">Please enter your email.</p>}
                        </div>
                        <div className="mt-4">
                            <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" error={passwordError} />
                            {passwordError && <p className="text-red-500 text-sm">Please enter your password.</p>}
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
            </Card></div>
    );
};

export default Login;
