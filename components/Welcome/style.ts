import styled, { css } from 'styled-components';

import LeafIcon from '../atoms/icons/leaf';
import { Column } from '../atoms/layout';
import { HEADER_SIZE, HEADER_SIZE_SMALL } from '../Header/style';

export const WelcomeContainer = styled(Column)`
    position: relative;
    flex: auto;
    height: 100vh;
    margin-top: -${HEADER_SIZE}px;
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

export const LeavesContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

export const LeavesWrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`;

const baseLeafStyle = css`
    width: 14vw;
    height: 14vw;
    max-width: 80px;
    max-height: 80px;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 16vw;
        height: 16vw;
    }

    ${({ theme }) => theme.breakpoints.forTabletLandscapeUp} {
        max-width: 160px;
        max-height: 160px;
    }
`;

export const Leaf1 = styled(LeafIcon)`
    position: absolute;
    transform: rotate(-54deg);
    left: 16vw;
    top: 24vh;
    ${baseLeafStyle};
`;

export const Leaf2 = styled(LeafIcon)`
    position: absolute;
    transform: rotate(26deg);
    left: 78vw;
    top: 34vh;
    ${baseLeafStyle};
`;

export const Leaf3 = styled(LeafIcon)`
    position: absolute;
    transform: rotate(34deg);
    left: 12vw;
    top: 62vh;
    ${baseLeafStyle};
`;

export const Leaf4 = styled(LeafIcon)`
    position: absolute;
    transform: rotate(-26deg);
    left: 69vw;
    top: 70vh;
    ${baseLeafStyle};
`;
