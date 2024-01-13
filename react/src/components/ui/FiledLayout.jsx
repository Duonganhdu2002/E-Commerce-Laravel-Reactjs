import React, { useState, useEffect } from 'react';
import { fetchAllField } from '../../services/fieldService';
import { Link } from 'react-router-dom';

export default function FiledLayout() {

    const [listField, setListField] = useState([]);

    useEffect(() => {
        getAllField();
    }, []);

    const getAllField = async () => {
        try {
            let res = await fetchAllField();
            if (res && res.data) {
                setListField(res.data);
            }
        } catch (error) {
            console.error('Error fetching fields:', error);
        }
    }

    // console.log(listField);

    return (
        <div className='flex justify-center items-center '>
            <div className='w-[95%] md:w-[90%] lg:w-[80%] my-4 xl:flex xl:justify-between'>
                {
                    listField && listField.length > 0 && listField.map((fields, index) => (
                        <Link to={`/fields/${fields.field_id}`} key={`fields-${index}`}>

                            <div className=' flex flex-col float-left w-[60px] lg:w-[90px] h-auto mx-2 '>

                                <div className='h-[60px] lg:h-[90px] border border-gray-300 rounded-xl flex justify-center items-center'>
                                    <img className=' w-6 h-6' src={`src/assets/icon_field/${fields.icon_field}`} alt="" />
                                </div>

                                <div className=' h-[20px] flex justify-center items-center my-2'>
                                    <h3 class="text-[12px] lg:text-[14px] font-medium text-gray-600 dark:text-white">{fields.field_name}</h3>
                                </div>

                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    );
}
