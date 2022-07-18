import styled, { keyframes } from "styled-components";
import { Block } from "components/layout";

const skeleton = keyframes`
    to {
      opacity: 0.3;
    }
  `;

export const SkeletonBlock = styled(Block)`
  padding: 0;
  overflow: hidden;
  height: 350px;
  margin-bottom: 1rem;

  .cover_placeholder {
    height: 45%;
    background-color: ${({ theme }) => theme.colors.body};
  }
  .wrapper {
    padding: 1rem;
  }
  .user_info_container {
    margin-top: 0.5rem;
    display: flex;
  }

  .user_image {
    background-color: ${({ theme }) => theme.colors.body};
    width: 30px;
    height: 30px;
    border-radius: 50px;
    margin-left: 6px;
  }

  .text {
    width: 120px;
    height: 8px;
    background-color: ${({ theme }) => theme.colors.body};
    margin: 4px 0;
  }

  .date {
    width: 60px;
  }

  .title {
    margin-top: 1.5rem;
    width: 400px;
    height: 16px;
  }
  .tags {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1.5rem;
    .tag {
      border-radius: 6px;
      width: 80px;
      height: 20px;
      margin: 6px;
      display: inline-block;
      background-color: ${({ theme }) => theme.colors.body};
    }
  }

  .skeleton {
    animation: ${skeleton} 1s infinite alternate;
  }

  @media only screen and (max-width: 515px) {
    .wrapper {
      padding: 0.3rem;
      .title {
        width: 200px;
      }
    }
  }
`;
