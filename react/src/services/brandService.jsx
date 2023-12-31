import axios from "./axiosCustom";

const fetchAllBrand = () => {
    return axios.get("/public/brand/list");
}

const fetchBrandsByFieldId = (fieldId) => {
    return axios.get(`/public/brand/field/${fieldId}`);
}

export { fetchAllBrand, fetchBrandsByFieldId };