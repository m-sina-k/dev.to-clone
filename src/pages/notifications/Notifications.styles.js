import styled from "styled-components";

export const Notifications = styled.main`
  min-height: 80vh;

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
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
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
