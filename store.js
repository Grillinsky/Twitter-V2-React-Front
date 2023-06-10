import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./src/components/reducers/userSlice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import tweetReducer from "./src/components/reducers/tweetSlice";

const userPersistConfig = {
  key: "user",
  storage,
};
const tweetPersistConfig = {
  key: "tweet",
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(userPersistConfig, userReducer),
  tweet: persistReducer(tweetPersistConfig, tweetReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
