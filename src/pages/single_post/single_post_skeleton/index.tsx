import { Block } from "components/layout";
import { SinglePostSkeleton } from "./SinglePostSkeleton";

const Index = () => {
  return (
    // <div className="grid_container">
    <SinglePostSkeleton>
      <div className="post_content_container_skeleton">
        <aside className="reactions_sidebar_skeleton skeleton_block">
          <span className="reaction_item_skeleton skeleton"></span>
          <span className="reaction_item_skeleton skeleton"></span>
          <span className="reaction_item_skeleton skeleton"></span>
          <span className="reaction_item_skeleton skeleton"></span>
        </aside>
        <Block className="post_content_skeleton skeleton_block skeleton"></Block>
      </div>
      <Block className="author_sidebar_skeleton skeleton_block skeleton"></Block>
    </SinglePostSkeleton>
    // </div>
  );
};

export default Index;
