import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button, Alert, Input } from "@material-tailwind/react";
import logo from "../../assets/icon/logo.svg";
import LogoGoogle1 from "../../assets/icon/Google__G__logo.svg";
import { useSelector, useDispatch } from 'react-redux';
import { loginUser } from "../../redux/slices/userSlice";

function Icon() {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"/>
        </svg>
    );
}

export default function LayoutLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false); // Khởi tạo showAlert là false
    const [emailError, setEmailError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.user.loading);

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

        let userCredential = { email, password };
        dispatch(loginUser(userCredential)).then((result) => {
            if (result.payload) {
                setEmail('');
                setPassword('');
                navigate("/");
            } else {
                setShowAlert(true); // Đặt showAlert thành true nếu đăng nhập không thành công
            }
        }).catch(() => {
            setShowAlert(true); // Xử lý lỗi cũng đặt showAlert thành true
        });
    };

    return (
        <div>
            {/* Chỉ hiển thị cảnh báo khi showAlert là true */}
            {showAlert && (
                <Alert icon={<Icon />} color="red" variant="outlined" className="w-96 right-0 top-20 mr-10 mt-8 fixed bg-white z-20" onClick={() => setShowAlert(false)} visible={showAlert}>
                    Incorrect email or password. Please try again.
                </Alert>
            )}
            <div className="flex items-center justify-around bg-slate-200/50 lg:px-10 sm:px-10 py-10">
                <div className="flex items-center px-8 w-[65vh]">
                    <div className="flex flex-1 flex-col justify-center px-6 py-12 bg-white shadow-xl rounded-3xl">
                        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                            <Link to="/">
                                <img className="mx-auto h-28" src={logo} alt="Your Company" />
                            </Link>
                            <h2 className="mt-6 text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
                                Welcome to company! Please Login.
                            </h2>
                        </div>

                        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form className="space-y-6" onSubmit={handleLogin}>
                                <div>
                                    <div className="w-full">
                                        <Input label="Email address" value={email} onChange={(e) => setEmail(e.target.value)} id="email" name="email" autoComplete="email" error={emailError} />
                                        {emailError && <p className="text-red-500 text-sm">Please enter your email.</p>}
                                    </div>
                                </div>
                                <div>
                                    <div className="w-full">
                                        <Input label="Password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" name="password" type="password" autoComplete="current-password" error={passwordError} />
                                        {passwordError && <p className="text-red-500 text-sm">Please enter your password.</p>}
                                    </div>
                                </div>
                                <div>
                                    <Button className="flex w-full justify-center bg-[#1e293b] text-white " type="submit" loading={loading}>
                                        {loading ? "Loading" : "Log in"}
                                    </Button>
                                </div>
                            </form>
                            <p className="mt-3 text-center text-gray-500 relative">
                                <span className="mb-10 relative z-10 bg-white px-2 text-base">
                                    Or, login with{" "}
                                </span>
                                <span className="flex-1 absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700/50"></span>
                            </p>
                            <Button size="lg" variant="outlined" color="blue-gray" className="flex w-full justify-center items-center mt-4">
                                <img src={LogoGoogle1} alt="metamask" className="h-6 w-6"/>
                                GOOGLE
                            </Button>
                            <div className="mt-5">
                                New member?&nbsp;
                                <Link to="/register" className="font-semibold text-slate-500 hover:text-black hover:underline">
                                    Register
                                </Link>
                                &nbsp;here.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
