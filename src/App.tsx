import './theme/global_style'
import { ThemeProvider, useTheme } from './page/theme_switcher';
import { GlobalStyle } from './theme/global_style';
import { ResultsSummary } from './page/results_summary';



export const CommonContainer: React.FC = () => {
  const { theme } = useTheme();
  return (<><GlobalStyle $whiteColor={theme} />
    <ResultsSummary></ResultsSummary>
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
