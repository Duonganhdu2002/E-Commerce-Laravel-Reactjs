import axios from "./axiosCustom";

const fetchTop6CategoryById = (id) => {
    return axios.get(`/public/product/best-selling-products/${id}`);
}

const fetchProductWithCategory = (id) => {
    return axios.get(`/public/product/product-with-category/${id}`);
}

const fetchDisplayProduct = (id) => {
    return axios.get(`/public/product/product-with-category/${id}`);
}

export { fetchTop6CategoryById, fetchProductWithCategory, fetchDisplayProduct };
