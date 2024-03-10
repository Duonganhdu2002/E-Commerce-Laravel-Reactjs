import axios from "./axiosCustom";

const paymentAction = (data) => {
    return axios.post("/payment/payment", data);
}

const paymentSave = (data) => {
    return axios.post("/payment/save", data);
}

export { paymentSave, paymentAction };