import { useState, useEffect } from "react";
import useReadingTime from "hooks/useReadingTime";

import { Tag } from "pages/new_post/editor/TagSelector";
import { GhostButton } from "components/utils/Buttons";
import { PostBlock } from "./PostBlock.style";

import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";
import fa from "javascript-time-ago/locale/fa.json";

import { ReactComponent as HeartIcon } from "assets/icons/reactions/heart.svg";
import { ReactComponent as CommentIcon } from "assets/icons/reactions/comment.svg";
import { PostType } from "types/types";

interface PropTypes {
  post: PostType;
}

const Index: React.FC<PropTypes> = ({ post }) => {
  const [readingTime, setReadingTime] = useState(null);
  const {
    authorUsername,
    authorName,
    authorProfilePic,
    title,
    cover,
    tags,
    publishDate,
    reactions,
    content,
  } = post;

  // calculate reading time
  const postContentLength: any = useReadingTime(content);

  useEffect(() => {
    if (postContentLength) setReadingTime(postContentLength.readingTime);
  }, [postContentLength]);

  TimeAgo.addLocale(fa);

  // convert date to local timezone
  const date = new Date(publishDate).toLocaleDateString("fa-IR", {
    month: "long",
    day: "2-digit",
  });

  return (
    <PostBlock>
      {/* post cover */}
      {cover && (
        <figure className="post_cover_container">
          <img src={cover} alt={title} />
        </figure>
      )}

      <div className="post_details">
        {/* author info */}
        <div className="author_info_container">
          {/* profile pic */}
          <figure className="author_profile-pic">
            <img src={authorProfilePic} alt={authorUsername} />
          </figure>

          {/* display name & publish date */}
          <section className="author_info">
            <p className="author_name">{authorName || authorUsername}</p>
            <small className="publish_date">
              {date}
              (<ReactTimeAgo date={new Date(publishDate)} locale="fa" />)
            </small>
          </section>
        </div>

        {/* post title */}
        <h1 className="post_title">{title}</h1>

        {/* post tags */}
        {!!tags.length && (
          <div className="post_tags-container">
            {tags.map((tag) => (
              <GhostButton p="0" key={tag.id}>
                <Tag className="tag">
                  <span>#</span>
                  <span className="tag_name">{tag.name}</span>
                </Tag>
              </GhostButton>
            ))}
          </div>
        )}

        {/* reactions */}
        <div className="post_reactions">
          {/* {!!reactions && (reactions?.hearts > 0 || reactions?.unicorns > 0) && (
            <GhostButton className="reactions">
              <span className="reactions_icon">
                <HeartIcon />
              </span>
              {reactions.hearts + reactions.unicorns} واکنش
            </GhostButton>
          )} */}

          {/* reaction buttons */}
          <section className="reaction_buttons_container">
            <GhostButton className="reactions_button" p="3px 12px">
              <span className="reactions_icon">
                <HeartIcon />
              </span>
              36 <span className="button_text">واکنش</span>
            </GhostButton>
            <GhostButton className="reactions_button" p="3px 12px">
              <span className="reactions_icon">
                <CommentIcon />
              </span>
              19 <span className="button_text">دیدگاه</span>
            </GhostButton>
          </section>

          <section className="reading_time_container">
            {/* reading time */}
            <span className="reading_time">خواندن {readingTime} دقیقه</span>

            {/* save button */}
            <button className="save_post_button">ذخیره</button>
          </section>
        </div>
      </div>
    </PostBlock>
  );
};

export default Index;
