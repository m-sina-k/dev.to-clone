import { useState } from "react";
import { useSelector } from "react-redux";

import { getUploadPostState } from "features/uploadPostSlice";
import { PostTagsType, NewPostDisplayModeType as DisplayModeType } from "types/types";

import Editor from "./editor/Editor";
import Previewer from "./Previewer";
import { NewPost } from "./editor/NewPost.styles";

import { Container, Banner } from "components/layout";
import NewPostHeader from "pages/new_post/NewPostHeader";

const Index = () => {
  document.title = "پست جدید - انجمن توسعه دهندگان";

  const { postUploadError } = useSelector(getUploadPostState);

  const [displayMode, setDisplayMode] = useState<DisplayModeType>(DisplayModeType.EditMode);

  const [publishError, setPublishError] = useState<{
    variant: "danger" | "success";
    msg: string;
  } | null>(null);

  const [postCover, setPostCover] = useState<string | null>("");
  const [postTitle, setPostTitle] = useState("");
  const [postTags, setPostTags] = useState<PostTagsType[]>([]);
  const [postContent, setPostContent] = useState("");

  return (
    <NewPost className="new-post">
      {/* header */}
      <NewPostHeader displayMode={displayMode} setDisplayMode={setDisplayMode} />

      {/* show error if post title or post content is empty */}
      {!!publishError && (
        <Banner variant={publishError?.variant} m="1rem 0">
          <p>{publishError.msg}</p>
        </Banner>
      )}

      {/* show error if post upload failed */}
      {!!postUploadError && (
        <Banner variant="danger" m="1rem 0">
          <p>{postUploadError}</p>
        </Banner>
      )}

      <Container className="new-post_container">
        {displayMode === DisplayModeType.EditMode ? (
          <Editor
            postTags={postTags}
            setPostTags={setPostTags}
            postCover={postCover}
            setPostCover={setPostCover}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postContent={postContent}
            setPostContent={setPostContent}
            setPublishError={setPublishError}
          />
        ) : (
          <Previewer
            postTags={postTags}
            postCover={postCover}
            postTitle={postTitle}
            postContent={postContent}
          />
        )}
      </Container>
    </NewPost>
  );
};

export default Index;
