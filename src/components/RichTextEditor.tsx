import React from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import classNames from "classnames";
import { RichTextEditorProps } from "../types";
import { Toolbar } from "../toolbar/Toolbar";
import { createEditorExtensions } from "../editor/extensions";

export const RichTextEditor: React.FC<RichTextEditorProps> = ({
  content = "",
  onChange,
  height = 300,
  readonly = false,
  placeholder = "请输入内容...",
  className,
  toolbar = { show: true },
}) => {
  const editor = useEditor({
    extensions: createEditorExtensions(),
    content,
    editable: !readonly,
    onUpdate: ({ editor }) => {
      onChange?.(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class: "ProseMirror",
        "data-placeholder": placeholder,
      },
    },
  });

  React.useEffect(() => {
    if (editor && content !== editor.getHTML()) {
      editor.commands.setContent(content);
    }
  }, [content, editor]);

  const editorStyle = React.useMemo(() => {
    if (typeof height === "number") {
      return { height: `${height}px` };
    }
    return { height };
  }, [height]);

  return (
    <div
      className={classNames("rich-text-editor", className, {
        "rich-text-editor-readonly": readonly,
      })}
      style={editorStyle}
    >
      {toolbar.show && !readonly && (
        <Toolbar editor={editor} items={toolbar.items} />
      )}
      <div className="rich-text-editor-content">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
