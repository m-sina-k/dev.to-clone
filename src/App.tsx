import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { useSelector } from "react-redux";
import { getAppTheme } from "features/uiSlice";

// components
import GlobalStyle from "styles/GlobalStyle";
import Header from "components/header";
import Footer from "components/footer";

// pages
import Home from "pages/home";
import Notifications from "pages/notifications";

const App = () => {
  const theme = useSelector(getAppTheme);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/notifications/:sectionId" element={<Notifications />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
