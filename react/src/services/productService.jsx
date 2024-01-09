import axios from "./axiosCustom";

const fetchTop6CategoryById = (id) => {
    return axios.get(`/public/product/best-selling-products/${id}`);
}

export { fetchTop6CategoryById };
