import { css } from "styled-components";

export const PostNodeStyles = css`
  pre {
    direction: ltr;
  }
  ul {
    list-style: none;

    li::before {
      content: "•";
      display: inline-block;
      margin-left: 6px;
      font-size: 20px;
      color: ${({ theme }) => theme.colors.text_muted};
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
  }

  pre > code {
    display: block;
    margin: 0.7rem 0;
  }

  img {
    margin: 0.5rem 0;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
  }
`;
