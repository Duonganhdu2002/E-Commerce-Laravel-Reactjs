import React from 'react';
import { Outlet } from 'react-router-dom';


const Content2 = () => {
    return (
        <div>
            {/* Content for /admin/product */}
            <h1>Product Content</h1>
            <Outlet />
        </div>

    );
}

export default Content2;
