import { createGlobalStyle } from "styled-components";
import { Theme } from "../util/types";


export const GlobalStyle = createGlobalStyle<{ $whiteColor?: Theme }>`
#root {
  width:100%;
  height: 100%; /* 让 html 和 body 高度为 100% */
  text-align: center;
  background-color:${props => (props.$whiteColor == 'light' ? 'white' : 'black')};
  color:${props => (props.$whiteColor == 'light' ? 'black' : 'white')};
  font-family:'HankenGrotesk' ,sans-serif;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;
}

html,
body {
  margin: 0; /* 去除默认边距 */
  padding: 0; /* 去除默认内边距 */
  width:100%;

  @media (min-width:768px){
    height: 100%; /* 让 html 和 body 高度为 100% */
  }
}

@media (min-width:768px){
  padding: 2rem;
}

@font-face {
  font-family: 'HankenGrotesk';
  src: url('../src/assets/fonts/HankenGrotesk-VariableFont_wght.ttf') format('ttf'),
       url('../src/assets/fonts/static/HankenGrotesk-Bold.ttf') format('ttf'),
       url('../src/assets/fonts/static/HankenGrotesk-ExtraBold.ttf') format('ttf'),
       url('../src/assets/fonts/static/HankenGrotesk-VariableFont_wght.ttf') format('ttf');
  font-weight: normal;
  font-style: normal;
}
`
