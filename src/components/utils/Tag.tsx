import styled, { css } from "styled-components";
import { IoMdClose } from "react-icons/io";

interface TagProps {
  backColor?: string;
  color?: string;
  name?: string;
  hover?: boolean;
  removable?: boolean;
  hasBg?: boolean;
}

const TagStyle = styled.section<TagProps>`
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 2px 6px;
  margin: 6px 3px;
  font-size: 14px;
  direction: ltr;
  border: 2px solid transparent;
  background-color: ${({ hasBg, backColor }) => (hasBg ? backColor : null)};
  cursor: pointer;

  .hash {
    color: ${({ color, theme }) => (color ? color : theme.colors.text_muted)};
  }

  .tag_name {
    transition: all 0.3s ease;
    color: ${({ theme }) => theme.colors.text_muted};
  }

  .remove_tag {
    display: flex;
    margin-left: 5px;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.text};

    &:hover {
      color: ${({ theme }) => theme.layout.global_colors.red};
    }
  }
  ${({ hover, backColor }) =>
    hover &&
    css`
      &:hover {
        background-color: ${backColor};
        border-color: ${backColor};
      }
    `}
`;

const Tag: React.FC<TagProps> = ({
  color,
  backColor,
  name,
  hover,
  removable,
  hasBg,
}) => {
  return (
    <TagStyle
      color={color}
      backColor={backColor}
      hover={hover}
      hasBg={hasBg}
      className="tag"
    >
      <span className="hash">#</span>
      <span className="tag_name">{name}</span>
      {removable && (
        <span className="remove_tag">
          <IoMdClose size={18}/>
        </span>
      )}
    </TagStyle>
  );
};

export default Tag;
