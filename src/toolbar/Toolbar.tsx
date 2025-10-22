import React from "react";
import { Editor } from "@tiptap/react";
import { ToolbarItem } from "../types";
import { ToolbarButton } from "./ToolbarButton";
import { ToolbarDivider } from "./ToolbarDivider";

interface ToolbarProps {
  editor: Editor | null;
  items?: ToolbarItem[];
}

const defaultToolbarItems: ToolbarItem[] = [
  { type: "bold", show: true },
  { type: "italic", show: true },
  { type: "underline", show: true },
  { type: "strike", show: true },
  { type: "code", show: true },
  { type: "divider" as any, show: true },
  { type: "heading", show: true },
  { type: "paragraph", show: true },
  { type: "divider" as any, show: true },
  { type: "bulletList", show: true },
  { type: "orderedList", show: true },
  { type: "blockquote", show: true },
  { type: "codeBlock", show: true },
  { type: "divider" as any, show: true },
  { type: "link", show: true },
  { type: "image", show: true },
  { type: "table", show: true },
  { type: "divider" as any, show: true },
  { type: "textAlign", show: true },
  { type: "color", show: true },
  { type: "highlight", show: true },
];

export const Toolbar: React.FC<ToolbarProps> = ({
  editor,
  items = defaultToolbarItems,
}) => {
  if (!editor) return null;

  return (
    <div className="rich-text-editor-toolbar">
      {items.map((item, index) => {
        if (item.type === "divider") {
          return <ToolbarDivider key={`divider-${index}`} />;
        }

        if (item.show === false) return null;

        return (
          <ToolbarButton
            key={item.type}
            editor={editor}
            type={item.type}
            icon={item.icon}
            title={item.title}
          />
        );
      })}
    </div>
  );
};
