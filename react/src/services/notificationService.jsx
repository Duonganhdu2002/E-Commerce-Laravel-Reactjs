import axios from "./axiosCustom";

const getNotification = (user_id, page) => {
    return axios.get(`/notification/show?user_id=${user_id}&page=${page}`);
}

const updateNotification = (notificationId) => {
    return axios.put(`/notification/update/${notificationId}`);
}

const deleteNotification = (notificationId) => {
    return axios.delete(`/notification/delete/${notificationId}`);
}

export { updateNotification, deleteNotification, getNotification };