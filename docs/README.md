# Tiptap 富文本编辑器

基于 React 19 + TypeScript + Tiptap 的富文本编辑器解决方案。

## 功能特性

- ✅ 基于 Tiptap v2.x 的现代化富文本编辑器
- ✅ 完整的 TypeScript 支持
- ✅ 可扩展的工具栏系统
- ✅ 插件化架构
- ✅ 响应式设计
- ✅ 支持发布为 npm 包
- ✅ 完整的代码规范和提交规范

## 技术栈

- **框架**: React 19
- **语言**: TypeScript 5.x
- **样式**: Less
- **编辑器核心**: Tiptap (v2.x)
- **代码规范**: ESLint + Prettier
- **提交规范**: Husky + Commitlint
- **包管理**: pnpm
- **构建工具**: Vite

## 项目结构

```
├── src/                    # 源代码
│   ├── components/         # React 组件
│   ├── editor/            # 编辑器核心
│   ├── toolbar/           # 工具栏组件
│   ├── plugins/           # 插件系统
│   ├── types/             # TypeScript 类型定义
│   ├── utils/             # 工具函数
│   └── styles/            # 样式文件
├── demo/                  # 演示应用
├── docs/                  # 文档
└── dist/                  # 构建输出
```

## 快速开始

### 安装依赖

```bash
pnpm install
```

### 开发模式

```bash
# 启动演示应用
pnpm dev

# 启动库开发模式
pnpm build:lib
```

### 构建

```bash
# 构建库
pnpm build:lib

# 构建演示应用
pnpm build
```

### 代码规范

```bash
# 代码检查
pnpm lint

# 代码格式化
pnpm format

# 类型检查
pnpm type-check
```

## 使用示例

```tsx
import React, { useState } from 'react'
import { RichTextEditor } from 'tiptap-rich-editor'

const App = () => {
  const [content, setContent] = useState('<p>Hello World!</p>')

  return (
    <RichTextEditor
      content={content}
      onChange={setContent}
      height={400}
      placeholder="请输入内容..."
    />
  )
}
```

## API 文档

### RichTextEditor Props

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| content | string | '' | 编辑器内容 |
| onChange | (content: string) => void | - | 内容变化回调 |
| height | number \| string | 300 | 编辑器高度 |
| readonly | boolean | false | 是否只读 |
| placeholder | string | '请输入内容...' | 占位符文本 |
| className | string | - | 自定义样式类名 |
| toolbar | ToolbarConfig | { show: true } | 工具栏配置 |

### ToolbarConfig

| 属性 | 类型 | 默认值 | 描述 |
|------|------|--------|------|
| show | boolean | true | 是否显示工具栏 |
| items | ToolbarItem[] | - | 工具栏项目配置 |

## 插件开发

```tsx
import { Extension } from '@tiptap/core'
import { PluginManager } from './plugins/PluginManager'

// 创建自定义插件
const MyPlugin = Extension.create({
  name: 'myPlugin',
  // 插件实现
})

// 注册插件
PluginManager.register({
  name: 'myPlugin',
  extension: MyPlugin,
  enabled: true,
})
```

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

MIT License
