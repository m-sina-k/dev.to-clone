import { useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";

import DeletePostConfirmation from "components/DeletePostConfirmation";
import { getAuthState } from "features/authSlice";
import fa from "javascript-time-ago/locale/fa.json";
import { BiTrash } from "react-icons/bi";

interface PropTypes {
  profilePic: string;
  username: string;
  name: string | undefined;
  date: string;
  authorId: string;
  postId: string;
  postTitle: string;
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
  .delete_post_button {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.25rem 0.5rem;
    margin-right: auto;
    background-color: ${({ theme }) => theme.layout.global_colors.red_tint};
    border: 1px solid ${({ theme }) => theme.layout.global_colors.red};
    color: ${({ theme }) => theme.colors.text_muted};

    .trash_icon {
      margin-left: 6px;
    }

    &:hover {
      color: ${({ theme }) => theme.colors.body};
      background-color: ${({ theme }) => theme.layout.global_colors.red};
    }
  }
`;

const AuthorDetails: React.FC<PropTypes> = ({
  profilePic,
  username,
  name,
  date,
  authorId,
  postTitle,
  postId,
}) => {
  const { currentUser } = useSelector(getAuthState);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  TimeAgo.addLocale(fa);

  // convert date to local timezone
  const formattedDate = new Date(date).toLocaleDateString("fa-IR", {
    month: "long",
    day: "2-digit",
  });

  const openConfirmation = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDeleteConfirmation(true);
  };

  const closeConfirmation = () => setShowDeleteConfirmation(false);

  return (
    <>
      {showDeleteConfirmation && (
        <DeletePostConfirmation
          postTitle={postTitle}
          postId={postId}
          showModal={showDeleteConfirmation}
          closeModal={closeConfirmation}
        />
      )}
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
        {currentUser && authorId === currentUser.id && (
          <button className="delete_post_button" onClick={(e) => openConfirmation(e)}>
            <BiTrash size={18} className="trash_icon" />
            حذف پست
          </button>
        )}
      </AuthorDetailsStyle>
    </>
  );
};

export default AuthorDetails;
