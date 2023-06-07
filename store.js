import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./src/components/reducers/userSlices";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, userReducer);

const store = configureStore({
  reducer: {
    user: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  // Agrega middlewares si es necesario
  // middleware: (getDefaultMiddleware) => [...getDefaultMiddleware()],
  middleware: [thunk],
});

const persistor = persistStore(store);

export { store, persistor };
