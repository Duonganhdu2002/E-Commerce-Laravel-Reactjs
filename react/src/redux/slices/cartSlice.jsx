import { createSlice } from '@reduxjs/toolkit';

// Load cart data from localStorage if available
const initialState = {
    items: JSON.parse(localStorage.getItem('cart')) || [],
    selectedShippingPrice: localStorage.getItem('shippingPrice') || 0,
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action) => {
            const newItem = action.payload;
            state.items = [...state.items, newItem];
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        removeItem: (state, action) => {
            const itemIdToRemove = action.payload;
            state.items = state.items.filter(item => item.id !== itemIdToRemove);
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        updateItemQuantity: (state, action) => {
            const { itemId, newQuantity } = action.payload;
            state.items = state.items.map(item =>
                item.id === itemId ? { ...item, quantity: newQuantity } : item
            );
            localStorage.setItem('cart', JSON.stringify(state.items));
        },
        clearCart: (state) => {
            state.items = [];
            localStorage.removeItem('cart');
        },
        selectShippingPrice: (state, action) => {
            state.selectedShippingPrice = action.payload;
            localStorage.setItem('shippingPrice', action.payload);
        },
        selectShippingMethod: (state, action) => {
            state.selectedShippingMethod = action.payload; 
            localStorage.setItem('shippingMehthod', action.payload);
        },

    },
});

export const { addItem, removeItem, updateItemQuantity, clearCart, selectShippingPrice, selectShippingMethod } = cartSlice.actions;

export default cartSlice.reducer;
