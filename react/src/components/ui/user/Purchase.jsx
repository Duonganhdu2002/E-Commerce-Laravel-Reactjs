import React from "react";
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    CardBody,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Chip,
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";

import { Link } from "react-router-dom";

const TABLE_HEAD = ["Product Name", "Shop Name", "Order Status", "Shipping Method", "Total", "Create at", "Details"];

const TABLE_ROWS = [
    {
        quantity: "1",
        img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnh5i88wcayi9b_tn",
        shop_name: "Thai Cong Shop",
        online: true,
        shippingmethod: undefined,
        shopid: "10",
        name: "Phone 123456 789 1011 1214",
        date: "23/04/18",
        total: "3722.97",
    },
    {
        quantity: "2",
        img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnh5i88wcayi9b_tn",
        shop_name: "Thai Cong Shop",
        online: true,
        shippingmethod: true,
        shopid: "20",
        name: "Phone 123456 789 1011 1214",
        date: "23/04/18",
        total: "3722.97",
    },
    {
        quantity: "3",
        img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnh5i88wcayi9b_tn",
        shop_name: "Thai Cong Shop",
        online: true,
        shippingmethod: true,
        shopid: "15",
        name: "Phone 123456 789 1011 1214",
        date: "23/04/18",
        total: "3722.97",
    },
    {
        quantity: "4",
        img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnh5i88wcayi9b_tn",
        shop_name: "Thai Cong Shop",
        online: undefined,
        shippingmethod: false,
        shopid: "1",
        name: "Phone 123456 789 1011 1214",
        date: "23/04/18",
        total: "3722.97",
    },
    {
        quantity: "5",
        img: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lnh5i88wcayi9b_tn",
        shop_name: "Thai Cong Shop",
        online: false,
        shippingmethod: true,
        shopid: "5",
        name: "Phone 123456 789 1011 1214",
        date: "23/04/18",
        total: "3722.97",
    },
];

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "To Pay",
        value: "to-pay",
    },
    {
        label: "To Ship",
        value: "to-ship",
    },
    {
        label: "To Receive",
        value: "to-receive",
    },
    {
        label: "Completed",
        value: "completed",
    },
    {
        label: "Cancelled",
        value: "cancelled",
    },
    {
        label: "Return Refund",
        value: "return-refund",
    },
];


export default function Purchase() {

    const [active, setActive] = React.useState(1);

    const next = () => {
        if (active === 10) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <Card className="w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Purchase list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See all purchase
                        </Typography>
                    </div>
                </div>
                <Tabs value="all" className="w-full py-2">
                    <TabsHeader>
                        {TABS.map(({ label, value }) => (
                            <Tab key={value} value={value}>
                                &nbsp;&nbsp;{label}&nbsp;&nbsp;
                            </Tab>
                        ))}
                    </TabsHeader>
                </Tabs>
                <Input
                    label="Search"
                    icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className="w-full min-w-max table-auto text-left">
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
                                            <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                                        )}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(
                            ({ quantity, online, shippingmethod, name, date, shop_name, total, img }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={quantity}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar src={img} alt={name} size="lg" variant="rounded"/>
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {name}
                                                    </Typography>
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal opacity-70"
                                                    >
                                                        Quantity: {quantity}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {shop_name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={online === true ? "delivered" : (online === false ? "pending" : "in-transit")}
                                                    color={online === true ? "green" : (online === false ? "blue-gray" : "yellow")}
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip
                                                    variant="ghost"
                                                    size="sm"
                                                    value={shippingmethod === true ? "Standard" : (shippingmethod === false ? "Express" : "Fast")}
                                                    color={shippingmethod === true ? "blue-gray" : (shippingmethod === false ? "blue-gray" : "blue-gray")}
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                $ {total}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {date}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Link to='../../orderstatus'>
                                                <Tooltip content="Details">
                                                    <IconButton variant="text">
                                                        <EyeIcon className="h-4 w-4" />
                                                    </IconButton>
                                                </Tooltip>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex items-center justify-center border-t border-blue-gray-50 gap-8">
                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={prev}
                    disabled={active === 1}
                >
                    <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
                <Typography color="gray" className="font-normal">
                    Page <strong className="text-gray-900">{active}</strong> of{" "}
                    <strong className="text-gray-900">10</strong>
                </Typography>
                <IconButton
                    size="sm"
                    variant="outlined"
                    onClick={next}
                    disabled={active === 10}
                >
                    <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                </IconButton>
            </CardFooter>
        </Card>
    )
}
