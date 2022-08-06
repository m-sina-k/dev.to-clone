import styled from "styled-components";
import { PostNodeStyles } from "styles/theme/PostNodeStyles";

export const PostContent = styled.div`
  .post_content_block {
    width: 100%;
    .cover_container {
      width: 100%;

      img {
        border-radius: 6px 6px 0 0;
        object-fit: cover;
        width: 100%;
        height: 340px;
      }
    }

    .post_content_wrapper {
      padding: 2rem;
    }

    .tags_container {
      display: flex;
      flex-wrap: wrap;
    }

    .main_post-content {
      ${PostNodeStyles};
      margin-top: 1.25rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.layout.break_point.lg}) {
    .post_content_block .post_content_wrapper {
      padding: 1rem;

      .post_title {
        font-size: 1.5rem;
      }
    }
  }
`;
