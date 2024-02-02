import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import userSlice from './slices/userSlice'
import cartSlice from './slices/cartSlice';

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
    cart: cartSlice
  },
})

export default store;