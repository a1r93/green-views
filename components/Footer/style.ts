import styled from 'styled-components';

import { Column, Row } from '../atoms/layout';

export const FooterContainer = styled(Column)`
    background-color: ${({ theme }) => theme.palette.primary[500]};
    padding: ${({ theme }) => theme.spacing([6, 3])};
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
