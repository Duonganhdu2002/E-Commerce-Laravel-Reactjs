import axios from "./axiosCustom";

const fetchAllUser = () => {
    return axios.get("/public/User");
}

export {fetchAllUser};