import { useCallback } from "react";

import { Tooltip } from "components/layout";

import { ButtonSecondary } from "components/utils/Buttons";
import { ReactComponent as BoldIcon } from "assets/icons/editor/bold.svg";
import { ReactComponent as ItalicIcon } from "assets/icons/editor/italic.svg";
import { ReactComponent as LinkIcon } from "assets/icons/editor/link.svg";
import { ReactComponent as OlIcon } from "assets/icons/editor/ol.svg";
import { ReactComponent as UlIcon } from "assets/icons/editor/ul.svg";
import { ReactComponent as HeadingIcon } from "assets/icons/editor/heading.svg";
import { ReactComponent as QuoteIcon } from "assets/icons/editor/quote.svg";
import { ReactComponent as CodeIcon } from "assets/icons/editor/code.svg";
import { ReactComponent as CodeBlockIcon } from "assets/icons/editor/code_block.svg";
import { ReactComponent as ImageIcon } from "assets/icons/editor/image.svg";
import { ReactComponent as HrIcon } from "assets/icons/editor/hr.svg";
import {
  GrTextAlignRight,
  GrTextAlignLeft,
  GrTextAlignCenter,
} from "react-icons/gr";

export const EditorControls = (tiptap: any) => {
  const editor = tiptap.editor;

  const addImage = useCallback(() => {
    const url = window.prompt("آدرس URL عکس را وارد کنید:");

    if (url) {
      editor!.chain().focus().setImage({ src: url }).run();
    }
  }, [editor]);

  const setLink = useCallback(() => {
    const previousUrl = editor.getAttributes("link").href;
    const url = window.prompt("URL", previousUrl);

    // cancelled
    if (url === null) {
      return;
    }

    // empty
    if (url === "") {
      editor.chain().focus().extendMarkRange("link").unsetLink().run();

      return;
    }

    // update link
    editor.chain().focus().extendMarkRange("link").setLink({ href: url }).run();
  }, [editor]);

  if (!editor) return null;

  return (
    <>
      {/* bold */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().toggleBold().run()}
        className="editor_control has_tooltip"
      >
        <BoldIcon />
        <Tooltip className="editor_tooltip">بولد</Tooltip>
      </ButtonSecondary>

      {/* italic */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className="editor_control has_tooltip"
      >
        <ItalicIcon />
        <Tooltip className="editor_tooltip">ایتالیک</Tooltip>
      </ButtonSecondary>

      {/* link */}
      <ButtonSecondary onClick={setLink} className="editor_control has_tooltip">
        <LinkIcon />
        <Tooltip className="editor_tooltip">لینک</Tooltip>
      </ButtonSecondary>

      {/* ol */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className="editor_control has_tooltip"
      >
        <OlIcon />
        <Tooltip className="editor_tooltip">OL</Tooltip>
      </ButtonSecondary>

      {/* ul */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className="editor_control has_tooltip"
      >
        <UlIcon />
        <Tooltip className="editor_tooltip">UL</Tooltip>
      </ButtonSecondary>

      {/* heading */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className="editor_control has_tooltip"
      >
        <HeadingIcon />
        <Tooltip className="editor_tooltip">سر تیتر</Tooltip>
      </ButtonSecondary>

      {/* quote */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className="editor_control has_tooltip"
      >
        <QuoteIcon />
        <Tooltip className="editor_tooltip">نقل قول</Tooltip>
      </ButtonSecondary>

      {/* code */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().toggleCode().run()}
        className="editor_control has_tooltip"
      >
        <CodeIcon />
        <Tooltip className="editor_tooltip">کد</Tooltip>
      </ButtonSecondary>

      {/* code block */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className="editor_control has_tooltip"
      >
        <CodeBlockIcon />
        <Tooltip className="editor_tooltip">تکه کد</Tooltip>
      </ButtonSecondary>

      {/* image */}
      <ButtonSecondary
        onClick={addImage}
        className="editor_control has_tooltip"
      >
        <ImageIcon />
        <Tooltip className="editor_tooltip">عکس</Tooltip>
      </ButtonSecondary>

      {/* text-align:right */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().setTextAlign("right").run()}
        className="editor_control has_tooltip"
      >
        <GrTextAlignRight size={20} />
        <Tooltip className="editor_tooltip">راست چین</Tooltip>
      </ButtonSecondary>

      {/* text-align:center */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().setTextAlign("center").run()}
        className="editor_control has_tooltip"
      >
        <GrTextAlignCenter size={20} />
        <Tooltip className="editor_tooltip">وسط چین</Tooltip>
      </ButtonSecondary>

      {/* text-align:left */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().setTextAlign("left").run()}
        className="editor_control has_tooltip"
      >
        <GrTextAlignLeft size={20} />
        <Tooltip className="editor_tooltip">چپ چین</Tooltip>
      </ButtonSecondary>

      {/* hr */}
      <ButtonSecondary
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="editor_control has_tooltip"
      >
        <HrIcon />
        <Tooltip className="editor_tooltip">خط جدا کننده</Tooltip>
      </ButtonSecondary>
    </>
  );
};

export default EditorControls;
