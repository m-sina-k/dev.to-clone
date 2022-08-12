import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { Input } from "components/layout";

import { ReactComponent as SearchIcon } from "assets/icons/utils/search.svg";

const SearchForm = styled.form`
  position: relative;
  display: flex;
  border-radius: 6px;
  height: 40px;
  overflow: hidden;
  width: 100%;
  box-shadow: ${({ theme }) => theme.colors.block_boxShadow};

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
      background-color: ${({ theme }) => theme.layout.global_colors.primary_tint};
      fill: ${({ theme }) => theme.layout.global_colors.primary};
    }
  }
`;

const SearchInput = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") return navigate(`/search/${searchQuery}`);
  };

  return (
    <SearchForm action="#" onSubmit={(e) => handleSearchSubmit(e)}>
      <Input
        placeholder="جستجو..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button type="submit" className="submit-button">
        <SearchIcon />
      </button>
    </SearchForm>
  );
};

export default SearchInput;
