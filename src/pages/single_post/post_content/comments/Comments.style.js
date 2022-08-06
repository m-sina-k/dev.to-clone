import styled from "styled-components";
import { inputStyle } from "components/layout";

export const CommentsStyle = styled.div`
  border-top: 1.5px solid ${({ theme }) => theme.colors.border_color};

  .comment_input_container {
    display: flex;
    margin-top: 1.5rem;

    .comment_form {
      width: 100%;

      .comment_input {
        ${inputStyle};
        padding: 0.35rem;
      }

      .submit_comment {
        margin-top: 0.8rem;
        margin-right: auto;
      }
    }
  }

  .user_profile-pic {
    width: 35px;
    height: 35px;
    border-radius: 50%;
    margin-left: 10px;
  }

  .submitted_comment_container {
    margin-top: 1.5rem;

    .submitted_comment {
      margin-top: 1.5rem;

      .flex_wrapper {
        display: flex;

        .comment_content_container {
          display: flex;
          flex-direction: column;
          width: 100%;

          .comment_content {
            padding: 0.8rem;
            border-radius: 6px;
            border: 1px solid ${({ theme }) => theme.colors.border_color};

            .publish_details {
              margin-bottom: 0.5rem;

              .publisher_profile_link {
                color: ${({ theme }) => theme.colors.text};
                padding: 0.25rem 0.5rem;
                border-radius: 6px;
                font-size: 15px;

                &:hover {
                  background-color: ${({ theme }) => theme.colors.body};
                }
              }

              .publish_date {
                color: ${({ theme }) => theme.colors.text_muted};
                margin-right: 6px;
              }
            }
          }
        }

        .like_button {
          display: flex;
          align-self: flex-start;
          justify-items: center;
          padding: 0.1rem 0.5rem;
          margin-top: 0.5rem;

          .heart_icon {
            display: flex;
            margin-left: 3px;
          }
          &--active {
            fill: ${({ theme }) => theme.layout.global_colors.red};
            background-color: ${({ theme }) =>
              theme.layout.global_colors.red_tint};
          }

          .text {
            margin: 0 6px;
          }
        }
      }
    }
  }
`;
