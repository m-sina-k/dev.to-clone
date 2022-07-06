import { useDispatch,useSelector } from "react-redux";
import { toggleShowSidebarNav,sidebarNavStatus } from "features/uiSlice";

import { Row, ButtonSecondary } from "components";
import { SidebarNav } from "./SidebarNav.Styles";
import Navigation from "components/utils/Navigation";
import { IoMdClose } from "react-icons/io";

const Index = () => {
  const dispatch = useDispatch();
  const closeSidebarNav = () => dispatch(toggleShowSidebarNav(false));
  const showSidebarNav = useSelector(sidebarNavStatus);

  return (
    <SidebarNav isActive={showSidebarNav}>
      <div className="sidebar_backdrop" onClick={closeSidebarNav}></div>
      <div className="sidebar_content">
        {/* navigation heading */}
        <section className="sidebar_heading">
          <Row jc="space-between" ai="center">
            <h3>DEV Community</h3>
            <ButtonSecondary p="6px" onClick={closeSidebarNav}>
              <IoMdClose size={22} />
            </ButtonSecondary>
          </Row>
        </section>
        {/* navigation links */}
        <Navigation />
      </div>
    </SidebarNav>
  );
};

export default Index;
