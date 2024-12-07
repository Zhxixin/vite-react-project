import { createGlobalStyle } from "styled-components";
import { Theme } from "../util/types";


export const GlobalStyle = createGlobalStyle<{ $whiteColor?: Theme }>`
#root {
  margin: 0 auto;
  padding: 0;
  text-align: center;
  background-color:${props => (props.$whiteColor == 'light' ? 'white' : 'black')};
  color:${props => (props.$whiteColor == 'light' ? 'black' : 'white')};
}
 
@media (min-width:768){
  padding: 2rem;
}

`
