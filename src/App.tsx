import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { getAppTheme } from "features/uiSlice";

// components
import GlobalStyle from "styles/GlobalStyle";
import Header from "components/header";
import SidebarNav from "components/sidebar_nav";
import Footer from "components/footer";
import PrivateRoute from "components/utils/PrivateRoute";

// pages
import Home from "pages/home";
import Notifications from "pages/notifications";
import Search from "pages/search";
import SignUp from "pages/auth/SignUp";
import SignIn from "pages/auth/SignIn";
import SignOutConfirm from "pages/SignOutConfirm";
import Settings from "pages/setting";
import NewPost from "pages/new_post";

// assets
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const App = () => {
  const theme = useSelector(getAppTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <SidebarNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications/:sectionId" element={<Notifications />} />
          <Route path="/search" element={<Search />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/signout-confirm" element={<SignOutConfirm />} />
          <Route element={<PrivateRoute />}>
            <Route path="/settings/:sectionId" element={<Settings />} />
          </Route>
          <Route element={<PrivateRoute />}>
            <Route path="/new-post" element={<NewPost />} />
          </Route>
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
