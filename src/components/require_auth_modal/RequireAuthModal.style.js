import styled from "styled-components";

export const RequireAuthModal = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #0909094c;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;

  .auth_modal {
    border-radius: 8px;
    width: 640px;
    background-color: ${({ theme }) => theme.colors.block_color};

    .heading {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0.7rem 1.5rem;
    }

    hr {
      margin: 0;
    }

    .content {
      padding: 2rem 1.5rem;

      .logo {
        width: 90px;
        height: 90px;
        border-radius: 6px;
        transform: rotate(10deg);
        margin-bottom: 1rem;
      }

      .text {
        font-size: 14px;
        margin-bottom: 0.5rem;
      }

      .button_container {
        width: 70%;
        margin: 1rem auto 0;

        button {
          width: 100%;
          margin-bottom: 0.25rem;
          justify-content: center;
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.layout.break_point.md}) {
    .auth_modal {
      width: 100%;
      height: 100vh;

      .heading {
        padding: 0.75rem;

        .title {
          font-size: 1rem;
        }
      }

      .content {
        .logo {
          width: 50px;
          height: 50px;
        }

        .button_container {
          width: 100%;
        }
      }
    }
  }
`;
