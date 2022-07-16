import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowSidebarNav, getExceptionRoutes } from "features/uiSlice";

// assets
import logo from "assets/images/logo.png";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";

// components
import { Header } from "components/header/Header.styles";
import { Container, Row } from "components/layout";
import { ButtonSecondary } from "components/utils/Buttons";
import HeaderWidgets from "components/header/HeaderWidgets";
import SearchInput from "components/utils/SearchInput";

const Index = () => {
  const dispatch = useDispatch();
  const exceptionRoutes = useSelector(getExceptionRoutes);
  const { pathname } = useLocation();

  const openSidebarNav = () => dispatch(toggleShowSidebarNav(true));

  if (exceptionRoutes.indexOf(pathname) > -1) return null;

  return (
    <Header>
      <Container>
        <Row jc="space-between" ai="stretch">
          <section className="header__right">
            {/* sidebar menu button */}
            <ButtonSecondary
              m="0 8px 0"
              p="0 8px"
              id="sidebar-menu__button"
              onClick={openSidebarNav}
            >
              <MenuIcon />
            </ButtonSecondary>

            {/* logo */}
            <Link to="/">
              <img className="logo" src={logo} alt="صفحه-اصلی" />
            </Link>

            {/* search input */}
            <div id="search_form">
              <SearchInput />
            </div>
          </section>

          <section className="header__left">
            <HeaderWidgets />
          </section>
        </Row>
      </Container>
    </Header>
  );
};

export default Index;
