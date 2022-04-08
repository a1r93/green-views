import styled from 'styled-components';

import GrassLawner from '../atoms/drawings/GrassLawner';
import Pruner from '../atoms/drawings/Pruner';
import Sprinkler from '../atoms/drawings/Sprinkler';
import WheelBarrower from '../atoms/drawings/WheelBarrower';
import { Column } from '../atoms/layout';

export const ServicesContainer = styled(Column)`
    background: ${({ theme }) => theme.palette.white};
    padding: ${({ theme }) => theme.spacing([8, 4])};

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        padding: ${({ theme }) => theme.spacing([8, 2])};
    }
`;

export const ServicesWrapper = styled(Column)`
    max-width: 1150px;

    & h2 {
        color: ${({ theme }) => theme.palette.primary[500]};
    }
`;

export const StyledGrassLawner = styled(GrassLawner)`
    width: 75%;
    height: auto;

    ${({ theme }) => theme.breakpoints.forTabletLandscapeUp} {
        width: 70%;
    }

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 180px;
    }
`;

export const StyledWheelBarrower = styled(WheelBarrower)`
    width: 75%;
    height: auto;

    ${({ theme }) => theme.breakpoints.forTabletLandscapeUp} {
        width: 70%;
    }

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 160px;
    }
`;

export const StyledSprinkler = styled(Sprinkler)`
    width: 100%;
    height: auto;
    margin-left: ${({ theme }) => theme.spacing([3])};

    ${({ theme }) => theme.breakpoints.forTabletLandscapeUp} {
        width: 95%;
    }

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 240px;
        margin-left: 0;
    }
`;

export const StyledPruner = styled(Pruner)`
    width: 75%;
    height: auto;

    ${({ theme }) => theme.breakpoints.forTabletLandscapeUp} {
        width: 70%;
    }

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 163px;
    }
`;
