import styled from "styled-components";

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
  #search_form {
    margin-right: 1rem;
    min-width: 420px;
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
    #search_form,
    .hidden_button {
      display: none;
    }

    #sidebar-menu__button,
    .widgets .search_button {
      display: flex;
    }
  }
`;
