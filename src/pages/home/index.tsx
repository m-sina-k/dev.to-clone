import { useSelector } from "react-redux";

import { getFetchPostsError } from "features/fetchPostsSlice";

import HomeSidebars from "./home_sidebars";
import PostsContainer from "./PostsContainer";
import { Container, Banner } from "components/layout";
import Navigation from "components/utils/Navigation";
import { Home } from "./Home.styles";

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
