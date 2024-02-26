import axios from "./axiosCustom";

const fetchAllUser = () => {
    return axios.get("/auth/auth-list");
}

const fetchUserPagination = (pageNumber) => {
    return axios.get(`/auth/auth?page=${pageNumber}`);
}

const userLogin = (userCredential) => {
    return axios.post("/user/login", userCredential);
}

const sellerLogin = (sellerCredential) => {
    return axios.post("/user/loginBusiness", sellerCredential);
}

const adminLogin = (adminCredential) => {
    return axios.post("/user/loginAdmin", adminCredential);
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

export {adminLogin, fetchAllUser, fetchUserPagination, userLogin, sellerLogin, userRegister, sellerRegister, getUserInfor };