import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { getAppTheme } from "features/uiSlice";
import {
  setCurrentUser,
  getAuthState,
  setCredentialsLoading,
} from "features/authSlice";
import { auth } from "server/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { fetchUserCredentials } from "helpers/authMethods";

// components
import GlobalStyle from "styles/GlobalStyle";
import Header from "components/header";
import SidebarNav from "components/sidebar_nav";
import Footer from "components/footer";
import AppLoading from "components/utils/AppLoading";

// pages
import Home from "pages/home";
import Notifications from "pages/notifications";
import Search from "pages/search";
import SignUp from "pages/auth/SignUp";
import SignIn from "pages/auth/SignIn";

// assets
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  const dispatch = useDispatch();
  const theme = useSelector(getAppTheme);
  const { loadingCredentials } = useSelector(getAuthState);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        const userCredentials = await fetchUserCredentials(user);
        dispatch(setCurrentUser(userCredentials));
      } else dispatch(setCurrentUser(null));
      dispatch(setCredentialsLoading(false));
      return unsubscribe;
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {loadingCredentials && <AppLoading />}
      <Router>
        <Header />
        <SidebarNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications/:sectionId" element={<Notifications />} />
          <Route path="/search" element={<Search />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
        </Routes>
      </Router>
      <Footer />
    </ThemeProvider>
  );
};

export default App;
