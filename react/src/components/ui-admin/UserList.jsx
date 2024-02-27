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
    CardFooter,
    IconButton,
    Tooltip,
} from "@material-tailwind/react";
import { useState } from "react";


const TABLE_HEAD = [
    "Products Name",
    "SKU",
    "Classification of goods",
    "Price",
    "Warehouse",
    "Revenue",
    "Advertising",
    "Action",
];

const TABLE_ROWS = [
    {
        name: "John Michael",
        sku: 1,
        cog: "SmartPhone",
        price: "$40",
        sc: "Viettel Express",
        revenue: "$40",
        adv: "None",
    },
    {
        name: "Alexa Liras",
        sku: 3,
        cog: "SmartPhone",
        price: "$990",
        sc: "Viettel Express",
        revenue: "$40",
        adv: "None",
    },
    {
        name: "Laurent Perrier",
        sku: 10,
        org: "Projects",
        cog: "SmartPhone",
        price: "$450",
        sc: "Viettel Express",
        revenue: "$40",
        adv: "None",
    },
    {
        name: "Michael Levi",
        sku: 1,
        cog: "SmartPhone",
        price: "$120",
        sc: "Viettel Express",
        revenue: "$40",
        adv: "None",
    },
    {
        name: "Richard Gran",
        sku: 8,
        cog: "SmartPhone",
        price: "$4990",
        sc: "Viettel Express",
        revenue: "$40",
        adv: "None",
    },
    {
        name: "Richard Gran",
        sku: 8,
        cog: "SmartPhone",
        price: "$4990",
        sc: "Viettel Express",
        revenue: "$40",
        adv: "None",
    },
    {
        name: "Richard Gran",
        sku: 8,
        cog: "SmartPhone",
        price: "$4990",
        sc: "Viettel Express",
        revenue: "$40",
        adv: "None",
    },
];

export function UserList() {
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
        <Card className=" h-[89vh] w-full p-4">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-col sm:flex-row w-full justify-center items-center">
                    <div className="w-full">
                        <Input
                            label="Search"
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
                        {TABLE_ROWS.map(
                            ({ name, sku, cog, price, sc, revenue, adv }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {name}
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
                                                    {sku}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {cog}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {price}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {sc}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {revenue}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {adv}
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
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
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
