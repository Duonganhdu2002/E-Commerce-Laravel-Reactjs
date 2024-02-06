import axios from "./axiosCustom";

const provincesList = () => {
    return axios.get("/public/location");
}

const districtList = (provinceId) => {
    return axios.get(`/public/location/province=${provinceId}`);
}

const wardList = (districtId) => {
    return axios.get(`/public/location/district=${districtId}`);
}

export { provincesList, districtList, wardList };