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
        <div className='flex justify-center items-center mt-2 md:mt-4 lg:mt-8'>
            <div className='w-[95%] md:w-[90%] lg:w-[80%]'>
                {
                    listField && listField.length > 0 && listField.map((fields, index) => (
                        <Link to={`/fields/${fields.field_id}`} key={`fields-${index}`}>
                            <div className='float-left w-[20%] md:w-[10%] h-[60px] flex flex-col justify-center items-center transition-transform transform hover:translate-y-[-10px]'>
                                <img className='w-6 h-6' src={`src/assets/icon_field/${fields.icon_field}`} alt="" />
                                <p className='text-xs md:text-sm lg:text-lg mt-2'>{fields.field_name}</p>
                            </div>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}
