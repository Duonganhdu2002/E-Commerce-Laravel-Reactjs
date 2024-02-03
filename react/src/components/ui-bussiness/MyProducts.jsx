import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
    ArchiveBoxIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import {
    Card,
    CardHeader,
    Input,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    IconButton,
    Tooltip,
    Select,
    Option,
    Checkbox,
} from "@material-tailwind/react";

const TABS = [
    {
        label: "All",
        value: "all",
    },
    {
        label: "Currently active",
        value: "Currently active",
    },
    {
        label: "Out of stock",
        value: "Out of stock",
    },
    {
        label: "Pending approva",
        value: "Pending approva",
    },
    {
        label: "Violation",
        value: "Violation",
    },
    {
        label: "Hidden",
        value: "Hidden",
    },
];

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
        revenue:"$40",
        adv:"None",
    },
    {
        name: "Alexa Liras",
        sku: 3,
        cog: "SmartPhone",
        price: "$990",
        sc: "Viettel Express",
        revenue:"$40",
        adv:"None",
    },
    {
        name: "Laurent Perrier",
        sku: 10,
        org: "Projects",
        cog: "SmartPhone",
        price: "$450",
        sc: "Viettel Express",
        revenue:"$40",
        adv:"None",
    },
    {
        name: "Michael Levi",
        sku: 1,
        cog: "SmartPhone",
        price: "$120",
        sc: "Viettel Express",
        revenue:"$40",
        adv:"None",
    },
    {
        name: "Richard Gran",
        sku: 8,
        cog: "SmartPhone",
        price: "$4990",
        sc: "Viettel Express",
        revenue:"$40",
        adv:"None",
    },
];

export function MyProductsBussiness() {
    return (
        <Card className="h-fit w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            5 Products
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See information about all orders
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" size="sm">
                            view all
                        </Button>
                        <Button className="flex items-center gap-3" size="sm">
                            <ArchiveBoxIcon strokeWidth={2} className="h-4 w-4" />
                            Add a new product
                        </Button>
                    </div>
                </div>
                <div className=" flex mb-4 bg-blue-gray-100/40 rounded-lg p-2">
                    <Tabs value="all" className="w-full overflow-auto z-0">
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
                            <th className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"><Checkbox defaultChecked /></th>
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
                                        <td className={classes}><Checkbox defaultChecked /></td>
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
                <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                >
                    Page 1 of 10006
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
    );
}
