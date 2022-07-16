import styled from "styled-components";
import Dropdown from "components/utils/Dropdown";
import { PostTagsType } from "types/types";

interface PropTypes {
  addTag: (tag: PostTagsType) => void;
  unSelectedTags: PostTagsType[];
}

const TagSelectorStyle = styled.div`
  .tag {
    direction: ltr;
    margin-bottom: 0.5rem;
    display: flex;
    align-items: center;
    font-size: 15px;
    color: ${({ theme }) => theme.colors.text_muted};
    border-radius: 6px;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.body};
    }
  }
`;

export const Tag = styled.section`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 4px 10px;
  margin: 6px 3px;
  font-size: 14px;
  direction: ltr;

  .tag_name {
    color: ${({ theme }) => theme.colors.text_muted};
  }

  .remove_tag {
    display: flex;
    margin-left: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text_muted};

    &:hover {
      color: ${({ theme }) => theme.layout.global_colors.red};
    }
  }
`;

const TagSelector: React.FC<PropTypes> = ({ addTag, unSelectedTags }) => {
  return (
    <TagSelectorStyle>
      <Dropdown
        top="110%"
        left="0"
        minWidth="100%"
        maxHeight="300px"
        p="0.3rem 0.5rem"
      >
        {unSelectedTags.map((tag) => (
          <li className="tag" key={tag.id} onClick={() => addTag(tag)}>
            <span style={{ color: tag.color }}>#</span>
            <span>{tag.name}</span>
          </li>
        ))}
      </Dropdown>
    </TagSelectorStyle>
  );
};

export default TagSelector;
