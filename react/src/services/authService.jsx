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

const userRegister = (userData) => {
    return axios.post("/user/register", userData);
};

export { fetchAllUser, fetchUserPagination, userLogin, userRegister };