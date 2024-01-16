import React from 'react';
import MenuBar from '../../components/ui-bussiness/MenuBar';
import TaskBar from '../../components/ui-bussiness/TaskBar';
import Content from '../../components/ui-bussiness/Content';

const HomePage = () => {
    return (
        <div>
            <MenuBar />
            <div className=' flex'>
                <div className=' w-1/5'>
                    <TaskBar />
                </div>
                <div className=' w-4/5'>
                    <Content />
                </div>
            </div>
        </div>
    );
}

export default HomePage;
