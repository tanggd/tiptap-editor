import { default as React } from 'react';
import { Editor } from '@tiptap/react';
import { ToolbarItem } from '../types';

interface ToolbarButtonProps {
    editor: Editor;
    type: ToolbarItem['type'];
    icon?: React.ReactNode;
    title?: string;
}
export declare const ToolbarButton: React.FC<ToolbarButtonProps>;
export {};
//# sourceMappingURL=ToolbarButton.d.ts.map