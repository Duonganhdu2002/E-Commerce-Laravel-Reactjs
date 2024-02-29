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

const TABLE_HEAD = ["ID", "Product User Name", "Product Name", "Product Brand", "Product Category", "Price", "Stock", "Discount", "Create at", "Details"];

const TABLE_ROWS = [
    {
        id: "1",
        img: "https://lzd-img-global.slatic.net/g/p/3155709012daf005299359ec6a1dfd62.jpg_200x200q80.jpg_.webp",
        name: "Smartphones 1d",
        username: "121212abc",
        brand: "IPhone",
        category: "SmartPhone",
        date: "23/04/18",
        discount: "Hehe",
        price: "3722.97",
        stock: "10",

    },
    {
        id: "2",
        img: "https://lzd-img-global.slatic.net/g/p/3155709012daf005299359ec6a1dfd62.jpg_200x200q80.jpg_.webp",
        name: "Tablets 2",
        username: "121212abc",
        brand: "IPhone",
        category: "SmartPhone",
        date: "23/04/18",
        stock: "99",
        discount: "Hehe",
        price: "3722.97",
    },
    {
        id: "3",
        img: "https://lzd-img-global.slatic.net/g/p/3155709012daf005299359ec6a1dfd62.jpg_200x200q80.jpg_.webp",
        name: "SIM Cards 5",
        username: "121212abc",
        brand: "IPhone",
        category: "SmartPhone",
        date: "23/04/18",
        stock: "99",
        price: "3722.97",
        discount: "Hehe",
    },
    {
        id: "4",
        img: "https://lzd-img-global.slatic.net/g/p/3155709012daf005299359ec6a1dfd62.jpg_200x200q80.jpg_.webp",
        name: "SIM Cards 3",
        username: "121212abc",
        brand: "IPhone",
        category: "SmartPhone",
        date: "23/04/18",
        stock: "999",
        price: "3722.97",
        discount: "Hehe",
    },
    {
        id: "5",
        img: "https://lzd-img-global.slatic.net/g/p/3155709012daf005299359ec6a1dfd62.jpg_200x200q80.jpg_.webp",
        name: "SIM Cards 3",
        username: "121212abc",
        brand: "IPhone",
        category: "SmartPhone",
        date: "23/04/18",
        stock: "455",
        price: "3722.97",
        discount: "Hehe",
    },
];

export default function ProductUser() {
    return (
        <Card className="w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Products user list
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See all products user
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button variant="outlined" size="sm">
                            view all
                        </Button>
                        <Button className="flex items-center gap-3" size="sm">
                            <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add products user
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
                            ({ id, brand, category, name, username, date, stock, price, discount, img }, index) => {
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
                                            <div className="flex items-center gap-3">
                                                <Avatar src={img} alt={name} size="sm" />
                                                <div className="flex flex-col">
                                                    <Typography
                                                        variant="small"
                                                        color="blue-gray"
                                                        className="font-normal"
                                                    >
                                                        {username}
                                                    </Typography>
                                                </div>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal w-52"
                                            >
                                                {name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {brand}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {category}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                $ {price}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {stock}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {discount}
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
