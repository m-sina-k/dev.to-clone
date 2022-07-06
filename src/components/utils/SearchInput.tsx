import styled from "styled-components";
import { ReactComponent as SearchIcon } from "assets/icons/search.svg";

const SearchInput = () => {
  const SearchForm = styled.form`
    position: relative;
    display: flex;
    border-radius: 6px;
    height: 40px;
    overflow: hidden;
    width: 100%;
    box-shadow: ${({ theme }) => theme.colors.block_boxShadow};
    

    .search-input {
      width: 100%;
      height: 100%;
      padding: 4px 8px;
      border-radius: 6px;
      background-color: ${({ theme }) => theme.colors.block_color};;
      &:focus {
        border: 2px solid royalblue;
      }
    }
    .submit-button {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      background-color: transparent;

      top: 2px;
      bottom: 2px;
      fill: ${({ theme }) => theme.colors.text};
      left: 2px;
      width: 40px;
      cursor: pointer;
      border-radius: 4px;

      &:hover {
        background-color: ${({ theme }) =>
          theme.layout.global_colors.primary_tint};
        fill: ${({ theme }) => theme.layout.global_colors.primary};
      }
    }
  `;

  return (
    <SearchForm action="#">
      <input type="text" className="search-input" placeholder="جستجو..." />
      <button type="submit" className="submit-button">
        <SearchIcon />
      </button>
    </SearchForm>
  );
};

export default SearchInput;
