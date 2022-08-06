import parse from "html-react-parser";

import { Block } from "components/layout";
import AuthorDetails from "components/AuthorDetails";
import Tag from "components/utils/Tag";
import Comments from "./comments/Comments";

import { PostContent } from "./PostContent.style";
import { PostType } from "types/types";

interface PropTypes {
  post: PostType;
  openModal: () => void;
}

const Index: React.FC<PropTypes> = ({ post, openModal }) => {
  const { author, postDetails } = post;

  return (
    <PostContent>
      <Block className="post_content_block" p="0">
        {/* post cover */}
        {postDetails.cover && (
          <figure className="cover_container">
            <img src={postDetails.cover} alt={author.username} />
          </figure>
        )}

        <div className="post_content_wrapper">
          {/* author details */}
          <AuthorDetails
            name={author.name}
            username={author.username}
            date={postDetails.publishDate}
            profilePic={author.profilePic}
          />

          {/* title */}
          <h1 className="post_title">{postDetails.title}</h1>

          {/* tags */}
          {!!postDetails.tags?.length && (
            <div className="tags_container">
              {postDetails.tags.map((tag) => (
                <Tag
                  key={tag.id}
                  name={tag.name}
                  color={tag.color}
                  backColor={tag.backColor}
                  hover
                />
              ))}
            </div>
          )}

          {/* post content */}
          <div className="main_post-content">{parse(postDetails.content)}</div>
        </div>

        {/* comment's  */}
        <Comments
          postId={post.postDetails.id}
          postComments={post.reactions.comments}
          openModal={openModal}
        />
      </Block>
    </PostContent>
  );
};

export default Index;
