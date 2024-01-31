import axios from "./axiosCustom";

const addToCart = (card) => {
    return axios.post("/public/cart/add-to-cart", card);
}

export { addToCart };