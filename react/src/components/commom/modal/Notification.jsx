import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import {
    EyeIcon,
    PencilIcon,
    TrashIcon
} from "@heroicons/react/24/solid";

import {
    Card,
    CardHeader,
    Input,
    Typography,
    CardBody,
    IconButton,
    Button,
    CardFooter,

} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { getNotification } from "../../../services/notificationService";

const TABLE_HEAD = [
    "Icon",
    "ID",
    "Field name ",
    "Edit",
    "Delete",
];

export default function Notification() {

    const [data, setData] = useState([]);
    const [dataFull, setDataFull] = useState([]);
    const [page, setPage] = useState(1);
    const user_id = useSelector((state) => state.user.user.user_id);

    // Call API list order by user
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await getNotification(user_id, page);
                setDataFull(res);
                setData(res.data);
            } catch (error) {
                console.error("Error fetching fields:", error);
            }
        }
        fetchData()
    }, [page]);

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
        <Card className=" w-[80%] mx-auto my-8 p-4">
            <CardBody className="px-4">
                <div className=" w-full table-auto text-left mb-12">
                    {data && data.length > 0 && data.map((item, index) => (
                        <div key={index} className=" p-4 border-b-[1px] flex">
                            <div className=" w-1/2">
                                <div>
                                    <Typography color="blue-gray" className=" font-semibold text-gray-600">
                                        {item.title}
                                    </Typography>
                                </div>
                                <div >
                                    <Typography color="blue-gray" className=" font-normal text-gray-700">
                                        {item.content}
                                    </Typography>
                                </div>
                            </div>
                            <div>
                                <button>xoa</button>
                            </div>
                        </div>

                    ))}
                </div>
            </CardBody>
            <CardFooter>
                <div className="flex justify-end  my-6 mt-12 absolute bottom-4 right-10">
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
            </CardFooter>
        </Card>
    );
}
