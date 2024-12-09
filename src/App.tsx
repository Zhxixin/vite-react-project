import './theme/globalStyle'
import { ThemeProvider, useTheme } from './page/theme_switcher';
import { GlobalStyle } from './theme/globalStyle';
import { ScorePage } from './page/score_page';



export const CommonContainer: React.FC = () => {
  const { theme } = useTheme();
  return (<><GlobalStyle $whiteColor={theme} />
    <ScorePage></ScorePage>
    {/* <ThemeSwitcher /> */}
  </>);
}

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <CommonContainer></CommonContainer>
    </ThemeProvider >
  )

}

export default App;
