import styled, { css } from "styled-components";

const formButton = css`
  display: flex;
  justify-content: center;
  transition: background-color 0.3s ease;
  color: white;
  width: 100%;
  border-radius: 6px;
  padding: 0.6rem 0;
  text-align: center;
  font-size: 16px;
`;

export const AuthFormStyle = styled.div`
  .block_container {
    width: 640px;
    max-width: 100%;
    margin: 0 auto;
  }
  .auth_error {
    padding: 1rem;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.layout.global_colors.red_tint};
    border: 1px solid ${({ theme }) => theme.layout.global_colors.red};
    margin-bottom: 1rem;

    .title,
    .message {
      color: ${({ theme }) => theme.layout.global_colors.red};
    }
  }
  .auth_form_container {
    max-width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;

    .auth_form_loading_overlay {
      position: absolute;
      display: flex;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      justify-content: center;
      align-items: center;
      background-color: rgba(255, 255, 255, 0.8);
      border-radius: 6px;
    }

    .heading {
      text-align: center;
      margin-bottom: 2rem;
    }
   

    .separator {
      margin: 1.5rem 0;
      display: flex;
      align-items: center;
      width: 100%;

      &_text {
        padding: 0 10px;
        min-width: max-content;
        color: ${({ theme }) => theme.colors.text_muted};
      }

      &::before,
      &::after {
        content: "";
        display: inline-block;
        width: 100%;
        height: 1px;
        background-color: ${({ theme }) => theme.colors.text_muted};
      }
    }

    .auth_form {
      width: 100%;

      .form_group {
        margin-bottom: 1rem;

        label {
          display: block;
          margin-bottom: 0.5rem;
        }
      }
      .form_submit {
        ${formButton}
        background-color: ${({ theme }) => theme.layout.global_colors.primary};

        &:hover {
          background-color: ${({ theme }) =>
            theme.layout.global_colors.primary_shade};
        }
      }
    }
  }
`;
