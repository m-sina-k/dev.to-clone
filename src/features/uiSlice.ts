import { createSlice } from "@reduxjs/toolkit";

import { ThemeMode } from "types/types";
import { themes } from "styles/theme/schema";

interface State {
  showSidebarNav: boolean;
  appTheme: ThemeMode;
}

const initialState: State = {
  showSidebarNav: false,
  appTheme:
    (localStorage.getItem("DEV.TO__app-theme") as ThemeMode) || themes.light,
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
