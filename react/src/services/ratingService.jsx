import axios from "./axiosCustom";

const getProductListRating = (user_id, type, page) => {
    return axios.get(`/public/product/rating/${user_id}/${type}?page=${page}`);
}

export { getProductListRating };