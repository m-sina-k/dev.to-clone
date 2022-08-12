import { useParams } from "react-router-dom";
import { notifSections } from "data/notifSections";
import { StyledLink } from "components/layout";

const NotificationsSidebar = () => {
  const { sectionId } = useParams();

  return (
    <aside id="sidebar">
      <ul id="sidebar__list">
        {notifSections.map((section) => (
          <li key={section.id} className="sidebar__list-item">
            <StyledLink $active={sectionId === section.id} to={section.url} className="link">
              {section.text}
            </StyledLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default NotificationsSidebar;
