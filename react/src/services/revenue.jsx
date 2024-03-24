import axios from "./axiosCustom";

const getTotalRevenue = (user_id) => {
    return axios.get(`/public/revenue/total/${user_id}`);
}

const getTotalProductRevenue = (user_id) => {
    return axios.get(`/public/revenue/totalProduct/${user_id}`);
}

export { getTotalRevenue, getTotalProductRevenue };
