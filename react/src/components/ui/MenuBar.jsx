import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
    MagnifyingGlassIcon,
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



const navListMenuItems = [
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: SquaresPlusIcon,
    },
    {
        title: "About Us",
        description: "Meet and learn about our dedication",
        icon: UserGroupIcon,
    },
    {
        title: "Blog",
        description: "Find the perfect solution for your needs.",
        icon: Bars4Icon,
    },
    {
        title: "Services",
        description: "Learn how we can help you achieve your goals.",
        icon: SunIcon,
    },
    {
        title: "Support",
        description: "Reach out to us for assistance or inquiries",
        icon: GlobeAmericasIcon,
    },
    {
        title: "Contact",
        description: "Find the perfect solution for your needs.",
        icon: PhoneIcon,
    },
    {
        title: "News",
        description: "Read insightful articles, tips, and expert opinions.",
        icon: NewspaperIcon,
    },
    {
        title: "Products",
        description: "Find the perfect solution for your needs.",
        icon: RectangleGroupIcon,
    },
    {
        title: "Special Offers",
        description: "Explore limited-time deals and bundles",
        icon: TagIcon,
    },
];

const navProductList = [
    {
        title: "Products",
        price: 222,
        icon: SquaresPlusIcon,
    },
    {
        title: "About Us",
        price: 222,
        icon: UserGroupIcon,
    },
    {
        title: "Blog",
        price: 222,
        icon: Bars4Icon,
    },
    {
        title: "Services",
        price: 222,
        icon: SunIcon,
    },
    {
        title: "Support",
        price: 222,
        icon: GlobeAmericasIcon,
    },
];



function NavListMenu() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const renderItems = navListMenuItems.map(
        ({ icon, title, description }, key) => (
            <div key={key}>
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
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const renderItems = navProductList.map(({ title, price, icon }, key) => (
        <div key={key}>
            <MenuItem className="flex items-center gap-3 rounded-lg">
                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2 ">
                    {" "}
                    {React.createElement(icon, {
                        strokeWidth: 2,
                        className: "h-6 text-gray-900 w-6",
                    })}
                </div>
                <div>
                    <Typography
                        variant="h2"
                        color="blue-gray"
                        className="flex items-center text-sm font-bold"
                    >
                        {title}
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
                        className="font-medium"
                    >
                        <ListItem
                            className="flex items-center gap-2 pr-4 pt-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <Link to="/cart">
                                <div className="">
                                    <Badge
                                        className=" w-3"
                                        content="0"
                                        withBorder
                                    >
                                        <ShoppingCartIcon
                                            className="h-6 w-6"
                                            strokeWidth={2}
                                        />
                                    </Badge>
                                </div>
                            </Link>
                        </ListItem>
                    </Typography>
                </MenuHandler>
                <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
                    <ul className="grid grid-cols-1 gap-y-2 outline-none outline-0">
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

function NavList() {
    return (
        <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
            <Typography
                as="a"
                href="/"
                variant="small"
                color="blue-gray"
                className="font-medium"
            >
                <ListItem className="flex items-center gap-2 py-2 pr-4">
                    Home
                </ListItem>
            </Typography>

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
    const [openNav, setOpenNav] = useState(false);
    const [scrollingUp, setScrollingUp] = useState(true);
    const [hidden, setHidden] = useState(false);

    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (searchTerm.trim() !== '') {
                navigate(`/search/${searchTerm}`);
            }
        }
    };

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleOnclickSearchIcon = () => {
        if (searchTerm.trim() !== '') {
            navigate(`/search/${searchTerm}`);
        }
    }


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
                        label="What do you looking for?"
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
                    <Link to="/login">
                        <Button variant="text" size="sm" color="blue-gray">
                            Log In
                        </Button>
                    </Link>
                    <Link to="/register">
                        <Button size="sm">Sign In</Button>
                    </Link>
                </div>

                <div className=" hidden lg:block">
                    <NavProductList />
                </div>

                <Link to="/cart">
                    <div className=" lg:hidden">
                        <Badge className=" w-3" content="0" withBorder>
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
                    onClick={() => setOpenNav(!openNav)}
                >
                    {openNav ? (
                        <XMarkIcon className="h-6 w-6" strokeWidth={2} />
                    ) : (
                        <Bars3Icon className="h-6 w-6" strokeWidth={2} />
                    )}
                </IconButton>
            </div>
            <Collapse open={openNav}>
                <NavList />
                <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
                    <Button
                        variant="outlined"
                        size="sm"
                        color="blue-gray"
                        fullWidth
                    >
                        Log In
                    </Button>
                    <Button variant="gradient" size="sm" fullWidth>
                        Sign In
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}
