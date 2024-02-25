import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { Button, Alert } from "@material-tailwind/react";
import { useSelector } from 'react-redux';
import LogoGoogle1 from "../../assets/icon/Google__G__logo.svg";
import Logo from "../../assets/icon/logo.svg";
import {
    Input,
    Checkbox,
    Typography,
} from "@material-tailwind/react";
import { userRegister } from '../../services/authService';
function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
    );
}
const LayoutRegister = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        full_name: '',
        telephone: '',
        confirmpassword: '',
    });


    // State để theo dõi thông tin của người dùng
    const [userData, setUserData] = useState({
        username: '',
        email: '',
        password: '',
        full_name: '',
        telephone: '',
    });

    // State để theo dõi lỗi của từng trường input
    const [errors, setErrors] = useState({
        username: '',
        email: '',
        password: '',
        full_name: '',
        telephone: '',
    });

    const [showAlert, setShowAlert] = useState(false); // Khởi tạo showAlert là false

    const [acceptTerms, setAcceptTerms] = useState(false);


    // Xử lý thay đổi của trường input
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setUserData({ ...userData, [name]: value });

        // Kiểm tra và cập nhật lỗi của trường input
        const error = validateField(name, value);
        setErrors({ ...errors, [name]: error });
    };

    // Hàm kiểm tra xem trường input có bị trống hay không
    const validateField = (name, value) => {
        if (value.trim() === '') {
            return `Please enter ${name}.`;
        }
        return '';
    };

    // Xử lý sự kiện đăng ký
    const handleRegistration = async () => {
        setLoading(true);
        try {
            let isError = false;
            const newErrors = { ...errors };

            // Kiểm tra các trường input và cập nhật lỗi tương ứng
            Object.keys(userData).forEach((key) => {
                const error = validateField(key, userData[key]);
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

            if (!formData.username.trim()) {
                newErrors.username = "Username is required";
                isError = true;
            }

            if (!formData.full_name.trim()) {
                newErrors.full_name = "Full Name is required";
                isError = true;
            }

            if (!formData.email.trim()) {
                newErrors.email = "Email is required";
                isError = true;
            } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
                newErrors.email = "Email is not valid";
                isError = true;
            }

            if (!formData.password.trim()) {
                newErrors.password = "Password is required";
                isError = true;
            } else if (formData.password.length < 8) {
                newErrors.password = "Password should be at least 8 characters";
                isError = true;
            }

            if (formData.confirmpassword !== formData.password) {
                newErrors.confirmpassword = "Password is not matched!";
                isError = true;
            }

            if (!formData.telephone.trim()) {
                newErrors.telephone = "Telephone is required";
                isError = true;
            } else if (!/^\d+$/.test(formData.telephone)) {
                newErrors.telephone = "Telephone should contain only numbers";
                isError = true;
            } else if (formData.telephone.length < 10) {
                newErrors.telephone = "Telephone should be at least 10 characters";
                isError = true;
            }

            setErrors(newErrors);

            // Nếu có lỗi, hiển thị cảnh báo và không thực hiện đăng ký
            if (isError) {
                setShowAlert(true);

                return;
            }

            // Nếu không có lỗi, thực hiện đăng ký
            const response = await userRegister(userData);
            navigate('/login');
        } catch (error) {
            console.error(error.response);
            setShowAlert(true);
        } finally {
            setLoading(false);
        }
    };

    // Ẩn cảnh báo khi không có lỗi nào được hiển thị
    useEffect(() => {
        const hasError = Object.values(errors).some(error => error !== '');
        setShowAlert(hasError);
    }, [errors]);

    const isFormValid = () => {
        return Object.values(formData).every(value => value.trim() !== '') && acceptTerms;
    };

    return (
        <div className=" flex items-center justify-around bg-slate-200/50">
            {showAlert && (
                <Alert icon={<Icon />} color="red" variant="outlined" className="w-96 right-0 top-20 mr-10 mt-8 fixed bg-white z-20" onClick={() => setShowAlert(false)} visible={showAlert}>
                    You have entered some format incorrectly. Please try again.
                </Alert>
            )}
            <div className="flex items-center h-full py-10">
                <div className="flex flex-1 flex-col justify-center px-4 sm:px-10 md:px-14 py-8 bg-white shadow-xl rounded-3xl">
                    <Link to="/">
                        <img className="mx-auto h-28" src={Logo} alt="Your Company" />
                    </Link>
                    <h2 className="text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
                        Create your Company Account.
                    </h2>

                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-xl md:max-w-xl">
                        <form action="#" method="POST">
                            {/* Hiển thị lỗi cho mỗi trường input */}
                            <div className="md:flex pb-2">
                                <div className='pb-2 md:pb-0 md:mr-3'>
                                    <div className="w-full">
                                        <Input label="Username" name="username" autoComplete='username' onChange={handleInputChange} />
                                        {errors.username && <span className="text-red-500">{errors.username}</span>}
                                    </div>
                                </div>

                                <div className='w-full'>
                                    <div className="w-full">
                                        <Input label="Phone number" name='telephone' onChange={handleInputChange} autoComplete='telephone' />
                                        {errors.telephone && <span className="text-red-500">{errors.telephone}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className="md:flex pb-2">
                                <div className='pb-2 md:pb-0 md:mr-3'>
                                    <div className="w-full">
                                        <Input label="Full Name" onChange={handleInputChange} name="full_name" autoComplete='full_name' />
                                        {errors.full_name && <span className="text-red-500">{errors.full_name}</span>}
                                    </div>
                                </div>

                                <div className='w-full'>
                                    <div className="w-full">
                                        <Input label="Email" name="email" autoComplete='email' onChange={handleInputChange} />
                                        {errors.email && <span className="text-red-500">{errors.email}</span>}
                                    </div>
                                </div>
                            </div>

                            <div className=" pb-2">
                                <div className="w-full">
                                    <Input label="Password" name="password" type="password" autoComplete="current-password" onChange={handleInputChange}
                                    />
                                    {errors.password && <span className="text-red-500">{errors.password}</span>}
                                </div>
                            </div>
                            <div className=" pb-2">
                                <div className="w-full">
                                    <Input label="Confirm Password" name="confirmpassword" type="password" autoComplete="current-password" onChange={handleInputChange}
                                    />
                                    {errors.confirmpassword && <span className="text-red-500">{errors.confirmpassword}</span>}
                                </div>
                            </div>

                            <div className="flex items-center">
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
                        </form>
                        <p className="mt-3 text-center text-gray-500 relative">
                            <span className="mb-10 relative z-10 bg-white px-2 text-base">
                                Or, sign up with{" "}
                            </span>
                            <span className="flex-1 absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700/50"></span>
                        </p>
                        <div>
                            <Button
                                size="lg" variant="outlined" color="blue-gray" className="flex w-full justify-center items-center mt-4">
                                <img
                                    src={LogoGoogle1} alt="metamask" className="h-6 w-6" />
                                GOOGLE
                            </Button>
                        </div>

                        <div className=" mt-5">
                            Already member?&nbsp;
                            <Link
                                to="/Login" className="font-semibold text-slate-500 hover:text-black hover:underline">
                                Login
                            </Link>
                            &nbsp;here.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default LayoutRegister;
