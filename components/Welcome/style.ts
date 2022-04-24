import styled from 'styled-components';

import { Column } from '../atoms/layout';
import { HEADER_SIZE, HEADER_SIZE_SMALL } from '../Header/style';

export const WelcomeContainer = styled.div`
    position: relative;
    height: 150vh;
    margin-top: -${HEADER_SIZE}px;
    width: 100%;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        height: calc(120vh + ${HEADER_SIZE_SMALL}px);
    }
`;

export const WelcomeWrapper = styled(Column)`
    position: sticky;
    top: 0;
    flex: auto;
    height: 100vh;
    width: 100%;
    gap: ${({ theme }) => theme.spacing([3])};

    & > h1,
    & > span {
        color: ${({ theme }) => theme.palette.white};
        text-align: center;
        max-width: 600px;
    }

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        margin-top: -${HEADER_SIZE_SMALL}px;
        gap: ${({ theme }) => theme.spacing([2])};

        & > h1,
        & > span {
            max-width: 440px;
        }
    }

    ${({ theme }) => theme.breakpoints.forTabletLandscapeUp} {
        gap: ${({ theme }) => theme.spacing([4])};

        & > h1,
        & > span {
            max-width: 700px;
        }
    }
`;
