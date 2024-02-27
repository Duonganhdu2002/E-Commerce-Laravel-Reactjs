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
    Button
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { fetchAllUser } from "../../services/authService";

const TABLE_HEAD = [
    "Avt",
    "ID",
    "Username",
    "Type account",
    "Email",
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

    const [data, setData] = useState([]);
    const [dataFull, setDataFull] = useState([]);
    const [page, setPage] = useState(1);

    console.log(data)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await fetchAllUser();
                setData(res.data.data);
                setDataFull(res.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);

    const [active, setActive] = useState(1);
    const [visiblePages, setVisiblePages] = useState([]);

    const getItemProps = (index) => ({
        variant: active === index ? 'filled' : 'text',
        color: 'gray',
        onClick: () => {
            setPage(index);
            setActive(index);
        },
    });

    const next = () => {
        if (active === dataFull.last_page) return;

        setActive(active + 1);
        setPage(active + 1);
    };

    const prev = () => {
        if (active === dataFull.from) return;

        setActive(active - 1);
        setPage(active - 1);
    };

    useEffect(() => {
        const calculateVisiblePages = async () => {
            const totalVisiblePages = 3;
            const totalPageCount = dataFull.last_page;

            let startPage, endPage;
            if (totalPageCount <= totalVisiblePages) {
                startPage = 1;
                endPage = totalPageCount;
            } else {
                const middlePage = Math.floor(totalVisiblePages / 2);
                if (active <= middlePage + 1) {
                    startPage = 1;
                    endPage = totalVisiblePages;
                } else if (active >= totalPageCount - middlePage) {
                    startPage = totalPageCount - totalVisiblePages + 1;
                    endPage = totalPageCount;
                } else {
                    startPage = active - middlePage;
                    endPage = active + middlePage;
                }
            }

            const visiblePagesArray = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
            setVisiblePages(visiblePagesArray);
        };

        calculateVisiblePages();
    }, [active, dataFull.last_page]);

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
                                    className="cursor-pointer w-fit border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
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
                <div className=" flex justify-center">
                    <div className="flex items-center my-6 mt-12">
                        <Button
                            variant="text"
                            className="flex items-center gap-2"
                            onClick={prev}
                            disabled={active === dataFull.from}
                        >
                            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
                        </Button>

                        <div className="flex items-center gap-2">
                            {visiblePages.map((pageNumber) => (
                                <IconButton
                                    key={pageNumber}
                                    {...getItemProps(pageNumber)}
                                >
                                    {pageNumber}
                                </IconButton>
                            ))}
                        </div>


                        <Button
                            variant="text"
                            className="flex items-center gap-2"
                            onClick={next}
                            disabled={active === dataFull.last_page}
                        >
                            Next
                            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
