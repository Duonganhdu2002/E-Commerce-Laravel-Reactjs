import { Typography } from '@material-tailwind/react';
import React from 'react';

const ShopOrder = () => {
    return (
        <div className='shadow-lg shadow-blue-gray-900/15 h-auto'>
            <div className=' flex justify-between p-2'>
                <Typography>Orders</Typography>
                <Typography>See Orders History</Typography>
            </div>
            <div className=' grid-cols-4 gap-2 flex pt-0 py-2'>
                <div className=' cursor-pointer w-full py-2 bg-blue-gray-50 rounded-md flex flex-col justify-center items-center'>
                    <Typography className=' text-xl font-bold'>0</Typography>
                    <Typography className=' text-xs text-center'>Waiting for delivery</Typography>
                </div>
                <div className=' cursor-pointer w-full py-2 bg-blue-gray-50 rounded-md flex flex-col justify-center items-center'>
                    <Typography className=' text-xl font-bold'>0</Typography>
                    <Typography className=' text-xs text-center'>Waiting for delivery</Typography>
                </div>
                <div className=' cursor-pointer w-full py-2 bg-blue-gray-50 rounded-md flex flex-col justify-center items-center'>
                    <Typography className=' text-xl font-bold'>0</Typography>
                    <Typography className=' text-xs text-center'>Waiting for delivery</Typography>
                </div>
                <div className=' cursor-pointer w-full py-2 bg-blue-gray-50 rounded-md flex flex-col justify-center items-center'>
                    <Typography className=' text-xl font-bold'>0</Typography>
                    <Typography className=' text-xs text-center'>Waiting for delivery</Typography>
                </div>
            </div>
        </div>
    );
}

export default ShopOrder;
