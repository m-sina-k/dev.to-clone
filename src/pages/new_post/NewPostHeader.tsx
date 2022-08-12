import { Link, useNavigate } from "react-router-dom";
import { ButtonSecondary } from "components/utils/Buttons";
import { NewPostDisplayModeType as DisplayModeType } from "types/types";

import logo from "assets/images/logo.png";
import { IoMdClose } from "react-icons/io";

interface PropTypes {
  displayMode: string;
  setDisplayMode: (mode: DisplayModeType) => void;
}

const NewPostHeader: React.FC<PropTypes> = ({ displayMode, setDisplayMode }) => {
  const navigate = useNavigate();
  const exitPage = () => navigate("/");

  return (
    <header className="new-post_header">
      {/* exit  button */}
      <section id="exit-button_container" onClick={exitPage}>
        <abbr title="خروج" id="exit_button">
          <ButtonSecondary p="6px">
            <IoMdClose size={22} />
          </ButtonSecondary>
        </abbr>
      </section>

      <div id="header_container">
        <section id="header_right">
          <Link to="/">
            <img src={logo} alt="صفحه-اصلی" id="logo" />
          </Link>
          <span id="page_title">ایجاد پست جدید</span>
        </section>

        <section id="header_left">
          <ButtonSecondary
            isActive={displayMode === DisplayModeType.EditMode}
            onClick={() => setDisplayMode(DisplayModeType.EditMode)}
          >
            ویرایش
          </ButtonSecondary>
          <ButtonSecondary
            isActive={displayMode === DisplayModeType.PreviewMode}
            onClick={() => setDisplayMode(DisplayModeType.PreviewMode)}
          >
            پیش نمایش
          </ButtonSecondary>

          {/* mobile exit button */}
          <abbr title="خروج" id="exit_button">
            <ButtonSecondary p="6px" onClick={exitPage}>
              <IoMdClose size={22} />
            </ButtonSecondary>
          </abbr>
        </section>
      </div>
    </header>
  );
};

export default NewPostHeader;
