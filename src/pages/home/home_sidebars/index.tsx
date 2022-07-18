import { Link } from "react-router-dom";

import { Block } from "components/layout";
import { HomeSidebars } from "./HomeSidebars.style";

const Index = () => {
  return (
    <HomeSidebars>
      <Block className="home_sidebar" p="0">
        <h3 className="home_sidebar_heading">#help</h3>
        <section className="articles_container">
          <Link to="/" className="article_link">
            لورم ایپسوم
          </Link>
          <Link to="/" className="article_link">
            لورم ایپسوم
          </Link>
          <Link to="/" className="article_link">
            لورم ایپسوم
          </Link>
        </section>
      </Block>

      <Block className="home_sidebar" p="0">
        <h3 className="home_sidebar_heading">#discuss</h3>
        <section className="articles_container">
          <Link to="/" className="article_link">
            لورم ایپسوم
          </Link>
          <Link to="/" className="article_link">
            لورم ایپسوم
          </Link>
          <Link to="/" className="article_link">
            لورم ایپسوم
          </Link>
        </section>
      </Block>

      
    </HomeSidebars>
  );
};

export default Index;
