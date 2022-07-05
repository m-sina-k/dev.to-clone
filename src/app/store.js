import { configureStore } from "@reduxjs/toolkit";

import uiSlice from "features/uiSlice";

const store = configureStore({
  reducer: {
    ui: uiSlice,
  },
});

export default store;
