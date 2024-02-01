import axios from "./axiosCustom";

const addToCart = (card) => {
    return axios.post("/public/cart/add-to-cart", card);
}

const getCart = (user_id) => {
    return axios.get(`/public/cart/show/${user_id}`);
}


export { addToCart, getCart };