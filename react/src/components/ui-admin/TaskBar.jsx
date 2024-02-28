import React from "react";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import {
    PresentationChartBarIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    Cog6ToothIcon,
    InboxIcon,
    PowerIcon,
    ArchiveBoxIcon,
    DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const accordionData = [
    {
        id: 1,
        icon: <PresentationChartBarIcon className="h-5 w-5" />,
        title: "User",
        links: [
            { path: "/admin/user-list", label: "User list" },
        ],
    },
    {
        id: 2,
        icon: <DocumentTextIcon className="h-5 w-5" />,
        title: "Field",
        links: [
            { path: "/admin/field-list", label: "Field list" },
        ],
    },
    {
        id: 3,
        icon: <ArchiveBoxIcon className="h-5 w-5" />,
        title: "Category",
        links: [
            { path: "/admin/category-list", label: "Category list" },
        ],
    },
    {
        id: 4,
        icon: <ShoppingBagIcon className="h-5 w-5" />,
        title: "Brand",
        links: [
            { path: "/admin/brand-list", label: "Brand list" },
        ],
    },
    {
        id: 5,
        icon: <ShoppingBagIcon className="h-5 w-5" />,
        title: "Order",
        links: [
            { path: "/admin/order-list", label: "Order list" },
            { path: "/admin/order-user", label: "Order user" },
        ],
    },
    {
        id: 6,
        icon: <ShoppingBagIcon className="h-5 w-5" />,
        title: "Order status",
        links: [
            { path: "/admin/order-status-list", label: "Order status list" },
        ],
    },
    {
        id: 7,
        icon: <ShoppingBagIcon className="h-5 w-5" />,
        title: "Product",
        links: [
            { path: "/admin/product-list", label: "Product list" },
            { path: "/admin/product-user-list", label: "Product user list" },
        ],
    },
    {
        id: 8,
        icon: <ShoppingBagIcon className="h-5 w-5" />,
        title: "Review",
        links: [
            { path: "/admin/review-list", label: "Review list" },
            { path: "/admin/review-user-list", label: "Review user list" },
        ],
    },

    {
        id: 9,
        icon: <ShoppingBagIcon className="h-5 w-5" />,
        title: "Shopping method",
        links: [
            { path: "/admin/shopping-method-list", label: "Shopping method list" },
        ],
    },
];


const TaskBarAdmin = () => {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className=" fixed w-full max-w-[20rem] p-4 shadow-md shadow-blue-gray-900/30 z-10">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Sidebar
                </Typography>
            </div>
            <List>
                {accordionData.map((item) => (
                    <Accordion
                        key={item.id}
                        open={open === item.id}
                        icon={
                            <ChevronDownIcon
                                strokeWidth={2.5}
                                className={`mx-auto h-4 w-4 transition-transform ${open === item.id ? "rotate-180" : ""
                                    }`}
                            />
                        }
                    >
                        <ListItem className="p-0" selected={open === item.id}>
                            <AccordionHeader onClick={() => handleOpen(item.id)} className="border-b-0 p-3">
                                <ListItemPrefix>{item.icon}</ListItemPrefix>
                                <Typography color="blue-gray" className="mr-auto font-normal">
                                    {item.title}
                                </Typography>
                            </AccordionHeader>
                        </ListItem>
                        <AccordionBody className="py-1">
                            <List className="p-0">
                                {item.links.map((link) => (
                                    <Link key={link.path} to={link.path}>
                                        <ListItem>
                                            <ListItemPrefix>
                                                <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                            </ListItemPrefix>
                                            {link.label}
                                        </ListItem>
                                    </Link>
                                ))}
                            </List>
                        </AccordionBody>
                    </Accordion>
                ))}
                <hr className="my-2 border-blue-gray-50" />
                <Link to="dashboard">
                    <ListItem>
                        <ListItemPrefix>
                            <InboxIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Dashboard
                    </ListItem>
                </Link>

                <Link to="profile">

                    <ListItem>
                        <ListItemPrefix>
                            <UserCircleIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Profile
                    </ListItem>
                </Link>
                <Link to="settings">

                    <ListItem>
                        <ListItemPrefix>
                            <Cog6ToothIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Settings
                    </ListItem>
                </Link>
                <Link to="logout">

                    <ListItem>
                        <ListItemPrefix>
                            <PowerIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Log Out
                    </ListItem>
                </Link>

            </List>
        </Card>
    );
};

export default TaskBarAdmin;
