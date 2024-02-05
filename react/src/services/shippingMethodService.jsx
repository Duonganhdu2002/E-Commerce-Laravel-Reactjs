import axios from "./axiosCustom";

const getShippingMethod = () => {
    return axios.get("/shopping-method/show");
}

export { getShippingMethod };