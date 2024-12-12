import './theme/global_style'
import { ThemeProvider, useTheme } from './page/theme_switcher';
import { GlobalStyle } from './theme/global_style';
import { ResultsSummary } from './page/results_summary';
import ProductListWithCard from './page/product_list/product_list_with_card';
import "./theme/product_list.scss";


export const CommonContainer: React.FC = () => {
  const { theme } = useTheme();
  return (<><GlobalStyle $whiteColor={theme} />
    {/* <ResultsSummary></ResultsSummary> */}
    {/* <ThemeSwitcher /> */}
    <ProductListWithCard></ProductListWithCard>
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
