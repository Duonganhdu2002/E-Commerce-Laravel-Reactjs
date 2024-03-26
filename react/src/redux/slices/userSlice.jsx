import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userLogin } from "../../services/authService";

// Hành động để tải dữ liệu người dùng từ cookies khi trang được tải
export const loadUserFromCookies = () => {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('user='))
    ?.split('=')[1];

  if (cookieValue) {
    return JSON.parse(decodeURIComponent(cookieValue));
  }
  return null;
};

// Hàm để thiết lập cookie an toàn
const setSecureCookie = (name, value) => {
  const secureCookieOptions = {
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'Strict',
  };

  document.cookie = `${name}=${encodeURIComponent(JSON.stringify(value))}; ${Object.entries(secureCookieOptions).map(([key, val]) => `${key}=${val}`).join('; ')}`;
};

export const loginUser = createAsyncThunk(
  'user/loginUser',
  async (userCredential) => {
    const request = await userLogin(userCredential);
    const response = await request.data;

    // Lưu dữ liệu người dùng vào cookie an toàn
    setSecureCookie('user', response);

    return response;
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: loadUserFromCookies(), // Tải người dùng từ cookie khi trang được tải
    error: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;

      // Lưu dữ liệu người dùng đã cập nhật vào cookie an toàn
      setSecureCookie('user', action.payload);
    },
    clearUser: (state) => {
      state.user = null;
      state.loading = false;
      state.error = null;

      // Xóa dữ liệu người dùng khỏi cookie an toàn
      setSecureCookie('user', '', { expires: 'Thu, 01 Jan 1970 00:00:00 GMT' });
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
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
