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

export { fetchBrandsByAdmin, fetchAllBrand, fetchBrandsByFieldId };