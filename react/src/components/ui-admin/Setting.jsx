import {
    UserIcon,
    PhoneIcon,
    EnvelopeIcon,
    LockClosedIcon,
} from "@heroicons/react/24/outline";
import { Avatar, Button } from "@material-tailwind/react";

export default function Setting() {
    return (
        <div className="relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
            <div className="p-6">
                <h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                    Settings
                </h5>
                <p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
                    Change and set settings
                </p>
            </div>
            <div>
                <div className="flex justify-between px-6 py-2 border-b-2">
                    <div className=" flex items-center gap-x-4 sm:w-40">
                        <UserIcon className="w-8" />
                        <p className=" font-semibold text-xl hidden sm:block">My Profile:</p>
                    </div>
                    <div className="flex items-center gap-x-4">
                        <Avatar
                            src="/src/assets/public/profile/thaicong.jpg"
                            alt="Profile picture"
                            variant="circular"
                        />
                        <p>NTD29112004</p>
                    </div>
                    <Button>Edit</Button>
                </div>
                <div className="flex justify-between px-6 py-2 border-b-2">
                    <div className=" flex items-center gap-x-4 sm:w-40">
                        <PhoneIcon className="w-8" />
                        <p className=" font-semibold text-xl hidden sm:block">Phone:</p>
                    </div>
                    <div className="flex items-center">
                        <p>*******120</p>
                    </div>
                    <Button>Edit</Button>
                </div>
                <div className="flex justify-between px-6 py-2 border-b-2">
                    <div className=" flex items-center gap-x-4 sm:w-40">
                        <EnvelopeIcon className="w-8" />
                        <p className=" font-semibold text-xl hidden sm:block">Email:</p>
                    </div>
                    <div className="flex items-center">
                        <p>du******@gmail.com</p>
                    </div>
                    <Button>Edit</Button>
                </div>
                <div className="flex justify-between px-6 py-2 border-b-2">
                    <div className=" flex items-center gap-x-4 sm:w-40">
                        <LockClosedIcon className="w-8" />
                        <p className=" font-semibold text-xl hidden sm:block">Password:</p>
                    </div>
                    <div className="flex items-center">
                        <p>Remember, you should regularly change your password to avoid security problems</p>
                    </div>
                    <Button>Edit</Button>
                </div>
            </div>
        </div>
    )
}
