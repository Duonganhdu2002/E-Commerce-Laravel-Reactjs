import axios from "./axiosCustom";

const getNotification = (user_id, page) => {
    return axios.get(`/notification/show?user_id=${user_id}&page=${page}`);
}

export { getNotification };