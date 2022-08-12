import styled from "styled-components";

export const Search = styled.div`
  padding: 0 1rem;

  #search_heading {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(max-content, 1fr));
    grid-row-gap: 0.5rem;

    #search_filters {
      margin: 0.5rem 0;
    }
  }

  #search_input_container {
    display: none;
    margin-bottom: 1rem;
  }

  #loading_container {
    display: flex;
    justify-content: center;
  }

  #results_container {
    .post_block_container {
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
  }

  @media only screen and (max-width: ${({ theme }) => theme.layout.break_point.lg}) {
    #search_input_container {
      display: block;
    }
  }
`;
