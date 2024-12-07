import { useContext, useState } from "react";
import ThemeContext from "../util/context";
import { Theme, ThemeProviderProps } from "../util/types";


// 用于消费 ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

//  显示当前主题并提供切换按钮
export const ThemeSwitcher: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <p>当前主题是: {theme}</p>
      <button onClick={toggleTheme} className={theme}>
        切换到 {theme === 'light' ? '暗色' : '亮色'} 模式
      </button>
    </div>
  );
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {

  const [theme, setTheme] = useState<Theme>('light');

  // 切换主题函数
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (<ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
  </ThemeContext.Provider>);
}