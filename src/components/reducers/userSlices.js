/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUserCredentials: (state, action) => {
      return action.payload;
    },
    clearUser: (state) => {
      return null;
    },
  },
});
export const { setUserCredentials, clearUser } = userSlice.actions;
export default userSlice.reducer;
