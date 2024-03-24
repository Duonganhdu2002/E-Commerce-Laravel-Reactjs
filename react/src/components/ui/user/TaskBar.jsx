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
    ShoppingBagIcon,
    UserCircleIcon,
    BellAlertIcon,
    TicketIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function TaskBar() {

    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };
    return (
        <Card className=" w-full max-w-[20rem] p-4 shadow-md shadow-blue-gray-600/10">
            <div className="mb-2 p-4">
                <Typography variant="h5" color="blue-gray">
                    Sidebar
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
                                <UserCircleIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography color="blue-gray" className="mr-auto font-normal">
                                My account
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <Link to="./profile">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Profile
                                </ListItem>
                            </Link>
                            <Link to="./banking">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Banking
                                </ListItem>
                            </Link>
                            <Link to="./address">
                                <ListItem>
                                    <ListItemPrefix>
                                        <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                                    </ListItemPrefix>
                                    Address
                                </ListItem>
                            </Link>
                        </List>
                    </AccordionBody>
                </Accordion>
                <Link to="./purchase">
                    <ListItem>
                        <ListItemPrefix>
                            <ShoppingBagIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Purchase order
                        <ListItemSuffix>
                            <Chip value="14" size="sm" variant="ghost" color="blue" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>
                </Link>
                <Link to="./notification">
                    <ListItem>
                        <ListItemPrefix>
                            <BellAlertIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Notification
                        <ListItemSuffix>
                            <Chip value="99+" size="sm" color="red" className="rounded-full" />
                        </ListItemSuffix>
                    </ListItem>
                </Link>
                <Link to="./voucher-wallet">
                    <ListItem>
                        <ListItemPrefix>
                            <TicketIcon className="h-5 w-5" />
                        </ListItemPrefix>
                        Voucher Warehouse
                    </ListItem>
                </Link>
            </List>
        </Card>
    )
}
