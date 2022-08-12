import { Link } from "react-router-dom";
import styled from "styled-components";
import pageNotFoundImage from "assets/images/404.jpg";

const PageNotFound = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${({ theme }) => theme.colors.body};
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 0.5rem;

  img {
    width: 350px;
    height: 350px;
    border-radius: 12%;
    border: 25px solid ${({ theme }) => theme.layout.global_colors.primary_shade};
  }
  p {
    margin-top: 2rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1.5rem;
  }
  .home_link {
    text-decoration: underline;
    margin-top: 1rem;
    color: ${({ theme }) => theme.colors.text};
    font-size: 1rem;
  }
`;

const Index = () => {
  document.title = "صفحه پیدا نشد - انجمن توسعه دهندگان";
  return (
    <PageNotFound>
      <img src={pageNotFoundImage} alt="404_image" />
      <p>صفحه مورد نظر وجود ندارد.</p>
      <Link to="/" className="home_link">
        بازگشت به صفحه اصلی
      </Link>
    </PageNotFound>
  );
};

export default Index;
