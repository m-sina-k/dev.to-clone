import parse from "html-react-parser";

import { PostTagsType } from "types/types";

import { Block, Row } from "components/layout";
import Tag from "components/utils/Tag";

interface PropTypes {
  postCover: string | null;
  postTitle: string;
  postTags: PostTagsType[];
  postContent: string;
}

const Index: React.FC<PropTypes> = ({ postContent, postCover, postTags, postTitle }) => {
  return (
    <Block className="new-post_block" p="0">
      <div className="block_wrapper">
        {/* post cover */}
        {postCover && (
          <figure id="previewer_post-cover_container">
            <img src={postCover} id="previewer_post-cover" alt="پیش-نمایش-کاور" />
          </figure>
        )}

        {/* post tags */}
        {!!postTags.length && (
          <Row ai="center" id="previewer_post-tags_container">
            {postTags.map((tag) => (
              <Tag key={tag.id} name={tag.name} color={tag.color} backColor={tag.backColor} />
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
        {postContent && <div id="previewer_post-content-container">{parse(postContent)}</div>}
      </div>
    </Block>
  );
};

export default Index;
