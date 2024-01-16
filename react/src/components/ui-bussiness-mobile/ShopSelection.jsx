import { Link } from 'react-router-dom';
import { Typography } from '@material-tailwind/react';
import React from 'react';
import Image from "../../assets/icon/cancle.svg";

const ShopSelection = () => {
    const shopData = [
        { id: 1, icon: Image, status: 'My Product', link: "/bussiness/products"},
        { id: 2, icon: Image, status: 'Completed' },
        { id: 3, icon: Image, status: 'Waiting for delivery' },
        { id: 4, icon: Image, status: 'In progress' },
        { id: 5, icon: Image, status: 'Completed' },
        { id: 6, icon: Image, status: 'Waiting for delivery' },
    ];

    return (
        <div className='shadow-lg shadow-blue-gray-900/15 h-auto mt-4'>
            <div className='grid grid-cols-3 gap-2 pt-0 p-2'>
                {shopData.map(({ id, icon, status, link }) => (
                    <Link key={id} to={link}>
                        <div className='cursor-pointer w-full py-4 bg-opacity-50 bg-gray-200 rounded-md flex flex-col justify-center items-center'>
                            <img className='w-6 h-6' src={icon} alt="" />
                            <Typography className='text-xs text-center text-gray-700'>{status}</Typography>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ShopSelection;
