// import original module declarations
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    breakpoint: {
      sm: string;
    };
    colors: {
      main: string,
      mainshade: string,
      secondary: string,
      lightGrey: string,
      grey: string,
    }
  }
}
