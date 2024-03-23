import React, { useEffect, useState } from "react";
import {
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
    PencilIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    TrashIcon
} from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    CardHeader,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    IconButton,
    Input,
    Tooltip,
    Typography,
} from "@material-tailwind/react";
import { userAddress } from "../../../services/authService";
import { useSelector } from 'react-redux';


const TABLE_HEAD = ["Address", "Delete", "Edit"];

export default function Address() {

    const [data, setData] = useState([]);
    const userId = useSelector((state) => state.user.user.user_id);

    useEffect(() => {
        const fetchData = async () => {
            let res = await userAddress(userId);
            setData(res.data);
        }
        fetchData()
    }, [])

    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className=" flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            My Addresses
                        </Typography>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="p-5">
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
                        {data.map(
                            ({ number, street, commune, district, province, country }, index) => {
                                const isLast = index === data.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={index}>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {number + ', ' + street  + ', ' + commune  + ', ' + district  + ', ' + province  + ', ' + country} 
                                                </Typography>
                                            </div>
                                        </td>
                                        
                                        <td className={classes}>
                                            <Tooltip content="Edit">
                                                <IconButton variant="text">
                                                    <TrashIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>

                                        <td className={classes}>
                                            <Tooltip content="Edit">
                                                <IconButton variant="text">
                                                    <PencilIcon className="h-4 w-4" />
                                                </IconButton>
                                            </Tooltip>
                                        </td>

                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}
