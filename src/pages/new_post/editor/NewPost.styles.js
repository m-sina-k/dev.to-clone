import styled from "styled-components";
import { PostNodeStyles } from "styles/theme/PostNodeStyles";

export const NewPost = styled.main`
  max-height: 100vh;

  .new-post_header {
    width: 100%;
    position: relative;

    #exit-button_container {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    #header_container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 0 auto;
      height: ${({ theme }) => theme.layout.header_height};
      padding-top: 1rem;
      max-width: 720px;

      #exit_button {
        display: none;
      }

      #header_left,
      #header_right {
        display: flex;
        align-items: center;
      }
      #page_title {
        color: ${({ theme }) => theme.colors.text_muted};
      }
      #logo {
        max-height: 40px;
        margin-left: 1rem;
      }
    }
  }

  .new-post_container {
    max-width: 720px;

    .new-post_block {
      height: 75vh;
      margin-top: 2rem;
      overflow: auto;
      position: relative;
      ${PostNodeStyles};

      .block_wrapper {
        padding: 2rem 3rem 1rem;
      }

      .has_tooltip {
        position: relative;
        &:hover .editor_tooltip {
          opacity: 1;
        }
      }

      /* ------------------------------ editor styles ----------------------------- */

      #post-cover_container {
        display: flex;
        flex-direction: column;
        align-items: center;

        .post-cover_preview {
          width: 100%;
          max-height: 250px;
        }
        .cover_button {
          padding: 0.35rem 1rem;
          color: ${({ theme }) => theme.colors.text_muted};
          font-size: 15px;
          border: 2px solid ${({ theme }) => theme.colors.border_color};

          &--add {
            align-self: flex-start;
          }

          &--delete {
            border: none;
            color: ${({ theme }) => theme.layout.global_colors.red};
            margin-right: 6px;

            &:hover {
              background-color: ${({ theme }) => theme.colors.body};
            }
          }
        }
      }

      #post-title_input {
        width: 100%;
        margin-top: 1.5rem;
        font-size: 2rem;
        background-color: transparent;
      }

      #current_tags {
        margin-top: 1rem;

        &_row {
          display: flex;
          flex-wrap: wrap;
          position: relative;

          #add_tag {
            display: flex;
            align-items: center;
            margin-right: 6px;
            position: relative;
            color: ${({ theme }) => theme.colors.text_muted};
          }
        }
      }

      #editor_toolbar {
        margin-top: 1rem;
        padding: 0.5rem 3rem;
        background-color: ${({ theme }) => theme.colors.body};
        position: sticky;
        top: 0;
        z-index: 10;
        max-width: 100%;

        .editor_control {
          padding: 6px;
        }
      }

      .editor-input_container {
        .ProseMirror {
          min-height: 200px;
        }

        .ProseMirror p.is-editor-empty:first-child::before {
          content: attr(data-placeholder);
          float: right;
          color: ${({ theme }) => theme.colors.text_muted};
          pointer-events: none;
          height: 0;
        }
        .ProseMirror-focused {
          outline: none;
        }
      }

      /* ---------------------------- previewer styles ---------------------------- */
      #previewer_post-cover {
        width: 100%;
        max-height: 300px;
        object-fit: cover;
      }
      #previewer_post-tags_container {
        margin: 1.5rem 0;
        flex-wrap: wrap;
      }
      #previewer_post-content-container {
        margin-top: 1rem;
      }
    }

    #publish-btn_container {
      margin-top: 1rem;
    }
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.xl}) {
    .editor_tooltip {
      display: none;
    }
    #exit-button_container {
      display: none;
    }
    .new-post_header #header_container {
      #exit_button {
        display: flex;
      }
    }
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.lg}) {
    .new-post_container {
      max-width: 100%;

      .block_wrapper {
        padding: 1.5rem 1rem 0.5rem !important;
      }
      #editor_toolbar {
        padding: 0.5rem 1rem !important;
        overflow-x: auto;
        overflow-y: hidden;
      }
    }
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.md}) {
    .new-post_header {
      #logo,
      #page_title {
        display: none;
      }
    }
  }
`;
