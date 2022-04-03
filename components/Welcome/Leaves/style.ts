import styled, { css } from 'styled-components';

import LeafIcon from '../../atoms/icons/Leaf';

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
    z-index: -1;
`;

const baseLeafStyle = css`
    position: absolute;
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
    transform: rotate(-54deg);
    left: 16vw;
    top: 24vh;
    ${baseLeafStyle};
`;

export const Leaf2 = styled(LeafIcon)`
    transform: rotate(26deg);
    left: 78vw;
    top: 34vh;
    ${baseLeafStyle};
`;

export const Leaf3 = styled(LeafIcon)`
    transform: rotate(34deg);
    left: 12vw;
    top: 62vh;
    ${baseLeafStyle};
`;

export const Leaf4 = styled(LeafIcon)`
    transform: rotate(-26deg);
    left: 69vw;
    top: 70vh;
    ${baseLeafStyle};
`;
