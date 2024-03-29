import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { getExceptionRoutes } from "features/uiSlice";

import { Container } from "components/layout";
import { Footer } from "./Footer.styles";
import { FiCoffee, FiHeart } from "react-icons/fi";

const Index = () => {
  const { pathname } = useLocation();
  const exceptionRoutes = useSelector(getExceptionRoutes);

  if (exceptionRoutes.indexOf(pathname) > -1) return null;

  return (
    <Footer>
      <Container>
        <p id="about-text">
          یک شبکه اجتماعی سازنده و فراگیر برای توسعه دهندگان نرم افزار.همراه شما در تمامی گام های
          سفرتان.
        </p>
        <p id="credit-text">
          ساخته شده با{" "}
          <span className="icon_container">
            <FiHeart id="heart_icon" /> و <FiCoffee id="coffee_icon" />
          </span>
          توسط
          <a href="https://github.com/m-sina-k/" id="github_link">
            سینا کاظمی{" "}
          </a>
        </p>
      </Container>
    </Footer>
  );
};

export default Index;
