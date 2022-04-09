import styled from 'styled-components';

import { Column } from '../atoms/layout';

export const SatisfactionContainer = styled(Column)`
    height: 100vh;
    flex: 0 0 100vh;

    & h2,
    span {
        color: ${({ theme }) => theme.palette.white};
        text-align: center;
    }

    & .animate__animated {
        min-width: 212px;
        max-width: 400px;
        width: 35%;
    }

    & svg {
        height: auto;
        width: 100%;
    }
`;
