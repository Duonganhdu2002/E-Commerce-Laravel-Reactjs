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

const fetchAllCategoryByAdmin = (page) => {
    return axios.get(`/public/category/listCategory?page=${page}`);
}

const deleteCategory = (product_category_id) => {
    return axios.delete(`/public/category/${product_category_id}`);
}

const updateCategory = (product_category_id) => {
    return axios.put(`/public/category/${product_category_id}`);
}
const categoryInformation = (product_category_id) => {
    return axios.get(`/public/category/show/${product_category_id}`);
}

export { fetchAllCategoryByAdmin, fetchAllCategory, fetchAllCategoryByFieldId, fetchAllCategoryByUser, deleteCategory, updateCategory, categoryInformation };
