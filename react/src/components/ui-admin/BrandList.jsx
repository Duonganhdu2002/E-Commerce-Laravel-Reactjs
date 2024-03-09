import {
    MagnifyingGlassIcon,
    ChevronUpDownIcon,
    ArrowRightIcon,
    ArrowLeftIcon,
    TrashIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";

import {
    Card,
    CardHeader,
    Input,
    Typography,
    CardBody,
    IconButton,
    Button,
    CardFooter,
    Textarea,
    Popover,
    PopoverHandler,
    PopoverContent,
} from "@material-tailwind/react";

import { useEffect, useState } from "react";
import { listOrder, orderItems } from "../../services/orderService";
import { useSelector } from 'react-redux'

import React from "react";
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { fetchAllFieldAdmin } from "../../services/fieldService";
import { fetchAllCategoryByAdmin } from "../../services/categoryService";
import { fetchBrandsByAdmin, deleteBrand, updateBrand, brandInformation } from "../../services/brandService";

import AddImageIcon from "../../assets/icon/image (1).png";

const TABLE_HEAD = [
    "Icon",
    "ID",
    "Category name",
    "Field name",
    "Description",
    "Edit",
    "Delete",
];

const convertToExcel = (data) => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    const dataExcel = new Blob([excelBuffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8' });
    FileSaver.saveAs(dataExcel, 'data.xlsx');
}

const DeleteBrand = ({ product_brand_id }) => {
    const handleDelete = async () => {
        try {
            let res = await deleteBrand(product_brand_id);
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

const EditBrand = ({ product_brand_id }) => {


    const [data, setData] = useState([]);
    const [images, setImages] = useState([]);
    const imageLength = images.length;

    const [brandName, setBrandName] = useState('');
    const [brandDescription, setBrandDescription] = useState('');

    const handleInputChange = (event, setterFunction) => {
        setterFunction(event.target.value);
    };

    const dataUpdate = {
        'product_brand_name': brandName,
        'description': brandDescription,
    }

    const handleUpdate = () => {
        try {
            updateBrand(product_brand_id, dataUpdate);
            alert("Thanh cong")
        } catch (error) {
            alert(error)
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await brandInformation(product_brand_id);
                setBrandName(res.data.product_brand_name || '');
                setBrandDescription(res.data.description || '');
                // Kiểm tra xem res.data.logo_brand trả về một giá trị đơn lẻ hay một mảng
                const logoBrand = Array.isArray(res.data.logo) ? res.data.logo : [res.data.logo];
                setImages(logoBrand);
                setData(res.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [product_brand_id]);


    const [imageList, setImageList] = useState([AddImageIcon,]);

    const handleImageChange = (event, index) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const newImageList = [...imageList];
                newImageList[index] = reader.result;
                setImageList(newImageList);
            };
            reader.readAsDataURL(file);
        }
    };



    return (
        <div className="cursor-pointer flex justify-center hover:bg-blue-gray-50 py-2 rounded-lg" >
            <Popover placement="left">
                <PopoverHandler>
                    <div className=" w-full flex justify-center">
                        <PencilIcon className=" w-4 h-4" />
                    </div>
                </PopoverHandler>
                <PopoverContent className=" z-10 p-8">
                    <div className="flex">
                        <div className="">Brand Images</div>
                        <div className="w-[85%]">
                            <p>Image</p>
                            <div className="flex">
                                {imageLength === 1 ? (
                                    <div className="  mr-4 border-2 hover:bg-gray-200 border-dashed border-gray-400 w-fit h-fit mt-5 rounded-md hover:border-gray-600 transition-colors duration-300">
                                        <div className="mb-4">
                                            <input
                                                type="file"
                                                className="hidden"
                                                onChange={(event) => handleImageChange(event, 0)} // chỉ truyền index là 0
                                                data-index={0}
                                            />
                                            <img
                                                className="w-36 h-36 object-scale-down cursor-pointer"
                                                src={`../../../src/assets/icon_brand/${images[0]}`} // chỉ truy cập ảnh đầu tiên trong images
                                                alt={`Image 1`}
                                                onClick={() => document.querySelector(`input[type="file"][data-index="0"]`).click()} // chỉ trigger input với index là 0
                                            />
                                        </div>
                                    </div>
                                ) : (
                                    <>
                                        {images.map((imageSrc, index) => (
                                            <div key={index} className="p-6 px-8  mr-4 border-2 hover:bg-gray-200 border-dashed border-gray-400 w-fit h-fit mt-5 rounded-md hover:border-gray-600 transition-colors duration-300">
                                                <div className="mb-4">
                                                    <input
                                                        type="file"
                                                        className="hidden"
                                                        onChange={(event) => handleImageChange(event, index)}
                                                        data-index={index}
                                                    />
                                                    <img
                                                        className="w-24 h-24 object-cover cursor-pointer"
                                                        src={`../../../src/assets/image/${imageSrc}`}
                                                        alt={`Image ${index + 1}`}
                                                        onClick={() => document.querySelector(`input[type="file"][data-index="${index}"]`).click()}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className=" flex mt-8">
                        <div className=" ">
                            Brand name
                        </div>
                        <div className=" w-[85%]">
                            <Input
                                value={brandName}
                                label="Input"
                                onChange={(event) => handleInputChange(event, setBrandName)}
                            />
                        </div>
                    </div>

                    <div className=" flex mt-8">
                        <div className=" ">
                            Description
                        </div>
                        <div className=" w-[85%]">
                            <Textarea
                                value={brandDescription}
                                label="Input"
                                onChange={(event) => handleInputChange(event, setBrandName)}
                            />
                        </div>
                    </div>


                    <div className=" flex my-8">
                        <div className=" w-[15%]">
                        </div>
                        <div className=" w-[85%]">
                            <Button onClick={handleUpdate}>Update</Button>
                        </div>
                    </div>
                </PopoverContent>
            </Popover>
        </div>
    )
}

export default function BrandList() {

    const [data, setData] = useState([]);
    const [dataFull, setDataFull] = useState([]);
    const [page, setPage] = useState(1);

    const handleExportExcel = () => {
        convertToExcel(data);
    }

    // Call API list order by user
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await fetchBrandsByAdmin(page);
                setDataFull(res.data);
                setData(res.data.data)
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
        <Card className=" h-[98%] w-full p-4">
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
                            <Button size="sm" color="gray" className=" ml-2">Add Brand</Button>
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
                                    ? "p-5"
                                    : "p-5 border-b border-blue-gray-50";

                                return (
                                    <tr key={key}>
                                        <td className={classes}>
                                            <img
                                                src={`../../../src/assets/icon_brand/${data.logo}`}
                                                alt={data.logo}
                                                className=" h-4 object-cover"
                                            />
                                        </td>

                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {data.product_brand_id}
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
                                                {data.field_name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {data.description}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <EditBrand product_brand_id={data.product_brand_id} />
                                        </td>

                                        <td className={classes}>
                                            <DeleteBrand brand_id={data.product_brand_id} />
                                        </td>
                                    </tr>
                                );
                            }
                        )}
                    </tbody>
                </table>
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
