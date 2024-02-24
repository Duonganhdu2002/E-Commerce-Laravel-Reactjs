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
} from "@material-tailwind/react";

import { } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, PresentationChartBarIcon, FunnelIcon, MinusIcon, PlusIcon, Squares2X2Icon } from '@heroicons/react/20/solid'
import { fetchAllCategoryByUser } from '../../services/categoryService'
import { productSortUser } from "../../services/productService";
import { Link } from "react-router-dom"

const sortOptions = [
    { name: 'Best Rating', href: '#', current: false },
    { name: 'Newest', href: '#', current: false },
    { name: 'Price: Low to High', href: '#', current: false },
    { name: 'Price: High to Low', href: '#', current: false },
]

const filters = [
    {
        id: 'category',
        name: 'Category',
        options: [
            { value: 'new-arrivals', label: 'New Arrivals', checked: false },
            { value: 'sale', label: 'Sale', checked: false },
            { value: 'travel', label: 'Travel', checked: true },
            { value: 'organization', label: 'Organization', checked: false },
            { value: 'accessories', label: 'Accessories', checked: false },
        ],
    },
    {
        id: 'brand',
        name: 'Brand',
        options: [
            { value: '2l', label: '2L', checked: false },
            { value: '6l', label: '6L', checked: false },
            { value: '12l', label: '12L', checked: false },
            { value: '18l', label: '18L', checked: false },
            { value: '20l', label: '20L', checked: false },
            { value: '40l', label: '40L', checked: true },
        ],
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function CategoryBar({ data, user_id }) {

    const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

    const [categoryList, setCategoryList] = useState([]);
    const [dataProduct, setDataProduct] = useState([]);
    const sortType = 'newest';
    const page = 1;


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

    console.log(categoryList)

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await productSortUser(sortType, user_id, page);
                setDataProduct(res.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [user_id, sortType, page]);

    console.log(dataProduct)

    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <div className="bg-white">
            <main className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-baseline justify-between border-b border-gray-200 py-6">
                    <h1 className="text-xl md:text-2xl lg:text-4xl font-bold tracking-tight text-gray-900">New Arrivals</h1>

                    <div className="flex items-center">
                        <Menu as="div" className="relative inline-block text-left">
                            <div>
                                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                                    Sort
                                    <ChevronDownIcon
                                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                                        aria-hidden="true"
                                    />
                                </Menu.Button>
                            </div>

                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-100"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                        {sortOptions.map((option) => (
                                            <Menu.Item key={option.name}>
                                                {({ active }) => (
                                                    <a
                                                        href={option.href}
                                                        className={classNames(
                                                            option.current ? 'font-medium text-gray-900' : 'text-gray-500',
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm'
                                                        )}
                                                    >
                                                        {option.name}
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        ))}
                                    </div>
                                </Menu.Items>
                            </Transition>
                        </Menu>

                        <button type="button" className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7">
                            <span className="sr-only">View grid</span>
                            <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                            onClick={() => setMobileFiltersOpen(true)}
                        >
                            <span className="sr-only">Filters</span>
                            <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
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
                                            {
                                                categoryList && categoryList.length > 0 && categoryList.map((categoryName) => (
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
                                                                    />
                                                                </ListItemPrefix>
                                                                <Typography color="blue-gray" className="font-medium">
                                                                    {categoryName.product_category_name}
                                                                </Typography>
                                                            </label>
                                                        </ListItem>
                                                    </div>
                                                ))
                                            }


                                        </List>
                                    </AccordionBody>
                                </Accordion>
                            </List>
                        </Card>

                        {/* Product grid */}
                        <div className="lg:col-span-3">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {Array.from({ length: 9 }).map((_, index) => (
                                    <Link key={index} to={`/product`}>
                                        <div className="w-fit mx-auto h-[300px] md:h-[330px] lg:h-[400px] xl:h-[460px]  bg-white shadow-md shadow-gray-300 rounded-xl duration-500 hover:scale-105 hover:shadow-2xl">
                                            <img
                                                className=" h-[200px] w-[200px] md:h-[220px] md:w-[220px] lg:h-[280px] lg:w-[280px] xl:h-[320px] xl:w-[320px] object-cover rounded-t-xl"
                                                src="../../../src/assets/image/Bedroom1.1.jpg"
                                                alt="Product"
                                            />

                                            <div className="px-4 py-3 h-[20%] w-full">
                                                <p className="text-md lg:text-lg xl:text-xl font-bold text-black truncate block capitalize">bda</p>
                                                <div className="flex items-center">
                                                    <p className="text-md lg:text-lg xl:text-xl font-semibold text-black cursor-auto my-1">$76247</p>
                                                    <del>
                                                        <p className="text-sm text-gray-600 cursor-auto ml-2">$7364782</p>
                                                    </del>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                            <div className=" flex justify-center mt-12">
                                <SimplePagination />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}


export function SimplePagination() {
    const [active, setActive] = useState(1);

    const next = () => {
        if (active === 10) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="flex items-center gap-8">
            <IconButton
                size="sm"
                variant="outlined"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <Typography color="gray" className="font-normal">
                Page <strong className="text-gray-900">{active}</strong> of{" "}
                <strong className="text-gray-900">10</strong>
            </Typography>
            <IconButton
                size="sm"
                variant="outlined"
                onClick={next}
                disabled={active === 10}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
        </div>
    );
}