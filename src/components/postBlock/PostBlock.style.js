import styled from "styled-components";

export const PostBlock = styled.article`
  .post_cover_container {
    max-height: 670px;

    img {
      border-radius: 6px 6px 0 0;
    }
  }

  .post_details {
    padding: 1rem;

    .author_info_container {
      display: flex;
      align-items: center;
      .author_profile-pic {
        width: 35px;
        height: 35px;
        margin-left: 0.5rem;
      }
      .publish_date {
        color: ${({ theme }) => theme.colors.text_muted};
      }
    }

    .post_title {
      margin: 0.5rem 0;
    }

    .post_tags-container {
      display: flex;
      flex-wrap: wrap;

      .tag {
        margin: 0;
        color: ${({ theme }) => theme.colors.text_muted};

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
          padding: 4px 12px;
          font-size: 13px;
          color: ${({ theme }) => theme.colors.text_muted};

          .reactions_icon {
            display: flex;
            margin-left: 6px;
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
          padding: 4px 16px;
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.md}) {
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
