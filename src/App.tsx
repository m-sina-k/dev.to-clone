import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { getAppTheme } from "features/uiSlice";

// components
import GlobalStyle from "styles/GlobalStyle";
import Header from "components/header";
import SidebarNav from "components/sidebar_nav";
import Footer from "components/footer";

// pages
import Home from "pages/home";
import Notifications from "pages/notifications";
import Search from "pages/search";

const App = () => {
  const theme = useSelector(getAppTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <SidebarNav />/
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications/:sectionId" element={<Notifications />} />
          <Route path="/search" element={<Search />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
