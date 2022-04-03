import styled from 'styled-components';

import { Column } from '../atoms/layout';
import GrassLawner from '../drawings/GrassLawner';
import Pruner from '../drawings/Pruner';
import Sprinkler from '../drawings/Sprinkler';
import WheelBarrower from '../drawings/WheelBarrower';

export const ServicesContainer = styled(Column)`
    background: ${({ theme }) => theme.palette.white};
`;

export const ServicesWrapper = styled(Column)`
    max-width: 1150px;

    & h2 {
        color: ${({ theme }) => theme.palette.primary[500]};
    }
`;

export const StyledGrassLawner = styled(GrassLawner)`
    width: 180px;
    height: 120px;
`;

export const StyledWheelBarrower = styled(WheelBarrower)`
    width: 160px;
    height: 120px;
`;

export const StyledSprinkler = styled(Sprinkler)`
    width: 240px;
    height: 120px;
`;

export const StyledPruner = styled(Pruner)`
    width: 163px;
    height: 133px;
`;
