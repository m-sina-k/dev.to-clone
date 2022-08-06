import { useState, useRef } from "react";
import { useOnClickOutside } from "hooks/useClickOutside";
import TagSelector from "./TagSelector";
import { Row } from "components/layout";
import Tag from "components/utils/Tag";

import { PostTagsType } from "types/types";
import { tags } from "data/tags";

interface PropTypes {
  postTags: PostTagsType[];
  addTag: (tag: PostTagsType) => void;
  removeTag: (tag: number) => void;
}

const AddTag: React.FC<PropTypes> = ({ postTags, addTag, removeTag }) => {
  const tagSelectorRef = useRef<HTMLDivElement>(null);

  const [showTagSelector, setShowTagSelector] = useState(false);

  const toggleShowTagSelector = () => setShowTagSelector(!showTagSelector);

  const closeTagSelector = () => setShowTagSelector(false);

  useOnClickOutside(tagSelectorRef, closeTagSelector);

  // get exception between all tags and selected tags, only show unselected tags in dropdown
  const unSelectedTag = tags.filter(
    ({ id: id1 }) => !postTags.some(({ id: id2 }) => id2 === id1)
  );

  return (
    <div id="current_tags">
      <Row id="current_tags_row" ref={tagSelectorRef}>
        {postTags.map((tag) => (
          <Tag
            key={tag.id}
            name={tag.name}
            color={tag.color}
            backColor={tag.backColor}
            removable
            hasBg
          />
        ))}

        {postTags.length < 4 && (
          <button id="add_tag" onClick={toggleShowTagSelector}>
            <span>
              {postTags.length
                ? "افزودن دسته بندی بیشتر..."
                : "حداکثر 4 دسته بندی انتخاب کنید..."}
            </span>
          </button>
        )}
        {showTagSelector && postTags.length < 4 && (
          <TagSelector addTag={addTag} unSelectedTags={unSelectedTag} />
        )}
      </Row>
    </div>
  );
};

export default AddTag;
