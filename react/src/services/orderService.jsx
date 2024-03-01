import axios from "./axiosCustom";

const handleOrder = (data) => {
    return axios.post("/public/order/make", data);
}

const listOrder = (seller_id) => {
    return axios.get(`/public/order/${seller_id}`);
}

const listOrderCancled = (seller_id) => {
    return axios.get(`/public/order/disable/${seller_id}`);
}

const orderItems = (order_id) => {
    return axios.get(`/public/order/details/${order_id}`);
}

export { orderItems, listOrderCancled, handleOrder, listOrder };