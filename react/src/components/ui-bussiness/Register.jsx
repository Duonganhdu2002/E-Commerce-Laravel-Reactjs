import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'

import {
    Input,
    Button,
    Checkbox,
    Typography,
    Card,
    CardBody,
    Alert,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/icon/logo-single.svg";
import { sellerRegister } from "../../services/authService";

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
    );
}

const Login = () => {

    const [loading, setLoading] = useState(false);
    const seller = useSelector((state) => state.seller.seller);
    console.log(seller)
    const navigate = useNavigate();

    const [sellerData, setSellerData] = useState({
        shop_username: '',
        email: '',
        password: '',
        full_name: '',
        telephone: '',
        shop_name: '',
    });

    const [errors, setErrors] = useState({
        shop_username: '',
        email: '',
        password: '',
        full_name: '',
        telephone: '',
        shop_name: '',
    });

    const [showAlert, setShowAlert] = useState(false);

    const [acceptTerms, setAcceptTerms] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setSellerData({ ...sellerData, [name]: value });

        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    const validateField = (name, value) => {
        if (value.trim() === '') {
            return `Please enter ${name}.`;
        }
        return '';
    };

    const handleRegistration = async () => {
        setLoading(true);
        try {
            let isError = false;
            const newErrors = { ...errors };

            Object.keys(sellerData).forEach((key) => {
                const error = validateField(key, sellerData[key]);
                newErrors[key] = error;
                if (error !== '') {
                    isError = true;
                }
            });

            if (isError || !acceptTerms) {
                setErrors(newErrors);
                setShowAlert(true);
                return;
            }

            if (!sellerData.shop_username.trim()) {
                newErrors.shop_username = "Username is required";
                isError = true;
            }

            if (!sellerData.full_name.trim()) {
                newErrors.full_name = "Full Name is required";
                isError = true;
            }

            if (!sellerData.email.trim()) {
                newErrors.email = "Email is required";
                isError = true;
            } else if (!/^\S+@\S+\.\S+$/.test(sellerData.email)) {
                newErrors.email = "Email is not valid";
                isError = true;
            }

            if (!sellerData.password.trim()) {
                newErrors.password = "Password is required";
                isError = true;
            } else if (sellerData.password.length < 8) {
                newErrors.password = "Password should be at least 8 characters";
                isError = true;
            }

            if (sellerData.confirmpassword !== sellerData.password) {
                newErrors.confirmpassword = "Password is not matched!";
                isError = true;
            }

            if (!sellerData.telephone.trim()) {
                newErrors.telephone = "Telephone is required";
                isError = true;
            } else if (!/^\d+$/.test(sellerData.telephone)) {
                newErrors.telephone = "Telephone should contain only numbers";
                isError = true;
            } else if (sellerData.telephone.length < 10) {
                newErrors.telephone = "Telephone should be at least 10 characters";
                isError = true;
            }

            if (!sellerData.shop_name.trim()) {
                newErrors.shop_name = "Shop Name is required";
                isError = true;
            }

            setErrors(newErrors);

            if (isError) {
                setShowAlert(true);
                return;
            }

            const response = await sellerRegister(sellerData);
            navigate('../login')

        } catch (error) {
            console.error(error.response);
            setShowAlert(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const hasError = Object.values(errors).some(error => error !== '');
        setShowAlert(hasError);
    }, [errors]);

    const isFormValid = () => {
        return Object.values(sellerData).every(value => value.trim() !== '') && acceptTerms;
    };

    return (
        <div>
            {showAlert && (
                <Alert icon={<Icon />} color="red" variant="outlined" className="w-96 right-0 top-20 mr-10 mt-8 fixed bg-white z-20" onClick={() => setShowAlert(false)} visible={showAlert}>
                    You have entered some format incorrectly. Please try again.
                </Alert>
            )}
            <Card className="w-1/2 mx-auto mt-12">
                <CardBody className="w-full p-12">
                    <form action="post">
                        <img src={Logo} alt="" className=" w-full h-20 py-2" />
                        <p className="text-xl text-gray-600 text-center">
                            Become an seller professional!
                        </p>
                        <div className="2xl:flex 2xl:justify-between mt-12">
                            <div className=" 2xl:w-[47%] w-full my-2">
                                <div className="w-full">
                                    <Input label="Username" name="shop_username" autoComplete='username' onChange={handleInputChange} />
                                    {errors.shop_username && <span className="text-red-500">{errors.shop_username}</span>}
                                </div>
                            </div>

                            <div className="2xl:w-[47%] w-full my-2">
                                <div className="w-full">
                                    <Input label="Phone number" name='telephone' onChange={handleInputChange} autoComplete='telephone' />
                                    {errors.telephone && <span className="text-red-500">{errors.telephone}</span>}
                                </div>
                            </div>
                        </div>

                        <div className="2xl:flex justify-between">
                            <div className="2xl:w-[47%] w-full my-2">
                                <div className="w-full">
                                    <Input label="Full Name" onChange={handleInputChange} name="full_name" autoComplete='full_name' />
                                    {errors.full_name && <span className="text-red-500">{errors.full_name}</span>}
                                </div>
                            </div>

                            <div className="2xl:w-[47%] w-full my-2">
                                <div className="w-full">
                                    <Input label="Email" name="email" autoComplete='email' onChange={handleInputChange} />
                                    {errors.email && <span className="text-red-500">{errors.email}</span>}
                                </div>
                            </div>
                        </div>

                        <div className="2xl:flex justify-between">
                            <div className="2xl:w-[47%] w-full my-2">
                                <div className="w-full">
                                    <Input label="Password" name="password" type="password" autoComplete="current-password" onChange={handleInputChange}
                                    />
                                    {errors.password && <span className="text-red-500">{errors.password}</span>}
                                </div>
                            </div>

                            <div className="2xl:w-[47%] w-full my-2">
                                <div className="w-full">
                                    <Input label="Confirm Password" name="confirmpassword" type="password" autoComplete="current-password" onChange={handleInputChange}
                                    />
                                    {errors.confirmpassword && <span className="text-red-500">{errors.confirmpassword}</span>}
                                </div>
                            </div>
                        </div>

                        <div className="w-full mt-2">
                            <Input
                                label="Shop name"
                                name="shop_name"
                                type="text"
                                autoComplete="shop_name"
                                onChange={handleInputChange}
                            />
                            {errors.shop_name && <span className="text-red-500">{errors.shop_name}</span>}
                        </div>


                        <div className="flex items-center text-black my-4">
                            <Checkbox
                                checked={acceptTerms}
                                onChange={() => setAcceptTerms(!acceptTerms)}
                                label={
                                    <Typography color="blue-gray" className="flex font-medium">
                                        I agree with the
                                        <Typography as="a" href="#" color="blue" className="font-medium transition-colors hover:text-blue-700">
                                            &nbsp;terms and conditions
                                        </Typography>
                                        .
                                    </Typography>
                                }
                            />
                        </div>

                        <div>
                            <Button onClick={handleRegistration} type="button" disabled={!isFormValid()} className={`flex w-full justify-center bg-[#1e293b] text-white ${!isFormValid() && 'opacity-50 cursor-not-allowed'}`} loading={loading}>
                                {loading ? "Loading" : "Sign up"}
                            </Button>
                        </div>
                        <Link to="../login">
                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 md:w-1/4"></span>
                                <div
                                    href="#"
                                    className="text-xs text-gray-500 uppercase"
                                >
                                    have an account
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
