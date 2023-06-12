/* eslint-disable no-unused-vars */
import { createSlice, current } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweets",
  initialState: [],
  reducers: {
    setTweetsState: (state, action) => {
      return action.payload;
    },
    toggleLike: (state, action) => {
      const { user, tweetId } = action.payload;

      const tweet = state.find((tweet) => tweet.id === tweetId);

      if (tweet.likes.includes(user.id)) {
        const index = tweet.likes.indexOf(user.id);
        tweet.likes.splice(index, 1); // Eliminar el seguidor del array tweet
      } else {
        tweet.likes.push(user.id); // Agregar el seguidor al array state
      }
    },
   
  },
});
export const { setTweetsState, toggleLike } = tweetSlice.actions;

export default tweetSlice.reducer;
