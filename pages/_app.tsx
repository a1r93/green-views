import 'animate.css/animate.min.css';
import './index.css';

import { appWithTranslation } from 'next-i18next';
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import { defaultTheme } from '../styles';
import { GlobalStyle } from '../styles/GlobalStyle';

import type { AppProps } from 'next/app';
function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={defaultTheme}>
            <Head>
                <title>Green Views</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="google-site-verification" content="dpkCPxwWWvjGFRtqEdlzCh64Ioq_OteFAeZ9hymbfsU" />
            </Head>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}

export default appWithTranslation(MyApp);
