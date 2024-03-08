import axios from "./axiosCustom";

const fetchAllField = () => {
    return axios.get("/public/field/list");
}

const fetchAllFieldAdmin = (page) => {
    return axios.get(`/public/field/listAdmin?page=${page}`);
}

export {fetchAllFieldAdmin, fetchAllField };