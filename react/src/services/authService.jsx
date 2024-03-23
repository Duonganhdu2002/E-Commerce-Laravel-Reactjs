import axios from "./axiosCustom";

const fetchAllUser = (type_id, page) => {
    return axios.get(`/user/auth-list/${type_id}?page=${page}`);
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

const userDelete = (userId) => {
    return axios.delete(`/user/delete/${userId}`);
};


const userAddress = (userId) => {
    return axios.get(`/user/address/${userId}`);
};

const updateAddress = (addressId, dataUpdate) => {
    return axios.put(`/user/address/update/${addressId}`, dataUpdate)
};

const deleteAddress = (addressId) => {
    return axios.delete(`/user/address/delete/${addressId}`)
};

const addAddress = (addressData) => {
    return axios.post("/user/user-addresses", addressData);
};

export { adminLogin, fetchAllUser, fetchUserPagination, userLogin, sellerLogin, userRegister, sellerRegister, getUserInfor, userDelete, userAddress, updateAddress, deleteAddress, addAddress };
