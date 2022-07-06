import styled from "styled-components";

export const Home = styled.main`
  #home_container {
    display: grid;
    grid-template-columns: 20% 50% 30%;

    @media only screen and (max-width: ${({ theme }) =>
        theme.layout.break_point.lg}) {
      #home_navigation {
        display: none;
      }
    }
  }
`;
