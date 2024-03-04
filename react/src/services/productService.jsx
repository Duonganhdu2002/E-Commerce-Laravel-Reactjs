import axios from "./axiosCustom";

const fetchTop6CategoryById = (id) => {
    return axios.get(`/public/product/best-selling-products/${id}`);
}

const fetchProductWithCategory = (id) => {
    return axios.get(`/public/product/indexByCate/${id}`);
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

const searchProduct = (searchKey, user_id, page) => {
    return axios.get(`/public/product/search-products?name=${searchKey}&page=${page}` + (user_id ? `&user_id=${user_id}` : ''));
}

const productWithBrand = (brandId, page) => {
    return axios.get(`/public/product/indexByBrand/${brandId}?page=${page}`)
}

const productSort = (sortType, page) => {
    return axios.get(`/public/product/sort-products/${sortType}?page=${page}`)
}

const bestSellerUser = (user_id) => {
    return axios.get(`/public/product/best-selling-user-products/${user_id}`)
}

const productFilter = (data, page) => {
    return axios.post(`/public/product/filterByCategoriesAndBrands?page=${page}`, data)
}

const productListShop = (data, page) => {
    return axios.get(`/public/product/shop/${data}?page=${page}`)
}

const deleteProduct = (product_id) => {
    return axios.delete(`/public/product/delete/${product_id}`)
}

const updateProduct = (product_id, dataUpdate) => {
    return axios.put(`/public/product/update/${product_id}`, dataUpdate)
}
const addProduct = (data) => {
    return axios.post(`/public/product/add` , data )
}

export { updateProduct, deleteProduct, productListShop, productFilter, bestSellerUser, productSort, productWithBrand, fetchTop6CategoryById, fetchProductWithCategory, productInformation, productSugession, fetchRandomFourCategoryAndGetFourProduct, searchProduct, addProduct };
