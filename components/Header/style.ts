import styled from 'styled-components';

import BurgerIcon from '../atoms/icons/Burger';
import { Row } from '../atoms/layout';
import { Link } from '../atoms/typography';

export const HEADER_SIZE = 110;
export const HEADER_SIZE_SMALL = 70;

export const HeaderContainer = styled(Row)<{ shouldDisplayShadow?: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: ${HEADER_SIZE}px;
    box-shadow: ${({ shouldDisplayShadow, theme }) => (shouldDisplayShadow ? theme.shadows[0] : 'none')};

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        height: ${HEADER_SIZE_SMALL}px;
    }
`;

export const Logo = styled.img`
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

export const NavigationLink = styled(Link)`
    color: white;
`;

export const StyledBurgerIcon = styled(BurgerIcon)`
    display: none;

    ${({ theme }) => theme.breakpoints.forPhoneOnly} {
        display: block;
    }
`;
