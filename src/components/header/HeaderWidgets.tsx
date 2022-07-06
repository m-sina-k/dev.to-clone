import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary, ButtonSecondary } from "components";
import { ReactComponent as NotifIcon } from "assets/icons/notification.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

const HeaderWidgets = () => {
  const [auth, setAuth] = useState(true);
  return (
    <section className="widgets">
      {auth ? (
        <>
          <Link to="/new-post" className="hidden_button">
            <ButtonPrimary>پست جدید</ButtonPrimary>
          </Link>

          <Link to="/search" className="search_button">
            <ButtonSecondary p="0 8px">
              <SearchIcon />
            </ButtonSecondary>
          </Link>

          <Link to="/notifications/all">
            <ButtonSecondary m="0 6px 0 10px"p="0 8px">
              <NotifIcon />
            </ButtonSecondary>
          </Link>

          <button className="profile__button">
            <span></span>
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="hidden_button">
            <ButtonSecondary m="0 0 0 6px" p="0 18px">
              ورود
            </ButtonSecondary>
          </Link>

          <Link to="/search" className="search_button">
            <ButtonSecondary m="0 8px 0" p="0 8px">
              <SearchIcon />
            </ButtonSecondary>
          </Link>

          <Link to="/sign-up">
            <ButtonPrimary>ثبت نام</ButtonPrimary>
          </Link>
        </>
      )}
    </section>
  );
};

export default HeaderWidgets;
