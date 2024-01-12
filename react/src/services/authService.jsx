import axios from "./axiosCustom";

const fetchAllUser = () => {
    return axios.get("/auth/auth-list");
}

const fetchUserPagination = (pageNumber) => {
    return axios.get(`/auth/auth?page=${pageNumber}`);
}

const userLogin = (email, password) => {
    return axios.post("/auth/login", { email, password });
}

export { fetchAllUser, fetchUserPagination, userLogin };