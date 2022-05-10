import styled from 'styled-components';

import { Link } from '../../../atoms/typography';

export const Menu = styled.div`
    z-index: 2;
    position: absolute;
    top: 0;
    right: 0;

    ${({ theme }) => theme.breakpoints.forTabletPortraitUp} {
        display: none;
    }
`;

export const MenuBar = styled.div`
    width: 24px;
    height: 24px;
    margin: ${({ theme }) => theme.spacing([4, 2, 2])};
    cursor: pointer;
`;

export const Bar = styled.div<{ shouldDisplayShadow: boolean }>`
    height: 3px;
    width: 100%;
    background-color: ${({ shouldDisplayShadow, theme }) =>
        shouldDisplayShadow ? theme.palette.primary[500] : theme.palette.white};
    display: block;
    border-radius: 5px;
    transition: 0.3s ease;
`;

export const Bar1 = styled(Bar)`
    transform: translateY(-5px);
`;

export const Bar3 = styled(Bar)`
    transform: translateY(5px);
`;

export const Navigation = styled.ul`
    margin: ${({ theme }) => theme.spacing([3, 5, 0])};
    transition: 0.3s ease;

    & ul {
        padding: 0 22px;
    }

    & li {
        list-style: none;
        padding: 12px 0;
    }
`;

export const NavigationLink = styled(Link)<{ shouldDisplayShadow?: boolean }>`
    color: ${({ shouldDisplayShadow, theme }) =>
        shouldDisplayShadow ? theme.palette.white : theme.palette.primary[900]};
    cursor: pointer;
`;

export const MenuBackground = styled.div<{ updateBackground: boolean; shouldDisplayShadow: boolean }>`
    top: -110px;
    right: -300px;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 1;
    width: 0;
    height: 0;
    margin: 30px 0 20px 20px;
    background-color: ${({ shouldDisplayShadow, theme }) =>
        shouldDisplayShadow ? theme.palette.primary[500] : theme.palette.white};
    border-radius: 50%;
    transition: 0.3s ease;

    ${({ updateBackground }) =>
        updateBackground &&
        `
        width: 520px;
        height: 460px;
    `}
`;
