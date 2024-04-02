import React, { useState, useEffect } from "react";
import { useSelector } from 'react-redux'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { clearUser } from '../../redux/slices/userSlice';
import Cookies from 'js-cookie';

import {
    Navbar,
    Collapse,
    Typography,
    Input,
    Badge,
    Button,
    IconButton,
    List,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";
import {
    ChevronDownIcon,
    Bars3Icon,
    XMarkIcon,
    BellIcon
} from "@heroicons/react/24/outline";
import {
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import logo from "../../assets/icon/logo.svg";
import logoSingle from "../../assets/icon/logo-single.svg";
import { useNavigate } from 'react-router-dom';
import Search from "../../assets/icon/search.svg"
import { getCart } from "../../services/cartService";
import { getNotification } from "../../services/notificationService";

const navListMenuItems = [
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
        link: "",
        func: "",
    },
    {
        title: "About Us",
        description: "Meet and learn about our dedication",
        icon: UserGroupIcon,
        link: "",
        func: "",
    },
    {
        title: "Business Page",
        description: "Find the perfect solution for your needs.",
        icon: Bars4Icon,
        link: "/business",
        func: "",
    },
    {
        title: "Services",
        description: "Learn how we can help you achieve your goals.",
        icon: SunIcon,
        link: "",
        func: "",
    },
    {
        title: "Support",
        description: "Reach out to us for assistance or inquiries",
        icon: GlobeAmericasIcon,
        link: "",
        func: "",
    },
    {
        title: "Contact",
        description: "Find the perfect solution for your needs.",
        icon: PhoneIcon,
        link: "",
        func: "",
    },
    {
        title: "News",
        description: "Read insightful articles, tips, and expert opinions.",
        icon: NewspaperIcon,
        link: "",
        func: "",
    },
    {
        title: "Special Offers",
        description: "Explore limited-time deals and bundles",
        icon: TagIcon,
        link: "",
        func: "",
    },
    {
        title: "Log out",
        description: "Log out",
        icon: RectangleGroupIcon,
        link: "/login",
        func: "handleClickLogOut()",
    },
];

function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, description, link }, key) => (
            <div key={key}>
                <Link to={link}>
                    <MenuItem className="flex items-center gap-3 rounded-lg">
                        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
                            {React.createElement(icon, {
                                strokeWidth: 2,
                                className: "h-6 text-gray-900 w-6",
                            })}
                        </div>
                        <div>
                            <Typography
                                variant="h6"
                                color="blue-gray"
                                className="flex items-center text-sm font-bold"
                            >
                                {title}
                            </Typography>
                            <Typography
                                variant="paragraph"
                                className="text-xs !font-medium text-blue-gray-500"
                            >
                                {description}
                            </Typography>
                        </div>
                    </MenuItem>
                </Link>
            </div>
        )
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography
                        as="div"
                        variant="small"
                        className="font-medium"
                    >
                        <ListItem
                            className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            More
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`hidden h-3 w-3 transition-transform lg:block ${isMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`block h-3 w-3 transition-transform lg:hidden ${isMobileMenuOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-3 gap-y-2 outline-none outline-0">
                        {renderItems}
                    </ul>
                </MenuList>
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavProductList() {

    const user = useSelector((state) => state.user.user);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [data, setData] = useState([]);
    const [notification, setNotification] = useState([]);

    useEffect(() => {
        if (user && user.user_id) {
            const fetchData = async () => {
                try {
                    let res = await getNotification(user.user_id);
                    setNotification(res.data);
                } catch (error) {
                    console.error(error)
                }
            }
            fetchData();
        }
    }, [])

    useEffect(() => {
        if (user && user.user_id) {
            const fetchData = async () => {
                try {
                    let res = await getCart(user.user_id);
                    setData(res.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            fetchData();

            const intervalId = setInterval(fetchData, 5000);

            return () => clearInterval(intervalId);
        }
    }, [user]);


    const renderItems = data.map(({ name, price, img, product_id }, key) => (
        <Link key={key} to={`/product/${product_id}`}>
            <div>
                <MenuItem className="flex items-center gap-3 rounded-lg">
                    <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
                        <img
                            src={`../../../src/assets/image/${img}`}
                            alt={name}
                            className="h-6 text-gray-900 w-6"
                        />
                    </div>
                    <div>
                        <Typography
                            variant="h2"
                            color="blue-gray"
                            className="flex items-center text-sm font-bold"
                        >
                            {name}
                        </Typography>
                        <Typography
                            variant="h1"
                            className="text-xs !font-medium text-blue-gray-500"
                        >
                            {price}
                        </Typography>
                    </div>
                </MenuItem>
            </div>
        </Link>
    ));
    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="bottom-end"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography
                        as="div"
                        variant="small"
                        className="font-medium flex"
                    >
                        <Link to="/cart" className=" mr-8">

                            <ListItem
                                className="flex items-center gap-2 pr-4 pt-4 font-medium text-gray-900"
                                selected={isMenuOpen || isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                            >



                                <Badge
                                    className=" w-3"
                                    content={user ? (data.length > 0 ? (data.length) : ("0")) : ("0")} withBorder
                                >
                                    <ShoppingCartIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                </Badge>

                            </ListItem>

                        </Link>

                        <Link to="/user/notification">
                            <ListItem
                                className="flex items-center gap-2 pr-4 pt-4 font-medium text-gray-900"
                                selected={isMenuOpen || isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                            >
                                <Badge
                                    className=" w-3"
                                    content={user ? (notification.length > 0 ? (notification.length) : ("0")) : ("0")} withBorder
                                >
                                    <BellIcon
                                        className="h-6 w-6"
                                        strokeWidth={2}
                                    />
                                </Badge>

                            </ListItem>

                        </Link>


                    </Typography>
                </MenuHandler>
                {
                    user && data.length > 0 && (
                        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                            <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
                                {renderItems}
                            </ul>
                        </MenuList>
                    )
                }
            </Menu>
            <div className="block lg:hidden">
                <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
            </div>
        </React.Fragment>
    );
}

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Link to="/">
                <Typography
                    as="div"
                    variant="small"
                    color="blue-gray"
                    className="font-medium"
                >
                    <ListItem className="flex items-center gap-2 py-2 pr-4">
                        Home
                    </ListItem>
                </Typography>
            </Link>

            <NavListMenu />

            <Typography
                as="a"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Contact Us
                </ListItem>
            </Typography>
        </List>
    );
}

export default function MenuBar() {

    const user = useSelector((state) => state.user.user);
    const dispatch = useDispatch();

    const [openNav, setOpenNav] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(true);
    const [hidden, setHidden] = useState(false);
    const [data, setData] = useState([]);
    const [notification, setNotification] = useState([]);

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        if (user && user.user_id) {
            const fetchData = async () => {
                try {
                    let res = await getNotification(user.user_id);
                    setNotification(res.data);
                } catch (error) {
                    console.error(error)
                }
            }
            fetchData();
        }
    }, [])

    const handleLogOut = () => {
        dispatch(clearUser());
        Cookies.remove('user');
        navigate("/login");
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            let url = '/search/';
            if (searchTerm.trim() !== '') {
                url += `${searchTerm}`;
                navigate(url);
                window.location.reload();
            }
        }

    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        let lastScrollPosition = window.scrollY;

        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;

            if (currentScrollPosition > lastScrollPosition) {
                // Scrolling down
                setScrollingUp(false);
            } else {
                // Scrolling up
                setScrollingUp(true);
            }

            lastScrollPosition = currentScrollPosition;
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setHidden(!scrollingUp);
        }, 100); // Adjust the timeout duration as needed

        return () => clearTimeout(timeoutId);
    }, [scrollingUp]);

    useEffect(() => {
        if (user && user.user_id) {
            const fetchData = async () => {
                try {
                    let res = await getCart(user.user_id);
                    setData(res.data);
                } catch (error) {
                    console.error("Error fetching data:", error);
                }
            };

            fetchData();

            const intervalId = setInterval(fetchData, 5000);

            return () => clearInterval(intervalId);
        }
    }, [user]);

    return (
        <Navbar
            className={`fixed top-0 left-0 right-0 mx-auto mt-1 z-50 2xl:min-w-[80%] py-3 px-2 rounded-b-2xl border-gray-300 border transition-transform duration-300 transform ${!hidden ? "translate-y-0" : "-translate-y-24"
                }`}
        >
            <div className="flex items-center justify-between text-blue-gray-900">
                <Link to="/">
                    <div className=" pl-0 md:pl-4">
                        <img
                            className="w-8 h-8 md:hidden"
                            src={logoSingle}
                            alt=""
                        />
                        <img
                            className="w-16 h-16 hidden md:block"
                            src={logo}
                            alt=""
                        />
                    </div>
                </Link>


                <div className="relative items-center flex w-full mx-2 max-w-[24rem]">
                    <Input
                        className="pr-20"
                        label="What are you looking for?"
                        containerProps={{
                            className: "min-w-0",
                        }}
                        value={searchTerm}
                        onChange={handleInputChange}
                        onKeyDown={handleKeyDown}
                    />
                    <div
                        size="sm"
                        className="!absolute right-1 p-1 px-3 rounded cursor-pointer"
                        onClick={handleInputChange}
                    >
                        <img className=" w-6 h-6" src={Search} alt="" />

                    </div>
                </div>

                <div className="hidden lg:block">
                    <NavList />
                </div>

                <div className="hidden gap-2 lg:flex">
                    {user ? (
                        <div className=" items-center flex">
                            <Typography>Hello </Typography>
                            <Link to="/user/profile">
                                <Typography className=" mx-3 font-semibold">{user.full_name}</Typography>
                            </Link>

                            <Button variant="gradient" size="sm" fullWidth onClick={handleLogOut}>
                                Log out
                            </Button>

                        </div>

                    ) : (
                        <div>
                            <Link to="/login">
                                <Button variant="text" size="sm" color="blue-gray">
                                    Log In
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button size="sm">Sign In</Button>
                            </Link>
                        </div>
                    )}
                </div>

                <div className=" hidden lg:block">
                    <NavProductList />
                </div>

                <Link to="/user/notification">
                    <div className=" lg:hidden">
                        <Badge className=" w-3" content={user ? (notification.length > 0 ? (notification.length) : ("0")) : ("0")} withBorder>
                            <BellIcon
                                className="h-6 w-6"
                                strokeWidth={2}
                            />
                        </Badge>
                    </div>
                </Link>

                <Link to="/cart">
                    <div className=" lg:hidden">
                        <Badge className=" w-3" content={user ? (data.length > 0 ? (data.length) : ("0")) : ("0")} withBorder>
                            <ShoppingCartIcon
                                className="h-6 w-6"
                                strokeWidth={2}
                            />
                        </Badge>
                    </div>
                </Link>

                <IconButton
                    variant="text"
                    color="blue-gray"
                    className="lg:hidden"
                    onClick={() => setOpenNav((prevState) => !prevState)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>

            </div >
            <Collapse open={openNav}>
                <NavList />
                <div>
                    {user ? (
                        <div className=" items-center flex flex-col md:flex-row">
                            <div className=" flex">
                                <Typography className=" mb-3 text-gray-900">Hello </Typography>
                                <Typography className=" text-gray-900 mx-3 font-semibold">{user.username}</Typography>
                            </div>
                            <Button onClick={handleLogOut} variant="gradient" size="sm" fullWidth>
                                Log out
                            </Button>
                        </div>

                    ) : (
                        <div>
                            <Link to="/login">
                                <Button variant="text" size="sm" color="blue-gray">
                                    Log In
                                </Button>
                            </Link>
                            <Link to="/register">
                                <Button size="sm">Sign In</Button>
                            </Link>
                        </div>
                    )}
                </div>
            </Collapse>
        </Navbar >
    );
}
