import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toggleShowSidebarNav } from "features/uiSlice";

// assets
import logo from "assets/images/utils/logo.png";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";

// components
import { Header } from "components/header/Header.styles";
import { Container, Row, ButtonSecondary } from "components";
import HeaderWidgets from "components/header/HeaderWidgets";

const Index = () => {
  const dispatch = useDispatch();
  const openSidebarNav = () => dispatch(toggleShowSidebarNav(true));
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
            <form action="#" className="search-form">
              <input
                type="text"
                className="search-input"
                placeholder="جستجو..."
              />
              <button type="submit" className="search-submit">
                <SearchIcon />
              </button>
            </form>
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
