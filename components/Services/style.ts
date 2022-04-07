import styled from 'styled-components';

import { Column } from '../atoms/layout';
import GrassLawner from '../drawings/GrassLawner';
import Pruner from '../drawings/Pruner';
import Sprinkler from '../drawings/Sprinkler';
import WheelBarrower from '../drawings/WheelBarrower';

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

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 180px;
    }
`;

export const StyledWheelBarrower = styled(WheelBarrower)`
    width: 75%;
    height: auto;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 160px;
    }
`;

export const StyledSprinkler = styled(Sprinkler)`
    width: 100%;
    height: auto;
    margin-left: ${({ theme }) => theme.spacing([3])};

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 240px;
        margin-left: 0;
    }
`;

export const StyledPruner = styled(Pruner)`
    width: 75%;
    height: auto;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 163px;
    }
`;
