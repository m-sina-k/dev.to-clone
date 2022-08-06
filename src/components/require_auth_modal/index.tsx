import { Link } from "react-router-dom";
import { ButtonCTA, ButtonSecondary } from "components/utils/Buttons";
import { RequireAuthModal } from "./RequireAuthModal.style";
import logo from "assets/images/square-logo.png";
import { IoMdClose } from "react-icons/io";

interface PropTypes {
  showModal: boolean;
  closeModal: () => void;
}

const Index: React.FC<PropTypes> = ({ showModal, closeModal }) => {
  return showModal ? (
    <RequireAuthModal>
      <div className="auth_modal">
        <section className="heading">
          <h4 className="title">برای ادامه، وارد حساب کاربری خود شوید.</h4>
          <ButtonSecondary p="6px" onClick={closeModal} className="test">
            <IoMdClose size={22} />
          </ButtonSecondary>
        </section>

        <hr />

        <section className="content">
          <img src={logo} alt="main_logo" className="logo" />
          <p className="text">
            اینجا جاییست که برنامه نویسان اشتراک گذاری می کنند، بروز می مانند و در حرفه خود رشد
            میکنند.
          </p>
          <section className="button_container">
            <Link to="/sign-in">
              <ButtonCTA> ورود به حساب</ButtonCTA>
            </Link>

            <Link to="/sign-up">
              <ButtonSecondary>ساخت حساب</ButtonSecondary>
            </Link>
          </section>
        </section>
      </div>
    </RequireAuthModal>
  ) : null;
};

export default Index;
