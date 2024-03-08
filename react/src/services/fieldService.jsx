import axios from "./axiosCustom";

const fetchAllField = () => {
    return axios.get("/public/field/list");
}

const fetchAllFieldAdmin = (page) => {
    return axios.get(`/public/field/listAdmin?page=${page}`);
}

const deleteField = (field_id) => {
    return axios.delete(`/public/field/${field_id}`)
}

const updateField = (field_id, dataUpdate) => {
    return axios.put(`/public/field/${field_id}`, dataUpdate)
}

const fieldInformation = (id) => {
    return axios.get(`/public/field/${id}`)
}

export {fetchAllFieldAdmin, fetchAllField, deleteField, updateField, fieldInformation, };
