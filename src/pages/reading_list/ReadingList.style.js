import styled from "styled-components";

export const ReadingList = styled.div`
  padding: 0 0.5rem;

  .heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    .reading_list-search_input {
      width: 270px;
      margin-top: 0.5rem;
    }
  }

  .loading_container {
    height: 300px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 0;
  }

  .reading-list_posts_container {
    margin-top: 1.5rem;

    .saved_post {
      display: flex;
      margin-bottom: 1rem;
      border-bottom: 1.5px solid ${({ theme }) => theme.colors.border_color};
      padding: 0.5rem 0;

      &:last-child {
        border-bottom: none;
      }
      .image_container {
        width: 35px;
        height: 35px;
        margin-left: 0.75rem;
        .author_profile-pic {
          width: 100%;
          height: 100%;
        }
      }

      .post_details {
        width: calc(100% - 35px);
        .post_title {
          display: block;
        }
        .details_container {
          display: flex;
          align-items: baseline;
          flex-wrap: wrap;
          font-size: 14px;

          .author_name {
            display: inline-block;
          }
          .publish_date {
            margin: 0 1rem;
          }
          .tags_container {
            display: flex;
            flex-wrap: wrap;
            margin-top: 0.5rem;

            .tag {
              padding: 4px 10px;
              font-size: 13px;
              direction: ltr;
            }
          }
        }
      }
    }
  }

  .empty_list_container {
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;

    .title {
      margin-bottom: 0.5rem;
    }

    .text {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: baseline;
      color: ${({ theme }) => theme.colors.text_muted};

      .bold_text {
        margin: 0 6px;
        color: ${({ theme }) => theme.colors.text};
        fill: ${({ theme }) => theme.colors.text};
      }
    }
  }
`;
