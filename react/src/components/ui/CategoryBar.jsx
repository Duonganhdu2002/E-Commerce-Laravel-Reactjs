import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Checkbox,
    Button, IconButton,
    Select, Option
} from "@material-tailwind/react";

import Star0 from "../../assets/icon/star-svgrepo-com.svg";
import Star1 from "../../assets/icon/star-outline.svg";
import Cart from "../../assets/icon/add-to-cart.svg";

import { } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, PresentationChartBarIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { fetchAllCategoryByUser } from '../../services/categoryService'
import { productFilter } from "../../services/productService";
import { Link } from "react-router-dom"

const sortOptions = [
    { name: 'Price: Low to High' },
    { name: 'Price: High to Low' },
    { name: 'Newest' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CategoryBar({ data, user_id }) {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
    const [categoryList, setCategoryList] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);
    const [dataFull, setDataFull] = useState([])
    const [dataFilter, setDataFilter] = useState([]);
    const [page, setPage] = useState(1);
    const [category_ids, setCategory_ids] = useState([]);
    const [brand_ids, setBrand_ids] = useState([]);
    const type_sort = ['newest', 'price_high_to_low', 'price_low_to_high'];
    const [typeSelect, setTypeSelect] = useState(type_sort[2])

    console.log(typeSelect)

    const defaultProduct = {
        "category_ids": category_ids,
        "brand_ids": brand_ids,
        "user_id": user_id,
        "type_sort": typeSelect
    }

    console.log(defaultProduct)

    // API show tất cả category của shop
    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await fetchAllCategoryByUser(user_id);
                setCategoryList(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [user_id]);

    // API gửi đi dữ liệu đến hàm filter
    const fetchDataABC = async () => {
        try {
            let res = await productFilter(defaultProduct, page);
            setDataFilter(res.data.data);
            setDataFull(res.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // useffect xử lí đợi defaultProduct có sự thay đổi và gọi lại hàm 
    useEffect(() => {
        const fetchData = async () => {
            try {
                await fetchDataABC(defaultProduct, page);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();

        fetchDataABC(defaultProduct, page, category_ids).then((res) => {
        });
    }, [page, category_ids]);

    // onchange giá trị mảng category_ids
    const handleCheckboxChange = (categoryId) => {
        if (page !== 1) {
            setPage(1)
        }
        setCategory_ids((prevIds) => {
            if (prevIds.includes(categoryId)) {
                return prevIds.filter((id) => id !== categoryId);
            } else {
                return [...prevIds, categoryId];
            }
        });
    };

    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    // Start pagination

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

    // End pagination

    return (
        <div className="bg-white">
            <main className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 py-6">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

                    <div className="flex items-center">
                        <div className=" max-w-24 mr-24">
                            <Select variant="standard" label="Sort">
                                <Option>HTML</Option>
                            </Select>
                        </div>
                    </div>
                </div>

                <section aria-labelledby="products-heading" className="pb-24 pt-6">

                    <h2 id="products-heading" className="sr-only">
                        Products
                    </h2>

                    <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                        {/* Filters */}
                        <Card className="w-full p-4 shadow-xl shadow-blue-gray-900/5">
                            <div className="mb-2 p-4">
                                <Typography variant="h5" color="blue-gray">
                                    Filter
                                </Typography>
                            </div>
                            <List>
                                <Accordion
                                    open={open === 1}
                                    icon={
                                        <ChevronDownIcon
                                            strokeWidth={2.5}
                                            className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`}
                                        />
                                    }
                                >
                                    <ListItem className="p-0" selected={open === 1}>
                                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-0 p-3">
                                            <ListItemPrefix>
                                                <PresentationChartBarIcon className="h-5 w-5" />
                                            </ListItemPrefix>
                                            <Typography color="blue-gray" className="mr-auto font-normal">
                                                Category
                                            </Typography>
                                        </AccordionHeader>
                                    </ListItem>
                                    <AccordionBody className="py-1">
                                        <List>
                                            {categoryList &&
                                                categoryList.length > 0 &&
                                                categoryList.map((categoryName) => (
                                                    <div key={categoryName.product_category_id}>
                                                        <ListItem className="p-0">
                                                            <label
                                                                htmlFor={categoryName.product_category_id}
                                                                className="flex w-full cursor-pointer items-center px-3 py-2"
                                                            >
                                                                <ListItemPrefix className="mr-3">
                                                                    <Checkbox
                                                                        id={categoryName.product_category_id}
                                                                        ripple={false}
                                                                        className="hover:before:opacity-0"
                                                                        containerProps={{
                                                                            className: "p-0",
                                                                        }}
                                                                        checked={category_ids.includes(categoryName.product_category_id)}
                                                                        onChange={() => handleCheckboxChange(categoryName.product_category_id)}
                                                                    />
                                                                </ListItemPrefix>
                                                                <Typography color="blue-gray" className="font-medium">
                                                                    {categoryName.product_category_name}
                                                                </Typography>
                                                            </label>
                                                        </ListItem>
                                                    </div>
                                                ))}
                                        </List>
                                    </AccordionBody>
                                </Accordion>
                            </List>
                        </Card>

                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {
                                    dataFilter && dataFilter.length > 0 && dataFilter.map((products, index) => (
                                        <Link key={index} to={`/product/${products.product_id}`}>
                                            <div className="w-full h-[350px] md:h-[380px] lg:h-[450px] xl:h-[510px]  bg-white shadow-md shadow-gray-300 rounded-xl duration-500 hover:scale-105 hover:shadow-2xl">
                                                <img
                                                    className=" h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[280px] lg:w-[280px] xl:h-[320px] xl:w-[320px] object-cover rounded-t-xl"
                                                    src={`../../../src/assets/image/${products.images[0]}`}
                                                    alt="Product"
                                                />
                                                <div className="px-4  mt-6 py-3 h-[20%] w-full">
                                                    <p className="text-md lg:text-lg xl:text-xl font-bold text-black truncate block capitalize">{products.name}</p>
                                                    <div className="space-x-1 flex justify-center mt-2 md:mt-4 lg:mt-6 xl:mt-8">
                                                        {Array.from({ length: Math.round(products.average_rating) }, (_, index) => (
                                                            <img className="w-5" key={index} src={Star0} alt="" />
                                                        ))}
                                                        {Array.from({ length: 5 - Math.round(products.average_rating) }, (_, index) => (
                                                            <img className="w-5" key={index} src={Star1} alt="" />
                                                        ))}
                                                    </div>
                                                    <div className="flex items-center mt-4">
                                                        <p className="text-md lg:text-lg xl:text-xl font-semibold text-black cursor-auto my-1">${products.price}</p>
                                                        <div className="ml-auto">
                                                            <img src={Cart} alt="" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    ))
                                }
                            </div>
                            <div className=" flex justify-center mt-12">
                                <div className=" flex justify-center">
                                    <div className="flex items-center my-6 mt-12">
                                        <Button
                                            variant="text"
                                            className="flex items-center gap-2"
                                            onClick={prev}
                                            disabled={active === dataFull.from}
                                        >
                                            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Pre
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
                                            Nex
                                            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}

