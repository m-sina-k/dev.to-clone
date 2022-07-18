import styled from "styled-components";

export const HomeSidebars = styled.aside`
  .home_sidebar {
    margin-bottom: 1rem;
    background: ${({ theme }) =>
      theme.name === "light" ? "#fafafa" : theme.colors.block_color};
    overflow: hidden;

    &_heading {
      direction: ltr;
      margin-bottom: 0.5rem;
      padding: 0.8rem;
    }

    .articles_container {
      .article_link {
        display: block;
        padding: 0.8rem;
        border-top: ${({ theme }) =>
          theme.name === "dark"
            ? `1px solid ${({ theme }) => theme.colors.border_color}`
            : null};

        &:hover {
          background-color: ${({ theme }) => theme.colors.block_color};
          color: ${({ theme }) => theme.layout.global_colors.primary};
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.xl}) {
    .home_sidebar {
      display: none;
    }
  }
`;
