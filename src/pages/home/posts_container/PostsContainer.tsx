import { useSelector } from "react-redux";
import { getAllPosts, getFetchLoadingStatus } from "features/fetchPostsSlice";

import { Row, Block } from "components/layout";
import { ButtonTertiary } from "components/utils/Buttons";
import PostBlock from "components/postBlock";
import PostBlockSkeleton from "components/postBlock/skeleton/PostBlockSkeleton";
import { PostsContainerStyle } from "./PostsContainer.style";

import { PostType } from "types/types";

const PostsContainer = () => {
  const posts = useSelector(getAllPosts);
  const fetchLoading = useSelector(getFetchLoadingStatus);

  return (
    <PostsContainerStyle>
      {/* sort buttons */}
      <Row ai="center" id="sort_buttons_row">
        <ButtonTertiary isActive>مرتبط</ButtonTertiary>
        <ButtonTertiary>جدیدترین</ButtonTertiary>
        <ButtonTertiary>محبوب ترین</ButtonTertiary>
      </Row>

      {/* posts */}
      <div id="posts">
        {fetchLoading
          ? Array.from({ length: 5 }, (_, index) => (
              <PostBlockSkeleton key={index} />
            ))
          : posts.map((post: PostType) => (
              <Block key={post.postId} p="0" className="post_block-container">
                <PostBlock post={post} />
              </Block>
            ))}
      </div>
    </PostsContainerStyle>
  );
};

export default PostsContainer;
