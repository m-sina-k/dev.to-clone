import { useSelector } from "react-redux";
import { Container, Banner } from "components/layout";
import { Home } from "./Home.styles";
import { getFetchPostsError } from "features/fetchPostsSlice";

import Navigation from "components/utils/Navigation";
import PostsContainer from "./posts_container/PostsContainer";
import HomeSidebars from "./home_sidebars";

const Index = () => {
  document.title = "👩‍💻👨‍💻 انجمن توسعه دهندگان";
  const fetchError = useSelector(getFetchPostsError);

  return (
    <>
      {fetchError && (
        <Banner variant="danger">
          <p>{fetchError}</p>
        </Banner>
      )}
      <Container pageContainer>
        <Home>
          <div id="home_container">
            <aside id="home_navigation">
              <Navigation />
            </aside>

            <div className="posts">
              <PostsContainer />
            </div>

            <div className="sidebar">
              <HomeSidebars />
            </div>
          </div>
        </Home>
      </Container>
    </>
  );
};

export default Index;
