import { useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { useAppDispatch } from "app/store";
import { uploadPost } from "features/uploadPostSlice";
import TextareaAutosize from "react-textarea-autosize";
import EditorControls from "./EditorControls";
import AddCover from "./AddCover";
import AddTag from "./AddTag";
import { getAuthState } from "features/authSlice";
import {
  setPostUploadError,
  getUploadPostState,
} from "features/uploadPostSlice";
import { Block, Row, FormLoading } from "components/layout";
import { ButtonCTA } from "components/utils/Buttons";
import { PostTagsType, PostType } from "types/types";
import { Oval } from "react-loader-spinner";

// tiptap config
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Placeholder from "@tiptap/extension-placeholder";
import TextAlign from "@tiptap/extension-text-align";

interface PropTypes {
  postTags: PostTagsType[];
  setPostTags: (tagArr: PostTagsType[]) => void;
  postCover: string | null;
  setPostCover: (url: string | null) => void;
  postTitle: string;
  setPostTitle: (title: string) => void;
  postContent: string;
  setPostContent: (content: string) => void;
  setPublishError: (
    err: { variant: "success" | "danger"; msg: string } | null
  ) => void;
}

const Editor: React.FC<PropTypes> = ({
  postTags,
  setPostTags,
  postCover,
  setPostCover,
  postTitle,
  setPostTitle,
  postContent,
  setPostContent,
  setPublishError,
}) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Image,
      Link.configure({
        openOnClick: true,
      }),
      Placeholder.configure({
        placeholder: "محتوای پست خود را وارد کنید...",
      }),
      TextAlign.configure({
        alignments: ["left", "right", "center"],
        types: ["heading", "paragraph", "code", "blockquote"],
        defaultAlignment: "right",
      }),
    ],
    content: postContent,
    onUpdate: ({ editor }) => {
      const htmlOutput = editor.getHTML();
      setPostContent(htmlOutput);
    },
  });

  const dispatch = useAppDispatch();
  const { currentUser } = useSelector(getAuthState);
  const { postUploadLoading } = useSelector(getUploadPostState);

  const addTag = (tag: PostTagsType) => {
    setPostTags([...postTags, tag]);
  };

  const removeTag = (tagId: number) => {
    const tempTags = postTags.filter((tag) => tag.id !== tagId);
    setPostTags(tempTags);
  };

  const handleUploadPost = async () => {
    const { id, username } = currentUser;
    const post: PostType = {
      authorId: id,
      authorUsername: username,
      postId: nanoid(),
      title: postTitle,
      cover: postCover,
      tags: postTags,
      content: postContent,
      publishDate: new Date(),
    };
    const postUploaded = await dispatch(uploadPost(post)).unwrap();
    if (postUploaded) window.location.href = "/";
  };

  const publishPost = () => {
    setPublishError(null);
    dispatch(setPostUploadError(null));
    if (postTitle.trim() === "" || postContent.trim() === "") {
      setPublishError({
        variant: "danger",
        msg: "عنوان و محتوای پست نمی تواند خالی باشد.",
      });
      window.scrollTo(0, 0);
    } else handleUploadPost();
  };

  return (
    <>
      <Block className="new-post_block" p="0">
        
        {/* show loading while uploading the post */}
        {postUploadLoading && (
          <FormLoading>
            <Oval
              color="#3b49df"
              secondaryColor="#3b49df33"
              ariaLabel="لطفا صبر کنید..."
            />
          </FormLoading>
        )}
        <div className="block_wrapper">
          {/* add cover button */}
          <AddCover postCover={postCover} setPostCover={setPostCover} />

          {/* post title input */}
          <TextareaAutosize
            minRows={1}
            id="post-title_input"
            placeholder="عنوان پست را وارد کنید..."
            value={postTitle}
            onChange={(e) => setPostTitle(e.target.value)}
          />

          {/* add tag button */}
          <AddTag addTag={addTag} removeTag={removeTag} postTags={postTags} />
        </div>

        {/* editor toolbar */}
        <Row ai="center" id="editor_toolbar">
          <EditorControls editor={editor} />
        </Row>

        {/* post content */}
        <div className="block_wrapper editor-input_container">
          <EditorContent editor={editor} />
        </div>
      </Block>

      {/* publish button */}
      <Row id="publish-btn_container" jc="flex-end">
        <ButtonCTA p="0.5rem 1.5rem" onClick={publishPost}>
          انتشار
        </ButtonCTA>
      </Row>
    </>
  );
};

export default Editor;
