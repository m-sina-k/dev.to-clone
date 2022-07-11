export const themePersistMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith("uiSlice/")) {
    const { appTheme } = store.getState().ui;
    localStorage.setItem("DEV.to__app-theme", JSON.stringify(appTheme));
  }
  return result;
};
