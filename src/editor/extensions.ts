import StarterKit from "@tiptap/starter-kit";
import TextAlign from "@tiptap/extension-text-align";
import Color from "@tiptap/extension-color";
import TextStyle from "@tiptap/extension-text-style";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";
import Table from "@tiptap/extension-table";
import TableRow from "@tiptap/extension-table-row";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import Underline from "@tiptap/extension-underline";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";

export const createEditorExtensions = () => [
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  TextAlign.configure({
    types: ["heading", "paragraph"],
  }),
  Color.configure({ types: [TextStyle.name] }),
  TextStyle,
  Highlight.configure({ multicolor: true }),
  Underline,
  Subscript,
  Superscript,
  Link.configure({
    openOnClick: false,
    HTMLAttributes: {
      class: "editor-link",
    },
  }),
  Image.configure({
    HTMLAttributes: {
      class: "editor-image",
    },
  }),
  Table.configure({
    resizable: true,
  }),
  TableRow,
  TableHeader,
  TableCell,
];
