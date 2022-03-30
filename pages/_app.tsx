import './index.css';

import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../styles';
import { GlobalStyle } from '../styles/GlobalStyle';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default MyApp;
