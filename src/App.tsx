import { useContext, useState } from 'react';
import './theme/globalStyle'
// import './App.css'
import { ThemeSwitcher, ThemeProvider, useTheme } from './page/theme_switcher';
import { AppWapperCard, AppWapperDoc, WapperLogoSpin, WpaaerH1 } from './theme/style';
import iconMemory from './assets/images/icon-memory.svg';
// import { ReactComponent as IconWidget } from './assets/images/icon-memory.svg';
import { GlobalStyle } from './theme/globalStyle';
import { ScorePage } from './page/score_page';
import { ThemeContext } from 'styled-components';



export const CommonContainer: React.FC = () => {

  const [count, setCount] = useState(0);

  const { theme } = useTheme();
  return (<><GlobalStyle $whiteColor={theme} />
    {/* <WapperLogoSpin src={iconMemory} alt=" logo" ></WapperLogoSpin> */}
    {/* <WpaaerH1>Vite </WpaaerH1> */}
    {/* <AppWapperCard>
      <button onClick={() => setCount((count) => count + 1)}>
        count is {count}
      </button>
      <AppWapperDoc>
        Edit <code>src/App.tsx</code> and save to test HMR
      </AppWapperDoc>
    </AppWapperCard>
    <AppWapperDoc>
      Click on the Vite and React logos to learn more
    </AppWapperDoc> */}

    <ScorePage></ScorePage>
    <ThemeSwitcher /></>);
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CommonContainer></CommonContainer>
    </ThemeProvider >
  )

}

// export default App



// // 创建 ThemeProvider 组件
// const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
//   // 定义主题状态
//   const [theme, setTheme] = useState<Theme>('light');

//   // 切换主题函数
//   const toggleTheme = () => {
//     setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // 自定义 Hook，用于消费 ThemeContext
// const useTheme = (): ThemeContextType => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error('useTheme must be used within a ThemeProvider');
//   }
//   return context;
// };

// // 显示当前主题并提供切换按钮
// const ThemeSwitcher: React.FC = () => {
//   const { theme, toggleTheme } = useTheme();

//   return (
//     <div
//       style={{
//         backgroundColor: theme === 'light' ? '#fff' : '#333',
//         color: theme === 'light' ? '#000' : '#fff',
//         padding: '20px',
//         textAlign: 'center',
//       }}
//     >
//       <p>当前主题是: {theme}</p>
//       <button onClick={toggleTheme}>
//         切换到 {theme === 'light' ? '暗色' : '亮色'} 模式
//       </button>
//     </div>
//   );
// };

// // 应用主组件
// const App: React.FC = () => {
//   return (
//     <ThemeProvider>
//       <ThemeSwitcher />
//     </ThemeProvider>
//   );
// };

export default App;
