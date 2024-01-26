import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './slices/counterSlice'
import userSlice from './slices/userSlice'

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    user: userSlice,
  },
})

export default store;