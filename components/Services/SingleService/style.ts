import styled from 'styled-components';

import { Column, Row } from '../../atoms/layout';

export const ServiceWrapper = styled(Row)<{ revert: boolean }>`
    flex-direction: ${({ revert }) => (revert ? 'row-reverse' : 'row')};
    align-items: center;
    gap: ${({ theme }) => theme.spacing([6])};
    margin-top: ${({ theme }) => theme.spacing([30])};
    width: 100%;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        flex-direction: column;
        margin-top: ${({ theme }) => theme.spacing([8])};
    }
`;

export const ServiceContainer = styled(Column)`
    position: relative;
    width: 100%;
    min-height: 160px;
`;

export const ServiceContent = styled(Column)`
    position: relative;
    z-index: 2;
    min-height: 136px;
    gap: ${({ theme }) => theme.spacing([1.5])};

    & span,
    h3 {
        color: ${({ theme }) => theme.palette.tertiary[900]};
    }
`;

export const DescriptionWrapper = styled(Column)``;

export const ServiceNumberWrapper = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & svg {
        position: relative;
        top: 20%;
    }
`;
