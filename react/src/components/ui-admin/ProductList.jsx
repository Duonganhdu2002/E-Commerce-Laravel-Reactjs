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
} from "@heroicons/react/24/solid"

import {
    Card,
    CardHeader,
    Input,
    Typography,
    CardBody,
    Chip,
    Avatar,
    IconButton,
    Button,
    Collapse,
    ListItem,
    Menu,
    MenuHandler,
    MenuList,
    MenuItem,
    CardFooter,
    Popover,
    PopoverHandler,
    PopoverContent,
    Select,
    Option,
    Textarea,
} from "@material-tailwind/react";

import AddImageIcon from "../../assets/icon/image (1).png";

import { useEffect, useState } from "react";
import { useSelector } from 'react-redux'
import { listOrder, orderItems } from "../../services/orderService";
import React from "react";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { deleteProduct, productAll, productInformation, productListShop, updateProduct } from "../../services/productService";
import starBlackImg from "../../assets/icon/star-black.svg"
import starWhiteImg from "../../assets/icon/star-white.svg"


const TABLE_HEAD = [
    "ID",
    "Product name",
    "Price",
    "Category",
    "Brand",
    "Stock",
    "Detail",
    "Detele",
];

const convertToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const dataExcel = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    FileSaver.saveAs(dataExcel, 'data.xlsx');
}

const DeleteProduct = ({ product_id }) => {

    const handleDelete = async () => {
        try {
            let res = await deleteProduct(product_id);
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div onClick={handleDelete} className="cursor-pointer flex justify-center hover:bg-blue-gray-50 py-2 rounded-lg " >
            <TrashIcon className="w-4 h-4 " />
        </div>
    )
}

const SeeProduct = ({ product_id }) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [data, setData] = useState({
        sizes: [],
        colors: [],
        average_rating: 0,
        average_rating_by_creator: 0,
        image_urls: [],
        name: "",
        total_reviews: 0,
        description: "",
    });

    const sizes = data.sizes || [];
    const colors = data.colors || [];

    const starBlack = Number(data.average_rating).toFixed(0);
    const starWhite = 5 - starBlack;

    const starBlack1 = Number(data.average_rating_by_creator).toFixed(0);
    const starWhite1 = 5 - starBlack1;

    const imageUrls = data.image_urls || [];
    const limitedImageUrls = imageUrls.slice(0, 3);
    const [currentImage, setCurrentImage] = useState(imageUrls[0]);

    const handleThumbnailClick = (imageUrl) => {
        setCurrentImage(imageUrl);
    };


    useEffect(() => {

        const fetchData = async () => {
            try {
                let res = await productInformation(product_id);
                if (res && res.data) {
                    setData(res.data);

                    if (res.data.image_urls && res.data.image_urls.length > 0) {
                        setCurrentImage(res.data.image_urls[0]);
                    }
                }
            } catch (error) {
                console.error("Error fetching fields:", error);
            }
        };

        fetchData();
    }, []);

    const renderItems =
        <div className="flex justify-center items-center lg:flex-row flex-col gap-8 p-8">
            <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">{data.name}</h2>

                <div className=" flex flex-row justify-between  mt-5">
                    <div className="flex flex-row space-x-3">
                        {Array.from({ length: starBlack }, (_, index) => (
                            <img key={index} src={starBlackImg} alt="" />
                        ))}
                        {Array.from({ length: starWhite }, (_, index) => (
                            <img key={index} src={starWhiteImg} alt="" />
                        ))}
                    </div>
                    <div>
                        {data.total_reviews} reviews - {Number(data.average_rating).toFixed(2)}/5
                    </div>
                </div>

                <p className=" font-normal text-base leading-6 text-gray-600 mt-7">{data.description}</p>

                <hr className=" bg-gray-200 w-full my-2" />

                <div className="lg:mt-11 mt-10 w-[70%] flex justify-between ">
                    <div className=" mr-12">
                        <p className=" font-medium text-xl leading-6 text-gray-600 my-7">Size</p>
                        {
                            sizes.map((size, index) => (
                                <p className=" font-normal text-base leading-6 text-gray-600 mt-2" key={index}>{size}</p>
                            ))
                        }
                    </div>
                    <div>
                        <p className=" font-medium text-xl leading-6 text-gray-600 my-7">Color</p>
                        {
                            colors.map((color, index) => (
                                <p className=" font-normal text-base leading-6 text-gray-600 mt-2" key={index}>{color}</p>
                            ))
                        }
                    </div>
                </div>


            </div>

            <div className="w-full sm:w-96 md:w-8/12 lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                <div className="w-full lg:w-8/12 flex justify-center items-center">
                    {imageUrls.length > 0 && currentImage ? (
                        <img
                            className="h-[420px] w-[460px] object-cover"
                            src={`../../../src/assets/image/${currentImage}`}
                            alt={data.name}
                        />
                    ) : (
                        <img
                            className="h-[420px] w-[460px] object-cover"
                            src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`}
                            alt="Placeholder Image"
                        />
                    )}
                </div>

                <div className="w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-3 grid-cols-2 gap-6">
                    {limitedImageUrls.length > 0 ? (
                        limitedImageUrls.map((imageUrl, index) => (
                            <div
                                key={index}
                                className="flex justify-center items-center cursor-pointer"
                                onMouseOver={() => handleThumbnailClick(imageUrl)}
                            >
                                <img
                                    className="h-[200px] w-[180px] object-cover"
                                    src={`../../../src/assets/image/${imageUrl}`}
                                    alt={`${data.name} - preview ${index + 1}`}
                                />
                            </div>
                        ))
                    ) : (
                        <div className=" py-4">
                            <img
                                className="h-[200px] w-[180px] object-cover mb-5"
                                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`}
                                alt="Placeholder Image"
                            />
                            <img
                                className="h-[200px] w-[180px] object-cover"
                                src={`https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/1665px-No-Image-Placeholder.svg.png`}
                                alt="Placeholder Image"
                            />
                        </div>
                    )}

                </div>
            </div>
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
                <MenuList className="hidden w-[60%] h-fit rounded-xl lg:block">
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

export default function ProductList() {

    const seller_id = useSelector((state) => state.seller.seller.user_id);
    const [data, setData] = useState([]);
    const [dataFull, setDataFull] = useState([]);
    const [page, setPage] = useState(1);

    const handleExportExcel = () => {
        convertToExcel(data);
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await productAll( page);
                setDataFull(res.data);
                setData(res.data.data);
            } catch (error) {
                console.error("Error fetching fields:", error);
            }
        }
        fetchData();
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
        <Card className=" h-[88vh] w-full p-4">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="flex flex-col sm:flex-row w-full justify-center items-center">
                    <div className="w-full justify-between flex">
                        <div className=" w-fit">
                            <Input
                                label="Find order ID"
                                icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                            />
                        </div>

                        <div className=" w-fit">
                            <Button size="sm" color="gray" variant="outlined" onClick={handleExportExcel}>Export to Excel</Button>
                        </div>

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
                        {data && data.length > 0 && data.map(
                            (data, index) => {
                                const key = `${index}`;
                                const isLast = index === data.length - 1;
                                const classes = isLast
                                    ? "py-5 p-2"
                                    : "py-5 p-2 border-b border-blue-gray-50";

                                return (
                                    <tr key={key}>
                                        <td className={classes}>
                                            <div className="flex items-center gap-3">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {data.product_id}
                                                </Typography>

                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {data.name}
                                                </Typography>
                                            </div>
                                        </td>
                                        <td className={classes}>
                                            <div className="flex flex-col">
                                                <Typography
                                                    variant="small"
                                                    color="blue-gray"
                                                    className="font-normal"
                                                >
                                                    {data.price}
                                                </Typography>
                                            </div>
                                        </td>

                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {data.product_category_name}
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {data.product_brand_name}
                                            </Typography>
                                        </td>

                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {data.stock}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <SeeProduct product_id={data.product_id} />
                                        </td>

                                        <td className={classes}>
                                            <DeleteProduct product_id={data.product_id} />
                                        </td>

                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter>
                <div className="flex justify-end  my-6 absolute bottom-4 right-10">
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
