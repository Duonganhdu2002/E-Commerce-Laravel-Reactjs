import React, { useState, useEffect } from 'react';
import { fetchAllField } from '../../services/fieldService';
import { Link } from 'react-router-dom';

export default function FiledLayout() {

    const [listField, setListField] = useState([]);
    const [loading, setLoading] = useState(true); // Thêm state để theo dõi trạng thái tải

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
        } finally {
            setLoading(false); // Kết thúc tải dữ liệu
        }
    }

    return (
        <div className='flex justify-center items-center my-8 '>
            <div className='w-[95%] md:w-[90%] lg:w-[80%] mx-auto grid grid-cols-5 lg:grid-cols-8 xl:grid-cols-10 md:grid-cols-6 justify-items-center justify-center gap-y-8 gap-x-6'>
                {loading ? ( // Kiểm tra nếu đang tải, render skeleton loader
                    Array.from({ length: 9 }).map((_, index) => (
                        <div key={`skeleton-${index}`} className='animate-pulse flex flex-col float-left w-[60px] lg:w-[90px] h-auto mx-2'>
                            <div className='h-[60px] lg:h-[90px] bg-gray-200 rounded-xl'></div>
                            <div className='h-[20px] bg-gray-200 my-2 rounded-xl'></div>
                        </div>
                    ))
                ) : (
                    listField && listField.length > 0 && listField.map((fields, index) => (
                        <Link to={`/fields/${fields.field_id}`} key={`fields-${index}`}>
                            <div className='flex flex-col float-left w-[60px] lg:w-[90px] h-auto mx-2 duration-500 hover:scale-110 hover:transform hover:-translate-y-2'>
                                <div className='h-[60px] lg:h-[90px] border border-gray-300 rounded-xl flex justify-center items-center'>
                                    <img className='w-5 h-5' src={`src/assets/icon_field/${fields.icon_field}`} alt="" />
                                </div>
                                <div className='h-[20px] flex justify-center items-center my-2'>
                                    <h3 className="text-[12px] lg:text-[14px] font-medium text-gray-600 dark:text-white">{fields.field_name}</h3>
                                </div>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}
