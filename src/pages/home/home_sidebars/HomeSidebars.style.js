import styled from "styled-components";

export const HomeSidebars = styled.aside`
  .home_sidebar {
    margin-bottom: 1rem;
    background: ${({ theme }) => (theme.name === "light" ? "#fafafa" : theme.colors.block_color)};
    overflow: hidden;
    min-height: 150px;

    &_heading {
      direction: ltr;
      margin-bottom: 0.5rem;
      padding: 0.8rem;
    }

    .articles_container {
      .article_link,
      .article_link_skeleton {
        display: block;
        padding: 0.8rem;

        &:hover {
          background-color: ${({ theme }) => theme.colors.block_color};
          color: ${({ theme }) => theme.layout.global_colors.primary};
        }
      }

      .article_link_skeleton {
        .post_title {
          width: 100%;
          height: 20px;
          border-radius: 3px;
          background-color: ${({ theme }) => theme.colors.body};
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.layout.break_point.xl}) {
    .home_sidebar {
      display: none;
    }
  }
`;
