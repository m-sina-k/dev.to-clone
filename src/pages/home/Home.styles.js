import styled from "styled-components";

export const Home = styled.main`
  #home_container {
    display: grid;
    grid-template-columns: 1fr 2.7fr 1.3fr;
    grid-column-gap: 15px;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.xl}) {
    #home_container {
      grid-template-columns: 1fr 4fr;
    }
  }
  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.lg}) {
    #home_container {
      grid-template-columns: 1fr;
    }
    #home_navigation {
      display: none;
    }
  }
`;
