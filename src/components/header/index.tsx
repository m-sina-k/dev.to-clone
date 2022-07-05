import { Link } from "react-router-dom";

// assets
import logo from "assets/images/utils/logo.png";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import { ReactComponent as MenuIcon } from "assets/icons/menu.svg";

// components
import { HeaderStyle } from "components/header/Header.styles";
import { Container, Row, ButtonSecodary } from "components";
import HeaderWidgets from "components/header/HeaderWidgets";

const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <Row jc="space-between" ai="stretch">
          <section className="header__right">
            {/* sidebar menu button */}
            <ButtonSecodary m="0 8px 0" p="0 8px" id="sidebar-menu__button">
              <MenuIcon />
            </ButtonSecodary>

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
    </HeaderStyle>
  );
};

export default Header;
