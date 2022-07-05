import { createSlice } from "@reduxjs/toolkit";

import { ThemeMode } from "types/types";
import { themes } from "styles/theme/schema";

interface State {
  appTheme: ThemeMode;
}

const initialState: State = {
  appTheme:
    (localStorage.getItem("DEV.TO__app-theme") as ThemeMode) || themes.light,
};

const uiSlice = createSlice({
  name: "uiSlice",
  initialState,
  reducers: {},
});

export const getAppTheme = (state: any) => state.ui.appTheme;

export default uiSlice.reducer;
