import React, { useState } from 'react'
import { useEffect } from 'react'
import { fetchAllField } from '../../services/fieldService';
import { Link } from 'react-router-dom';

export default function FiledLayout() {

    useEffect(() => {
        getAllField();
    }, []);

    const [listField, setListField] = useState([]);

    const getAllField = async () => {
        let res = await fetchAllField();
        if (res && res.data) {
            setListField(res.data);
        }
    }

    console.log(listField);

    return (
        <div>
            {
                listField && listField.length > 0 &&
                listField.map((fields, index) => {
                    return (
                            <div className=' float-left w-96 h-96' key={`users-${index}`}>
                                <img className=' w-14 h-14' src={`/src/assets/icon_field/${fields.icon_field}`} alt="" />
                                <p>{fields.field_name}</p>
                            </div>
                    )
                })
            }
        </div>
    )
}
