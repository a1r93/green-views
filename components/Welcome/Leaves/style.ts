import styled from 'styled-components';

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

interface ILeavesWrapperProps {
    width: number;
    height: number;
}

export const LeavesWrapper = styled.div.attrs<ILeavesWrapperProps>(({ width, height }) => ({
    style: {
        width: `${width}%`,
        height: `${height}%`,
    },
}))<ILeavesWrapperProps>`
    position: relative;
    z-index: -1;
`;

interface ILeafProps {
    rotation: number;
    scale: number;
    opacity: number;
    top: number;
    left: number;
}

export const AnimatedLeaf = styled(LeafIcon).attrs<ILeafProps>(({ rotation, scale, opacity, top, left }) => ({
    style: {
        transform: `rotate(${rotation}deg) scale(${scale})`,
        opacity: opacity,
        left: `${left}%`,
        top: `${top}%`,
    },
}))<ILeafProps>`
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
