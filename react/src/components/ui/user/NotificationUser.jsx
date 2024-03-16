import {
    Card,
    CardHeader,
    CardFooter,
    Typography,
    CardBody,
    Avatar,
    Button,
} from "@material-tailwind/react";

import React, { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { deleteNotification, getNotification, updateNotification } from "../../../services/notificationService";
import { IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


export default function NotificationUser() {

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

    const updateNotification1 = async (notificationId, notificationData) => {
        try {
            await updateNotification(notificationId, notificationData);
        } catch (error) {
            console.error("Error updating notification:", error);
        }
    }

    const deleteNotification1 = async (notificationId) => {
        try {
            await deleteNotification(notificationId);
        } catch (error) {
            console.error("Error deleting notification:", error);
        }
    }


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
        <Card className="w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Notification
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See all notification
                        </Typography>
                    </div>
                </div>
            </CardHeader>
            {data && data.length > 0 && data.map((item, index) => (
                <CardBody className={`md:flex md:justify-between items-center ${item.read ? 'bg-green-50' : ''}`} key={index}>
                    <div className=" flex">
                        <Avatar variant="rounded" alt="image" src="https://static.vecteezy.com/system/resources/previews/002/594/675/original/alarm-bell-alert-caution-linear-icon-style-free-vector.jpg" className=" md:w-[70px] md:h-[70px] w-32 h-32 overflow-clip mb-4 md:mb-4" />
                        <div className=" mb-4 md:mb-4 ml-6">
                            <Typography color="blue-gray" className={`font-semibold text-gray-600 `}>
                                {item.title}
                            </Typography>
                            <Typography color="blue-gray" className=" font-normal text-gray-700">
                                {item.content}
                            </Typography>
                        </div>
                    </div>
                    <div className=" flex gap-4">
                        <Button onClick={() => updateNotification1(item.notification_id)} className="">Update</Button>
                        <Button onClick={() => deleteNotification1(item.notification_id)}>Delete</Button>
                    </div>
                </CardBody>
            ))}
            <CardFooter className=" mt-8">
                <div className="flex justify-end mt-12 absolute bottom-4 right-10">
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
    )
}
