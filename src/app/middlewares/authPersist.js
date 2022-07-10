// custom middleware to store user credentials in localstorage after authentication, replacement for firebase "onAuthStateChanged()" because of VPN requirement on app load

export const authPersistMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  if (action.type?.startsWith("authSlice/")) {
    const { currentUser } = store.getState().auth;
    if (currentUser)
      localStorage.setItem(
        "DEV.to__user-credentials",
        JSON.stringify(currentUser)
      );
  }
  return result;
};
