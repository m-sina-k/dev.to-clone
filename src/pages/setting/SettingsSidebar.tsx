import { useParams } from "react-router-dom";
import { StyledLink } from "components/layout";
import { settingSections } from "data/settingSections";

const SettingsSidebar = () => {
  const { sectionId } = useParams();
  return (
    <aside id="sidebar">
      <ul id="sidebar__list">
        {settingSections.map((section) => (
          <li key={section.id} className="sidebar__list-item">
            <StyledLink
              $active={sectionId === section.id}
              to={section.url}
              className="link"
            >
              <span className="link_icon">{section.icon}</span>
              {section.text}
            </StyledLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default SettingsSidebar;
