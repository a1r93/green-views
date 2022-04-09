import styled from 'styled-components';

import { Column } from '../atoms/layout';
import { HEADER_SIZE, HEADER_SIZE_SMALL } from '../Header/style';

export const ContactContainer = styled(Column)`
    background-color: ${({ theme }) => theme.palette.secondary[100]};
    min-height: 100vh;
    padding: ${({ theme }) => theme.spacing([4, 3])};
    padding-top: ${HEADER_SIZE}px;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        padding-top: ${HEADER_SIZE_SMALL}px;
    }
`;

export const ContactWrapper = styled(Column)`
    max-width: 510px;

    & > h2 {
        color: ${({ theme }) => theme.palette.primary[500]};
        text-align: center;
    }

    & > span {
        color: ${({ theme }) => theme.palette.tertiary[900]};
        text-align: center;
        margin: ${({ theme }) => theme.spacing([2, 0])};
    }
`;
