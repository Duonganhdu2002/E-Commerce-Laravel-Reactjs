import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux'
import 'react-datepicker/dist/react-datepicker.css';
import {
    ChevronUpDownIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    Square3Stack3DIcon,
    UserCircleIcon,
    Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import { EyeIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
    Card,
    Typography,
    CardBody,
    CardFooter,
    Tabs,
    TabsHeader,
    Tab,
    TabPanel,
    TabsBody,
    Avatar,
    Tooltip,
    Chip,
    IconButton,
    Button,
    Menu,
    MenuHandler,
    MenuList,
    ListItem,
    Collapse,
} from "@material-tailwind/react";
import { getProductListRating } from '../../services/ratingService';

const AllRating = ({ seller_id, rating }) => {

    const [data, setData] = useState([]);
    const [dataFull, setDataFull] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await getProductListRating(seller_id, rating, page);
                setData(res.data.data);
                setDataFull(res.data);
            } catch (error) {
                console.error(error)
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

    const SeeReview = ({ comment }) => {

        const [isMenuOpen, setIsMenuOpen] = useState(false);
        const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

        const renderItems =
            <div className="">
                <p className=" text-lg">{comment}</p>
            </div>
        return (
            <React.Fragment>
                <Menu
                    open={isMenuOpen}
                    handler={setIsMenuOpen}
                    offset={{ mainAxis: 20 }}
                    placement="left"
                    allowHover={true}
                >
                    <MenuHandler>
                        <Typography as="div" variant="small" className="font-medium">
                            <ListItem
                                className="flex justify-center items-center gap-2 py-2 pr-4 font-medium text-gray-900"
                                selected={isMenuOpen || isMobileMenuOpen}
                                onClick={() => setIsMobileMenuOpen((cur) => !cur)}
                            >
                                <EyeIcon className="h-4 w-4" />
                            </ListItem>
                        </Typography>
                    </MenuHandler>
                    <MenuList className="hidden  h-fit rounded-xl lg:block">
                        <ul className=" gap-y-2 outline-none outline-0">
                            {renderItems}
                        </ul>
                    </MenuList>
                </Menu>
                <div className="block lg:hidden">
                    <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
                </div>
            </React.Fragment>
        )
    }

    return (
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
                    {data.map(
                        ({ username, product_name
                            , rating, comment}, index) => {
                            const isLast = index === TABLE_ROWS.length - 1;
                            const classes = isLast
                                ? "p-4"
                                : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={index}>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    color="gray"
                                                    className="font-normal"
                                                >
                                                    {username || ""}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    color="gray"
                                                    className="font-normal"
                                                >
                                                    {product_name}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    color="gray"
                                                    className="font-normal"
                                                >
                                                    {rating}.0 / 5.0
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <SeeReview comment={comment} />
                                        </td>
                                    </tr>
                                );
                            },
                        )}
                    </tbody>
                </table>
            </div>
            <CardFooter>
                <div className="flex mt-8 justify-end">
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
        </div>
    )
}
const TABLE_HEAD = ["Username", "Product name", "Buyer Reviews", "Details"];

export function ShopRating() {

    const seller_id = useSelector((state) => state.seller.seller.user_id);

    const TABS = [
        {
            label: "All",
            value: "all",
            desc: <AllRating seller_id={seller_id} rating={""} />
        },
        {
            label: "5 Stars",
            value: "5 Stars",
            desc: <AllRating seller_id={seller_id} rating={5} />
        },
        {
            label: "4 Stars",
            value: "4 Stars",
            desc: <AllRating seller_id={seller_id} rating={4} />
        },
        {
            label: "3 Stars",
            value: "3 Stars",
            desc: <AllRating seller_id={seller_id} rating={3} />
        },
        {
            label: "2 Stars",
            value: "2 Stars",
            desc: <AllRating seller_id={seller_id} rating={2} />
        },
        {
            label: "1 Stars",
            value: "1 Stars",
            desc: <AllRating seller_id={seller_id} rating={1} />
        },
    ];

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
                        <TabsBody>
                            {TABS.map(({ value, desc }) => (
                                <TabPanel key={value} value={value}>
                                    {desc}
                                </TabPanel>
                            ))}
                        </TabsBody>
                    </Tabs>
                </div>

            </CardBody>
        </Card>
    );
}
