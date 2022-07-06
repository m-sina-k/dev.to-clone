import styled from "styled-components";

export const Search = styled.div`
  #search_heading {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max-content, 1fr));
    grid-row-gap: 0.5rem;
  }

  #search_input_container {
    display: none;
    margin-bottom: 1rem;
  }

  #no_search_results {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 150px;
    margin-top: 1.5rem;
    padding: 2rem;
    text-align: center;
  }

  @media only screen and (max-width: ${({ theme }) =>
      theme.layout.break_point.lg}) {
    #search_input_container {
      display: block;
    }
  }
`;
