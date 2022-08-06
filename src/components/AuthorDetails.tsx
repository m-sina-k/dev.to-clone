import styled from "styled-components";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import fa from "javascript-time-ago/locale/fa.json";

interface PropTypes {
  profilePic: string;
  username: string;
  name: string | undefined;
  date: string;
}

const AuthorDetailsStyle = styled.div`
  display: flex;
  align-items: center;
  .author_profile-pic {
    width: 35px;
    height: 35px;
    margin-left: 0.5rem;
  }
  .publish_date {
    color: ${({ theme }) => theme.colors.text_muted};
  }
`;

const AuthorDetails: React.FC<PropTypes> = ({
  profilePic,
  username,
  name,
  date,
}) => {
  TimeAgo.addLocale(fa);

  // convert date to local timezone
  const formattedDate = new Date(date).toLocaleDateString("fa-IR", {
    month: "long",
    day: "2-digit",
  });
  return (
    <AuthorDetailsStyle>
      {/* profile pic */}
      <figure className="author_profile-pic">
        <img src={profilePic} alt={username} />
      </figure>

      {/* display name & publish date */}
      <section className="author_info">
        <p className="author_name">{name || username}</p>
        <small className="publish_date">
          {formattedDate}
          (<ReactTimeAgo date={new Date(date)} locale="fa" />)
        </small>
      </section>
    </AuthorDetailsStyle>
  );
};

export default AuthorDetails;
