import React from "react";
import { Editor } from "@tiptap/react";
import { ToolbarItem } from "../types";

interface ToolbarButtonProps {
  editor: Editor;
  type: ToolbarItem["type"];
  icon?: React.ReactNode;
  title?: string;
}

const getDefaultIcon = (type: ToolbarItem["type"]): string => {
  const icons: Record<string, string> = {
    bold: "B",
    italic: "I",
    underline: "U",
    strike: "S",
    code: "</>",
    heading: "H",
    paragraph: "P",
    bulletList: "•",
    orderedList: "1.",
    blockquote: '"',
    codeBlock: "</>",
    link: "🔗",
    image: "🖼",
    table: "⊞",
    textAlign: "≡",
    color: "🎨",
    highlight: "🖍",
    subscript: "x₂",
    superscript: "x²",
  };
  return icons[type] || type;
};

export const ToolbarButton: React.FC<ToolbarButtonProps> = ({
  editor,
  type,
  icon,
  title,
}) => {
  const isActive = React.useMemo(() => {
    switch (type) {
      case "bold":
        return editor.isActive("bold");
      case "italic":
        return editor.isActive("italic");
      case "underline":
        return editor.isActive("underline");
      case "strike":
        return editor.isActive("strike");
      case "code":
        return editor.isActive("code");
      case "heading":
        return editor.isActive("heading");
      case "paragraph":
        return editor.isActive("paragraph");
      case "bulletList":
        return editor.isActive("bulletList");
      case "orderedList":
        return editor.isActive("orderedList");
      case "blockquote":
        return editor.isActive("blockquote");
      case "codeBlock":
        return editor.isActive("codeBlock");
      case "link":
        return editor.isActive("link");
      case "image":
        return editor.isActive("image");
      case "table":
        return editor.isActive("table");
      case "textAlign":
        return (
          editor.isActive({ textAlign: "left" }) ||
          editor.isActive({ textAlign: "center" }) ||
          editor.isActive({ textAlign: "right" }) ||
          editor.isActive({ textAlign: "justify" })
        );
      case "color":
        return editor.isActive("textStyle");
      case "highlight":
        return editor.isActive("highlight");
      case "subscript":
        return editor.isActive("subscript");
      case "superscript":
        return editor.isActive("superscript");
      default:
        return false;
    }
  }, [editor, type]);

  const handleClick = React.useCallback(() => {
    switch (type) {
      case "bold":
        editor.chain().focus().toggleBold().run();
        break;
      case "italic":
        editor.chain().focus().toggleItalic().run();
        break;
      case "underline":
        editor.chain().focus().toggleUnderline().run();
        break;
      case "strike":
        editor.chain().focus().toggleStrike().run();
        break;
      case "code":
        editor.chain().focus().toggleCode().run();
        break;
      case "heading":
        editor.chain().focus().toggleHeading({ level: 1 }).run();
        break;
      case "paragraph":
        editor.chain().focus().setParagraph().run();
        break;
      case "bulletList":
        editor.chain().focus().toggleBulletList().run();
        break;
      case "orderedList":
        editor.chain().focus().toggleOrderedList().run();
        break;
      case "blockquote":
        editor.chain().focus().toggleBlockquote().run();
        break;
      case "codeBlock":
        editor.chain().focus().toggleCodeBlock().run();
        break;
      case "link":
        const url = window.prompt("请输入链接地址:");
        if (url) {
          editor.chain().focus().setLink({ href: url }).run();
        }
        break;
      case "image":
        const src = window.prompt("请输入图片地址:");
        if (src) {
          editor.chain().focus().setImage({ src }).run();
        }
        break;
      case "table":
        editor
          .chain()
          .focus()
          .insertTable({ rows: 3, cols: 3, withHeaderRow: true })
          .run();
        break;
      case "textAlign":
        editor.chain().focus().setTextAlign("left").run();
        break;
      case "color":
        const color = window.prompt("请输入颜色值 (如: #ff0000):");
        if (color) {
          editor.chain().focus().setColor(color).run();
        }
        break;
      case "highlight":
        const highlightColor = window.prompt("请输入高亮颜色值 (如: #ffff00):");
        if (highlightColor) {
          editor.chain().focus().setHighlight({ color: highlightColor }).run();
        }
        break;
      case "subscript":
        editor.chain().focus().toggleSubscript().run();
        break;
      case "superscript":
        editor.chain().focus().toggleSuperscript().run();
        break;
    }
  }, [editor, type]);

  return (
    <button
      type="button"
      className={`rich-text-editor-toolbar-item ${isActive ? "active" : ""}`}
      onClick={handleClick}
      title={title || type}
    >
      {icon || getDefaultIcon(type)}
    </button>
  );
};
