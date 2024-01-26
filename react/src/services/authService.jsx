import axios from "./axiosCustom";

const fetchAllUser = () => {
    return axios.get("/auth/auth-list");
}

const fetchUserPagination = (pageNumber) => {
    return axios.get(`/auth/auth?page=${pageNumber}`);
}

const userLogin = (password) => {
    return axios.post("/user/login", password);
}

export { fetchAllUser, fetchUserPagination, userLogin };