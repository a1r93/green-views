import styled from 'styled-components';

import { Column } from '../atoms/layout';
import { HEADER_SIZE, HEADER_SIZE_SMALL } from '../Header/style';

export const ContactTeetContainer = styled(Column)`
    overflow: hidden;
`;

export const ContactContainer = styled(Column)`
    background-color: ${({ theme }) => theme.palette.secondary[100]};
    padding: ${HEADER_SIZE + 30}px ${({ theme }) => theme.spacing([3])};

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        padding: ${HEADER_SIZE_SMALL + 30}px ${({ theme }) => theme.spacing([3])};
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
