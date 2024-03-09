import axios from "./axiosCustom";

const paymentAction = (data) => {
    return axios.post("/payment/payment", data);
}

export { paymentAction };