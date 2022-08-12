import styled from "styled-components";

export const PostBlock = styled.article`
  .post_cover_container {
    height: 300px;

    img {
      width: 100%;
      object-fit: cover;
      height: 100%;
      border-radius: 6px 6px 0 0;
    }
  }

  .post_details {
    padding: 1rem;

    .post_title {
      margin: 0.5rem 0;
    }

    .post_tags-container {
      display: flex;
      flex-wrap: wrap;

      .tag {
        margin: 0;
        color: ${({ theme }) => theme.colors.text_muted};
        padding: 1px 4px;

        &:hover .tag_name {
          color: ${({ theme }) => theme.colors.text};
        }
      }
    }

    .post_reactions {
      display: flex;
      justify-content: space-between;

      .reaction_buttons_container {
        display: flex;

        .reactions_button {
          display: flex;
          align-items: center;
          padding: 6px 12px;
          font-size: 14px;
          color: ${({ theme }) => theme.colors.text_muted};

          .reactions_icon {
            display: flex;
          }

          .button_text {
            margin-right: 5px;
          }
        }
      }

      .reading_time_container {
        .reading_time {
          color: ${({ theme }) => theme.colors.text_muted};
          font-size: 13px;
          margin-left: 10px;
        }

        .save_post_button {
          background-color: ${({ theme }) => theme.colors.footer_color};
          color: ${({ theme }) => theme.colors.text};
          padding: 4px 16px;
          border: 1px solid transparent;

          &:hover {
            border-color: ${({ theme }) => theme.colors.border_color};
          }
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.layout.break_point.md}) {
    .post_cover_container {
      height: 230px;
      img {
        object-fit: unset;
      }
    }
    .post_details {
      .post_title {
        font-size: 1rem;
      }
      .reactions_button {
        padding: 4px 8px !important;
        .button_text {
          display: none;
        }
      }

      .post_reactions .reading_time_container .reading_time {
        font-size: 10px;
        margin-left: 5px;
      }
    }
  }
`;
