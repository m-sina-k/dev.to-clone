import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";

import { getAuthState, setUpdateStatus } from "features/authSlice";

import { Container, Banner } from "components/layout";
import { SettingsStyle } from "./Settings.style";

import SettingsSidebar from "./SettingsSidebar";
import ProfileSettings from "./ProfileSettings";
import CustomSettings from "./CustomSettings";

enum Sections {
  PROFILE = "profile",
  CUSTOM = "customization",
}

const selectOptions: any = [
  { label: "پروفایل", value: "/settings/profile" },
  { label: "شخصی سازی", value: "/settings/customization" },
];

const Index = () => {
  const navigate = useNavigate();
  const { sectionId } = useParams();
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const { currentUser, updateProfileStatus } = useSelector(getAuthState);
  const { username } = currentUser;

  const getCurrentSection = () =>
    selectOptions.find((section: any) => section.value === pathname);

  const [currentPage, setCurrentPage] = useState(getCurrentSection());

  const handleSelectChange = (option: any) => {
    setCurrentPage(option);
    navigate(option.value);
  };

  // clear auth status and hide banner when user leaves profile page
  useEffect(() => {
    dispatch(setUpdateStatus(null));
  }, [dispatch, sectionId]);

  return (
    <SettingsStyle>
      {/* show if updating profile succeeded/failed */}
      {!!updateProfileStatus && (
        <Banner variant={updateProfileStatus.variant}>
          <p>{updateProfileStatus.msg}</p>
        </Banner>
      )}

      <Container pageContainer>
        <section className="heading">
          <h1>
            تنظیمات برای
            <span className="username ">{username}@</span>
          </h1>
        </section>

        {/* responsive navigation between settings sections */}
        <div id="mobile_page-selector_container">
          <Select
            value={currentPage}
            options={selectOptions}
            onChange={handleSelectChange}
            placeholder={currentPage.label}
            isSearchable={false}
            className="mobile_page-selector"
          />
        </div>

        <div className="grid__container">
          <SettingsSidebar />
          {sectionId === Sections.PROFILE ? (
            <ProfileSettings currentUser={currentUser} />
          ) : (
            <CustomSettings />
          )}
        </div>
      </Container>
    </SettingsStyle>
  );
};

export default Index;
