import styled from "styled-components";
import { flexCenter } from "styles/utilityStyles";

export const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  background-color: ${({ theme }) => theme.colors.block_color};
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;

  .header__right,
  .header__left {
    display: flex;
    align-items: stretch;
  }

  #sidebar-menu__button {
    display: none;
  }

  .logo {
    display: flex;
    width: 50px;
    height: 40px;
  }

  .search-form {
    position: relative;
    display: flex;
    margin-right: 16px;
    height: auto;
    border-radius: 6px;
    overflow: hidden;
    min-width: 420px;

    .search-input {
      border: 1px solid ${({ theme }) => theme.colors.border_color};
      width: 100%;
      padding: 4px 8px;
      border-radius: 6px;
      &:focus {
        border: 2px solid royalblue;
      }
    }

    .search-submit {
      ${flexCenter}
      position: absolute;
      top: 2px;
      bottom: 2px;
      background-color: transparent;
      fill: ${({ theme }) => theme.colors.text};
      left: 2px;
      width: 40px;
      cursor: pointer;
      border-radius: 4px;

      &:hover{
        background-color: ${({ theme }) => theme.layout.global_colors.primary_tint};
        fill: ${({ theme }) => theme.layout.global_colors.primary};
      }
    }
  }
  .widgets {
    display: flex;

    .search_button {
      display: none;
    }

    .profile__button {
      border-radius: 999px;
      width: 35px;
      height: 35px;
      padding: 6px;
      align-self: center;
    }
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.lg}) {
    .search-form,
    .hidden_button {
      display: none;
    }

    #sidebar-menu__button,
    .widgets .search_button {
      display: flex;
    }
  }
`;
