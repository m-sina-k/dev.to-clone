import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { getHelpPosts, getDiscussPosts } from "features/fetchPostsSlice";
import { PostType } from "types/types";

import { Block } from "components/layout";
import { HomeSidebars } from "./HomeSidebars.style";

const Index = () => {
  const helpPosts = useSelector(getHelpPosts);
  const discussPosts = useSelector(getDiscussPosts);

  return (
    <HomeSidebars>
      <Block className="home_sidebar" p="0">
        <h3 className="home_sidebar_heading">#help</h3>
        <section className="articles_container">
          {helpPosts.map((post: PostType) => (
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
          {discussPosts.map((post: PostType) => (
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
