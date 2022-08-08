import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getAllPosts, getFetchLoadingStatus } from "features/fetchPostsSlice";

import { Row, Block } from "components/layout";
import { ButtonTertiary } from "components/utils/Buttons";
import PostBlock from "components/postBlock";
import PostBlockSkeleton from "components/postBlock/skeleton/PostBlockSkeleton";
import { PostsContainerStyle } from "./PostsContainer.style";
import { PostType } from "types/types";

enum FILTERS {
  relevant = "relevant",
  newest = "newest",
  popular = "popular",
}

const PostsContainer = () => {
  const posts = useSelector(getAllPosts);
  const fetchLoading = useSelector(getFetchLoadingStatus);
  const [filter, setFilter] = useState<FILTERS>(FILTERS.relevant);
  const [filteredPost, setFilteredPosts] = useState<PostType[]>([]);

  useEffect(() => {
    let sortedPosts;
    switch (filter) {
      case FILTERS.relevant:
        setFilteredPosts(posts);
        break;
      case FILTERS.newest:
        sortedPosts = [...posts].sort(
          (a: PostType, b: PostType) =>
            new Date(b.postDetails.publishDate).valueOf() -
            new Date(a.postDetails.publishDate).valueOf()
        );
        setFilteredPosts(sortedPosts);
        break;
      case FILTERS.popular:
        sortedPosts = [...posts].sort(
          (a: PostType, b: PostType) =>
            b.reactions.hearts.length +
            b.reactions.unicorns.length -
            (a.reactions.hearts.length + a.reactions.unicorns.length)
        );
        setFilteredPosts(posts);
        break;
    }
  }, [filter]);

  useEffect(() => {
    if (!fetchLoading) setFilteredPosts(posts);
  }, [fetchLoading]);

  return (
    <PostsContainerStyle>
      {/* sort buttons */}
      <Row ai="center" id="sort_buttons_row">
        <ButtonTertiary
          isActive={filter === FILTERS.relevant}
          onClick={() => setFilter(FILTERS.relevant)}
        >
          مرتبط
        </ButtonTertiary>
        <ButtonTertiary
          isActive={filter === FILTERS.newest}
          onClick={() => setFilter(FILTERS.newest)}
        >
          جدیدترین
        </ButtonTertiary>
        <ButtonTertiary
          isActive={filter === FILTERS.popular}
          onClick={() => setFilter(FILTERS.popular)}
        >
          محبوب ترین
        </ButtonTertiary>
      </Row>

      {/* posts */}
      <div id="posts">
        {fetchLoading
          ? Array.from({ length: 5 }, (_, index) => <PostBlockSkeleton key={index} />)
          : filteredPost.map((post: PostType) => (
              <Block key={post.postDetails.id} p="0" className="post_block-container">
                <PostBlock post={post} />
              </Block>
            ))}
      </div>
    </PostsContainerStyle>
  );
};

export default PostsContainer;
