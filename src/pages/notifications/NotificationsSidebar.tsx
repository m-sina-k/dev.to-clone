import { StyledLink } from "components/layout";
import { useParams } from "react-router-dom";

interface notifType {
  id: string;
  text: string;
  url: string;
}

const notifSections: notifType[] = [
  {
    id: "all",
    text: "همه",
    url: "/notifications/all",
  },
  {
    id: "comments",
    text: "نظرات",
    url: "/notifications/comments",
  },
  {
    id: "posts",
    text: "پست ها",
    url: "/notifications/posts",
  },
];

const NotificationsSidebar = () => {
  const { sectionId } = useParams();

  return (
    <aside id="sidebar">
      <ul id="sidebar__list">
        {notifSections.map((section) => (
          <li key={section.id} className="sidebar__list-item">
            <StyledLink
              active={sectionId === section.id}
              to={section.url}
              className="link"
            >
              {section.text}
            </StyledLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default NotificationsSidebar;
