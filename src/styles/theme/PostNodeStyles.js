import { css } from "styled-components";

export const PostNodeStyles = css`
  pre {
    direction: ltr;
  }
  ul {
    list-style: none;

    li {
      margin-bottom: 6px;
      display: flex;
      align-items: flex-start;

      &::before {
        content: "•";
        display: flex;
        align-items: center;
        margin: 0 10px;
        font-size: 20px;
        color: ${({ theme }) => theme.colors.text_muted};
        width: 20px;
        height: 20px;
      }
    }
  }

  ol {
    list-style: none;

    li {
      counter-increment: li;
      &::before {
        content: counter(li);
        display: inline-block;
        margin-left: 6px;
        font-size: 18px;
        color: ${({ theme }) => theme.colors.text_muted};
      }
    }
  }

  li {
    display: flex;
    align-items: center;
  }

  a {
    color: royalblue;
    text-decoration: underline;
  }

  blockquote {
    background: ${({ theme }) => theme.colors.body};
    border-right: 10px solid ${({ theme }) => theme.colors.border_color};
    margin: 1.5em 10px;
    padding: 0.5em 10px;
    border-radius: 3px;

    p {
      color: ${({ theme }) => theme.colors.text_muted};
      display: inline;
    }
  }

  code {
    background-color: #272822;
    color: #f8f8f2;
    border-radius: 6px;
    padding: 4px 5px 5px;
    line-height: 1.5;
    margin: 0 6px;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
    text-align: justify;

    code {
      display: block;
      margin: 0.85rem 0;
      padding: 0.5rem 1rem;
    }
  }

  img {
    margin: 0.5rem 0;
    width: 100%;
    max-height: 350px;
    object-fit: cover;
  }

  hr {
    margin: 1rem 0;
  }
  h2,p {
    margin-bottom: 10px;
  }
`;
