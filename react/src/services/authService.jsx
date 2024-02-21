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

const sellerLogin = (password) => {
    return axios.post("/user/loginBusiness", password);
}

const userRegister = (userData) => {
    return axios.post("/user/register", userData);
};

const sellerRegister = (sellerData) => {
    return axios.post("/user/createBusiness", sellerData);
};

const getUserInfor = (userId) => {
    return axios.get(`/user/info/${userId}`);
};


export { fetchAllUser, fetchUserPagination, userLogin, sellerLogin, userRegister, sellerRegister, getUserInfor };