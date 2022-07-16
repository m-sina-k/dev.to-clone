import { createSlice } from "@reduxjs/toolkit";

import { ThemeMode } from "types/types";
import { themes } from "styles/theme/schema";

interface State {
  showSidebarNav: boolean;
  appTheme: object;
  readonly exceptionRoutes: string[];
}

const lsAppTheme = localStorage.getItem("DEV.to__app-theme");

const initialState: State = {
  showSidebarNav: false,
  appTheme: lsAppTheme ? JSON.parse(lsAppTheme) : themes.light,
  // routes to hide header and footer
  exceptionRoutes: ["/new-post"],
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {
    toggleShowSidebarNav: (state, { payload }) => {
      state.showSidebarNav = payload;
    },
    changeThemeMode: (state, { payload }) => {
      if (payload === ThemeMode.Light) state.appTheme = themes.light;
      else state.appTheme = themes.dark;
    },
  },
});

export const { toggleShowSidebarNav, changeThemeMode } = uiSlice.actions;

export const getAppTheme = (state: any) => state.ui.appTheme;
export const sidebarNavStatus = (state: any) => state.ui.showSidebarNav;
export const getExceptionRoutes = (state: any) => state.ui.exceptionRoutes;

export default uiSlice.reducer;
