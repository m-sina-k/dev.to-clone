import styled from "styled-components";
import Dropdown from "components/utils/Dropdown";
import { PostTagsType } from "types/types";
import Tag from "components/utils/Tag";

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
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.body};
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
            <Tag
              key={tag.id}
              name={tag.name}
              color={tag.color}
              backColor={tag.backColor}
            />
          </li>
        ))}
      </Dropdown>
    </TagSelectorStyle>
  );
};

export default TagSelector;
