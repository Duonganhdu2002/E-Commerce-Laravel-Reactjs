import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { sellerLogin } from "../../services/authService";

// Hành động để tải dữ liệu người dùng từ cookies khi trang được tải
export const loadSellerFromCookies = () => {
  const cookieValue = document.cookie
    .split('; ')
    .find(row => row.startsWith('seller='))
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

export const loginSeller = createAsyncThunk(
  'seller/loginSeller',
  async (sellerCredential) => {
    const request = await sellerLogin(sellerCredential);
    const response = await request.data;

    // Lưu dữ liệu người dùng vào cookie an toàn
    setSecureCookie('seller', response);

    return response;
  }
);

const sellerSlice = createSlice({
  name: "seller",
  initialState: {
    loading: false,
    seller: loadSellerFromCookies(), // Tải người dùng từ cookie khi trang được tải
    error: null,
  },
  reducers: {
    setSeller: (state, action) => {
      state.seller = action.payload;

      // Lưu dữ liệu người dùng đã cập nhật vào cookie an toàn
      setSecureCookie('seller', action.payload);
    },
    clearSeller: (state) => {
      state.seller = null;
      state.loading = false;
      state.error = null;

      // Xóa dữ liệu người dùng khỏi cookie an toàn
      setSecureCookie('seller', '', { expires: 'Thu, 01 Jan 1970 00:00:00 GMT' });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginSeller.pending, (state) => {
        state.loading = true;
        state.seller = null;
        state.error = null;
      })
      .addCase(loginSeller.fulfilled, (state, action) => {
        state.loading = false;
        state.seller = action.payload;
        state.error = null;
      })
      .addCase(loginSeller.rejected, (state, action) => {
        state.loading = false;
        state.seller = null;
        console.log(action.error.message);
        if (action.error.message === "Fail") {
          state.error = "Deo duoc";
        } else {
          state.error = action.error.message;
        }
      });
  },
});

export const { setSeller, clearSeller } = sellerSlice.actions;

export default sellerSlice.reducer;
