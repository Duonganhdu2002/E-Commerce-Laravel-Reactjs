import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
    ArrowRightIcon,
    ArrowLeftIcon
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { listOrder } from "../../services/orderService";

const TABLE_HEAD = [
    "Username",
    "Total order",
    "Status",
    "Countdown",
    "All SC",
    "Action",
];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        total: 1,
        status: true,
        date: "23/04/18",
        sc: "Viettel Express",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        total: 3,
        status: false,
        date: "23/04/18",
        sc: "Viettel Express",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        total: 10,
        org: "Projects",
        status: false,
        date: "19/09/17",
        sc: "Viettel Express",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        total: 1,
        status: true,
        date: "24/12/08",
        sc: "Viettel Express",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        total: 8,
        status: false,
        date: "04/10/21",
        sc: "Viettel Express",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        total: 8,
        status: false,
        date: "04/10/21",
        sc: "Viettel Express",
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        total: 8,
        status: false,
        date: "04/10/21",
        sc: "Viettel Express",
    },
];



export function MyOrdersBussiness() {

    const seller_id = useSelector((state) => state.seller.seller.user_id);
    const [data, setData] = useState([]);
    const [bigData, setBigData] = useState([]);

    // Call API list order by user
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await listOrder(seller_id);
                setBigData(res.data);
                setData(res.data.data)
            } catch (error) {
                console.error("Error fetching fields:", error);
            }
        }
        fetchData()
    }, [seller_id]);

    console.log(data)

    const [active, setActive] = useState(1);

    const next = () => {
        if (active === 10) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };


    return (
        <Card className="h-full w-full p-4">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-col sm:flex-row w-full justify-center items-center">
                    <div className="w-full">
                        <Input
                            label="Find order ID"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
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
                                                                : "defaultColor" 
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
                                            <Tooltip content="Edit User">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex relative items-center justify-between border-t border-blue-gray-50 p-4">
                <div className="flex items-center absolute gap-8 mt-24 right-0 mr-4">
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
                </div>
            </CardFooter>
        </Card>
    );
}
