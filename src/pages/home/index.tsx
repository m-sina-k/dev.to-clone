import { Container } from "components";
import { Home } from "./Home.styles";
import Navigation from "components/navigation/Navigation";

const Index = () => {
  return (
    <Container pageContainer>
      <Home>
        <div id="home_container">
          <aside id="home_navigation">
            <Navigation />
          </aside>
          <div className="posts">.</div>
          <div className="sidebar">.</div>
        </div>
      </Home>
    </Container>
  );
};

export default Index;
