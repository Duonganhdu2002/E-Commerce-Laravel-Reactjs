import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchAllCategoryByFieldId } from '../../../services/categoryService';
import img from '../../../assets/image/img1.jpg'

export default function Category() {
    const { fieldId } = useParams();
    const [listCategoryById, setListCategoryById] = useState([]);

    useEffect(() => {
        getFetchCategoryByFieldId();
    }, [fieldId]);

    const getFetchCategoryByFieldId = async () => {
        try {
            let res = await fetchAllCategoryByFieldId(fieldId);
            if (res && res.data) {
                setListCategoryById(res.data);
            }
        } catch (error) {
            console.error('Error fetching fields:', error);
        }
    }

    // console.log(listCategoryById);
    // console.log(fieldId);

    return (
        <div className=''>
            <p className='text-sm text-gray-700 ml-2 py-2'>CATEGORY</p>
            <div className='flex overflow-x-auto'>
                {
                    listCategoryById && listCategoryById.length > 0 && listCategoryById.map((category, index) => (
                        <div className='flex-shrink-0 flex-col flex justify-center items-center max-w-[25%]' key={index}>
                            <img src={img} alt="" className='w-full h-auto mb-2' />
                            <p className='text-center text-sm'>{category.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>

    );
}
