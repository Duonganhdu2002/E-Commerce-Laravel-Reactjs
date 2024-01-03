import React, { useState, useEffect } from 'react';
import { fetchBrandsByFieldId } from '../../../services/brandService';
import { useParams } from 'react-router-dom';


export default function Brand() {

  const { fieldId } = useParams(); //Nhận tham số từ URL
  const [listBrandById, setListBrandById] = useState([]);

  useEffect(() => {
    getFetchBrandsByFieldId();
  }, [fieldId]);

  const getFetchBrandsByFieldId = async () => {
    try {
      let res = await fetchBrandsByFieldId(fieldId);
      if (res && res.data) {
        setListBrandById(res.data);
      }
    } catch (error) {
      console.error('Error fetching fields:', error);
    }
  }

  // console.log(listBrandById);
  // console.log(fieldId);

  return (
    <div>
      {
        listBrandById && listBrandById.length > 0 && listBrandById.map((brands, index) => (
          <div className='flex-shrink-0 flex justify-center items-center max-w-[25%]' key={index}>
            <img className='w-full h-auto mb-2' src={`src/assets/icon_brand/${brands.logo}`} alt="img" />
          </div>
        ))
      }
    </div>
  )
}
