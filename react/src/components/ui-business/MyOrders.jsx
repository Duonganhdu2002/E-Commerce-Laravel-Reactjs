import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
} from "@heroicons/react/24/outline";

import {
    EyeIcon,
    Bars4Icon,
    GlobeAmericasIcon,
    NewspaperIcon,
    PhoneIcon,
    RectangleGroupIcon,
    SquaresPlusIcon,
    SunIcon,
    TagIcon,
    UserGroupIcon,
} from "@heroicons/react/24/solid"

import {
    Card,
    CardHeader,
    Input,
    Typography,
    CardBody,
    Chip,
    Avatar,
    IconButton,
    Button,
    Collapse,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    CardFooter,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { listOrder, orderItems } from "../../services/orderService";
import React from "react";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const TABLE_HEAD = [
    "Username",
    "Total order",
    "Status",
    "Countdown",
    "All SC",
    "Detail",
];

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
];

const convertToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const dataExcel = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    FileSaver.saveAs(dataExcel, 'data.xlsx');
}

function NavListMenu({ order_id }) {

    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await orderItems(order_id);
                setData(res.data.items)
            } catch (error) {
                console.error(error);
            }
        }
        fetchData()
    }, [])

    const renderItems = data.map(
        ({ product_name, quantity, image }, index) => (
            <MenuItem key={index} className="flex items-center gap-3 rounded-lg">
                <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-1 ">
                    <img className=" w-6 h-6 object-cover" src={`../../../src/assets/image/${image}`} alt="" />
                </div>
                <div>
                    <Typography
                        variant="h6"
                        color="blue-gray"
                        className="flex items-center text-sm font-bold"
                    >
                        {product_name}
                    </Typography>
                    <Typography
                        variant="paragraph"
                        className="text-xs !font-medium text-blue-gray-500"
                    >
                        x {quantity}
                    </Typography>
                </div>
            </MenuItem>
        ),
    );

    return (
        <React.Fragment>
            <Menu
                open={isMenuOpen}
                handler={setIsMenuOpen}
                offset={{ mainAxis: 20 }}
                placement="left"
                allowHover={true}
            >
                <MenuHandler>
                    <Typography as="div" variant="small" className="font-medium">
                        <ListItem
                            className="flex justify-center items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                            selected={isMenuOpen || isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                        >
                            <EyeIcon className="h-4 w-4" />
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

export function MyOrdersBusiness() {

    const seller_id = useSelector((state) => state.seller.seller.user_id);
    const [data, setData] = useState([]);
    const [dataFull, setDataFull] = useState([]);
    const [page, setPage] = useState(1);

    const handleExportExcel = () => {
        convertToExcel(data);
    }

    // Call API list order by user
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await listOrder(seller_id);
                setDataFull(res.data);
                setData(res.data.data)
            } catch (error) {
                console.error("Error fetching fields:", error);
            }
        }
        fetchData()
    }, [seller_id]);

    const [active, setActive] = useState(1);
    const [visiblePages, setVisiblePages] = useState([]);

    const getItemProps = (index) => ({
        variant: active === index ? 'filled' : 'text',
        color: 'gray',
        onClick: () => {
            setPage(index);
            setActive(index);
        },
    });

    const next = () => {
        if (active === dataFull.last_page) return;

        setActive(active + 1);
        setPage(active + 1);
    };

    const prev = () => {
        if (active === dataFull.from) return;

        setActive(active - 1);
        setPage(active - 1);
    };

    useEffect(() => {
        const calculateVisiblePages = async () => {

            const totalVisiblePages = 3;
            const totalPageCount = dataFull.last_page;

            let startPage, endPage;
            if (totalPageCount <= totalVisiblePages) {
                startPage = 1;
                endPage = totalPageCount;
            } else {
                const middlePage = Math.floor(totalVisiblePages / 2);
                if (active <= middlePage + 1) {
                    startPage = 1;
                    endPage = totalVisiblePages;
                } else if (active >= totalPageCount - middlePage) {
                    startPage = totalPageCount - totalVisiblePages + 1;
                    endPage = totalPageCount;
                } else {
                    startPage = active - middlePage;
                    endPage = active + middlePage;
                }
            }

            const visiblePagesArray = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
            setVisiblePages(visiblePagesArray);
        };

        calculateVisiblePages();
    }, [active, dataFull.last_page]);

    return (
        <Card className=" h-[98%] w-full p-4">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-col sm:flex-row w-full justify-center items-center">
                    <div className="w-full justify-between flex">
                        <div className=" w-fit">
                            <Input
                                label="Find order ID"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>

                        <div className=" w-fit">
                            <Button size="sm" color="gray" variant="outlined" onClick={handleExportExcel}>Export to Excel</Button>
                        </div>

                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-4">
                <table className=" w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th
                                    key={head}
                                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                                    >
                                        {head}{" "}
                                        {index !== TABLE_HEAD.length - 1 && (
                                            <ChevronUpDownIcon
                                                strokeWidth={2}
                                                className="h-4 w-4"
                                            />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.length > 0 && data.map(
                            (data, index) => {
                                const key = `${index}`;
                                const isLast = index === data.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={key}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar
                                                    src="../../../src/assets/shop/shop_avt.jpg"
                                                    alt={data.buyer_username}
                                                    size="sm"
                                                    variant="rounded"
                                                />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {data.buyer_username}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {data.total}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={data.order_status}
                                                    color={
                                                        data.order_status === "Processing"
                                                            ? "blue-gray"
                                                            : data.order_status === "Shipped" || data.order_status === "Delivered"
                                                                ? "green"
                                                                : "red"
                                                    }
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {
                                                    new Date(data.created_at).toLocaleDateString()
                                                }
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {data.shipping_method}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <NavListMenu order_id={data.order_id} />
                                        </td>

                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter>
                <div className="flex justify-end  my-6 mt-12 absolute bottom-4 right-10">
                    <Button
                        variant="text"
                        className="flex items-center gap-2"
                        onClick={prev}
                        disabled={active === dataFull.from}
                    >
                        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                    </Button>

                    <div className="flex items-center gap-2">
                        {visiblePages.map((pageNumber) => (
                            <IconButton
                                key={pageNumber}
                                {...getItemProps(pageNumber)}
                            >
                                {pageNumber}
                            </IconButton>
                        ))}
                    </div>

                    <Button
                        variant="text"
                        className="flex items-center gap-2"
                        onClick={next}
                        disabled={active === dataFull.last_page}
                    >
                        Next
                        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}
