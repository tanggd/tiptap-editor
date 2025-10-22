import { useEditor as useTiptapEditor } from "@tiptap/react";
import { createEditorExtensions } from "./extensions";

export const useEditor = (options: {
  content?: string;
  editable?: boolean;
  onUpdate?: (props: { editor: any }) => void;
}) => {
  return useTiptapEditor({
    extensions: createEditorExtensions(),
    content: options.content || "",
    editable: options.editable ?? true,
    onUpdate: options.onUpdate,
    editorProps: {
      attributes: {
        class: "ProseMirror",
      },
    },
  });
};
