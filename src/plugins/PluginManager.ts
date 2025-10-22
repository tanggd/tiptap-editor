import { Extension } from "@tiptap/core";

export interface PluginConfig {
  /** 插件名称 */
  name: string;
  /** 插件描述 */
  description?: string;
  /** 插件版本 */
  version?: string;
  /** 是否启用 */
  enabled?: boolean;
  /** 插件配置 */
  options?: Record<string, any>;
}

export interface CustomPlugin extends PluginConfig {
  /** 插件实例 */
  extension?: Extension;
  /** 自定义渲染器 */
  renderer?: React.ComponentType<any>;
  /** 工具栏按钮 */
  toolbarButton?: React.ComponentType<any>;
}

/**
 * 插件管理器
 */
export class PluginManager {
  private plugins: Map<string, CustomPlugin> = new Map();

  /**
   * 注册插件
   */
  register(plugin: CustomPlugin): void {
    this.plugins.set(plugin.name, plugin);
  }

  /**
   * 获取插件
   */
  get(name: string): CustomPlugin | undefined {
    return this.plugins.get(name);
  }

  /**
   * 获取所有插件
   */
  getAll(): CustomPlugin[] {
    return Array.from(this.plugins.values());
  }

  /**
   * 获取启用的插件
   */
  getEnabled(): CustomPlugin[] {
    return this.getAll().filter((plugin) => plugin.enabled !== false);
  }

  /**
   * 启用插件
   */
  enable(name: string): void {
    const plugin = this.plugins.get(name);
    if (plugin) {
      plugin.enabled = true;
    }
  }

  /**
   * 禁用插件
   */
  disable(name: string): void {
    const plugin = this.plugins.get(name);
    if (plugin) {
      plugin.enabled = false;
    }
  }

  /**
   * 移除插件
   */
  remove(name: string): void {
    this.plugins.delete(name);
  }

  /**
   * 清空所有插件
   */
  clear(): void {
    this.plugins.clear();
  }
}

// 全局插件管理器实例
export const pluginManager = new PluginManager();
