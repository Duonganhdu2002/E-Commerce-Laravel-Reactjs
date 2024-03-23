import {
    ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import {
    PencilIcon,
    PlusIcon,
    TrashIcon,
} from "@heroicons/react/24/solid";
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    IconButton,
    Input,
    Tooltip,
    Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

import { useSelector } from 'react-redux';
import { deleteAddress, updateAddress, userAddress } from "../../../services/authService";




const TABLE_HEAD = ["Id", "Address", "Edit", "Delete"];

const EditAddress = ({ user_address_id, addressData }) => {
    const [data, setData] = useState([]);
    const [open, setOpen] = useState(false);

    const handleOpen = () => setOpen(!open);

    const [country, setCountry] = useState(addressData.country || '');
    const [province, setProvince] = useState(addressData.province || '');
    const [district, setDistrict] = useState(addressData.district || '');
    const [commune, setCommune] = useState(addressData.commune || '');
    const [street, setStreet] = useState(addressData.street || '');
    const [number, setNumber] = useState(addressData.number || '');

    const handleInputChange = (event, setterFunction) => {
        setterFunction(event.target.value);
    };

    const dataUpdate = {
        country: country,
        province: province,
        district: district,
        commune: commune,
        street: street,
        number: number
    };

    const handleUpdate = async () => {
        try {
            await updateAddress(user_address_id, dataUpdate);
            alert("Thanh cong");
        } catch (error) {
            alert(error)
        }

    };

    useEffect(() => {
        const fetchData = async () => {

            try {
                const res = await updateAddress(user_address_id);
                setData(res.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, [user_address_id]);


    return (
        <div>
            <Tooltip content="Edit">
                <IconButton variant="text" onClick={handleOpen}>
                    <PencilIcon className="h-4 w-4" />
                </IconButton>
            </Tooltip>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Edit Address - {user_address_id}</DialogHeader>
                <DialogBody className="flex gap-6">
                    <div className="flex flex-col gap-3 w-[50%]">
                        <Input label="Country" value={country} onChange={(event) => handleInputChange(event, setCountry)} />
                        <Input label="Province" value={province} onChange={(event) => handleInputChange(event, setProvince)} />
                        <Input label="District" value={district} onChange={(event) => handleInputChange(event, setDistrict)} />
                    </div>
                    <div className="flex flex-col gap-3 w-[50%]">
                        <Input label="Commune" value={commune} onChange={(event) => handleInputChange(event, setCommune)} />
                        <Input label="Street" value={street} onChange={(event) => handleInputChange(event, setStreet)} />
                        <Input label="Number" value={number} onChange={(event) => handleInputChange(event, setNumber)} />
                    </div>
                </DialogBody>
                <DialogFooter>
                    <Button
                        variant="text"
                        color="red"
                        onClick={handleOpen}
                        className="mr-1"
                    >
                        <span>Cancel</span>
                    </Button>
                    <Button variant="gradient" color="green" onClick={handleUpdate}>
                        <span>Update</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </div>
    );
};

const DeleteAddress = ({ user_address_id }) => {

    const handleDelete = async () => {
        try {
            let res = await deleteAddress(user_address_id);
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



export default function Address() {

    const [data, setData] = useState([]);
    const [dataFull, setDataFull] = useState([]);
    const user_id = useSelector((state) => state.user.user.user_id);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let res = await userAddress(user_id);
                setDataFull(res);
                setData(res.data);
            } catch (error) {
                console.error("Error fetching fields:", error);
            }
        }
        fetchData();
    }, [user_id]);

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => setOpen(!open);


    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className=" flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            My Addresses
                        </Typography>
                    </div>
                    {/* <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button className="flex items-center gap-3" size="sm" onClick={handleOpen}>
                            <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Address
                        </Button>
                        <Dialog open={open} handler={handleOpen}>
                            <DialogHeader>Add Address</DialogHeader>
                            <DialogBody className="flex gap-6">
                                <div className="flex flex-col gap-3 w-[50%]">
                                    <Input label="Country" value={data.country} />
                                    <Input label="Province" value={data.province} />
                                    <Input label="District" value={data.district} />
                                </div>
                                <div className="flex flex-col gap-3 w-[50%]">
                                    <Input label="Commune" value={data.commune} />
                                    <Input label="Street" value={data.street} />
                                    <Input label="Number" value={data.number} />
                                </div>
                            </DialogBody>
                            <DialogFooter>
                                <Button
                                    variant="text"
                                    color="red"
                                    onClick={handleOpen}
                                    className="mr-1"
                                >
                                    <span>Cancel</span>
                                </Button>
                                <Button variant="gradient" color="green" onClick={handleOpen}>
                                    <span>Confirm</span>
                                </Button>
                            </DialogFooter>
                        </Dialog>
                    </div> */}
                </div>
            </CardHeader>
            <CardBody className="px-0">
                <table className="w-full min-w-max table-auto text-left">
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
                        {data && data.length > 0 && data.map((item, index) => (
                            <tr key={index} className="border-b">
                                <td className=" p-4">
                                    <div className="flex flex-col">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {index + 1}
                                        </Typography>
                                    </div>
                                </td>
                                <td className=" p-4">
                                    <div className="flex flex-col">
                                        <Typography variant="small" color="blue-gray" className="font-normal">
                                            {item.country}, {item.province}, {item.district}, {item.commune}, {item.street}, {item.number}
                                        </Typography>
                                    </div>
                                </td>
                                <td className=" p-4">
                                    <EditAddress user_address_id={item.user_address_id} addressData={item} />
                                </td>
                                <td className=" p-4">
                                    <DeleteAddress user_address_id={item.user_address_id} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}
