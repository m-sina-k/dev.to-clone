import styled from "styled-components";
import { flexCenter } from "styles/utilityStyles";

export const Notifications = styled.main`
  .heading {
    margin-bottom: ${({ theme }) => theme.layout.spacing.md};

    h1 {
      font-size: 2rem;
    }
  }
  .grid__container {
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: 1fr 3fr;

    #sidebar {
      &__list {
        .sidebar__list-item {
          margin-bottom: 5px;
        }
      }
    }

    #notifications_list {
      ${flexCenter}
      flex-direction: column;
      background-color: ${({ theme }) => theme.colors.block_color};
      border-radius: 6px;
      padding: 2rem 1rem;

      img {
        max-width: 100px;
      }

      p {
        margin-top: 20px;
      }
    }
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.lg}) {
    .grid__container {
      grid-template-columns: 1fr;
    }
    #sidebar {
      margin-bottom: 1rem;
      &__list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        justify-content: space-between;
        justify-items: start;
      }
    }
  }
`;
