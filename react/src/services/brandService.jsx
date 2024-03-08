import axios from "./axiosCustom";

const fetchAllBrand = () => {
    return axios.get("/public/brand/list");
}

const fetchBrandsByFieldId = (fieldId) => {
    return axios.get(`/public/brand/id=${fieldId}`);
}

const fetchBrandsByAdmin = (page) => {
    return axios.get(`/public/brand/list?page=${page}`);
}

const deleteBrand = (product_brand_id) => {
    return axios.delete(`/public/brand/${product_brand_id}`);
}

const updateBrand = (product_brand_id) => {
    return axios.put(`/public/brand/${product_brand_id}`);
}
const brandInformation = (product_brand_id) => {
    return axios.get(`/public/brand/${product_brand_id}`);
}

export { fetchBrandsByAdmin, fetchAllBrand, fetchBrandsByFieldId, deleteBrand, updateBrand, brandInformation };
