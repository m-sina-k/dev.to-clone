import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import uiSlice from "features/uiSlice";
import authSlice from "features/authSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    auth: authSlice,
  },
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
