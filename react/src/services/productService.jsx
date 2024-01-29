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

const searchProduct = (product_name, user_id, page_number) => {
    return axios.get("/public/product/search-products", {
        params: {
            name: product_name,
            user_id: user_id,
            page: page_number
        }
    });
}


export { fetchTop6CategoryById, fetchProductWithCategory, productInformation, productSugession, fetchRandomFourCategoryAndGetFourProduct, searchProduct };
