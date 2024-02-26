import { ArchiveBoxIcon, ChevronUpDownIcon, MagnifyingGlassIcon, } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, IconButton, Input, Option, Select, Tab, Tabs, TabsHeader, Tooltip, Typography, } from "@material-tailwind/react";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "WFC",
        value: "Wait for confirmation",
    },
    {
        label: "WFG",
        value: "Waiting for Goods",
    },
    {
        label: "Delivering",
        value: "Delivering",
    },
    {
        label: "Delivered",
        value: "Delivered",
    },
    {
        label: "CF",
        value: "Cancellation form",
    },
    {
        label: "Returns/Refunds",
        value: "Returns/Refunds",
    },
    {
        label: "DF",
        value: "Delivery failed",
    },
];

const TABLE_HEAD = [
    "Products",
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
];

export function CancellationBusiness() {
    return (
        <Card className="h-fit w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray"> Orders list </Typography>
                        <Typography color="gray" className="mt-1 font-normal"> See information about all orders </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" size="sm"> view all </Button>
                        <Button className="flex items-center gap-3" size="sm">
                            <ArchiveBoxIcon strokeWidth={2} className="h-4 w-4" />
                            Cancel all orders
                        </Button>
                    </div>
                </div>
                <div className=" flex mb-4 bg-blue-gray-100/40 rounded-lg p-2">
                    <Tabs value="Cancellation form" className="w-full overflow-auto z-0">
                        <TabsHeader className=" bg-white/1">
                            {TABS.map(({ label, value }) => (
                                <Tab key={value} value={value}>
                                    {label}
                                </Tab>
                            ))}
                        </TabsHeader>
                    </Tabs>
                </div>
                <div className="flex flex-col sm:flex-row w-full justify-center items-center">
                    <div className="sm:w-[50%] w-full mb-4 sm:mb-0">
                        <Select label="Select Version">
                            <Option>Order ID</Option>
                            <Option>Material Tailwind Vue</Option>
                            <Option>Material Tailwind Angular</Option>
                            <Option>Material Tailwind Svelte</Option>
                        </Select>
                    </div>
                    <div className="sm:w-[80%] w-full">
                        <Input
                            label="Search"
                            icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                        />
                    </div>
                </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
                <table className=" w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head, index) => (
                                <th key={head} className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50" >
                                    <Typography variant="small" color="blue-gray" className="flex items-center justify-between gap-2 font-normal leading-none opacity-70" >
                                        {head}
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
                            ({ img, name, total, status, date, sc }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast
                                    ? "p-4"
                                    : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Avatar src={img} alt={name} size="sm" variant="rounded" />
                                                <div className="flex flex-col">
                                                    <Typography variant="small" color="blue-gray" className="font-normal" > {name} </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography variant="small" color="blue-gray" className="font-normal" > {total} </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip variant="ghost" size="sm"
                                                    value={
                                                        status
                                                            ? "Order canceled"
                                                            : "Canceling order"
                                                    }
                                                    color={
                                                        status
                                                            ? "green"
                                                            : "blue-gray"
                                                    }
                                                />
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal" > {date} </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography variant="small" color="blue-gray" className="font-normal" > {sc} </Typography>
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
                <Typography variant="small" color="blue-gray" className="font-normal" > Page 1 of 999999 </Typography>
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
    );
}
