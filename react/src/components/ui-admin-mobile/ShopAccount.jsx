import React from 'react';

import { Button, Typography, Avatar, List, ListItem } from '@material-tailwind/react';
import Imgae from "../../assets/image/Bedroom2.jpg"

const ShopAccount = () => {
    return (
        <div className=' flex w-full h-16 py-4 justify-center items-center shadow-lg shadow-blue-gray-900/10'>
            <div className=' w-[20%] flex justify-center items-center'>
                <Avatar src={Imgae} />
            </div>
            <div className=' w-[50%]'>
                <Typography className=' font-bold'>Shop name</Typography>
            </div>
            <div className=' w-[30%]'>
                <Button variant="outlined" className=' text-xs' size='sm'>Visit store</Button>
            </div>
        </div>
    );
}

export default ShopAccount;
