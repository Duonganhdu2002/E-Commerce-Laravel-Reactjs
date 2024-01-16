import React from 'react';
import { Button, Typography, Avatar, List, ListItem } from '@material-tailwind/react';

const ContentMobile = () => {
    return (
        <div>
            <div className=' flex w-full h-12 bg-blue-gray-200'>
                <Avatar src="../../assets/image/Bedroom1.1.jpg" />
                <Typography>ghghas</Typography>
                <Button>Visit store</Button>
            </div>
        </div>
    );
}

export default ContentMobile;
