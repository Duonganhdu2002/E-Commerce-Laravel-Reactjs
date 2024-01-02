import axios from "./axiosCustom";

const fetchAllCategory = () => {
    return axios.get("/public/category/list");
}

const fetchAllCategoryByFieldId = (fieldId) => {
    return axios.get(`/public/category/id=${fieldId}`);
}

export { fetchAllCategory, fetchAllCategoryByFieldId };