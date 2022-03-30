import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Oswald-Regular', 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    background: ${({ theme }) => theme.palette.primary[500]};
  }
`;
