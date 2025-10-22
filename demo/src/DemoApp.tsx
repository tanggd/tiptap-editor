import React, { useState } from 'react'
import { RichTextEditor } from '../../src/components/RichTextEditor'
import { ToolbarItem } from '../../src/types'

const DemoApp: React.FC = () => {
  const [content, setContent] = useState('<p>欢迎使用 Tiptap 富文本编辑器！</p>')
  const [readonly, setReadonly] = useState(false)

  const customToolbarItems: ToolbarItem[] = [
    { type: 'bold', show: true, title: '粗体' },
    { type: 'italic', show: true, title: '斜体' },
    { type: 'underline', show: true, title: '下划线' },
    { type: 'strike', show: true, title: '删除线' },
    { type: 'code', show: true, title: '行内代码' },
    { type: 'divider' as any, show: true },
    { type: 'heading', show: true, title: '标题' },
    { type: 'paragraph', show: true, title: '段落' },
    { type: 'divider' as any, show: true },
    { type: 'bulletList', show: true, title: '无序列表' },
    { type: 'orderedList', show: true, title: '有序列表' },
    { type: 'blockquote', show: true, title: '引用' },
    { type: 'codeBlock', show: true, title: '代码块' },
    { type: 'divider' as any, show: true },
    { type: 'link', show: true, title: '链接' },
    { type: 'image', show: true, title: '图片' },
    { type: 'table', show: true, title: '表格' },
    { type: 'divider' as any, show: true },
    { type: 'textAlign', show: true, title: '对齐' },
    { type: 'color', show: true, title: '文字颜色' },
    { type: 'highlight', show: true, title: '高亮' },
    { type: 'subscript', show: true, title: '下标' },
    { type: 'superscript', show: true, title: '上标' },
  ]

  const handleContentChange = (newContent: string) => {
    setContent(newContent)
  }

  const handleClear = () => {
    setContent('')
  }

  const handleSetSampleContent = () => {
    setContent(`
      <h1>富文本编辑器演示</h1>
      <p>这是一个基于 <strong>Tiptap</strong> 的富文本编辑器演示。</p>
      
      <h2>功能特性</h2>
      <ul>
        <li>支持 <strong>粗体</strong>、<em>斜体</em>、<u>下划线</u>、<s>删除线</s></li>
        <li>支持 <code>行内代码</code> 和代码块</li>
        <li>支持有序列表和无序列表</li>
        <li>支持引用块</li>
        <li>支持链接和图片</li>
        <li>支持表格</li>
        <li>支持文字颜色和高亮</li>
        <li>支持上标和下标</li>
      </ul>

      <h2>代码块示例</h2>
      <pre><code>function hello() {
  console.log('Hello, Tiptap!')
}</code></pre>

      <h2>引用示例</h2>
      <blockquote>
        <p>这是一个引用块的示例。</p>
      </blockquote>

      <h2>表格示例</h2>
      <table>
        <tr>
          <th>功能</th>
          <th>状态</th>
        </tr>
        <tr>
          <td>基础编辑</td>
          <td>✅ 完成</td>
        </tr>
        <tr>
          <td>工具栏</td>
          <td>✅ 完成</td>
        </tr>
        <tr>
          <td>插件系统</td>
          <td>✅ 完成</td>
        </tr>
      </table>
    `)
  }

  return (
    <div className="demo-app">
      <header className="demo-header">
        <h1>Tiptap 富文本编辑器演示</h1>
        <p>基于 React 19 + TypeScript + Tiptap 的富文本编辑器解决方案</p>
      </header>

      <main className="demo-main">
        <div className="demo-controls">
          <button onClick={handleSetSampleContent} className="demo-button">
            加载示例内容
          </button>
          <button onClick={handleClear} className="demo-button">
            清空内容
          </button>
          <label className="demo-checkbox">
            <input
              type="checkbox"
              checked={readonly}
              onChange={(e) => setReadonly(e.target.checked)}
            />
            只读模式
          </label>
        </div>

        <div className="demo-editor-container">
          <RichTextEditor
            content={content}
            onChange={handleContentChange}
            readonly={readonly}
            height={400}
            placeholder="请输入内容..."
            toolbar={{
              show: !readonly,
              items: customToolbarItems,
            }}
          />
        </div>

        <div className="demo-output">
          <h3>HTML 输出:</h3>
          <pre className="demo-code">{content}</pre>
        </div>
      </main>

      <footer className="demo-footer">
        <p>© 2024 Tiptap Rich Editor Demo</p>
      </footer>
    </div>
  )
}

export default DemoApp
