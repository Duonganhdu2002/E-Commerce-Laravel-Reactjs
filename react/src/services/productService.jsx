import axios from "./axiosCustom";

const fetchTop6CategoryById = (id) => {
    return axios.get(`/public/product/best-selling-products/${id}`);
}

const fetchProductWithCategory = (id) => {
    return axios.get(`/public/product/listProductWithCategory/${id}`);
}

const productInformation = (id) => {
    return axios.get(`/public/product/show/${id}`)
}

const productSugession = (userId) => {
    return axios.get(`/public/product/recommend/${userId}`)
}

const fetchRandomFourCategoryAndGetFourProduct = () => {
    return axios.get("/public/product/getRandomCategories")
}

export { fetchTop6CategoryById, fetchProductWithCategory, productInformation, productSugession,fetchRandomFourCategoryAndGetFourProduct };
