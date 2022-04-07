import styled from 'styled-components';

import { Column } from '../atoms/layout';

export const SatisfactionContainer = styled(Column)`
    width: 100vw;
    height: 100vh;
    flex: 0 0 100vh;

    & h2,
    span {
        color: ${({ theme }) => theme.palette.white};
        text-align: center;
    }
`;
