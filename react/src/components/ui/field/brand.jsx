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

  console.log(listBrandById);
  console.log(fieldId);

  return (
    <div>
      {
        listBrandById && listBrandById.length > 0 && listBrandById.map((brands, index) => (
          <div key={index}>
            <p>{brands.product_brand_name}</p>
          </div>
        ))
      }
    </div>
  )
}
