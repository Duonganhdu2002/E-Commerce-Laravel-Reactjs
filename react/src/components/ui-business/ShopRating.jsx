import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {
    Card,
    CardHeader,
    Typography,
    CardBody,
    ButtonGroup,
    Button,
    Input,
    timeline,
} from "@material-tailwind/react";

const TABLE_HEAD = ["Infomation Product", "Review", "Action"];

const TABLE_ROWS = [
    {
        name: "John Michael",
        rv: "Manager",
    },
    {
        name: "Alexa Liras",
        rv: "Developer",
    },
    {
        name: "Laurent Perrier",
        rv: "Executive",
    },
    {
        name: "Michael Levi",
        rv: "Developer",
    },
    {
        name: "Richard Gran",
        rv: "Manager",
    },
];


export function ShopRating() {
    const [selectedDate, setSelectedDate] = useState(null);
    return (
        <Card className="h-fit w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className="mb-8 flex items-center justify-between gap-8 ml-2">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            Shop Rating
                        </Typography>
                        <Typography color="gray" className="mt-1 font-normal">
                            See your Shop reviews
                        </Typography>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="border-t border-gray-900/10 ">
                <div className="sm:grid grid-cols-6 gap-x-4 gap-y-4 space-y-2 sm:space-y-0">
                    <div className="col-span-3">
                        <Input label="Product Name" />
                    </div>

                    <div className="col-span-3">
                        <Input label="Classification" />
                    </div>

                    <div className="col-span-3">
                        <Input label="Buyer" />
                    </div>

                    <div className="col-span-3">
                        <Input label="Time" type="date" />
                    </div>

                    <div className=" flex sm:col-span-6 mt-4 mb-4">
                        <Button className="mr-3">Submit</Button>
                        <Button>Retype</Button>
                    </div>

                </div>


                <div className="flex mt-4 border-b border-gray-900/10 mb-6 ">
                    <div className="mr-6">
                        <a href="#" className="text-lg text-black hover:text-gray-800 border-b-2 border-transparent hover:border-black transition duration-300">ALL</a>
                    </div>
                    <div className="mr-6">
                        <a href="#" className="text-lg text-black hover:text-gray-800 border-b-2 border-transparent hover:border-black transition duration-300">NOT ANSWERED</a>
                    </div>
                    <div>
                        <a href="#" className="text-lg text-black hover:text-gray-800 border-b-2 border-transparent hover:border-black transition duration-300">ANSWERED</a>
                    </div>
                </div>

                <div className="flex flex-col gap-4 font-normal mb-6">
                    <ButtonGroup variant="outlined">
                        <Button>All</Button>
                        <Button>5 Star</Button>
                        <Button>4 Star</Button>
                        <Button>3 Star</Button>
                        <Button>2 Star</Button>
                        <Button>1 Star</Button>
                    </ButtonGroup>
                </div>

                <Card className="h-full w-full overflow-scroll">
                    <table className="w-full min-w-max table-auto text-left">
                        <thead>
                            <tr>
                                {TABLE_HEAD.map((head) => (
                                    <th
                                        key={head}
                                        className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                    >
                                        <Typography
                                            variant="small"
                                            color="blue-gray"
                                            className="font-normal leading-none opacity-70"
                                        >
                                            {head}
                                        </Typography>
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {TABLE_ROWS.map(({ name, rv }, index) => {
                                const isLast = index === TABLE_ROWS.length - 1;
                                const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

                                return (
                                    <tr key={name}>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {name}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {rv}
                                            </Typography>
                                        </td>
                                        <td className={classes}>
                                            <Typography
                                                as="a"
                                                href="#"
                                                variant="small"
                                                color="blue-gray"
                                                className="font-medium"
                                            >
                                                Edit
                                            </Typography>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Card>
            </CardBody>
        </Card>
    );
}
