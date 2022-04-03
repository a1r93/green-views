import styled from 'styled-components';

export const Heading1 = styled.h1`
    font-family: 'Oswald-Bold', 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 9vw;
    line-height: 9vw;
    margin: 0;
    text-transform: uppercase;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        font-size: 8vw;
        line-height: 8vw;
    }

    ${({ theme }) => theme.breakpoints.forTabletLandscapeUp} {
        font-size: 6.25rem;
        line-height: 100px;
    }
`;

export const Heading2 = styled.h2`
    font-family: 'Oswald-Bold', 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 2rem;
    line-height: 0.95em;
    margin: 0;
    text-transform: uppercase;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        font-size: 1.5rem;
        line-height: 1em;
    }
`;

export const Heading3 = styled.h3`
    font-family: 'Oswald-Bold', 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 1.5rem;
    line-height: 1em;
    margin: 0;
    text-transform: uppercase;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        font-size: 1.3125rem;
    }
`;

export const Heading4 = styled.h4`
    font-family: 'Lato-regular', 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 1.125rem;
    margin: 0;
`;

export const Body1 = styled.span`
    font-family: 'Lato-regular', 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 1.125rem;
    line-height: 1.4em;
    margin: 0;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        font-size: 1rem;
    }
`;

export const Body2 = styled.span`
    font-family: 'Lato-regular', 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 0.875rem;
    margin: 0;
`;

export const Body3 = styled.span`
    font-size: 0.8125rem;
    margin: 0;
`;

export const Link = styled.a`
    font-family: 'Lato-regular', 'Roboto', 'Helvetica Neue', sans-serif;
    font-size: 1.3125rem;
    line-height: 27px;
    margin: 0;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        line-height: 23px;
    }
`;
