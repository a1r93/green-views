import 'animate.css/animate.min.css';
import './index.css';

import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../styles';
import { GlobalStyle } from '../styles/GlobalStyle';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps<{}>) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default appWithTranslation(MyApp);
