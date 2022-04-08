import styled from 'styled-components';

import { Column } from '../atoms/layout';

export const DescriptionContainer = styled(Column)`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.palette.white};
`;

export const DescriptionWrapper = styled(Column)`
    max-width: 520px;
    padding: ${({ theme }) => theme.spacing([0, 3])};

    & span {
        color: ${({ theme }) => theme.palette.tertiary[900]};
    }

    & h2 {
        color: ${({ theme }) => theme.palette.primary[700]};
        margin-bottom: ${({ theme }) => theme.spacing([4])};
        text-align: center;
    }
`;

export const ListContainer = styled(DescriptionContainer)`
    background: ${({ theme }) => theme.palette.white};
    background: linear-gradient(
        180deg,
        ${({ theme }) => theme.palette.white} 0%,
        ${({ theme }) => theme.palette.primary[500]} 100%
    );
`;

export const ListWrapper = styled(Column)`
    max-width: 520px;
    padding: ${({ theme }) => theme.spacing([3, 2, 8])};

    & > div {
        margin: ${({ theme }) => theme.spacing([1, 0])};
    }

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        padding: ${({ theme }) => theme.spacing([3, 4, 8])};
    }
`;

export const Circle = styled.div`
    display: flex;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.palette.tertiary[900]};
`;
