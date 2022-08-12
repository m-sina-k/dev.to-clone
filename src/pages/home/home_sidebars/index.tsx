import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import { getHelpPosts, getDiscussPosts, getFetchLoadingStatus } from "features/fetchPostsSlice";
import { PostType } from "types/types";

import { Block } from "components/layout";
import { HomeSidebars } from "./HomeSidebars.style";

const Index = () => {
  const helpPosts = useSelector(getHelpPosts);
  const discussPosts = useSelector(getDiscussPosts);
  const fetchLoading = useSelector(getFetchLoadingStatus);

  return (
    <HomeSidebars>
      <Block className="home_sidebar" p="0">
        <h3 className="home_sidebar_heading">#help</h3>
        <section className="articles_container">
          {fetchLoading
            ? Array.from({ length: 4 }, (_, index) => (
                <div className="article_link_skeleton" key={index}>
                  <p className="post_title skeleton"></p>
                </div>
              ))
            : helpPosts.map((post: PostType) => (
                <Link
                  to={`post/${post.postDetails.id}`}
                  key={post.postDetails.id}
                  className="article_link"
                >
                  {post.postDetails.title}
                </Link>
              ))}
        </section>
      </Block>

      <Block className="home_sidebar" p="0">
        <h3 className="home_sidebar_heading">#discuss</h3>
        <section className="articles_container">
          {fetchLoading
            ? Array.from({ length: 4 }, (_, index) => (
                <div className="article_link_skeleton" key={index}>
                  <p className="post_title skeleton"></p>
                </div>
              ))
            : discussPosts.map((post: PostType) => (
                <Link
                  to={`post/${post.postDetails.id}`}
                  key={post.postDetails.id}
                  className="article_link"
                >
                  {post.postDetails.title}
                </Link>
              ))}
        </section>
      </Block>
    </HomeSidebars>
  );
};

export default Index;
