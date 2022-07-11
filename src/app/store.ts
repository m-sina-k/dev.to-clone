import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import uiSlice from "features/uiSlice";
import authSlice from "features/authSlice";
import { themePersistMiddleware } from "app/middlewares/themePersist";
import { authPersistMiddleware } from "app/middlewares/authPersist";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authPersistMiddleware)
      .concat(themePersistMiddleware),
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
