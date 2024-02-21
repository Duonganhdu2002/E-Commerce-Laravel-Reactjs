import axios from "./axiosCustom";

const handleOrder = (data) => {
    return axios.post("/public/order/make", data);
}

export { handleOrder };