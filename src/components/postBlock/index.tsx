import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useReadingTime from "hooks/useReadingTime";

import RequireAuthModal from "components/require_auth_modal";
import AuthorDetails from "components/AuthorDetails";
import Tag from "components/utils/Tag";
import { reactToPost } from "helpers/firebaseMethods";
import { GhostButton } from "components/utils/Buttons";
import { PostBlock } from "./PostBlock.style";
import { getAuthState } from "features/authSlice";

import { ReactComponent as HeartIcon } from "assets/icons/reactions/heartSmall.svg";
import { ReactComponent as CommentIcon } from "assets/icons/reactions/commentSmall.svg";
import { PostType } from "types/types";

interface PropTypes {
  post: PostType;
}

const Index: React.FC<PropTypes> = ({ post }) => {
  const { author, postDetails, reactions } = post;
  const { currentUser } = useSelector(getAuthState);
  const [readingTime, setReadingTime] = useState(null);
  const [userSavedPost, setUserSavedPost] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const closeAuthModal = () => setShowAuthModal(false);

  // calculate reading time
  const postContentLength: any = useReadingTime(postDetails.content);

  useEffect(() => {
    if (postContentLength) setReadingTime(postContentLength.readingTime);
  }, [postContentLength]);

  useEffect(() => {
    if (currentUser) setUserSavedPost(post.reactions.saves.indexOf(currentUser.username) > -1);
  }, []);

  const toggleSavePost = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentUser) {
      const { username, id } = currentUser;
      if (userSavedPost) {
        reactToPost(post.postDetails.id, "saves", "remove", username, id);
        setUserSavedPost(false);
      } else {
        reactToPost(post.postDetails.id, "saves", "add", username, id);
        setUserSavedPost(true);
      }
    } else setShowAuthModal(true);
  };

  return (
    <PostBlock>
      {showAuthModal && <RequireAuthModal showModal={showAuthModal} closeModal={closeAuthModal} />}
      <Link to={`/post/${postDetails.id}`}>
        {/* post cover */}
        {postDetails.cover && (
          <figure className="post_cover_container">
            <img src={postDetails.cover} alt={postDetails.title} />
          </figure>
        )}

        <div className="post_details">
          {/* author details */}
          <AuthorDetails
            name={author.name}
            username={author.username}
            date={postDetails.publishDate}
            profilePic={author.profilePic}
          />

          {/* post title */}
          <h1 className="post_title">{postDetails.title}</h1>

          {/* post tags */}
          {!!postDetails.tags.length && (
            <div className="post_tags-container">
              {postDetails.tags.map((tag) => (
                <GhostButton p="0" key={tag.id} className="tag">
                  <Tag name={tag.name} color={tag.color} backColor={tag.backColor} />
                </GhostButton>
              ))}
            </div>
          )}

          {/* reactions */}
          <div className="post_reactions">
            {/* reaction buttons */}
            <section className="reaction_buttons_container">
              {!!reactions && (reactions?.hearts.length > 0 || reactions?.unicorns.length > 0) && (
                <GhostButton className="reactions reactions_button">
                  <span className="reactions_icon">
                    <HeartIcon />
                  </span>
                  {reactions.hearts.length + reactions.unicorns.length} واکنش
                </GhostButton>
              )}
              <GhostButton className="reactions_button" p="3px 12px">
                <span className="reactions_icon">
                  <CommentIcon />
                </span>
                <span className="button_text">
                  {reactions.comments.length > 0
                    ? `${reactions.comments.length} دیدگاه`
                    : "بدون دیدگاه"}
                </span>
              </GhostButton>
            </section>

            <section className="reading_time_container">
              {/* reading time */}
              <span className="reading_time">خواندن {readingTime} دقیقه</span>

              {/* save button */}
              <button className="save_post_button" onClick={(e) => toggleSavePost(e)}>
                {userSavedPost ? "حذف ذخیره" : "ذخیره"}
              </button>
            </section>
          </div>
        </div>
      </Link>
    </PostBlock>
  );
};

export default Index;
