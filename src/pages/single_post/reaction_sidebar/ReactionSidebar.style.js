import styled from "styled-components";

export const ReactionSidebarStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: sticky;
  top: 7rem;
  width: 65px;

  .reaction_button {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .icon {
      width: 43px;
      height: 43px;
      border-radius: 100px;
      padding: 0.5rem;
      fill: ${({ theme }) => theme.colors.text};
      border: 2px solid transparent;

      &--heart--active {
        border-color: ${({ theme }) => theme.layout.global_colors.red};
        fill: ${({ theme }) => theme.layout.global_colors.red};
        background-color: ${({ theme }) => theme.layout.global_colors.red_tint};
      }
      &--unicorn--active {
        border-color: ${({ theme }) => theme.layout.global_colors.green};
        fill: ${({ theme }) => theme.layout.global_colors.green};
        background-color: ${({ theme }) => theme.layout.global_colors.green_tint};
      }
      &--bookmark--active {
        border-color: ${({ theme }) => theme.layout.global_colors.primary};
        fill: ${({ theme }) => theme.layout.global_colors.primary};
        background-color: ${({ theme }) => theme.layout.global_colors.primary_tint};
      }
    }

    .reaction_count {
      display: inline-block;
      color: ${({ theme }) => theme.colors.text_muted};
      margin-top: 6px;
    }

    &:hover {
      .icon--heart {
        background-color: ${({ theme }) => theme.layout.global_colors.red_tint};
        fill: ${({ theme }) => theme.layout.global_colors.red};
      }
      .icon--unicorn {
        background-color: ${({ theme }) => theme.layout.global_colors.green_tint};
        fill: ${({ theme }) => theme.layout.global_colors.green};
      }
      .icon--bookmark {
        background-color: ${({ theme }) => theme.layout.global_colors.primary_tint};
        fill: ${({ theme }) => theme.layout.global_colors.primary};
      }
      .icon--more {
        background-color: ${({ theme }) => theme.colors.footer_color};
        fill: ${({ theme }) => theme.colors.text};
      }
    }
  }

  .more-options_button_container {
    position: relative;

    .more-options_container {
      font-size: 14px;
    }

    .dropdown {
      top: 0;
      right: 50px;
    }
  }

  @media only screen and (max-width: ${({ theme }) => theme.layout.break_point.lg}) {
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

    .reaction_button {
      flex-direction: row;
      margin-bottom: 0;

      .reaction_count {
        margin-top: 0;
        margin-right: 8px;
      }
    }

    .more-options_container .dropdown {
      bottom: 100%;
      top: unset;
      left: 0;
      right: unset;
    }
  }
`;
