import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Content2 from './Content2';
import MenuBar from './MenuBar';
import TaskBar from './TaskBar';
import Content3 from './Content3';

const GuestLayout = () => {
    return (
        <div>
            <h1>This is the Guest Layout Page</h1>
            <Outlet />
        </div>
    );
};

const Content = () => {
    return (
        <div>
            <MenuBar />
            <div className='flex flex-col md:flex-row'>
                <div className='hidden md:block md:w-auto'>
                    <TaskBar />
                </div>
                <div className='hidden md:block w-[100%] md:w-[70%]'>
                    <Routes>
                        <Route path="/" element={<GuestLayout />}>
                            <Route path="login" element={<div>Default Page login</div>} />
                            <Route
                                index
                                element={<div>Default Page Content</div>}
                            />
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Content;
