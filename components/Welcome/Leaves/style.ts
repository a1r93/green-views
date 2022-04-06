import styled, { css, keyframes } from 'styled-components';

import LeafIcon from '../../atoms/icons/Leaf';

export const LeavesContainer = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const LeavesWrapper = styled.div<{ width: number; height: number }>`
    position: relative;
    width: ${({ width }) => width}%;
    height: ${({ height }) => height}%;
    z-index: -1;
`;

export const AnimatedLeaf = styled(LeafIcon)<{
    rotation: number;
    scale: number;
    opacity: number;
    top: number;
    left: number;
}>`
    position: absolute;
    left: ${({ left }) => left}%;
    top: ${({ top }) => top}%;
    width: 14vw;
    height: 14vw;
    max-width: 80px;
    max-height: 80px;
    ${({ rotation, scale }) => `
        transform: scale(${scale}) rotate(${rotation}deg);
    `}
    opacity: ${({ opacity }) => opacity};
    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 16vw;
        height: 16vw;
    }

    ${({ theme }) => theme.breakpoints.forTabletLandscapeUp} {
        max-width: 160px;
        max-height: 160px;
    }
`;
