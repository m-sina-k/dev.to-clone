import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAuthState } from "features/authSlice";
import { ButtonPrimary, ButtonSecondary } from "components/utils/Buttons";
import { ReactComponent as NotifIcon } from "assets/icons/notification.svg";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";
import ProfileButton from "./dashboard_dd/DashboardButton";

const HeaderWidgets = () => {
  const { currentUser } = useSelector(getAuthState);
  return (
    <section className="widgets">
      {currentUser ? (
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
            <ButtonSecondary m="0 6px 0 10px" p="0 8px" h="100%">
              <NotifIcon />
            </ButtonSecondary>
          </Link>

          <ProfileButton />
        </>
      ) : (
        <>
          <Link to="/sign-in" className="hidden_button">
            <ButtonSecondary m="0 0 0 6px" p="0 18px" h="100%">
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
