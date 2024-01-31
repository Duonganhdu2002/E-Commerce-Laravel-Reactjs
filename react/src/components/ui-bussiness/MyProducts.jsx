import { useState } from "react";
import {
    Card,
    Checkbox,
    Button,
    Input,
} from "@material-tailwind/react";

const TABLE_HEAD = [
    "Check all",
    "STT",
    "Product Name",
    "Price",
    "Quantity",
    "Edit",
    "Delete",
];

const TABLE_ROWS = [
    {
        stt: "1",
        name: "John Michael",
        price: "$123",
        quantity: "152",
    },
    {
        stt: "2",
        name: "Alexa Liras",
        price: "$123",
        quantity: "12",
    },
    {
        stt: "3",
        name: "Laurent Perrier",
        price: "$123",
        quantity: "12",
    },
    {
        stt: "4",
        name: "Michael Levi",
        price: "$123",
        quantity: "12",
    },
    {
        stt: "5",
        name: "Richard Gran",
        price: "$123",
        quantity: "12",
    },
];

export function MyProductsBussiness() {
    const [open, setOpen] = useState(false);
    const [deleteConfirmationOpen, setDeleteConfirmationOpen] = useState(false);

    const handleOpen = () => setOpen(!open);
    const handleDeleteConfirmationOpen = () =>
        setDeleteConfirmationOpen(!deleteConfirmationOpen);

    return (
        <div>
            <div className="flex justify-end mb-8">
                <Button onClick={handleOpen}>Add Products</Button>
            </div>
            <Card className="h-fit w-full overflow-auto">
                <table className="w-full min-w-max table-auto text-left">
                    <thead>
                        <tr>
                            {TABLE_HEAD.map((head) => (
                                <th
                                    key={head}
                                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                                >
                                    <div
                                        color="blue-gray"
                                        className="font-normal leading-none opacity-70 mb-2"
                                    >
                                        {head}
                                    </div>
                                    <div>
                                        <Input></Input>
                                    </div>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {TABLE_ROWS.map(({ stt, name, price, quantity }) => (
                            <tr key={name} className="even:bg-blue-gray-50/50">
                                <td className="w-fit p-4">
                                    <div>
                                        <Checkbox />
                                    </div>
                                </td>

                                <td className=" p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-medium"
                                    >
                                        {stt}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {name}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {price}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-normal"
                                    >
                                        {quantity}
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-medium cursor-pointer"
                                        onClick={handleOpen}
                                    >
                                        Edit
                                    </div>
                                </td>
                                <td className="p-4">
                                    <div
                                        color="blue-gray"
                                        className="font-medium cursor-pointer text-red-700"
                                        onClick={handleDeleteConfirmationOpen}
                                    >
                                        Delete
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
