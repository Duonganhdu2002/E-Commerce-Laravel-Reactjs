import {
    Card,
    CardHeader,
    CardBody,
    Typography,
    Button,
} from "@material-tailwind/react";

import Background from '../../assets/sale/sale7.png';
import Avatar from '../../assets/public/profile/thaicong.jpg'

export function Profile() {
    return (
        <Card className="mt-6 w-full">
            <CardHeader color="blue-gray" className="relative h-60">
                <div className=" absolute right-4 top-4"><Button>Upload Cover</Button></div>
                <div className="w-full h-full">
                    <img
                        src={Background}
                        alt="card-image"
                        className="flex w-full h-full object-cover"
                    />
                </div>
            </CardHeader>
            <Card className="absolute rounded-3xl mt-40 sm:mt-40 sm:ml-14 shadow-none flex items-center sm:items-start w-full bg-white/0">
                <img src={Avatar} alt="" className="w-[140px] rounded-3xl" />
                <div className=" mt-2 ml-0 sm:ml-3 flex items-center gap-x-3 cursor-pointer">
                    <p>Change</p>
                    <p>Delete</p>
                </div>
            </Card>
            <div className="sm:ml-60 sm:mt-2 mt-32 flex justify-center sm:justify-start">
                <div>
                    <Typography variant="h2" color="blue-gray">Jonh Wich</Typography>
                    <Typography>UI/UX Neflf@namail.com</Typography>
                </div>
            </div>
            <CardBody className=" sm:mt-6">
                <div>
                    <div className="flex px-6 py-2 border-b-2 items-center">
                        <div className=" flex items-center gap-x-4 sm:w-[15%]">
                            <p className=" font-semibold text-xl">My Profile:</p>
                        </div>
                        <div className="flex items-center ml-2 gap-x-4 sm:w-[70%]">
                            <p>NTD29112004</p>
                        </div>
                        <Button className=" hidden sm:block sm:w-[15%]" variant="text">Edit</Button>
                    </div>
                    <div className="flex px-6 py-2 border-b-2 items-center">
                        <div className=" flex items-center gap-x-4 sm:w-[15%]">
                            <p className=" font-semibold text-xl">Phone:</p>
                        </div>
                        <div className="flex items-center ml-2 gap-x-4 sm:w-[70%]">
                            <p>*******120</p>
                        </div>
                        <Button className=" hidden sm:block sm:w-[15%]" variant="text">Edit</Button>
                    </div>
                    <div className="flex px-6 py-2 border-b-2 items-center">
                        <div className=" flex items-center gap-x-4 sm:w-[15%]">
                            <p className=" font-semibold text-xl">Email:</p>
                        </div>
                        <div className="flex items-center ml-2 gap-x-4 sm:w-[70%]">
                            <p>du******@gmail.com</p>
                        </div>
                        <Button className=" hidden sm:block sm:w-[15%]" variant="text">Edit</Button>
                    </div>
                    <div className="flex px-6 py-2 border-b-2 items-center">
                        <div className=" flex items-center gap-x-4 sm:w-[15%]">
                            <p className=" font-semibold text-xl">Password:</p>
                        </div>
                        <div className="flex items-center ml-2 gap-x-4 sm:w-[70%]">
                            <p>Remember, you should regularly change your password to avoid security problems</p>
                        </div>
                        <Button className=" hidden sm:block sm:w-[15%]" variant="text">Edit</Button>
                    </div>
                    <Button className="w-full block sm:hidden" variant="outlined">Edit</Button>
                </div>
            </CardBody>
        </Card>
    );
}

export default Profile;
