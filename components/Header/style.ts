import styled from 'styled-components';

import BurgerIcon from '../atoms/icons/Burger';
import { Row } from '../atoms/layout';
import { Body1, Link } from '../atoms/typography';

export const HEADER_SIZE = 110;
export const HEADER_SIZE_SMALL = 70;

export const HeaderContainer = styled(Row)<{ shouldDisplayShadow?: boolean }>`
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    right: 0;
    height: ${HEADER_SIZE}px;
    box-shadow: ${({ shouldDisplayShadow, theme }) => (shouldDisplayShadow ? theme.shadows[0] : 'none')};
    background-color: ${({ shouldDisplayShadow, theme }) =>
        shouldDisplayShadow ? theme.palette.white : 'transparent'};

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        height: ${HEADER_SIZE_SMALL}px;
    }
`;

export const Logo = styled.img`
    cursor: pointer;
    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        width: 60px;
        height: 32.4px;
    }
`;

export const Navigation = styled.ul`
    list-style-type: none;
    display: flex;
    gap: ${({ theme }) => theme.spacing([2])};

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        display: none;
    }
`;

export const NavigationLink = styled(Link)<{ shouldDisplayShadow?: boolean }>`
    color: ${({ shouldDisplayShadow, theme }) =>
        shouldDisplayShadow ? theme.palette.primary[900] : theme.palette.white};
    cursor: pointer;
`;

export const LanguageWrapper = styled(Row)`
    min-width: 90px;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        display: none;
    }
`;

export const LanguageSpan = styled(Body1)<{ isSelected: boolean; shouldDisplayShadow: boolean }>`
    color: ${({ shouldDisplayShadow, theme }) =>
        shouldDisplayShadow ? theme.palette.primary[900] : theme.palette.white};
    text-decoration: ${({ isSelected }) => (isSelected ? 'underline' : 'none')};
    cursor: pointer;
`;

export const StyledBurgerIcon = styled(BurgerIcon)<{ shouldDisplayShadow?: boolean }>`
    display: none;

    & line {
        stroke: ${({ shouldDisplayShadow, theme }) =>
            shouldDisplayShadow ? theme.palette.primary[900] : theme.palette.white};
    }

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        display: block;
    }
`;
