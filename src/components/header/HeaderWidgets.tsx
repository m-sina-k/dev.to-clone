import { useState } from "react";
import { Link } from "react-router-dom";
import { ButtonPrimary, ButtonSecodary } from "components";
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
            <ButtonSecodary p="0 8px">
              <SearchIcon />
            </ButtonSecodary>
          </Link>

          <Link to="/notifications/all">
            <ButtonSecodary m="0 6px 0 10px"p="0 8px">
              <NotifIcon />
            </ButtonSecodary>
          </Link>

          <button className="profile__button">
            <span></span>
          </button>
        </>
      ) : (
        <>
          <Link to="/login" className="hidden_button">
            <ButtonSecodary m="0 0 0 6px" p="0 18px">
              ورود
            </ButtonSecodary>
          </Link>

          <Link to="/search" className="search_button">
            <ButtonSecodary m="0 8px 0" p="0 8px">
              <SearchIcon />
            </ButtonSecodary>
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
