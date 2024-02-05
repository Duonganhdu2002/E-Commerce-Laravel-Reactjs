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
} from "@material-tailwind/react";

const TABLE_HEAD = ["Infomation Product", "Review"];

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
    <Card classname="h-fit w-full">
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
            <div className="grid grid-cols-6 gap-x-4 gap-y-4 sm:grid-cols-6">
                <div className="sm:col-span-3">
                    <label htmlFor="product-name" className="block text-sm font-medium leading-6 text-gray-900">Product Name</label>
                    <div className="mt-2">
                        <input type="text" name="product-name" id="product-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 pl-2" />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="classification" className="block text-sm font-medium leading-6 text-gray-900">Classification</label>
                    <div className="mt-2">
                        <input type="text" name="classification" id="classification" className="block pl-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 " />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="buyer" className="block text-sm font-medium leading-6 text-gray-900">Buyer</label>
                    <div className="mt-2">
                        <input id="buyer" name="buyer" type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 pl-2" />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">Time</label>
                    <div className="mt-2">
                        <DatePicker
                            selected={selectedDate}
                            onChange={(date) => setSelectedDate(date)}
                            dateFormat="MM/dd/yyyy"
                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm sm:leading-6 pl-2GIT"
                        />
                    </div>
                </div>

                <div className="sm:col-span-6 mt-4 space-y-1 mb-4">
                    <div className="px-px">
                        <button className="px-4 py-2 bg-gray-300 text-black rounded-md focus:outline-none focus:bg-gray-400">Submit</button>
                    </div>
                    <button className="px-4 py-2 bg-gray-300 text-black rounded-md focus:outline-none focus:bg-gray-400">Retype</button>
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

            <div className="flex w-max flex-col gap-4 font-normal mb-6">
                <ButtonGroup variant="outlined">
                    <Button>All</Button>
                    <Button>5 Star</Button>
                    <Button>4 Star</Button>
                    <Button>3 Star</Button>
                    <Button>2 Star</Button>
                    <Button>1 Star</Button>
                </ButtonGroup>
            </div>

            <table className="w-full min-w-max table-auto text-left">
                <colgroup>
                    <col style={{ width: '50%' }} />
                    <col style={{ width: '50%' }} />
                </colgroup>
                <thead>
                    <tr>
                    {TABLE_HEAD.map((head) => (
                        <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-100 p-4">
                        <Typography variant="medium" color="black" className="font-normal leading-none opacity-70">
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
                            <Typography variant="small" color="black" className="font-normal">
                            {name}
                            </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                            <Typography variant="small" color="black" className="font-normal">
                            {rv}
                            </Typography>
                        </td>
                        </tr>
                    );
                    })}
                </tbody>
            </table>
        </CardBody>
    </Card>
    );
}