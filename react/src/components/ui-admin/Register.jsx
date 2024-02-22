import React, { useState, useEffect } from 'react';
import {
    Input,
    Button,
    Checkbox,
    Typography,
    Alert,
} from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import BannerLogin from "../../assets/banner/banner_8.png";
import LogoGoogle from "../../assets/icon/Google__G__logo.svg";
import Logo from "../../assets/icon/logo-single.svg";
import { userRegister } from '../../services/authService';

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
        </svg>
    );
}

const Login = () => {

    const [loading, setLoading] = useState(false); // Khởi tạo state cho thuộc tính loading

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
        setLoading(true); // Bắt đầu loading khi bắt đầu thực hiện hành động
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
            navigate('../login');
        } catch (error) {
            console.error(error.response);
            setShowAlert(true);
        } finally {
            setLoading(false); // Đặt lại trạng thái loading thành false sau khi hoàn thành xử lý, bao gồm cả khi xảy ra lỗi
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
        <div className="py-16">
            {showAlert && (
                <Alert icon={<Icon />} color="red" variant="outlined" className="w-96 right-0 top-20 mr-10 mt-8 fixed bg-white z-20" onClick={() => setShowAlert(false)} visible={showAlert}>
                    You have entered some format incorrectly. Please try again.
                </Alert>
            )}
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-5xl">
                <div className="hidden lg:block lg:w-1/2 bg-cover">
                    <img
                        src={BannerLogin}
                        className=" w-full h-full object-cover"
                    />
                </div>
                <div className="w-full p-8 lg:w-1/2">
                    <img src={Logo} alt="" className=" w-full h-20 py-2" />
                    <p className="text-xl text-gray-600 text-center">
                        Welcome back!
                    </p>
                    <Button
                        href="#"
                        className="flex items-center justify-center w-full mt-4"
                        variant="outlined"
                    >
                        <div className="">
                            <img src={LogoGoogle} alt="" className="h-6 w-6" />
                        </div>
                        <h1 className="px-4 text-center font-bold">
                            Sign up with Google
                        </h1>
                    </Button>
                    <div className="my-4 flex items-center justify-between">
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                        <a
                            href="#"
                            className="text-xs text-center text-gray-500 uppercase"
                        >
                            or signup with email
                        </a>
                        <span className="border-b w-1/5 lg:w-1/4"></span>
                    </div>
                    <form className="space-y-6" onSubmit={handleRegistration}>
                        <div className="2xl:flex 2xl:justify-between">
                            <div className=" 2xl:w-[47%] w-full my-2">
                                <div className="w-full">
                                    <Input label="Username" name="username" autoComplete='username' onChange={handleInputChange} />
                                    {errors.username && <span className="text-red-500">{errors.username}</span>}
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

                        <div className="flex items-center text-black mb-4">
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

                    <Link to="../login">
                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <div
                                href="#"
                                className="text-xs text-gray-500 uppercase"
                            >
                                or sign in
                            </div>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
