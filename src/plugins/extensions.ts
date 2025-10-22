import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "@tiptap/pm/state";
import { Decoration, DecorationSet } from "@tiptap/pm/view";

/**
 * 字数统计插件
 */
export const WordCountPlugin = Extension.create({
  name: "wordCount",

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("wordCount"),
        props: {
          decorations: (state) => {
            const decorations: Decoration[] = [];
            const doc = state.doc;

            // 这里可以添加字数统计的逻辑
            // 目前只是一个示例插件结构

            return DecorationSet.create(doc, decorations);
          },
        },
      }),
    ];
  },
});

/**
 * 自动保存插件
 */
export const AutoSavePlugin = Extension.create({
  name: "autoSave",

  addOptions() {
    return {
      delay: 1000,
      onSave: () => {},
    };
  },

  addStorage() {
    return {
      timer: null as NodeJS.Timeout | null,
    };
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("autoSave"),
        props: {
          handleDOMEvents: {
            input: (view) => {
              const { delay, onSave } = this.options;

              // 清除之前的定时器
              if (this.storage.timer) {
                clearTimeout(this.storage.timer);
              }

              // 设置新的定时器
              this.storage.timer = setTimeout(() => {
                onSave(view.state.doc.toString());
              }, delay);

              return false;
            },
          },
        },
      }),
    ];
  },

  onDestroy() {
    if (this.storage.timer) {
      clearTimeout(this.storage.timer);
    }
  },
});

/**
 * 全屏插件
 */
export const FullscreenPlugin = Extension.create({
  name: "fullscreen",

  addCommands() {
    return {
      toggleFullscreen:
        () =>
        ({ editor }: { editor: any }) => {
          const element = editor.view.dom.closest(".rich-text-editor");
          if (element) {
            if (document.fullscreenElement) {
              document.exitFullscreen();
            } else {
              element.requestFullscreen();
            }
          }
          return true;
        },
    };
  },
});
