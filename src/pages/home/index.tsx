import { Container } from "components/layout";
import { Home } from "./Home.styles";
import Navigation from "components/utils/Navigation";

const Index = () => {
  return (
    <Container pageContainer>
      <Home>
        <div id="home_container">
          <aside id="home_navigation">
            <Navigation />
          </aside>
          <div className="posts"></div>
          <div className="sidebar"></div>
        </div>
      </Home>
    </Container>
  );
};

export default Index;
