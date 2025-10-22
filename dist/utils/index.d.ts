/**
 * 生成唯一 ID
 */
export declare const generateId: () => string;
/**
 * 防抖函数
 */
export declare const debounce: <T extends (...args: any[]) => any>(func: T, wait: number) => ((...args: Parameters<T>) => void);
/**
 * 节流函数
 */
export declare const throttle: <T extends (...args: any[]) => any>(func: T, limit: number) => ((...args: Parameters<T>) => void);
/**
 * 深拷贝
 */
export declare const deepClone: <T>(obj: T) => T;
/**
 * 格式化文件大小
 */
export declare const formatFileSize: (bytes: number) => string;
/**
 * 检查是否为有效的 URL
 */
export declare const isValidUrl: (string: string) => boolean;
/**
 * 检查是否为有效的邮箱
 */
export declare const isValidEmail: (email: string) => boolean;
//# sourceMappingURL=index.d.ts.map