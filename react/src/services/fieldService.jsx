import axios from "./axiosCustom";

const fetchAllField = () => {
    return axios.get("/public/field/list");
}

export { fetchAllField };