import { useSelector,useDispatch } from "react-redux";
import { sidebarNavStatus, toggleShowSidebarNav } from "features/uiSlice";
import { routes, socialMediaLinks } from "data/routes";
import { StyledLink, Row, ButtonSecondary } from "components";
import styled from "styled-components";

const Navigation = () => {
  const NavigationStyle = styled.div`
    #links_list {
     
      .link_item {
        .sidebar_link {
          .link_icon {
            margin-left: 0.5rem;
          }
        }
      }
    }

    .social_media_icon {
      font-size: 18px;
      color: ${({ theme }) => theme.colors.text_muted};
    }
  `;
  const dispatch = useDispatch()
  const isSidebarNavOpen = useSelector(sidebarNavStatus);

  const closeSideNav = () => {
    // close responsive sidebar nav after link click
    if (isSidebarNavOpen) dispatch(toggleShowSidebarNav(false));
  };
  return (
    <NavigationStyle>
      {/* sidebar links */}
      <ul id="links_list">
        {routes.map((route) => {
          const { id, url, icon, text } = route;
          return (
            <li className="link_item" key={id}>
              <StyledLink
                to={url}
                p="3px 6px"
                m="10px 0"
                className="sidebar_link"
                onClick={closeSideNav}
              >
                <span className="link_icon">{icon}</span>
                <span>{text}</span>
              </StyledLink>
            </li>
          );
        })}
      </ul>

      {/* social media links */}
      <Row ai="center">
        {socialMediaLinks.map((link) => {
          const { id, url, icon } = link;
          return (
            <a href={url} key={id} target="_blank">
              <ButtonSecondary p="10px" className="social_media_icon">
                {icon}
              </ButtonSecondary>
            </a>
          );
        })}
      </Row>
    </NavigationStyle>
  );
};

export default Navigation;
