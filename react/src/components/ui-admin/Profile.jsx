import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from "@material-tailwind/react";

import React, { useState } from "react";


import { useSelector } from 'react-redux';
import { updateUser } from "../../services/authService";

const UpdateProfile = (user_id) => {

    const admin = useSelector((state) => state.admin.admin);
    const [open, setOpen] = useState(false);
    const [fullName, setFullName] = useState(admin.full_name);
    const [username, setUsername] = useState(admin.username);
    const [telephone, setTelephone] = useState(admin.telephone);
    const [email, setEmail] = useState(admin.email);

    const handleOpen = () => setOpen(!open);

    const dataUpdate = {
        full_name: fullName,
        username: username,
        telephone: telephone,
        email: email
    }

    const handleUpdateProfile = async () => {

        try {
            await updateUser(admin.user_id, dataUpdate);
            alert("Thanh cong")
        } catch (error) {
            alert(error)
        }

        // Tạm thời in thông tin cập nhật ra console
        // console.log("Updated profile:", {
        //     full_name: fullName,
        //     username: username,
        //     telephone: telephone,
        //     email: email
        // });

        setOpen(false);
    };

    return (
        <div>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader>Edit</DialogHeader>
                <DialogBody className="flex flex-col gap-y-4">
                    <Input label="Shop Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                    <Input label="Shop Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Input label="Phone Number" value={telephone} onChange={(e) => setTelephone(e.target.value)} />
                    <Input label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
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
                    <Button variant="gradient" color="green" onClick={handleUpdateProfile}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>

            <Button className=" mt-4" onClick={handleOpen}>
                Edit
            </Button>
        </div>
    )
}
export function Profile() {

    const admin = useSelector((state) => state.admin.admin);
    console.log(admin)


    return (
        <Card className="mt-6 w-full">
            <CardHeader color="blue-gray" className="relative h-60">
                <div className="w-full h-full">
                    <img
                        src={`../../../src/assets/shop/shop_background.png`}
                        alt="card-image"
                        className="flex w-full h-full object-cover"
                    />
                </div>
            </CardHeader>
            <Card className="absolute rounded-3xl mt-40 sm:mt-40 sm:ml-14 shadow-none flex items-center sm:items-start w-full bg-white/0">
                <img src={`../../../src/assets/shop/${admin.avt_image}`} alt="" className="w-[140px] h-[140px] object-cover rounded-3xl" />
            </Card>
            <div className="sm:ml-60 sm:mt-2 mt-32 flex justify-center sm:justify-start">
                <div>
                    <Typography variant="h2" color="blue-gray">{admin.full_name}</Typography>
                    <Typography>{admin.email}</Typography>
                </div>
            </div>
            <CardBody className=" sm:mt-6">
                <div>
                    <div className="flex px-6 py-2 border-b-2 items-center">
                        <div className=" flex items-center gap-x-4 sm:w-[15%]">
                            <p className=" font-semibold">Shop Username:</p>
                        </div>
                        <div className="flex items-center ml-2 gap-x-4 sm:w-[70%]">
                            <p>{admin.username}</p>
                        </div>
                    </div>
                    <div className="flex px-6 py-2 border-b-2 items-center">
                        <div className=" flex items-center gap-x-4 sm:w-[15%]">
                            <p className=" font-semibold">Phone:</p>
                        </div>
                        <div className="flex items-center ml-2 gap-x-4 sm:w-[70%]">
                            <p>{admin.telephone}</p>
                        </div>
                    </div>
                    <div className="flex px-6 py-2 border-b-2 items-center">
                        <div className=" flex items-center gap-x-4 sm:w-[15%]">
                            <p className=" font-semibold">Email:</p>
                        </div>
                        <div className="flex items-center ml-2 gap-x-4 sm:w-[70%]">
                            <p>{admin.email}</p>
                        </div>
                    </div>

                    <div >
                        <UpdateProfile user_id={admin.user_id} />
                    </div>

                </div>
            </CardBody>
        </Card>
    );
}

export default Profile;
