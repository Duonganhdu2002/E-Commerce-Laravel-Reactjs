import axios from "./axiosCustom";

const fetchTop6Category27Sale = () => {
    return axios.get("/public/product/best-selling-products/27");
}

export { fetchTop6Category27Sale };