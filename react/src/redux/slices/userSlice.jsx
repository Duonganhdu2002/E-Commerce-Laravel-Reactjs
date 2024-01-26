import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../../services/authService";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredential) => {
        const request = await userLogin(userCredential);
        const response = await request.data;
        return response;
    }
)

const userSlice = createSlice({
    name: "user",
    initialState: {
        loading: false,
        user: null,
        error: null,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        clearUser: (state) => {
            state.user = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message === "Fail") {
                    state.error = "Deo duoc";
                } else {
                    state.error = action.error.message;
                }
            });
    }
})

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
