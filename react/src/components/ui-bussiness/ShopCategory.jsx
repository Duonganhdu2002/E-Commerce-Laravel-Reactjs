import { ArchiveBoxIcon, ChevronUpDownIcon, MagnifyingGlassIcon, } from "@heroicons/react/24/outline";
import { PencilIcon } from "@heroicons/react/24/solid";
import { Avatar, Button, Card, CardBody, CardFooter, CardHeader, Chip, IconButton, Input, Option, Select, Tab, Tabs, TabsHeader, Tooltip, Typography, } from "@material-tailwind/react";


const TABLE_HEAD = [
    "Name list",
    "Product",
    "On/Off",
    "Action",
];

const TABLE_ROWS = [
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
        name: "John Michael",
        product: "ABC",
        status: true,
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
        name: "Alexa Liras",
        product: "ABC",
        status: false,
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
        name: "Laurent Perrier",
        product: "ABC",
        status: false,
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-4.jpg",
        name: "Michael Levi",
        product: "ABC",
        status: true,
    },
    {
        img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-5.jpg",
        name: "Richard Gran",
        product: "ABC",
        status: false,
    },
];

export default function ShopCategory() {
    return (
        <Card className="h-fit w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray"> Orders list </Typography>
                        <Typography color="gray" className="mt-1 font-normal"> See information about all orders </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" size="sm"> Preview </Button>
                        <Button className="flex items-center gap-3" size="sm">
                            <ArchiveBoxIcon strokeWidth={2} className="h-4 w-4" />
                            Add categories
                        </Button>
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
                            ({ img, name, product, status }, index) => {
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
                                                <Typography variant="small" color="blue-gray" className="font-normal" > {product} </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="w-max">
                                                <Chip variant="ghost" size="sm"
                                                    value={
                                                        status
                                                            ? "ON"
                                                            : "OFF"
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
    )
}
