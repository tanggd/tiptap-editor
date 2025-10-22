import { Extension } from '@tiptap/core';

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
export declare class PluginManager {
    private plugins;
    /**
     * 注册插件
     */
    register(plugin: CustomPlugin): void;
    /**
     * 获取插件
     */
    get(name: string): CustomPlugin | undefined;
    /**
     * 获取所有插件
     */
    getAll(): CustomPlugin[];
    /**
     * 获取启用的插件
     */
    getEnabled(): CustomPlugin[];
    /**
     * 启用插件
     */
    enable(name: string): void;
    /**
     * 禁用插件
     */
    disable(name: string): void;
    /**
     * 移除插件
     */
    remove(name: string): void;
    /**
     * 清空所有插件
     */
    clear(): void;
}
export declare const pluginManager: PluginManager;
//# sourceMappingURL=PluginManager.d.ts.map