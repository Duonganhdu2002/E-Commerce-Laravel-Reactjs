import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { adminLogin } from "../../services/authService";

// Hành động để tải dữ liệu người dùng từ cookies khi trang được tải
export const loadAdminFromCookies = () => {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('admin='))
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

export const loginAdmin = createAsyncThunk(
  'amdin/loginAdmin',
  async (adminCredential) => {
    const request = await adminLogin(adminCredential);
    const response = await request.data;

    // Lưu dữ liệu người dùng vào cookie an toàn
    setSecureCookie('admin', response);

    return response;
  }
);

const adminSlice = createSlice({
  name: "admin",
  initialState: {
    loading: false,
    admin: loadAdminFromCookies(), // Tải người dùng từ cookie khi trang được tải
    error: null,
  },
  reducers: {
    setAdmin: (state, action) => {
      state.admin = action.payload;

      // Lưu dữ liệu người dùng đã cập nhật vào cookie an toàn
      setSecureCookie('admin', action.payload);
    },
    clearAdmin: (state) => {
      state.admin = null;
      state.loading = false;
      state.error = null;

      // Xóa dữ liệu người dùng khỏi cookie an toàn
      setSecureCookie('admin', '', { expires: 'Thu, 01 Jan 1970 00:00:00 GMT' });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAdmin.pending, (state) => {
        state.loading = true;
        state.admin = null;
        state.error = null;
      })
      .addCase(loginAdmin.fulfilled, (state, action) => {
        state.loading = false;
        state.admin = action.payload;
        state.error = null;
      })
      .addCase(loginAdmin.rejected, (state, action) => {
        state.loading = false;
        state.admin = null;
        console.log(action.error.message);
        if (action.error.message === "Fail") {
          state.error = "Deo duoc";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export const { setAdmin, clearAdmin } = adminSlice.actions;

export default adminSlice.reducer;
