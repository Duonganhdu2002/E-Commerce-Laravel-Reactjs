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
import { deleteAddress, updateAddress, userAddress, addAddress } from "../../../services/authService";




const TABLE_HEAD = ["Id", "Address", "Edit", "Delete"];

const EditAddress = ({ user_address_id, addressData, user_id, updateAddressList }) => {
    const [open, setOpen] = useState(false);
    const [country, setCountry] = useState(addressData.country || '');
    const [province, setProvince] = useState(addressData.province || '');
    const [district, setDistrict] = useState(addressData.district || '');
    const [commune, setCommune] = useState(addressData.commune || '');
    const [street, setStreet] = useState(addressData.street || '');
    const [number, setNumber] = useState(addressData.number || '');

    const handleOpen = () => setOpen(!open);

    const handleInputChange = (event, setterFunction) => {
        setterFunction(event.target.value);
    };

    const handleUpdate = async () => {
        try {
            const dataUpdate = {
                user_id: user_id,
                country: country,
                province: province,
                district: district,
                commune: commune,
                street: street,
                number: number
            };
            console.log(dataUpdate);
            await updateAddress(user_address_id, dataUpdate);
            alert("Update successful");
            // Gọi hàm updateAddressList từ props để cập nhật danh sách địa chỉ
            updateAddressList();
        } catch (error) {
            alert(error);
        }
    };



    useEffect(() => {
        setCountry(addressData.country || '');
        setProvince(addressData.province || '');
        setDistrict(addressData.district || '');
        setCommune(addressData.commune || '');
        setStreet(addressData.street || '');
        setNumber(addressData.number || '');
    }, [addressData]);

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


const DeleteAddress = ({ user_address_id, updateAddressList }) => {

    const handleDelete = async () => {
        try {
            let res = await deleteAddress(user_address_id);
            console.log(res);
            updateAddressList();
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
    const [open, setOpen] = useState(false);


    const user_id = useSelector((state) => state.user.user.user_id);
    const [newAddress, setNewAddress] = useState({
        country: '',
        province: '',
        district: '',
        commune: '',
        street: '',
        number: ''
    });

    useEffect(() => {
        fetchData(); // Lấy danh sách địa chỉ khi component được mount
    }, [user_id]);

    const fetchData = async () => {
        try {
            let res = await userAddress(user_id);
            setDataFull(res);
            setData(res.data);
        } catch (error) {
            console.error("Error fetching fields:", error);
        }
    }

    const handleOpen = () => setOpen(!open);

    const handleInputChange = (event, field) => {
        // Hàm xử lý sự kiện khi người dùng nhập dữ liệu vào input
        setNewAddress({
            ...newAddress,
            [field]: event.target.value
        });
    };

    const handleAddAddress = async () => {
        // Hàm xử lý sự kiện khi người dùng xác nhận thêm địa chỉ mới
        try {
            await addAddress({ ...newAddress, user_id });
            alert("Add new address successful");
            fetchData(); // Cập nhật lại danh sách địa chỉ sau khi thêm thành công
            setOpen(false); // Đóng Dialog
        } catch (error) {
            console.error("Error adding new address:", error);
        }
    };

    const updateAddressList = async () => {
        try {
            let res = await userAddress(user_id);
            setDataFull(res);
            setData(res.data);
        } catch (error) {
            console.error("Error fetching fields:", error);
        }
    }



    return (
        <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
                <div className=" flex items-center justify-between gap-8">
                    <div>
                        <Typography variant="h5" color="blue-gray">
                            My Addresses
                        </Typography>
                    </div>
                    <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                        <Button className="flex items-center gap-3" size="sm" onClick={handleOpen}>
                            <PlusIcon strokeWidth={2} className="h-4 w-4" /> Add New Address
                        </Button>
                        <Dialog open={open} handler={handleOpen}>
                            <DialogHeader>Add Address</DialogHeader>
                            <DialogBody className="flex gap-6">
                                <div className="flex flex-col gap-3 w-[50%]">
                                    <Input label="Country" value={newAddress.country} onChange={(event) => handleInputChange(event, 'country')} />
                                    <Input label="Province" value={newAddress.province} onChange={(event) => handleInputChange(event, 'province')} />
                                    <Input label="District" value={newAddress.district} onChange={(event) => handleInputChange(event, 'district')} />
                                </div>
                                <div className="flex flex-col gap-3 w-[50%]">
                                    <Input label="Commune" value={newAddress.commune} onChange={(event) => handleInputChange(event, 'commune')} />
                                    <Input label="Street" value={newAddress.street} onChange={(event) => handleInputChange(event, 'street')} />
                                    <Input label="Number" value={newAddress.number} onChange={(event) => handleInputChange(event, 'number')} />
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
                                <Button variant="gradient" color="green" onClick={handleAddAddress}>
                                    <span>Confirm</span>
                                </Button>
                            </DialogFooter>
                        </Dialog>
                    </div>
                </div>
            </CardHeader>
            <CardBody className="px-6">
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
                                    <EditAddress user_address_id={item.user_address_id} addressData={item} user_id={user_id} updateAddressList={updateAddressList} />
                                </td>
                                <td className=" p-4">
                                    <DeleteAddress user_address_id={item.user_address_id} updateAddressList={updateAddressList}/>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </CardBody>
        </Card>
    );
}
