import axios from "./axiosCustom";

const getTotalRevenue = (user_id) => {
    return axios.get(`/public/revenue/total/${user_id}`);
}

const getTotalProductRevenue = (user_id) => {
    return axios.get(`/public/revenue/totalProduct/${user_id}`);
}

const getRevenueByMonth = (user_id) => {
    return axios.get(`/public/revenue/per-month/${user_id}`);
}

const productSalesByMonth = (user_id) => {
    return axios.get(`/public/revenue/getSalesByMonth/${user_id}`);
}
export { productSalesByMonth, getRevenueByMonth, getTotalRevenue, getTotalProductRevenue };
