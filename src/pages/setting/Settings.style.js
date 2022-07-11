import styled from "styled-components";

export const SettingsStyle = styled.main`
  .heading {
    margin-bottom: ${({ theme }) => theme.layout.spacing.md};

    h1 {
      font-size: 2rem;
    }
    .username {
      color: ${({ theme }) => theme.layout.global_colors.primary};
      margin-right: 6px;
    }
  }
  #mobile_page-selector_container {
    margin-bottom: 1.5rem;
    display: none;
  }
  .grid__container {
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: 1fr 3fr;

    #sidebar {
      &__list {
        .sidebar__list-item {
          margin-bottom: 5px;
          .link_icon {
            display: flex;
            margin-left: 6px;
          }
        }
      }
    }
    .profile_details_block {
      position: relative;

      #acc_details_form {
        label {
          display: block;
          margin-bottom: 0.7rem;
        }
        .form_group {
          margin-bottom: 1.2rem;

          .character_count {
            color: ${({ theme }) => theme.colors.text_muted};
            font-size: 13px;
            margin-top: 0.5rem;
            direction: ltr;
          }

          #profile-pic_container {
            display: flex;
            align-items: center;

            #profile-pic_input {
              width: 100%;
              padding: 0.75rem;
              background-color: ${({ theme }) => theme.colors.body};
              border-radius: 6px;
            }

            #profile_pic {
              margin-left: 1rem;
              width: 42px;
              height: 42px;
            }
          }
        }
        #form_submit {
          justify-content: center;
          width: 100%;
        }
      }
    }
    #theme_selector {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;

      .theme_option {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 1rem;
        border-radius: 6px;
        background-color: ${({ theme }) => theme.colors.body};
        cursor: pointer;
        border: 2px solid transparent;

        p {
          margin-bottom: 1rem;
        }
        img {
          max-width: 70px;
        }

        &--active {
          border-color: royalblue;
        }
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.lg}) {
    #mobile_page-selector_container {
      display: block;
    }

    .grid__container {
      grid-template-columns: 1fr;
      #sidebar {
        display: none;
      }
      #theme_selector {
        grid-template-columns: 1fr;
      }
    }
  }
`;
