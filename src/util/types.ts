import { ReactNode } from "react";

// 定义 Theme 类型
export type Theme = 'light' | 'dark';

// 定义上下文的值类型
export interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void;
}



// 定义 ThemeProvider 的 props 类型
export interface ThemeProviderProps {
    children: ReactNode; // ReactNode 代表可以渲染的所有 React 子元素
}

export interface SummaryItemData {
    category: string;
    score: number;
    icon: string;
    color: string;
}