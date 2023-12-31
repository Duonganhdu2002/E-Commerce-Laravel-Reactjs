import axios from "./axiosCustom";

const fetchAllField = () => {
    return axios.get("/public/Field");
}

export { fetchAllField };