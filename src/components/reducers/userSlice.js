/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUserCredentials: (state, action) => {
      return action.payload;
    },
    toggleFollow: (state, action) => {
      const { userToFollow } = action.payload;

      if (state.following.includes(userToFollow.id)) {
        const index = state.following.indexOf(userToFollow.id);
        state.following.splice(index, 1);
      } else {
        state.following.push(userToFollow.id);
      }
    },

    clearUser: (state) => {
      return null;
    },
  },
});
export const { setUserCredentials, clearUser, toggleFollow } =
  userSlice.actions;
export default userSlice.reducer;
