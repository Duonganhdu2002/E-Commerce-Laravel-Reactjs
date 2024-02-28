import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { EyeIcon, PlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
    IconButton,
    Tooltip,
    Chip,
} from "@material-tailwind/react";

const TABLE_HEAD = ["ID", "Shop ID", "Address", "Phone Number", "Order Status", "Shipping Method", "Total", "Create at", "Details"];

const TABLE_ROWS = [
    {
        id: "1",
        online: true,
        shippingmethod: true,
        shopid: "10",
        address: "Cong Hoa, Tân Định, Quận 3, Thành phố Hồ Chí Minh",
        date: "23/04/18",
        phone: "+84896899384",
        total: "3722.97",
    },
    {
        id: "2",
        online: true,
        shippingmethod: true,
        shopid: "20",
        address: "Cong Hoa, Tân Định, Quận 3, Thành phố Hồ Chí Minh",
        date: "23/04/18",
        phone: "+84896899384",
        total: "3722.97",
    },
    {
        id: "3",
        online: true,
        shippingmethod: true,
        shopid: "15",
        address: "Cong Hoa, Tân Định, Quận 3, Thành phố Hồ Chí Minh",
        date: "23/04/18",
        phone: "+84896899384",
        total: "3722.97",
    },
    {
        id: "4",
        online: undefined,
        shippingmethod: true,
        shopid: "1",
        address: "Cong Hoa, Tân Định, Quận 3, Thành phố Hồ Chí Minh",
        date: "23/04/18",
        phone: "+84896899384",
        total: "3722.97",
    },
    {
        id: "5",
        online: false,
        shippingmethod: true,
        shopid: "5",
        address: "Cong Hoa, Tân Định, Quận 3, Thành phố Hồ Chí Minh",
        date: "23/04/18",
        phone: "+84896899384",
        total: "3722.97",
    },
];

export default function OrderList() {
    return (
        <Card className="w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Order list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See all order
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" size="sm">
                            view all
                        </Button>
                    </div>
                </div>
                <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
                    <div className="w-full md:w-72">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
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
                            ({ id, online, shippingmethod, shopid, address, date, phone, total }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={id}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {id}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {shopid}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal w-52"
                                            >
                                                {address}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {phone}
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
            </CardBody>
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                    Page 1 of 10
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm">
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm">
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    )
}
