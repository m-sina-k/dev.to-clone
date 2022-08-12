import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

// slices
import uiSlice from "features/uiSlice";
import authSlice from "features/authSlice";
import uploadPostSlice from "features/uploadPostSlice";
import fetchPostsSlice from "features/fetchPostsSlice";

// middleware
import { themePersistMiddleware } from "app/middleware/themePersist";
import { authPersistMiddleware } from "app/middleware/authPersist";

const store = configureStore({
  reducer: {
    ui: uiSlice,
    auth: authSlice,
    uploadPost: uploadPostSlice,
    fetchPosts: fetchPostsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authPersistMiddleware).concat(themePersistMiddleware),
});

type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export default store;
