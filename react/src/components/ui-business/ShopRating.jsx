import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { EyeIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    Button,
    Input,
    Tabs,
    TabsHeader,
    Tab,
    Avatar,
    Tooltip,
    Chip,
    IconButton,
} from "@material-tailwind/react";


const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "5 Stars",
        value: "5 Stars",
    },
    {
        label: "4 Stars",
        value: "4 Stars",
    },
    {
        label: "3 Stars",
        value: "3 Stars",
    },
    {
        label: "2 Stars",
        value: "2 Stars",
    },
    {
        label: "1 Stars",
        value: "1 Stars",
    },
];

const TABLE_HEAD = ["Product Information", "Buyer Reviews", "Details"];

const TABLE_ROWS = [
    {
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "John",
        review: "5.0 / 5.0",
    },
    {
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "Dui",
        review: "5.0 / 5.0",
    },
    {
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "Lala",
        review: "5.0 / 5.0",
    },
    {
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "Love",
        review: "5.0 / 5.0",
    },
    {
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "Vaa",
        review: "5.0 / 5.0",
    },
    {
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "sda",
        review: "5.0 / 5.0",
    },
    {
        img: "https://www.shutterstock.com/image-vector/young-smiling-man-avatar-brown-600nw-2261401207.jpg",
        name: "asddas",
        review: "5.0 / 5.0",
    },
];


export function ShopRating() {
    return (
        <Card className="h-fit w-full">

            <CardBody >

                <div className="flex flex-col gap-4 font-normal mb-6">
                    <Tabs value="all">
                        <TabsHeader>
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                </div>

                <div className="h-full w-full">
                    <table className="mt-4 w-full min-w-max table-auto text-left">
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
                                ({ img, name, review, date }, index) => {
                                    const isLast = index === TABLE_ROWS.length - 1;
                                    const classes = isLast
                                        ? "p-4"
                                        : "p-4 border-b border-blue-gray-50";

                                    return (
                                        <tr key={name}>
                                            <td className={classes}>
                                                <div className="flex items-center gap-3">
                                                    <Avatar src={img} alt={name} size="sm" />
                                                    <div className="flex flex-col">
                                                        <Typography
                                                            color="blue-gray"
                                                            className="font-normal"
                                                        >
                                                            {name}
                                                        </Typography>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <div className="w-max">
                                                    <Chip
                                                        variant="ghost"
                                                        size="sm"
                                                        value={review}
                                                        color={"blue-gray"}
                                                    />
                                                </div>
                                            </td>
                                            <td className={classes}>
                                                <Tooltip content="Details">
                                                    <IconButton variant="text">
                                                        <EyeIcon className="h-4 w-4" />
                                                    </IconButton>
                                                </Tooltip>
                                            </td>
                                        </tr>
                                    );
                                },
                            )}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
    );
}
