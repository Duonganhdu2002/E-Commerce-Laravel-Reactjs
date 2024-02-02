import axios from "./axiosCustom";

const addToCart = (card) => {
    return axios.post("/public/cart/add-to-cart", card);
}

const getCart = (user_id) => {
    return axios.get(`/public/cart/show/${user_id}`);
}

const updateCart = (shoppingCartId, quantity) => {
    return axios.put(`/public/cart/update/${shoppingCartId}`, quantity);
}

const deleteCart = (shoppingCartId) => {
    return axios.delete(`/public/cart/delete/${shoppingCartId}`);
}


export { addToCart, getCart, updateCart, deleteCart };