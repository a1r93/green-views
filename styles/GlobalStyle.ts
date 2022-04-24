import { createGlobalStyle } from 'styled-components';

import { HEADER_SIZE, HEADER_SIZE_SMALL } from '../components/organisms/Header/style';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Oswald-Regular', 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    background: ${({ theme }) => theme.palette.primary[500]};
    padding-top: ${HEADER_SIZE}px;
    
    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
      padding-top: ${HEADER_SIZE_SMALL}px;
    }
  }
`;
