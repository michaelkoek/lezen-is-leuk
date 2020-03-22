import { DefaultTheme, createGlobalStyle } from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '5px',
  breakpoint: {
    sm: 'screen and (min-width: 768px)',
  },
  colors: {
    main: '#1C89FF',
    mainshade: '#214053',
    secondary: '#F4AF00',
    lightGrey: '#EFF3F0',
    grey: '#C7D5D8',
  },
}

const GlobalStyle = createGlobalStyle`
 * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
 }

  html, body {
    font-family: Arial, Helvetica, sans-serif;
  }
`

export { theme, GlobalStyle }
