import { useSelector, useDispatch } from "react-redux";
import { getAppTheme, changeThemeMode } from "features/uiSlice";
import { Block } from "components/layout";
import { ThemeMode } from "types/types";

import lightThemePic from "assets/images/light_theme.png";
import darkThemePic from "assets/images/dark_theme.png";

const CustomSettings = () => {
  document.title = "تنظیمات - انجمن توسعه دهندگان";
  const dispatch = useDispatch();
  const themeMode = useSelector(getAppTheme);

  const handleChangeThemeMode = (e: React.MouseEvent) => {
    const selectedThemeMode = e.currentTarget.getAttribute("data-theme");
    dispatch(changeThemeMode(selectedThemeMode));
  };

  return (
    <Block>
      <section className="heading">
        <h3 className="title">تم سایت</h3>
      </section>

      <div id="theme_selector">
        <section
          data-theme={ThemeMode.Light}
          onClick={handleChangeThemeMode}
          className={`theme_option ${
            themeMode.name === ThemeMode.Light ? "theme_option--active" : ""
          }`}
        >
          <p className="theme_name">تم روشن</p>
          <img src={lightThemePic} alt="تم روشن" />
        </section>

        <section
          data-theme={ThemeMode.Dark}
          onClick={handleChangeThemeMode}
          className={`theme_option ${
            themeMode.name === ThemeMode.Dark ? "theme_option--active" : ""
          }`}
        >
          <p className="theme_name">تم تاریک</p>
          <img src={darkThemePic} alt="تم تاریک" />
        </section>
      </div>
    </Block>
  );
};

export default CustomSettings;
