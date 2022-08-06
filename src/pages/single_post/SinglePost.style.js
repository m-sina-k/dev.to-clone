import styled from "styled-components";

export const SinglePost = styled.main`
  .grid_container {
    display: grid;
    grid-template-columns: 3.5fr 1.5fr;
    grid-gap: 15px;

    .post_content_container {
      display: flex;

      .post_content {
        flex: 1;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.layout.break_point.xl}) {
    .grid_container {
      grid-template-columns: 1fr;
    }
  }
`;
