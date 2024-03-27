// set users credentials to localStorage and remove them
import { createSlice } from "@reduxjs/toolkit";
// if there is user info (not the token!)in localStorage we want to use them if not null, and it is stored in the localStorage as a string so we parse it into a js object
const initialState = {
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  credentials: "include",
  reducers: {
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem("userInfo", JSON.stringify(action.payload));
    },
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem("userInfo");
    },
  },
});
// to use it when we want it
export const { setCredentials, logout } = authSlice.actions;
// to put it in our store
export default authSlice.reducer;
