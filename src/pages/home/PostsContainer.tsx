import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import { getAllPosts, getFetchLoadingStatus } from "features/fetchPostsSlice";
import { sortPostArray } from "helpers";
import { PostType, SortType } from "types/types";

import { Row, Block } from "components/layout";
import { ButtonTertiary } from "components/utils/Buttons";
import PostBlock from "components/postBlock";
import PostBlockSkeleton from "components/postBlock/skeleton/PostBlockSkeleton";

const PostsContainerStyle = styled.div`
  #sort_buttons_row {
    margin-bottom: 1rem;
  }

  .post_block-container {
    margin-bottom: 1rem;
  }
`;

const PostsContainer = () => {
  const posts = useSelector(getAllPosts);
  const fetchLoading = useSelector(getFetchLoadingStatus);

  const [filter, setFilter] = useState<SortType>(SortType.relevant);
  const [filteredPost, setFilteredPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const sortedArray = sortPostArray(filter, filteredPost, posts) as PostType[];
    setFilteredPosts(sortedArray);
  }, [filter]);

  useEffect(() => {
    if (!fetchLoading) setFilteredPosts(posts);
  }, [fetchLoading]);

  return (
    <PostsContainerStyle>
      {/* sort buttons */}
      <Row ai="center" id="sort_buttons_row">
        <ButtonTertiary
          isActive={filter === SortType.relevant}
          onClick={() => setFilter(SortType.relevant)}
        >
          مرتبط
        </ButtonTertiary>
        <ButtonTertiary
          isActive={filter === SortType.newest}
          onClick={() => setFilter(SortType.newest)}
        >
          جدیدترین
        </ButtonTertiary>
        <ButtonTertiary
          isActive={filter === SortType.popular}
          onClick={() => setFilter(SortType.popular)}
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
