import axios from "./axiosCustom";

const handleOrder = (data) => {
    return axios.post("/public/order/make", data);
}

const listOrder = (seller_id, page) => {
    return axios.get(`/public/order/${seller_id}?page=${page}`);
}

const listOrderCancled = (seller_id, page) => {
    return axios.get(`/public/order/disable/${seller_id}?page=${page}`);
}

const orderItems = (order_id) => {
    return axios.get(`/public/order/details/${order_id}`);
}

const orderShipped = (order_id, page) => {
    return axios.get(`/public/order/shipped-orders/${order_id}?page=${page}`);
}

const getAllOrder = (page) => {
    return axios.get(`/public/order/list?page=${page}`);
}

const checkOrder = (user_id, product_id) => {
    return axios.get(`/public/order/purchase?user_id=${user_id}&product_id=${product_id}`);
}

const updateOrderStatus = (order_id) => {
    return axios.put(`/public/order/update-order-status/${order_id}`)
}

export { checkOrder, getAllOrder, orderShipped, orderItems, listOrderCancled, handleOrder, listOrder, updateOrderStatus };
