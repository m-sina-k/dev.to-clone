import styled from "styled-components";

export const AuthorSidebar = styled.div`
  position: sticky;
  top: 4.5rem;

  .author_details_block {
    overflow: hidden;
    padding-bottom: 1rem;

    .author_details_container {
      .brand_bg {
        height: 35px;
        background: black;
      }

      .block_content {
        padding: 0 1rem;

        .author_details {
          margin-top: -17px;
          display: flex;

          .profile_pic {
            width: 50px;
            height: 50px;
            margin-left: 10px;
          }

          .username {
            align-self: flex-end;
          }
        }

        .follow_button {
          justify-content: center;
          width: 100%;
          margin-top: 1rem;
        }

        .user_bio {
          margin-top: 1rem;
          font-size: 15px;
          color: ${({ theme }) => theme.colors.text_muted};
        }

        .user_register_date {
          margin-top: 1rem;

          .title {
            color: ${({ theme }) => theme.colors.text_muted};
          }
          
          .date {
            color: ${({ theme }) => theme.colors.text_muted};
            margin-top: 4px;
          }
        }
      }
    }
  }
`;
