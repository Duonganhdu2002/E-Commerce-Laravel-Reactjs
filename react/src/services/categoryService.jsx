import axios from "./axiosCustom";

const fetchAllCategory = () => {
    return axios.get("/public/category/list");
}

const fetchAllCategoryByFieldId = (fieldId) => {
    return axios.get(`/public/category/id=${fieldId}`);
}

const fetchAllCategoryByUser = (user_id) => {
    return axios.get(`/public/category/${user_id}`);
}

export { fetchAllCategory, fetchAllCategoryByFieldId, fetchAllCategoryByUser };