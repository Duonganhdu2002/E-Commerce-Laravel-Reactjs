import { useState, useEffect } from 'react';
import {Outlet } from "react-router-dom";
import TaskBar from '../components/ui/user/Taskbar';
import {
    IconButton,
    Drawer,
} from "@material-tailwind/react";
import {
    Bars3Icon,
    XMarkIcon,
} from "@heroicons/react/24/outline";

export default function User() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        if (isDrawerOpen) {
            document.body.style.overflow = 'hidden';
            document.documentElement.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
            document.documentElement.style.overflow = 'auto';
        }
    }, [isDrawerOpen]);

    return (
        <div className='flex justify-center'>
            <div className="md:flex py-4 2xl:w-[80%] lg:w-[90%] w-[98%]">
                <div className='block lg:hidden'>
                    <IconButton variant="text" size="lg" onClick={() => setIsDrawerOpen(!isDrawerOpen)}>
                        {isDrawerOpen ? (
                            <XMarkIcon className="h-8 w-8 stroke-2" />
                        ) : (
                            <Bars3Icon className="h-8 w-8 stroke-2" />
                        )}
                    </IconButton>
                    <Drawer open={isDrawerOpen} onClose={() => setIsDrawerOpen(false)}>
                        <TaskBar />
                    </Drawer>
                </div>
                <div className='hidden lg:block'>
                    <div className=" md:w-auto static left-0 bottom-0">
                        <TaskBar />
                    </div>
                </div>
                <div className="flex-grow w-full md:w-3/4 sm:px-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}
