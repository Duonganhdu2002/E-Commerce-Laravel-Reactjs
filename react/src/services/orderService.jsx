import axios from "./axiosCustom";

const handleOrder = (data) => {
    return axios.post("/public/order/make", data);
}

const listOrder = (seller_id) => {
    return axios.get(`/public/order/${seller_id}`);
}

export { handleOrder, listOrder };