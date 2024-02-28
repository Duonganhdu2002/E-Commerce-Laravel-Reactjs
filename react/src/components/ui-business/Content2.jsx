import React from 'react';
import { Outlet } from 'react-router-dom';


const Content2 = () => {
    return (
        <div>
            {/* Content for /business/product */}
            <h1>Product Content</h1>
            <Outlet />
        </div>

    );
}

export default Content2;
