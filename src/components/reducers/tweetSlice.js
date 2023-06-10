import { createSlice } from "@reduxjs/toolkit";

const tweetSlice = createSlice({
  name: "tweet",
  initialState: [],
  reducers: {
    setTweetsState: (state, action) => {
      return action.payload;
    },
    toggleLike: (state, action) => {
      const { user, tweetId } = action.payload;
      const tweet = state.find((tweet) => tweetId === tweet.id);
      console.log(tweet);

      //   if (state.likes.includes(user.id)) {
      //     const index = state.likes.indexOf(user.id);
      //     state.likes.splice(index, 1); // Eliminar el seguidor del array state
      //   } else {
      //     state.likes.push(user.id); // Agregar el seguidor al array state
      //   }
    },
    toggleRetweet: (state, action) => {},
    deleteTweet: (state, action) => {},
  },
});
export const { setTweetsState, toggleLike, toggleRetweet, deleteTweet } =
  tweetSlice.actions;

export default tweetSlice.reducer;
