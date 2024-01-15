import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@material-tailwind/react";
import logo from "../../assets/icon/logo.svg";
import LogoGoogle1 from "../../assets/icon/Google__G__logo.svg";

import { userLogin } from "../../services/authService";
import { Input } from "@material-tailwind/react";

export default function LayoutLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        let token = localStorage.getItem("token");
        if (token) {
            // navigate("/");
        }
    });

    const handleLogin = async () => {
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        try {
            let res = await userLogin(email, password);
            if (res && res.token) {
                localStorage.setItem("token", res.token);
                navigate("/");
            }
            console.log(res);
        } catch (error) {
            setError("Invalid credentials. Please try again.");
            console.error(error);
        }
    };

    return (
        <div className=" flex items-center justify-around bg-slate-200/50 lg:px-10 sm:px-10 py-10">
            <div className="flex items-center px-8 w-[65vh]">
                <div className="flex flex-1 flex-col justify-center px-6 py-12 bg-white shadow-xl rounded-3xl">
                    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                        <Link to="/">
                            <img
                                className="mx-auto h-28"
                                src={logo}
                                alt="Your Company"
                            />
                        </Link>
                        <h2 className="mt-6 text-center text-xl font-semibold leading-9 tracking-tight text-gray-900">
                            Welcome to company! Please Login.
                        </h2>
                    </div>

                    <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <div className="w-full">
                                    <Input
                                        label="Username or Email address or Phone number"
                                        onChange={(e) =>
                                            setEmail(e.target.value)
                                        }
                                        id=" email"
                                        name=" email"
                                        type=" email"
                                        autoComplete=" email"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <label
                                        htmlFor="password"
                                        className="block text-sm font-medium leading-6 text-gray-900"
                                    >

                                    </label>
                                    <div className="text-sm">
                                        <Link
                                            to="#"
                                            className="font-semibold text-slate-500 hover:text-slate-900 hover:underline"
                                        >
                                            Forgot password?
                                        </Link>
                                    </div>
                                </div>
                                <div className="w-full">
                                    <Input
                                        label="Username or Email address or Phone number"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                    />
                                </div>
                            </div>

                            <div>
                                <Button
                                    type="button"
                                    onClick={handleLogin}
                                    className="flex w-full justify-center bg-[#1e293b] text-white "
                                >
                                    Sign in
                                </Button>
                            </div>
                        </form>

                        <p className="mt-3 text-center text-gray-500 relative">
                            <span className="mb-10 relative z-10 bg-white px-2 text-base">
                                Or, login with{" "}
                            </span>
                            <span className="flex-1 absolute top-1/2 left-0 right-0 h-0.5 bg-gray-700/50"></span>
                        </p>

                        <Button
                            size="lg"
                            variant="outlined"
                            color="blue-gray"
                            className="flex w-full justify-center items-center mt-4"
                        >
                            <img
                                src={LogoGoogle1}
                                alt="metamask"
                                className="h-6 w-6"
                            />
                            GOOGLE
                        </Button>

                        <div className=" mt-5">
                            New member?&nbsp;
                            <Link
                                to="/register"
                                className="font-semibold text-slate-500 hover:text-black hover:underline"
                            >
                                Register
                            </Link>
                            &nbsp;here.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
