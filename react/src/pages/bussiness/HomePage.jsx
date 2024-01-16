import React from 'react';
import MenuBar from '../../components/ui-bussiness/MenuBar';
import TaskBar from '../../components/ui-bussiness/TaskBar';
import Content from '../../components/ui-bussiness/Content';
import ContentMobile from '../../components/ui-bussiness/ContentMobile';

const HomePage = () => {
    return (
        <div>
            <MenuBar />
            <div className=' flex flex-col md:flex-row'>
                <div className='hidden md:block md:w-auto'>
                    <TaskBar />
                </div>
                <div className=' hidden md:block w-[100%] md:w-[70%]'>
                    <Content />
                </div>
                <div className=' md:hidden'>
                    <ContentMobile/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
