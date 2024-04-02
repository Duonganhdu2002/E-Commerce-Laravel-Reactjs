import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux';
import { transactionUser } from "../../../services/authService";

import {
    ArrowRightIcon,
    ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import {
    Card,
    CardHeader,
    Typography,
    Button,
    CardBody,
    Chip,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Input,
} from "@material-tailwind/react";

const TABLE_HEAD = ["ID", "Order Id" , "Buyer Id", "Total Amount", "Date"];

export default function Banking() {

    const [active, setActive] = React.useState(1);

    const next = () => {
        if (active === 10) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    const user_id = useSelector((state) => state.user.user.user_id);

    const [data, setData] = useState([]);
    const [dataFull, setDataFull] = useState([]);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        fetchData(); // Lấy danh sách địa chỉ khi component được mount
    }, [user_id]);


    const formatCreatedAt = (createdAt) => {
        const date = new Date(createdAt);
        const formattedDate = date.toISOString().replace(/T/, ' ').replace(/\..+/, '');
        return formattedDate;
    };

    const fetchData = async () => {
        try {
            let res = await transactionUser(user_id);
            // Định dạng lại thời gian cho mỗi item trong res.data
            res.data.forEach(item => {
                item.created_at = formatCreatedAt(item.created_at);
            });
            setDataFull(res);
            setData(res.data);
        } catch (error) {
            console.error("Error fetching fields:", error);
        }
    }

    return (
        <div className="flex flex-col gap-y-8">
            <Card className="h-full w-full">
                <CardHeader floated={false} shadow={false} className="rounded-none">
                    <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                        <div>
                            <Typography variant="h5" color="blue-gray">
                                Transaction
                            </Typography>
                        </div>
                    </div>
                </CardHeader>
                <CardBody className="px-0">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.length > 0 && data.map((item, index) => (
                                <tr key={index} className="border-b">
                                    <td className=" p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.transaction_id}
                                        </Typography>
                                    </td>
                                    <td className=" p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.order_id}
                                        </Typography>
                                    </td>
                                    <td className=" p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.buyer_id}
                                        </Typography>
                                    </td>
                                    <td className=" p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            ${item.total_amount}
                                        </Typography>
                                    </td>
                                    <td className=" p-4">
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal"
                                        >
                                            {item.created_at}
                                        </Typography>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </CardBody>
                <CardFooter className="flex items-center justify-center border-blue-gray-50 gap-8">
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

        </div>
    )
}
