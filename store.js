import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./src/components/reducers/userSlice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";
import tweetsReducer from "./src/components/reducers/tweetSlice";

const rootReducer = combineReducers({
  user: userReducer,
  tweets: tweetsReducer,
});

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
