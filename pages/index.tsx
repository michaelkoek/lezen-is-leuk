import { ThemeProvider } from 'styled-components';

import HomePage from './HomePage';
import Header from '../components/View/Header';
import { theme, GlobalStyle } from '../components/theme';

const IndexPage = () => {

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Header />
            <HomePage />
        </ThemeProvider>
    );
}

export default IndexPage;
