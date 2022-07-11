import Dropdown, { DdItem } from "components/utils/Dropdown";
import { StyledLink } from "components/layout";
import { dashboardDdLinks } from "data/dashboardDdLinks";

interface PropTypes {
  username: string;
  displayName: string;
  onClose: () => void;
}

const DashboardDd: React.FC<PropTypes> = ({
  username,
  displayName,
  onClose,
}) => {
  return (
    <Dropdown top="120%" left="0">
      <DdItem onClick={onClose}>
        <StyledLink to="/settings/profile">
          <section className="username_container">
          {displayName && <span>{displayName}</span>}
          <p className="ltr">@{username}</p>
          </section>
        </StyledLink>
      </DdItem>
      <hr />
      {dashboardDdLinks.map((link) => (
        <DdItem key={link.id} onClick={onClose}>
          <StyledLink to={link.url}>{link.text}</StyledLink>
        </DdItem>
      ))}

      <hr />
      <DdItem onClick={onClose}>
        <StyledLink to="/signout-confirm">خروج از حساب</StyledLink>
      </DdItem>
    </Dropdown>
  );
};

export default DashboardDd;
