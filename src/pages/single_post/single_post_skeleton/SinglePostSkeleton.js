import styled from "styled-components";

export const SinglePostSkeleton = styled.div`
  display: grid;
  grid-template-columns: 3.5fr 1.5fr;
  grid-gap: 15px;

  .skeleton_block {
    background-color: ${({ theme }) => theme.colors.block_color};
  }

  .post_content_container_skeleton {
    display: flex;
    width: 100%;

    .post_content_skeleton {
      min-height: 600px;
      flex: 1;
    }

    .reactions_sidebar_skeleton {
      background-color: transparent;
      position: sticky;
      top: 7rem;
      right: 0;
      width: 64px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: max-content;
      margin-left: 1rem;

      .reaction_item_skeleton {
        width: 43px;
        height: 43px;
        border-radius: 100px;
        margin-bottom: 1rem;
        background-color: ${({ theme }) => theme.colors.block_color};
      }
    }
  }
  .author_sidebar_skeleton {
    height: 300px;
    position: sticky;
    top: 4.5rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.layout.break_point.xl}) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: ${({ theme }) => theme.layout.break_point.lg}) {
    .post_content_container_skeleton {
      .reactions_sidebar_skeleton {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        justify-content: space-around;
        align-items: center;
        top: unset;
        width: unset;
        flex-direction: row;
        background-color: ${({ theme }) => theme.colors.block_color};
        box-shadow: rgba(0, 0, 0, 0.2) 0px -1px 5px 0px;
        padding: 0.5rem 0;
        z-index: 10;
        width: 100%;

        .reaction_item_skeleton {
          flex-direction: row;
          margin-bottom: 0;
          background-color: ${({ theme }) => theme.colors.body};
        }
      }
    }
  }
`;
