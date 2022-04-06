import styled, { css, keyframes } from 'styled-components';

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

const float = (rotation: number) => keyframes`
    0% {
        transform: translatey(0px) rotate(${rotation}deg);
    }
    50% {
        transform: translate(20px, -20px) rotate(${rotation}deg);
    }
    100% {
        transform: translatey(0px) rotate(${rotation}deg);
    }
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
    left: 16vw;
    top: 24vh;
    transform: translatey(0px) rotate(-54deg);
    animation: ${float(-54)} 7s ease-in-out infinite;
    ${baseLeafStyle};
`;

export const Leaf2 = styled(LeafIcon)`
    left: 78vw;
    top: 34vh;
    transform: translatey(0px) rotate(26deg);
    animation: ${float(26)} 7s ease-in-out infinite;
    animation-delay: 0.25s;
    ${baseLeafStyle};
`;

export const Leaf3 = styled(LeafIcon)`
    left: 12vw;
    top: 62vh;
    transform: translatey(0px) rotate(34deg);
    animation: ${float(34)} 7s ease-in-out infinite;
    animation-delay: 0.5s;
    ${baseLeafStyle};
`;

export const Leaf4 = styled(LeafIcon)`
    left: 69vw;
    top: 70vh;
    transform: translatey(0px) rotate(-26deg);
    animation: ${float(-26)} 7s ease-in-out infinite;
    animation-delay: 0.75s;
    ${baseLeafStyle};
`;
