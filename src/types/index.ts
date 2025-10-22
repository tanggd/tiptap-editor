import { Editor } from "@tiptap/react";

export interface RichTextEditorProps {
  /** 编辑器内容 */
  content?: string;
  /** 内容变化回调 */
  onChange?: (content: string) => void;
  /** 编辑器高度 */
  height?: number | string;
  /** 是否只读 */
  readonly?: boolean;
  /** 占位符文本 */
  placeholder?: string;
  /** 自定义样式类名 */
  className?: string;
  /** 工具栏配置 */
  toolbar?: ToolbarConfig;
}

export interface ToolbarConfig {
  /** 是否显示工具栏 */
  show?: boolean;
  /** 工具栏项目 */
  items?: ToolbarItem[];
}

export interface ToolbarItem {
  /** 工具栏项类型 */
  type:
    | "bold"
    | "italic"
    | "underline"
    | "strike"
    | "code"
    | "heading"
    | "paragraph"
    | "bulletList"
    | "orderedList"
    | "blockquote"
    | "codeBlock"
    | "horizontalRule"
    | "link"
    | "image"
    | "table"
    | "textAlign"
    | "color"
    | "highlight"
    | "subscript"
    | "superscript"
    | "divider";
  /** 是否显示 */
  show?: boolean;
  /** 自定义图标 */
  icon?: React.ReactNode;
  /** 提示文本 */
  title?: string;
}

export interface EditorInstance {
  /** 编辑器实例 */
  editor: Editor | null;
  /** 获取内容 */
  getContent: () => string;
  /** 设置内容 */
  setContent: (content: string) => void;
  /** 清空内容 */
  clear: () => void;
  /** 聚焦编辑器 */
  focus: () => void;
}
