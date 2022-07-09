import { createSlice } from "@reduxjs/toolkit";

import { themes } from "styles/theme/schema";

interface State {
  showSidebarNav: boolean;
  appTheme: object;
}

const initialState: State = {
  showSidebarNav: false,
  appTheme: themes.light,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    toggleShowSidebarNav: (state, { payload }) => {
      state.showSidebarNav = payload;
    },
  },
});

export const { toggleShowSidebarNav } = uiSlice.actions;

export const getAppTheme = (state: any) => state.ui.appTheme;
export const sidebarNavStatus = (state: any) => state.ui.showSidebarNav;

export default uiSlice.reducer;
