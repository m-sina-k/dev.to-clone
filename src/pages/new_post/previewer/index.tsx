import { Block, Row } from "components/layout";
import { Tag } from "../editor/TagSelector";

import { PostTagsType } from "types/types";

interface PropTypes {
  postCover: string | null;
  postTitle: string;
  postTags: PostTagsType[];
  postContent: string;
}

const Index: React.FC<PropTypes> = ({
  postContent,
  postCover,
  postTags,
  postTitle,
}) => {
  return (
      <Block className="new-post_block" p="0">
        <div className="block_wrapper">
          {/* post cover */}
          {postCover && (
            <figure id="previewer_post-cover_container">
              <img
                src={postCover}
                id="previewer_post-cover"
                alt="پیش-نمایش-کاور"
              />
            </figure>
          )}

          {/* post tags */}
          {!!postTags.length && (
            <Row ai="center" id="previewer_post-tags_container">
              {postTags.map((tag) => (
                <Tag key={tag.id} style={{ backgroundColor: tag.backColor }}>
                  <span style={{ color: tag.color }}>#</span>
                  <span className="tag_name">{tag.name}</span>
                </Tag>
              ))}
            </Row>
          )}

          {/* post title */}
          {postTitle && (
            <Row ai="center">
              <h1 id="previewer_post-title">{postTitle}</h1>
            </Row>
          )}

          {/* post content */}
          {postContent && (
            <div
              id="previewer_post-content-container"
              dangerouslySetInnerHTML={{ __html: postContent }}
            ></div>
          )}
        </div>
      </Block>
  );
};

export default Index;
