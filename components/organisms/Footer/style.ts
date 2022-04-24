import styled from 'styled-components';

import FacebookIcon from '../../atoms/icons/Facebook';
import InstagramIcon from '../../atoms/icons/Instagram';
import { Column, Row } from '../../atoms/layout';

export const FooterContainer = styled(Column)`
    background-color: ${({ theme }) => theme.palette.primary[500]};
    padding: ${({ theme }) => theme.spacing([8, 3])};

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        padding: ${({ theme }) => theme.spacing([6, 3])};
    }
`;

export const FooterWrapper = styled(Row)`
    max-width: 800px;
    width: 100%;
    gap: ${({ theme }) => theme.spacing([2])};

    & h4 {
        margin-bottom: ${({ theme }) => theme.spacing([0.5])};
    }

    & h4,
    span {
        color: ${({ theme }) => theme.palette.white};
    }

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        flex-direction: column;
        align-items: flex-start;
        gap: 24px;
    }
`;

export const SocialLink = styled.a`
    text-decoration: none;
`;

export const StyledFacebook = styled(FacebookIcon)`
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.palette.white};
    margin: ${({ theme }) => theme.spacing([0.5])};
`;

export const StyledInstagram = styled(InstagramIcon)`
    width: 18px;
    height: 18px;
    fill: ${({ theme }) => theme.palette.white};
    margin: ${({ theme }) => theme.spacing([0.5])};
`;
